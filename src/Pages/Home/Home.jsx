import { Helmet } from "react-helmet";
import { CarouselWithContent } from "../../Components/Carousel/CarouselLanding";

import Comfortability from "../../Components/Home-Components/Comfortability/Comfortability";
import Difference from "../../Components/Home-Components/Difference/Difference";
import New_Arrivals from "../../Components/Home-Components/New_Arrivals/New_Arrivals";

import Support from "../../Components/Home-Components/Support/Support";

function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Medz</title>
      </Helmet>
      <CarouselWithContent />
      <Support />
      <Difference />
      <Comfortability />
      <New_Arrivals />
    </>
  );
}

export default Home;
