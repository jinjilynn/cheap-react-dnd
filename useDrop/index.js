import { useModel, get } from "dva-react-hook";
import { useEffect, useState } from "react";
import { useStore } from "../provider";
import { nanoid } from "nanoid";
import { getClassNamesStartingWith, checkdom } from "../utils";

export default function useDrop({ acceptKeys = ["*"], initData, ref, onDrop }) {
  const store = useStore();
  const offset = useModel("dragModel/offset", false, store)[0];
  const dropClass = useState(`easy-drop-${nanoid()}`)[0];
  const { state } =
    useModel(`dragModel/drops/${dropClass}`, false, store)[0] || {};
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!state) return;
    const [data, setData] = get(`dragModel/drops/${dropClass}/data`, store);
    const [type, dragKey] = state.split("+");
    const dragState = get(`dragModel/drags/${dragKey}/data`, store)[0];
    onDrop && onDrop({ dragState, setData, data, type });
  }, [state, store, dropClass]);

  useEffect(() => {
    const setDropClassState = get(`dragModel/drops/${dropClass}`, store)[1];
    setDropClassState({ data: initData })
      .then(() => {
        setActive(true);
      })
      .catch((e) => {
        setActive(false);
      });
    return () => {
      setActive(false);
      setDropClassState(null);
    };
  }, [dropClass, store]);
  useEffect(() => {
    if (!active) return;
    if (!Array.isArray(acceptKeys) || acceptKeys.length === 0) {
      console.error("acceptKeys must be a non-empty array");
      return;
    }
    const setDropAccepts = get(
      `dragModel/drops/${dropClass}/acceptKeys`,
      store
    )[1];
    setDropAccepts(acceptKeys);
  }, [active, dropClass, JSON.stringify(acceptKeys), store]);
  useEffect(() => {
    const dom = checkdom(ref);
    if (!dom) return;
    const preclass = getClassNamesStartingWith(dom, "easy-drop-");
    if (preclass) {
      dom.classList.remove(preclass);
    }
    dom.classList.add(dropClass);
  }, [ref, dropClass]);
  useEffect(() => {
    if (!active) return;
    const dom = checkdom(ref);
    if (!dom) return;
    const domRect = dom.getBoundingClientRect();
    const polygon = [
      [domRect.left - offset.x, domRect.top - offset.y],
      [domRect.right - offset.x, domRect.top - offset.y],
      [domRect.right - offset.x, domRect.bottom - offset.y],
      [domRect.left - offset.x, domRect.bottom - offset.y],
    ];
    const setDropPolygon = get(
      `dragModel/drops/${dropClass}/polygon`,
      store
    )[1];
    setDropPolygon(polygon);
  }, [active, dropClass, ref, JSON.stringify(offset), store]);
}
