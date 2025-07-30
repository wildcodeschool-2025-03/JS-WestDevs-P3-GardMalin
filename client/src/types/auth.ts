import type { ReactNode } from "react";

export interface Children {
  children: ReactNode;
}

export interface Auth {
  isLogged: boolean;
  setIsLogged: (value: boolean) => void;
  user: UserPayload | null;
  setUser: (value: UserPayload | null) => void;
}

export interface UserPayload {
  id: number;
  email: string;
  nurserieId: number;
  role?: string;
  parentId: number;
}
