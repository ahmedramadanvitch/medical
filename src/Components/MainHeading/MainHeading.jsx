/* eslint-disable react/prop-types */
function MainHeading({ title, subTitle }) {
  return (
    <div className="text-center my-6 px-5">
      <h1 className="mb-3 text-3xl md:text-5xl text-cyan-700/65 font-semibold">
        {title}
      </h1>
      <p className="text-sm w-[60%] mx-auto md:text-xl md:w-[100%] tracking-[3px] text-gray-500 uppercase">
        {subTitle}
      </p>
    </div>
  );
}

export default MainHeading;
