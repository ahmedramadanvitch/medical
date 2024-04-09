import { CheckIcon } from "@heroicons/react/24/solid";
import data from "../../../../data/db.json";
import Section_container from "../../Section_container/Section_container";
function WhyWeAre() {
  return (
    <Section_container cssClassProps="my-14">
      <div className="flex flex-col gap-10 lg:flex-row justify-center items-center">
        <div className=" lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-cyan-600">
            Who We Are?
          </h1>
          <p className="mb-8 leading-relaxed text-cyan-600">
            We create advance technology health and social care products
          </p>
          {data.about_why_we_are.map((item, index) => {
            return (
              <ul key={index}>
                <li className="flex justify-start items-center gap-3 mb-3">
                  <CheckIcon className="w-12 h-12 min-w-12 min-h-16  bg-gray-100 p-2 text-cyan-600" />
                  <p className="text-start text-gray-800">{item.text}</p>
                </li>
              </ul>
            );
          })}
        </div>
        <div className="lg:max-w-lg lg:w-full  w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://meds-theme.myshopify.com/cdn/shop/files/abo-01.jpg?v=1628687766&width=750"
          />
        </div>
      </div>
    </Section_container>
  );
}

export default WhyWeAre;
