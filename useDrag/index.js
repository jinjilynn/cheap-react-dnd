import { useModel, get } from "dva-react-hook";
import html2canvas from "html2canvas";
import { useEffect, useState } from "react";
import { useStore } from "../provider";
import { operationType } from "../models";
import { getClassNamesStartingWith } from "../utils";

/**
 *
 * @param {Object} param0
 * @param {String} param0.key
 * @param {String} param0.type
 * @param {HTMLElement} param0.dom
 * @param {Object} param0.data
 * @param {Function} param0.onDragStart
 * @param {Function} param0.onDragMove
 * @param {Function} param0.onDragEnd
 * @returns
 */

export default function useDrag({ key, ref, initData, onDrag }) {
  const store = useStore();
  const offset = useModel("dragModel/offset", false, store)[0];
  const scale = useModel("dragModel/scale", false, store)[0];
  const { state } = useModel(`dragModel/drags/${key}`, false, store)[0] || {};
  const [active, setActive] = useState(false);
  const [dragClass] = useState(`easy-drag-${key}`);
  useEffect(() => {
    if (!state || !active) return;
    const [data, setData] = get(`dragModel/drags/${key}/data`, store);
    const [polygon] = get(`dragModel/drags/${key}/polygon`, store);
    const states = state.split("+");
    const type = states[0];
    const dropkey = states.slice(-1)[0];
    const dropData = get(`dragModel/drops/${dropkey}/data`, store)[0];
    const dropPolygon = get(`dragModel/drops/${dropkey}/polygon`, store)[0];
    onDrag &&
      onDrag({
        data,
        polygon,
        setData,
        type,
        dropData,
        dropPolygon,
      });
  }, [state, store, key, active]);
  useEffect(() => {
    const setInitKeyState = get(`dragModel/drags/${key}`, store)[1];
    setInitKeyState({ data: initData })
      .then(() => {
        setActive(true);
      })
      .catch((e) => {
        setActive(false);
      });
    return () => {
      setActive(false);
    };
  }, [key, store]);
  useEffect(() => {
    const dom = ref.current;
    if (!dom) return;
    dom.classList.add(dragClass);
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class" &&
          !getClassNamesStartingWith(dom, "easy-drag-")
        ) {
          dom.classList.add(dragClass);
        }
      });
    });
    const config = { attributes: true, attributeFilter: ["class"] };
    if (dom) {
      observer.observe(dom, config);
    }
    return () => observer.disconnect();
  }, [dragClass, ref]);
  useEffect(() => {
    if (!active) return;
    const dom = ref.current;
    if (!dom) return;
    const domRect = dom.getBoundingClientRect();
    const polygon = [
      [domRect.left - offset.x, domRect.top - offset.y],
      [domRect.right - offset.x, domRect.top - offset.y],
      [domRect.right - offset.x, domRect.bottom - offset.y],
      [domRect.left - offset.x, domRect.bottom - offset.y],
    ];
    const setDropPolygon = get(`dragModel/drags/${key}/polygon`, store)[1];
    setDropPolygon(polygon);
    const pointerDown = async (e) => {
      e.preventDefault();
      dom.setPointerCapture(e.pointerId);
      const { clientX, clientY } = e;
      const offset = get("dragModel/offset", store)[0];
      const scale = get("dragModel/scale", store)[0];
      const x = clientX - offset.x;
      const y = clientY - offset.y;
      const setStartPosition = get(
        `dragModel/drags/${key}/startPosition`,
        store
      )[1];

      const { width, height, left, top } = domRect;
      const preview = await html2canvas(dom, {
        useCORS: true,
        backgroundColor: "black",
      });
      const ctx = preview.getContext("2d");
      const imageData = ctx.getImageData(0, 0, preview.width, preview.height);
      const imagedata = imageData.data;
      for (var i = 0; i < imagedata.length; i += 4) {
        imagedata[i + 3] = imagedata[i + 3] * 0.5;
      }
      ctx.putImageData(imageData, 0, 0);
      const setPreview = get(`dragModel/drags/${key}/preview`, store)[1];
      const previewConfig = {
        operationType: operationType.STARTDRAG,
        key,
        class: `${key}-preview`,
        src: preview.toDataURL(),
        style: {
          position: "absolute",
          width: width * scale.x + "px",
          height: height * scale.y + "px",
          left: (left - offset.x) * scale.x + "px",
          top: (top - offset.y) * scale.y + "px",
          zIndex: 100,
        },
      };
      await setPreview(previewConfig, { callbacks: "updatePreview" });
      await setStartPosition({ x, y });
    };
    const pointerMove = async (e) => {
      e.preventDefault();
      const startPosition = get(
        `dragModel/drags/${key}/startPosition`,
        store
      )[0];
      if (!startPosition) return;
      const { clientX, clientY } = e;
      const offset = get("dragModel/offset", store)[0];
      const scale = get("dragModel/scale", store)[0];
      const x = clientX - offset.x;
      const y = clientY - offset.y;
      const transformX = (x - startPosition.x) * scale.x;
      const transformY = (y - startPosition.y) * scale.y;
      const setPreview = get(`dragModel/drags/${key}/preview`, store)[1];
      await setPreview(
        {
          operationType: operationType.DRAGGING,
          key,
          x,
          y,
          class: `${key}-preview`,
          style: {
            transform: `translate(${transformX}px,${transformY}px)`,
          },
        },
        { callbacks: "updatePreview" }
      );
    };
    const pointerUp = async (e) => {
      e.preventDefault();
      const { clientX, clientY } = e;
      const x = clientX - offset.x;
      const y = clientY - offset.y;
      const setPreview = get(`dragModel/drags/${key}/preview`, store)[1];
      await setPreview(
        {
          operationType: operationType.DROP,
          key,
          x,
          y,
          class: `${key}-preview`,
        },
        { callbacks: "updatePreview" }
      );
      const setStartPosition = get(
        `dragModel/drags/${key}/startPosition`,
        store
      )[1];
      await setStartPosition(null);
    };
    dom.addEventListener("pointerdown", pointerDown);
    dom.addEventListener("pointermove", pointerMove);
    dom.addEventListener("pointerup", pointerUp);
    dom.addEventListener("pointerCancel", pointerUp);
    return () => {
      dom.removeEventListener("pointerdown", pointerDown);
      dom.removeEventListener("pointermove", pointerMove);
      dom.removeEventListener("pointerup", pointerUp);
      dom.removeEventListener("pointerCancel", pointerUp);
    };
  }, [active, ref, key, JSON.stringify(offset), JSON.stringify(scale), store]);
}
