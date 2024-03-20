import { useModel } from "dva-react-hook";
import { useStore } from "../provider";
import { useState, useEffect } from "react";

export default function useData(key) {
  if (!key) {
    throw new Error("key is required");
  }
  const store = useStore();
  const state = useModel(`dragModel/drags/${key}`, false, store)[0];
  const [keyData, setKeyData] = useState(null);
  useEffect(() => {
    if (!state) return;
    const { data } = state;
    setKeyData(data);
  }, [JSON.stringify(state)]);
  return keyData;
}
