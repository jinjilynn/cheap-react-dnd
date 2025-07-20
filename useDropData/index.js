import { useModel } from "dva-react-hook";
import { useStore } from "../provider";

export default function useDropData(key) {
  if (!key) {
    throw new Error("key is required");
  }
  const store = useStore();
  return useModel(`dragModel/drops/${key}/data`, false, store, {
    autoCreate: true,
    defaultValue: null,
  });
}
