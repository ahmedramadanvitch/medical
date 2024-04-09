/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Section_container from "../Section_container/Section_container";
import data from "../../../data/db.json";
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function AccordionCustomIcon() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <Section_container cssClassProps="my-10">
      {data.according.map((item, index) => {
        return (
          <div key={index}>
            <Accordion
              className=""
              open={open === item.id}
              icon={<Icon id={item.id} open={open} />}
            >
              <AccordionHeader
                onClick={() => handleOpen(item.id)}
                className="bg-cyan-700/85 px-2 py-4 text-white"
              >
                {item.heading}
              </AccordionHeader>
              <AccordionBody className="bg-gray-200/80 px-4 text-base">
                {item.body}
              </AccordionBody>
            </Accordion>
          </div>
        );
      })}
    </Section_container>
  );
}
