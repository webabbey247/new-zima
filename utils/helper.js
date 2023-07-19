import axios from "axios";
import * as yup from "yup";
import { isValidPhoneNumber } from "react-phone-number-input";

const config = require("../package.json").projectConfig;
const BACKEND_BASE_URL = config.backendApiBaseUrl;

const axiosRes = axios.create({
  baseURL: BACKEND_BASE_URL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: true,
});


function removeTags(str) {
  if (str === null || str === "") return false;
  else str = str.toString();
  return str.replace(/(<([^>]+)>)/gi, "");
}

export {
  axiosRes,
  // contactValidationSchema,
  // SubscribeValidationSchema,
  removeTags,
  BACKEND_BASE_URL,
};
