import { isPointInPolygon } from "../utils";
import { nanoid } from "nanoid";

export const operationType = {
  STARTDRAG: "STARTDRAG",
  DRAGGING: "DRAGGING",
  DROP: "DROP",
  ONSTART: "ONSTART",
  ONENTER: "ONENTER",
  ONHOVER: "ONHOVER",
  ONLEAVE: "ONLEAVE",
  ONDROP: "ONDROP",
  ONEND: "ONEND",
};
export default {
  name: "dragModel",
  init: {
    root: null,
    offset: { x: 0, y: 0 },
    scale: { x: 1, y: 1 },
    drops: {},
    drags: {},
  },
  effects: {},
  callbacks: {
    updatePreview: async (state) => {
      const { info, select } = state;
      const {
        value: { current },
      } = info;
      if (!current) return;
      const key = current.key;
      const root = select("dragModel/root")[0];
      const [previewAdded, setPreviewAdded] = select(
        `dragModel/drags/${key}/previewAdded`
      );
      const setDragState = select(`dragModel/drags/${key}/state`)[1];
      const drops = select("dragModel/drops")[0];
      const availableDrops = Object.keys(drops).filter(
        (dropclass) =>
          drops[dropclass] &&
          document.querySelector(`.${dropclass}`) !==
            document.querySelector(`.easy-drag-${key}`)
      );
      const acceptedDrops = availableDrops.filter((dropclass) => {
        const acceptKeys = drops[dropclass].acceptKeys || [];
        return acceptKeys.includes("*") ? true : acceptKeys.includes(key);
      });
      if (
        current &&
        current.operationType === operationType.STARTDRAG &&
        !previewAdded
      ) {
        const new_element = document.createElement("img");
        new_element.classList.add(current.class);
        new_element.src = current.src;
        Object.keys(current.style).forEach((key) => {
          new_element.style[key] = current.style[key];
        });
        document.querySelector(`#${root}`).appendChild(new_element);
        await setPreviewAdded(true);
        acceptedDrops.forEach((dropclass) => {
          const setDropState = select(`dragModel/drops/${dropclass}/state`)[1];
          setDropState(`${operationType.ONSTART}+${key}+${nanoid()}`);
          setDragState(`${operationType.ONSTART}+${dropclass}`);
        });
      }
      if (
        current &&
        current.operationType === operationType.DRAGGING &&
        previewAdded
      ) {
        const element = document.querySelector(`.${current.class}`);
        Object.keys(current.style).forEach((key) => {
          element.style[key] = current.style[key];
        });
        const x = current.x;
        const y = current.y;
        for (let dropclass of acceptedDrops) {
          const dropsState = drops[dropclass];
          const isInside = isPointInPolygon([x, y], dropsState.polygon);
          const [dropState, setDropState] = select(
            `dragModel/drops/${dropclass}/state`
          );
          if (isInside) {
            if (dropState.includes(operationType.ONSTART)) {
              setDropState(`${operationType.ONENTER}+${key}+${nanoid()}`);
              setDragState(`${operationType.ONENTER}+${dropclass}`);
            } else {
              setDropState(`${operationType.ONHOVER}+${key}+${nanoid()}`);
              setDragState(`${operationType.ONHOVER}+${nanoid()}+${dropclass}`);
            }
          } else {
            if (dropState.includes(operationType.ONHOVER)) {
              setDropState(`${operationType.ONLEAVE}+${key}+${nanoid()}`);
              setDragState(`${operationType.ONLEAVE}+${dropclass}`);
            }
          }
        }
      }
      if (current && current.operationType === operationType.DROP) {
        let element = document.querySelector(`.${current.class}`);
        if (!element) {
          let count = 0;
          while (!element) {
            if (count > 10) break;
            count++;
            element = document.querySelector(`.${current.class}`);
            await new Promise((resolve) => setTimeout(resolve, 100));
          }
        }
        element?.remove();
        await setPreviewAdded(false);
        const x = current.x;
        const y = current.y;
        for (let dropclass of acceptedDrops) {
          const dropsState = drops[dropclass];
          const isInside = isPointInPolygon([x, y], dropsState.polygon);
          const setDropState = select(`dragModel/drops/${dropclass}/state`)[1];
          if (isInside) {
            setDropState(`${operationType.ONDROP}+${key}+${nanoid()}`);
            setDragState(`${operationType.ONDROP}+${dropclass}`);
          } else {
            setDropState(`${operationType.ONEND}+${key}+${nanoid()}`);
            setDragState(`${operationType.ONEND}+${dropclass}`);
          }
        }
      }
    },
  },
};
