import type { cartProps } from "@/types/PostType";
import { ShoppingCart } from "lucide-react";

const CartIcon = ({ className }: cartProps) => {
  return <ShoppingCart className={className} />;
};

export default CartIcon;
