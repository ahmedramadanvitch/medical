import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Button, IconButton } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import {
  clear,
  decrementQty,
  deleteFromCart,
  incrementQty,
} from "../../Store/Cart-Slice/CartSlice";

function SingleProductAtCart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  // total price
  const totalPrice = cart.reduce((acc, item) => {
    return (acc + item.price) * item.quantity;
  }, 0);
  // DisCount
  const discount = (totalPrice * 10) / 100;
  // delivery
  const delivery = 15;
  // total quantity
  const totalQuantity = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  // Empty Cart Message if cart is empty
  const EmptyCartMsg = (
    <h4 className="text-deep-orange-900 font-semibold text-2xl text-center">
      No Items Found
    </h4>
  );

  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col xsm:w-[100%] lg:w-[70%] gap-5 justify-between p-3 border-2 ">
          {cart.length < 1
            ? EmptyCartMsg
            : cart.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center md:flex-row p-3 justify-between  bg-white shadow-xl rounded-xl"
                  >
                    <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                      <div className="flex flex-col w-[150px] h-[150px]  md:w-[85px] md:h-[85px] items-center">
                        <img
                          src={item.image}
                          className="w-full h-full"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col items-center md:items-start">
                        <p className=" text-xl font-semibold text-[#103956]">
                          {item.title.slice(0, 10).toLowerCase()}
                        </p>
                        {/* icons - && + */}
                        <div className="flex justify-start items-center gap-2 text-[#103956]">
                          QNT :{" "}
                          <IconButton
                            variant="text"
                            // لو الكميه اقل من واحده مينقصش تانى عشان هيبقى بالسالب
                            onClick={() =>
                              item.quantity > 1
                                ? dispatch(decrementQty(item))
                                : item.quantity
                            }
                          >
                            <MinusIcon className="h-[20px] w-[20px] rounded-sm border border-gray-800 text-blue-gray-800" />
                          </IconButton>{" "}
                          {item.quantity}
                          <IconButton
                            variant="text"
                            onClick={() => dispatch(incrementQty(item))}
                          >
                            <PlusIcon className="h-[20px] w-[20px] rounded-sm border border-gray-800 text-blue-gray-800" />
                          </IconButton>{" "}
                        </div>
                        <p className="text-teal-900 font-semibold">
                          <span className="text-gray-700">Price : </span>
                          {item.price} $
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center md:items-end justify-center gap-2">
                      <span className="text-base font-semibold text-teal-800">
                        {" "}
                        <span className="text-gray-700">Sub Total : </span>
                        {(item.quantity * item.price).toFixed(2)} $
                      </span>
                      {/* remove icon */}
                      <IconButton
                        className=""
                        onClick={() => dispatch(deleteFromCart(item))}
                        variant="text"
                      >
                        <TrashIcon className="h-5 w-5 text-red-600" />
                      </IconButton>
                    </div>
                  </div>
                );
              })}
        </div>
        {/* Order Summary */}
        <div className="flex flex-col xsm:w-[100%] lg:w-[30%] border-2 bg-white rounded-lg h-fit mt-3 p-4 sticky top-[85px]">
          <h1 className="text-xl font-semibold text-gray-600">Order Summary</h1>
          <hr className="h-[2px] my-2 bg-gray-400 rounded-xl" />
          <p className="my-3 text-lg text-gray-700">
            Selected Items :{totalQuantity}
          </p>
          <p className="my-3 text-lg text-gray-700">
            Discount (10%) :{" "}
            {cart.length < 1 ? "10%" : `${discount.toFixed(0)} $ `}
          </p>
          <p className="my-3 text-lg text-gray-700">
            delivery Coast :{delivery} $
          </p>
          <p className="my-3 text-lg text-gray-700">
            Total Price :{" "}
            {cart.length < 1
              ? "00"
              : (totalPrice - discount - delivery).toFixed(2)}{" "}
            $
          </p>
          <Button
            onClick={() => dispatch(clear())}
            className="bg-red-700 text-base font-medium tracking-widest hover:bg-red-500 transition-all duration-200"
          >
            Clear Cart
          </Button>
        </div>
      </div>
    </>
  );
}

export default SingleProductAtCart;
