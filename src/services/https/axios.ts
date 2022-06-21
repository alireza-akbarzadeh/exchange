import axios from "axios";
import { baseUrl } from "Constants/api.consts";
axios.defaults.baseURL = baseUrl;
axios.defaults.headers.get["Accept"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

// declare interceptors there

export default axios;
