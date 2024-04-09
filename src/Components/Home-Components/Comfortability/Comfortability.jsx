import MainHeading from "../../MainHeading/MainHeading";
import Section_container from "../../Section_container/Section_container";
import image2 from "../../../assets/images/mask.webp";
import data from "../../../../data/db.json";
import Train from "./Train";
function Comfortability() {
  return (
    <Section_container cssClassProps="py-0">
      <MainHeading
        title="Comfortability. Durability. Safety"
        subTitle="DURABLE FACE MASKS"
      />

      <div className="flex flex-col md:flex-row justify-around items-center gap-8 mt-14">
        <div className="left flex flex-col gap-5 md:gap-14 text-center">
          {data.comfortability.left.map((item, index) => {
            return (
              <Train
                key={index}
                image={item.image}
                title={item.title}
                desc={item.desc}
              />
            );
          })}
        </div>
        <div className="center order-[-1] md:order-none">
          <img
            src={image2}
            className="w-[50%] h-[50%] md:w-full md:h-full mx-auto"
            alt=""
          />
        </div>
        <div className="left flex flex-col gap-5 md:gap-14 text-center">
          {data.comfortability.right.map((item) => {
            return (
              <Train
                key={item.id}
                image={item.image}
                title={item.title}
                desc={item.desc}
              />
            );
          })}
        </div>
      </div>
    </Section_container>
  );
}

export default Comfortability;
