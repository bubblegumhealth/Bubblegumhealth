import { apiWithAuth, apiWithOutAuth, getApiResponse, getErrorResponse } from "./httpService";

export const fetchBlogPost = () => apiWithOutAuth.get("/v2/posts").then(getApiResponse).catch(getErrorResponse);