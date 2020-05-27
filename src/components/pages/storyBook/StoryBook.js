import React from 'react';
import ExpandableContainer from '../../foundation/expandableContainer';
import styled from 'styled-components';
import Button from '../../foundation/button/Button';
import HeroTitle from '../../foundation/typography/HeroTitle';
import BodyText from '../../foundation/typography/BodyText';
import SectionTitle from '../../foundation/typography/SectionTitle';
import { ContainerBase } from '../../foundation';

const Wrapper = styled.div`
  margin-top: 150px;
  p {
    color: orange;
    margin-top: 50px;
  }
`;

const Story = styled.div`
  width: 25%;
`;

const StoryBook = () => (
  <Wrapper>
    <p>Component stories </p>
    <ExpandableContainer title="Navbar">TODO..</ExpandableContainer>
    <ExpandableContainer title="Buttons" isCollapsed={true}>
      <ContainerBase display="flex" flexWrap="wrap">
        <Story>
          <p>COMPONENT: Button type=primary size=lg</p>
          <Button type="primary" size="lg">
            VIEW COURSES
          </Button>
        </Story>
        <Story>
          <p>COMPONENT: Button type=primary size=sm</p>
          <Button type="primary" size="sm">
            VIEW COURSES
          </Button>
        </Story>
        <Story>
          <p>COMPONENT: Button type=secondary size=lg </p>
          <Button type="secondary" size="lg">
            GET IN TOUCH
          </Button>
        </Story>
        <Story>
          <p>COMPONENT: Button type=secondary size=sm </p>
          <Button type="secondary" size="sm">
            GET IN TOUCH
          </Button>
        </Story>
        <Story>
          <p>COMPONENT: Button type=action borderRadius=sm </p>
          <Button type="action" fontSize="20px" borderRadius="sm">
            Reply
          </Button>
        </Story>
      </ContainerBase>
    </ExpandableContainer>
    <ExpandableContainer title="Section">TODO..</ExpandableContainer>
    <ExpandableContainer title="Form">TODO..</ExpandableContainer>
    <ExpandableContainer title="Images">TODO..</ExpandableContainer>
    <ExpandableContainer title="Modal">TODO..</ExpandableContainer>
    <ExpandableContainer title="Typography" isCollapsed={false}>
      <p>COMPONENT: HeroTitle 48px</p>
      <HeroTitle text="THE TECHNOLOGY SKILL PLATFORM" />
      <p>COMPONENT: BodyText 18px</p>
      <BodyText>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et Lorem ipsum dolor sit amet, consetetur
        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et
      </BodyText>
      <p>COMPONENT: SectionTitle 36px</p>
      <SectionTitle text="Title of the section" />
    </ExpandableContainer>
    <ExpandableContainer title="Footer">TODO..</ExpandableContainer>
    <ExpandableContainer title="Dashboard">TODO..</ExpandableContainer>
  </Wrapper>
);

export default StoryBook;
