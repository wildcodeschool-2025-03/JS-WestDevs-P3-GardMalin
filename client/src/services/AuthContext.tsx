import type { UserPayload, Auth, Children } from "../types/auth";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext<null | Auth>(null);

export const AuthProvider = ({ children }: Children) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState<UserPayload | null>(null);

  return (
    <AuthContext value={{ isLogged, setIsLogged, user, setUser }}>
      {children}
    </AuthContext>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("A context must be provided");
  }

  return context;
};
