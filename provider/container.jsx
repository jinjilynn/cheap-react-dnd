import React, { useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";
import { styled } from "styled-components";
import { get } from "dva-react-hook";
import { useStore } from ".";

const Container = styled("div")`
  width: 100%;
  height: 100%;
  position: relative;
`;

export default function (props) {
  const { children, scale } = props;
  const store = useStore();
  const handler = useRef(null);
  const id = useState(`easy-drag-drop-root-${nanoid()}`)[0];
  useEffect(() => {
    const setRoot = get(`dragModel/root`, store)[1];
    setRoot(id);
    function reset() {
      const setScale = get(`dragModel/scale`, store)[1];
      const setOffset = get(`dragModel/offset`, store)[1];
      if (!handler.current) return;
      const boundingRect = handler.current.getBoundingClientRect();
      const { left, top } = boundingRect;
      setOffset({ x: left, y: top });
      if (typeof scale === "object") {
        setScale(scale);
      }
      if (typeof scale === "function") {
        setScale(scale());
      }
    }
    const resizeObserver = new ResizeObserver(reset);
    resizeObserver.observe(handler.current);
    window.addEventListener("resize", reset);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", reset);
    };
  }, [id, store, scale]);
  return (
    <Container id={id} ref={handler}>
      {children}
    </Container>
  );
}
