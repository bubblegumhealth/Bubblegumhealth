import axios from "axios";
import Cookies from "js-cookie";
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://dev2.oye-yemi.com/wp-json/wp';
export const API_BASE_URL2 = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://shop.bubblegum.health/wp-json';
export const WOOCOMMERCE_CONSUMER_KEY = process.env.NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_KEY || 'ck_31722a8f6eea9ef8a2d7f870357db969af33e003';
export const WOOCOMMERCE_CONSUMER_SECRET = process.env.NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_SECRET || 'cs_3df77c73ca1a698df2c861535ef2d41f38c58bcb';
export const TOKEN = `Bearer ${Cookies.get("BUBBLEGUM")}`


const timeoutConfig = {
  timeout: 30000,
  timeoutErrorMessage: "Server taking too long to respond. Try again.",
};

export const apiWithOutAuth = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  ...timeoutConfig,
});


export const apiWithOutAuth2 = axios.create({
  baseURL: API_BASE_URL2,
  withCredentials: true,
  headers: {
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  ...timeoutConfig,
});

export const apiWithAuth = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: TOKEN,
  },
  ...timeoutConfig,
});


export const getApiResponse = (data) => {
  return {
    status: true,
    data: data.data,
  };
};

export const getErrorResponse = (error) => {
  if (error?.response?.status === 401) {
    Cookies.remove('BUBBLEGUM')
    // window !== "undefined" && window.location.reload()
  }

  return {
    statusCode: error?.response?.status,
    status: false,
    data: error?.response?.data,
  };
};
