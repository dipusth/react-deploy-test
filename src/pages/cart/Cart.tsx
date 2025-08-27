const Cart = () => {
  return (
    <div className="flex gap-8">
      <div className="flex-1 border rounded-lg max-h-[300px]">
        <h3 className="border-b-1 p-5"> Price Details</h3>
        <div>
          <div className="flex p-5 justify-between">
            <span>Price </span>
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
