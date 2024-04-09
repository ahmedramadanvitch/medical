import { Helmet } from "react-helmet";
import SingleProductAtCart from "./SingleProductAtCart";

function Cart() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cart</title>
      </Helmet>

      <section className="bg-gray-200 w-full h-full p-5">
        <div className="container px-5 mx-auto ">
          <h1 className="text-center text-4xl text-[#103956]">
            My Cart
            <hr className="block w-[12%] h-1 bg-gray-400 mx-auto rounded-xl my-3" />
          </h1>

          <SingleProductAtCart />
        </div>
      </section>
    </>
  );
}

export default Cart;
