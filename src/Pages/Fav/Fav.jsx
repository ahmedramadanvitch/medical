import { Helmet } from "react-helmet";
import SingleProductAtFav from "../../Components/SingleProductAtFav/SingleProductAtFav";
import { Button } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { clearFav } from "../../Store/Fav-Slice/FavSlice";

export default function Fav() {
  const dispatch = useDispatch();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Favorite</title>
      </Helmet>
      <section className="bg-gray-200 w-full h-full p-5">
        <div className="container px-5 mx-auto ">
          <h1 className="text-center text-4xl text-[#103956]">
            My Favorite
            <hr className="block w-[12%] h-1 bg-gray-400 mx-auto rounded-xl my-3" />
            <Button
              onClick={() => dispatch(clearFav())}
              className="bg-red-700 text-base font-medium tracking-widest hover:bg-red-500 transition-all duration-200"
            >
              Clear Favorite
            </Button>
          </h1>

          <SingleProductAtFav />
        </div>
      </section>
    </>
  );
}
