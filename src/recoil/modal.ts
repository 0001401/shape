import { atom } from "recoil";
import recoilKey from "./recoilKey";

export const state = atom({
  key: recoilKey("modal"),
  default: false,
});
