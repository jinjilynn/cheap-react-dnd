import { useModel } from "dva-react-hook";
import { useStore } from "../provider";

export default function useDragState(key) {
  if (!key) {
    throw new Error("key is required");
  }
  const store = useStore();
  const [data, setData] = useModel(
    `dragModel/drags/${key}/data`,
    false,
    store,
    {
      autoCreate: true,
      defaultValue: null,
    }
  );
  const [polygon] = useModel(`dragModel/drags/${key}/polygon`, false, store, {
    autoCreate: true,
    defaultValue: null,
  });
  return {
    data,
    setData,
    polygon,
  };
}
