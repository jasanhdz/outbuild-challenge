export interface FormErrors {
  email?: string
  password?: string
}

export interface FormData {
  email: string;
  password: string;
  remember_me: boolean;
}

export interface User {
  email: string
  fullName: string
}

export interface SessionStore {
  isLoadingSession: boolean;
  isLoggedIn: boolean;
  user: User | null;
  login: (user: User, token: string, rememberMe: boolean) => void;
  logout: () => void;
}
