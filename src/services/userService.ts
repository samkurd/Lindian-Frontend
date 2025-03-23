/**
 * User service for managing user-related API calls
 */
import api, { ApiResponse } from "./api";

/**
 * User interface matching Django user model
 */
export interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  is_active: boolean;
  date_joined: string;
  last_login: string;
}

/**
 * Login request interface
 */
interface LoginRequest {
  username: string;
  password: string;
}

/**
 * Registration request interface
 */
interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  password_confirm: string;
  first_name?: string;
  last_name?: string;
}

/**
 * Login response interface
 */
interface LoginResponse {
  user: User;
  token?: string;
}

/**
 * User service class
 */
class UserService {
  /**
   * Get current user profile
   */
  async getCurrentUser(): Promise<ApiResponse<User>> {
    return api.get<User>("/user/profile/");
  }

  /**
   * Login user
   */
  async login(credentials: LoginRequest): Promise<ApiResponse<LoginResponse>> {
    return api.post<LoginResponse>("/auth/login/", credentials);
  }

  /**
   * Register new user
   */
  async register(userData: RegisterRequest): Promise<ApiResponse<User>> {
    return api.post<User>("/auth/register/", userData);
  }

  /**
   * Logout user
   */
  async logout(): Promise<ApiResponse<{ success: boolean }>> {
    return api.post<{ success: boolean }>("/auth/logout/", {});
  }

  /**
   * Update user profile
   */
  async updateProfile(
    userId: number,
    profileData: Partial<User>
  ): Promise<ApiResponse<User>> {
    return api.patch<User>(`/user/${userId}/`, profileData);
  }

  /**
   * Change password
   */
  async changePassword(
    oldPassword: string,
    newPassword: string
  ): Promise<ApiResponse<{ success: boolean }>> {
    return api.post<{ success: boolean }>("/auth/password/change/", {
      old_password: oldPassword,
      new_password: newPassword,
    });
  }
}

export default new UserService();
