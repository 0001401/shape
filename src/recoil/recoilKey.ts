import { v4 as uuidv4 } from "uuid";

const recoilKey = (key: string) => `${key}${uuidv4()}`;

export default recoilKey;
