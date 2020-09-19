import React, { useState } from 'react';
import Styled from './Front.styles';
import { useTranslation } from 'react-i18next';
import PageContent from '../../foundation/PageContent';
import HeroFront from '../../heros/heroFront/HeroFront';
import SectionPictureDescButton from '../../heros/sectionPictureDescButton/SectionPictureDescButton';
import SectionCards from '../../heros/sectionCards/SectionCards';
import LatestVideos from '../dashboard/courses/latestVideos/LatestVideos';

const Front = () => {
  const { t } = useTranslation();

  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <HeroFront />
      <PageContent>
        <LatestVideos />
        <SectionCards title="How it works" />
      </PageContent>
    </>
  );
};

export default Front;
