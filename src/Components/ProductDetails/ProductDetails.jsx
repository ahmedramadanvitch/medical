import { useParams } from "react-router-dom";
import Section_container from "../Section_container/Section_container";
import data from "../../../data/db.json";
import { Button } from "@material-tailwind/react";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Store/Cart-Slice/CartSlice";

export default function ProductDetails() {
  let id = useParams();

  const singleProduct = data.collection.products.filter(
    (item) => item.id === id.id
  );

  const dispatch = useDispatch();

  return (
    <>
      <Section_container>
        <div className="flex flex-col justify-center items-center h-[75vh] mb-10">
          <div>
            <img
              className="w-full h-full object-cover"
              src={singleProduct[0].image}
              alt={singleProduct[0].title}
            />
          </div>
          <div className=" flex flex-col gap-3 justify-center items-center">
            <p className="text-3xl text-cyan-800"> {singleProduct[0].title} </p>
            <p className="text-2xl text-cyan-700">
              {" "}
              {singleProduct[0].category}{" "}
            </p>
            <p className="text-xl text-blue-gray-500">
              {" "}
              {singleProduct[0].price} ${" "}
            </p>
            <Button
              className="bg-cyan-700 w-1/2 my-2"
              onClick={() => {
                dispatch(addToCart(singleProduct[0]));
              }}
            >
              <ShoppingBagIcon className="h-6 mx-auto text-gray-200" />
            </Button>
          </div>
        </div>
      </Section_container>
    </>
  );
}
