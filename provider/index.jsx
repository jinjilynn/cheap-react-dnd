import React, { useContext, createContext, useEffect, useState } from "react";
import Container from "./container";
import Provider from "dva-react-hook";
import dragModel from "../models";

export const store = {};

export const defaultSpace = "drag_drop_store";

export const useStore = () => {
  let _store;
  const _store_values = Object.values(store);
  for (let i = 0; i < _store_values.length; i += 1) {
    const _item = useContext(_store_values[i])
      ? useContext(_store_values[i])()
      : null;
    if (_item) {
      _store = _item;
      break;
    }
  }
  return _store;
};

export default function (props) {
  const { uniqueKey = defaultSpace, scale, children } = props;
  const [ContextProvider, setContextProvider] = useState(null);

  useEffect(() => {
    const DragContext = createContext();
    store[uniqueKey] = DragContext;
    setContextProvider(DragContext.Provider);
    return () => {
      delete store[uniqueKey];
    };
  }, [uniqueKey]);

  return (
    <Provider
      noCached={true}
      nested={false}
      uniqueKey={uniqueKey}
      models={[dragModel]}
    >
      {ContextProvider && (
        <ContextProvider
          value={() => window[`dva_react_hook_store_${uniqueKey}`]}
        >
          <Container scale={scale}>{children}</Container>
        </ContextProvider>
      )}
    </Provider>
  );
}
