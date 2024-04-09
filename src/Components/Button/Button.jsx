/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";
function Buttons({ text }) {
  return (
    <>
      <Button className="bg-cyan-700 text-white tracking-widest text-base">
        {text}
      </Button>
    </>
  );
}

export default Buttons;
