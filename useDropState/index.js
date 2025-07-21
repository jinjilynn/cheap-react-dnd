import { useModel } from "dva-react-hook";
import { useStore } from "../provider";

export default function useDropState(key) {
  if (!key) {
    throw new Error("key is required");
  }
  const store = useStore();
  const [data, setData] = useModel(
    `dragModel/drops/${key}/data`,
    false,
    store,
    {
      autoCreate: true,
      defaultValue: null,
    }
  );
  const [polygon] = useModel(`dragModel/drops/${key}/polygon`, false, store, {
    autoCreate: true,
    defaultValue: null,
  });
  return {
    data,
    setData,
    polygon,
  };
}
