import MainHeading from "../../MainHeading/MainHeading";
import data from "../../../../data/db.json";
import Section_container from "../../Section_container/Section_container";
function Difference() {
  return (
    <>
      <Section_container>
        <MainHeading
          title="What Makes The Difference?"
          subTitle="HIGH PERFORMANCE AND SAFETY"
        />
        <div className="flex flex-wrap -m-4 my-14">
          {data.difference_home.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[75%] mx-auto lg:w-1/3 lg:mb-0 mb-6 p-4"
              >
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="w-40 h-40 md:w-50 md:h-50 mb-8 object-cover object-center rounded-full inline-block border-[14px] border-cyan-500/25 bg-gray-800 bg-opacity-10"
                    src={item.image}
                  />
                  <h1 className="text-2xl md:text-3xl text-gray-700">
                    {item.title}{" "}
                  </h1>
                  <span className="inline-block h-1 w-14 rounded bg-cyan-500/35 my-3"></span>
                  <p className="text-gray-600 text-base md:text-lg px-10">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Section_container>
    </>
  );
}

export default Difference;
