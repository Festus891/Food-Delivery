import { fetchUser } from "../utills/fetchLocalSstorageData";

const userInfo = fetchUser();

export const initalState = {
  user: userInfo,
};
