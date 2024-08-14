import { Fragment } from "react/jsx-runtime";

import Hero from "../components/Hero";
import Analytics from "../components/Analytics";

function Home() {
  return (
    <Fragment>
      
      <Hero />
      <Analytics></Analytics>
    </Fragment>
  );
}

export default Home;
