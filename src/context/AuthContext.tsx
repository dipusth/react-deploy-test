import type { ProductType } from "@/types/PostType";
import { createContext, useState, type ReactNode } from "react";

type AuthContextType = {
  cart: ProductType[];
  setCart: (value: ProductType[]) => void;
  //   login: (email: string, password: string) => void;
};
const AuthContext = createContext<AuthContextType | undefined>(undefined);
const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<ProductType[]>([]);
  return (
    <AuthContext.Provider value={{ cart, setCart }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
