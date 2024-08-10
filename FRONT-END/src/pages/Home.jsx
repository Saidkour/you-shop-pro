import HomeHeader from "../Components/HomeHeader";
import WhatPeopleSay from "../Components/WhatPeopleSay";
import HomeMostSallingProduct from "../Components/HomeMostSallingProduct";
import SeeLastCol from "../Components/SeeLastCol";
import WhyChoseUs from "../Components/WhyChoseUs";
import SalesUp from "../Components/SalesUp";
import NewCollection from "../Components/NewCollection";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <NewCollection/>
      <HomeMostSallingProduct />
      <SalesUp/>
      <WhatPeopleSay /> 
      <WhyChoseUs/> 
      <SeeLastCol />

    </>
  );
};

export default Home;
