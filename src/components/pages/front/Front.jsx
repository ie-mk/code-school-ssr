import React, { useState } from 'react';
import Styled from './Front.styles';
import { useTranslation } from 'react-i18next';
import PageContent from '../../foundation/PageContent';
import HeroFront from '../../heros/heroFront/HeroFront';
import SectionPictureDescButton from '../../heros/sectionPictureDescButton/SectionPictureDescButton';
import SectionCards from '../../heros/sectionCards/SectionCards';

const Front = () => {
  const { t } = useTranslation();

  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <HeroFront />
      <PageContent>
        <SectionPictureDescButton />
        <SectionCards title="How it works" />
      </PageContent>
      <Styled.Chat>
        <Styled.ChatHeader onClick={() => setChatOpen(!chatOpen)}>
          Chat
        </Styled.ChatHeader>

        <Styled.ChatContent chatOpen={chatOpen}>
          {`
            ascfasfd
            asdf
            asdfas
            asdf

          `}
        </Styled.ChatContent>
      </Styled.Chat>
    </>
  );
};

export default Front;
