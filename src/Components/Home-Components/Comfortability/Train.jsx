/* eslint-disable react/prop-types */
function Train({ title, desc, image }) {
  return (
    <div className="flex flex-col gap-2 items-center p-1 ">
      <img src={image} className="w-20 h-20" alt="" />
      <h3 className="text-lg text-cyan-700/70 font-semibold">{title}</h3>
      <p className="text-sm w-[80%] mx-auto">{desc}</p>
    </div>
  );
}

export default Train;
