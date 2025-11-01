import { apiWithAuth, apiWithOutAuth, apiWithOutAuth2, getApiResponse, getErrorResponse } from "./httpService";

export const fetchBlogPost = () => apiWithOutAuth.get("/v2/posts").then(getApiResponse).catch(getErrorResponse);
export const bookppointment = (formdata) => apiWithOutAuth2.post("/consult/v1/submit/",formdata).then(getApiResponse).catch(getErrorResponse);
export const reportRape = (formdata) => apiWithOutAuth2.post("/report/v1/rape",formdata).then(getApiResponse).catch(getErrorResponse);