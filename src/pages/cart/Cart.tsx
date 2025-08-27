import { useAuth } from "@/hooks/useAuth";
import { NavLink } from "react-router-dom";
import CartWrapper from "./Style";

const Cart = () => {
  const { cart } = useAuth();
  console.log("cart", cart);
  const hasCart = cart.length;
  return (
    <div className="flex gap-8">
      <div className="p-5 border rounded-lg flex-2">
        {!hasCart && (
          <div className="flex">
            Your cart is empty
            <NavLink to={"/register"}>Sign up NOW</NavLink>
          </div>
        )}

        {cart.map((item) => {
          return (
            <CartWrapper className="flex p-5 ">
              <div className="icon-lg cart-img">
                <img src={item.image} alt="" />
              </div>
              <div className="ml-5">
                <h4> {item.title}</h4>
                <p> {item.description}</p>
              </div>
            </CartWrapper>
          );
        })}
      </div>

      <div className="flex-1 border rounded-lg max-h-[300px]">
        <h3 className="border-b-1 p-5"> Price Details</h3>
        <div>
          <div className="flex p-5 justify-between">
            <span>Price ({hasCart} item)</span>
            <span> $1250</span>
          </div>
          <div className="flex p-5 justify-between">
            <span>
              <b>Total</b>
            </span>
            <span>
              <b> $1250</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
