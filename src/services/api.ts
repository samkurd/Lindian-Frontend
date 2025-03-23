/**
 * API service for communicating with the Django backend
 */

/**
 * Base API URL - replace with your actual Django backend URL
 */
const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8000/api";

/**
 * API error interface
 */
export interface ApiError {
  message: string;
  status: number;
  errors?: Record<string, string[]>;
}

/**
 * Generic API response interface
 */
export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

/**
 * Default request options
 */
const defaultOptions: RequestInit = {
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include", // Include cookies for session authentication
};

/**
 * Process API response
 */
async function processResponse<T>(response: Response): Promise<ApiResponse<T>> {
  const contentType = response.headers.get("content-type");

  // Check if response is JSON
  if (contentType && contentType.includes("application/json")) {
    const data = await response.json();

    if (!response.ok) {
      const error: ApiError = {
        message: data.message || "An error occurred",
        status: response.status,
        errors: data.errors,
      };
      throw error;
    }

    return {
      data: data as T,
      status: response.status,
      message: data.message,
    };
  }

  // Handle non-JSON responses
  if (!response.ok) {
    throw {
      message: `HTTP error ${response.status}`,
      status: response.status,
    } as ApiError;
  }

  const text = await response.text();
  return {
    data: text as unknown as T,
    status: response.status,
  };
}

/**
 * Generic GET request
 */
export async function get<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const url = `${API_BASE_URL}${endpoint}`;
  const response = await fetch(url, {
    ...defaultOptions,
    ...options,
    method: "GET",
  });

  return processResponse<T>(response);
}

/**
 * Generic POST request
 */
export async function post<T>(
  endpoint: string,
  data: unknown,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const url = `${API_BASE_URL}${endpoint}`;
  const response = await fetch(url, {
    ...defaultOptions,
    ...options,
    method: "POST",
    body: JSON.stringify(data),
  });

  return processResponse<T>(response);
}

/**
 * Generic PUT request
 */
export async function put<T>(
  endpoint: string,
  data: unknown,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const url = `${API_BASE_URL}${endpoint}`;
  const response = await fetch(url, {
    ...defaultOptions,
    ...options,
    method: "PUT",
    body: JSON.stringify(data),
  });

  return processResponse<T>(response);
}

/**
 * Generic PATCH request
 */
export async function patch<T>(
  endpoint: string,
  data: unknown,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const url = `${API_BASE_URL}${endpoint}`;
  const response = await fetch(url, {
    ...defaultOptions,
    ...options,
    method: "PATCH",
    body: JSON.stringify(data),
  });

  return processResponse<T>(response);
}

/**
 * Generic DELETE request
 */
export async function del<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const url = `${API_BASE_URL}${endpoint}`;
  const response = await fetch(url, {
    ...defaultOptions,
    ...options,
    method: "DELETE",
  });

  return processResponse<T>(response);
}

export default {
  get,
  post,
  put,
  patch,
  delete: del,
};
