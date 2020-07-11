import React from 'react';
import Styled from './Front.styles';
import { useTranslation } from 'react-i18next';
import PageContent from '../../foundation/PageContent';
import HeroFront from '../../heros/heroFront/HeroFront';
import SectionPictureDescButton from '../../heros/sectionPictureDescButton/SectionPictureDescButton';
import SectionCards from '../../heros/sectionCards/SectionCards';

const Front = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeroFront />
      <PageContent>
        <SectionPictureDescButton />
        <SectionCards title="How it works" />
      </PageContent>
    </>
  );
};

export default Front;
