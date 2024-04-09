import { Helmet } from "react-helmet";
import HeroAllPages from "../../Components/HeroAllPages/HeroAllPages";
import Section_container from "../../Components/Section_container/Section_container";

function ContactUs() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Us</title>
      </Helmet>
      <HeroAllPages mainTitle="Contact Us" />
      <Section_container cssClassProps=" ">
        <div className="px-5 py-24 mx-auto flex flex-col lg:flex-row">
          <div className=" bg-gray-900 rounded-lg overflow-hidden h-[400px] lg:h-auto lg:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style={{ filter: "grayscale(0) contrast(1.1) opacity(0.3)" }}
            ></iframe>
            <div className="bg-gray-900 hidden lg:flex relative flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  El-oroba Street, Elmohandseen 2 above hos, Middletown, Egypt
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-400 leading-relaxed">
                  ahmedramadanvitch989@email.com
                </a>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">011 479 985 60</p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col   md:py-8 mt-8 md:mt-0">
            <h2 className="text-cyan-800 text-4xl mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-500">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-500">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded focus:border-cyan-500 focus:ring-1 focus:ring-cyan-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out shadow-md "
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-500"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded focus:border-cyan-500 focus:ring-1 focus:ring-cyan-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out shadow-md"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-500"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded focus:border-cyan-500 focus:ring-1 focus:ring-cyan-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out shadow-md"
              ></textarea>
            </div>
            <button className="text-white bg-cyan-800 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-600 rounded text-lg">
              Submit
            </button>
            <p className="text-xs text-gray-700 text-opacity-90 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </Section_container>
    </>
  );
}

export default ContactUs;
