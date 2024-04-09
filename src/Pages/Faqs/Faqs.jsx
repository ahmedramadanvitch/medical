import { Helmet } from "react-helmet";
import { AccordionCustomIcon } from "../../Components/Faqs-Components/AccordionCustomIcon";
import HeroAllPages from "../../Components/HeroAllPages/HeroAllPages";

function Faqs() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Faqs</title>
      </Helmet>
      <HeroAllPages mainTitle={"Faqs"} />
      <AccordionCustomIcon />
    </>
  );
}

export default Faqs;
