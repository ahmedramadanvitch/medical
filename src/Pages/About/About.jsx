import { Helmet } from "react-helmet";
import HeroAllPages from "../../Components/HeroAllPages/HeroAllPages";
import WhyWeAre from "../../Components/About-Components/whyWeAre/WhyWeAre";

function About() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
      </Helmet>
      <HeroAllPages mainTitle={"About Us"} />
      <WhyWeAre />
    </>
  );
}

export default About;
