import MainHeading from "../../MainHeading/MainHeading";
import Section_container from "../../Section_container/Section_container";
import data from "../../../../data/db.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./new.css";
import StarsRate from "../../StarsRate/StarsRate";
function New_Arrivals() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Section_container cssClassProps="mt-12">
      <MainHeading
        title="New Arrivals"
        subTitle="FIND THE PERFECT PHONE FOR YOU"
      />
      <div className="w-full" style={{ maxWidth: "90vw" }}>
        <Slider {...settings} className="xsm:mx-auto md:mx-10">
          {data.new_arrival.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[75%] mx-auto lg:w-1/3 lg:mb-0 mb-6 p-4"
              >
                <div className="ml-5 md:ml-auto md:w-full md:h-full border-4 shadow-sm text-center py-3">
                  <img
                    alt="testimonial"
                    className=" mx-auto object-cover object-center rounded-full inline-block  bg-opacity-10"
                    src={item.image}
                  />
                  <h1 className="text-2xl md:text-2xl text-cyan-800">
                    {item.title}{" "}
                  </h1>
                  <span className="inline-block h-1 w-14 rounded bg-cyan-500/35 my-3"></span>
                  <p className="text-gray-600 text-base md:text-lg px-10">
                    {item.desc}
                  </p>
                  <StarsRate />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </Section_container>
  );
}

export default New_Arrivals;
