import { useModel, get } from "dva-react-hook";
import { useEffect, useState } from "react";
import { useStore } from "../provider";
import { nanoid } from "nanoid";
import { getClassNamesStartingWith } from "../utils";

export default function useDrop({
  acceptKeys = ["*"],
  initData,
  ref,
  onDrop,
  key,
}) {
  const store = useStore();
  const offset = useModel("dragModel/offset", false, store)[0];
  const [dropClass] = useState(`easy-drop-${key}`);
  const { state } = useModel(`dragModel/drops/${key}`, false, store)[0] || {};
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!state || !active) return;
    const [data, setData] = get(`dragModel/drops/${key}/data`, store);
    const [type, dragKey] = state.split("+");
    const dragState = get(`dragModel/drags/${dragKey}/data`, store)[0];
    onDrop && onDrop({ dragState, setData, data, type });
  }, [state, store, key, active]);

  useEffect(() => {
    const setDropClassState = get(`dragModel/drops/${key}`, store)[1];
    setDropClassState({ data: initData })
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
    if (!active) return;
    if (!Array.isArray(acceptKeys) || acceptKeys.length === 0) {
      console.error("acceptKeys must be a non-empty array");
      return;
    }
    const setDropAccepts = get(`dragModel/drops/${key}/acceptKeys`, store)[1];
    setDropAccepts(acceptKeys);
  }, [active, key, JSON.stringify(acceptKeys), store]);
  useEffect(() => {
    const dom = ref.current;
    if (!dom) return;
    dom.classList.add(dropClass);
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class" &&
          !getClassNamesStartingWith(dom, "easy-drop-")
        ) {
          dom.classList.add(dropClass);
        }
      });
    });
    const config = { attributes: true, attributeFilter: ["class"] };
    if (dom) {
      observer.observe(dom, config);
    }
    return () => observer.disconnect();
  }, [ref, dropClass]);
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
    const setDropPolygon = get(`dragModel/drops/${key}/polygon`, store)[1];
    setDropPolygon(polygon);
  }, [active, key, ref, JSON.stringify(offset), store]);
}
