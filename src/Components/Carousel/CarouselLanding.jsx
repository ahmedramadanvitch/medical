import { Carousel, Typography } from "@material-tailwind/react";
import Buttons from "../Button/Button";
import data from "../../../data/db.json";
import { useNavigate } from "react-router-dom";
export function CarouselWithContent() {
  const navigate = useNavigate();
  return (
    <Carousel autoplay autoplayDelay={4000} loop>
      {data.carouselLandingPage.map((item, index) => {
        return (
          <div key={index} className="relative h-[85vh] w-full">
            <img
              src={item.image}
              alt="image 1"
              className="h-[100%] w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-4 opacity-80"
                >
                  {item.subTitle}
                </Typography>
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-8 text-3xl md:text-4xl lg:text-6xl"
                >
                  {item.title}
                </Typography>

                <div
                  onClick={() => navigate("/collection")}
                  className=" w-fit mx-auto"
                >
                  <Buttons text="Shop Now" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}
