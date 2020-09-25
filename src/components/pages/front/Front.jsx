import React, { useState } from 'react';
import PageContent from '../../foundation/PageContent';
import HeroFront from '../../heros/heroFront/HeroFront';
import SectionCards from '../../heros/sectionCards/SectionCards';
import LatestVideos from '../dashboard/courses/latestVideos/LatestVideos';
import WhyJoin from '../../whyJoin/WhyJoin';
import SignUpSection from '../../signUpSection/SignUpSection';

const Front = () => {
  return (
    <>
      <HeroFront />
      <PageContent>
        <LatestVideos />
        <WhyJoin />
      </PageContent>
      <SignUpSection />
    </>
  );
};

export default Front;
