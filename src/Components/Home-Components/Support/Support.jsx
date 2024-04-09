import data from "../../../../data/db.json";
import Section_container from "../../Section_container/Section_container";
function Support() {
  return (
    <>
      <Section_container cssClassProps="bg-gray-200">
        <div className=" flex flex-col md:flex-row flex-wrap justify-center gap-6 lg:gap-32">
          {data.support.map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-center items-center p-3 gap-4 shadow-lg rounded-lg"
              >
                <div>
                  <img src={item.image} alt="support image" />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-lg text-gray-700">
                    {item.title}
                  </p>
                  <p className="font-normal text-base text-gray-800">
                    {item.supTitle}
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

export default Support;
