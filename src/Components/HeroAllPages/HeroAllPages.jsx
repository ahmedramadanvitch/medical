import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function HeroAllPages({ mainTitle }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-[75vh] bg-cover bg-top bg-no-repeat bg-[url('https://meds-theme.myshopify.com/cdn/shop/files/abo-02.jpg?v=1628687902&width=1920')] relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#000000b7] text-center flex flex-col gap-4 justify-center items-center ">
        <h1 className="z-40 text-6xl font-bold text-white"> {mainTitle} </h1>
        <p className="z-40 text-lg font-semibold text-white">
          {" "}
          <button onClick={() => navigate("/")}> Home </button> * {mainTitle}{" "}
        </p>
      </div>
    </>
  );
}

export default HeroAllPages;
