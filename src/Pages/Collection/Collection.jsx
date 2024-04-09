import { Helmet } from "react-helmet";
import SideProducts from "../../Components/Collection-components/SideProducts/SideProducts";
import HeroAllPages from "../../Components/HeroAllPages/HeroAllPages";
import Section_container from "../../Components/Section_container/Section_container";

function Collection() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Collection</title>
      </Helmet>
      <HeroAllPages mainTitle="Collection" />
      <Section_container>
        <SideProducts />
      </Section_container>
    </>
  );
}

export default Collection;
