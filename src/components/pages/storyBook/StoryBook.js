import React from 'react';
import ExpandableContainer from '../../foundation/expandableContainer';
import styled from 'styled-components';
import Button from '../../foundation/button/Button';
import HeroTitle from '../../foundation/typography/HeroTitle';
import BodyText from '../../foundation/typography/BodyText';
import SectionTitle from '../../foundation/typography/SectionTitle';
import { ContainerBase } from '../../foundation';
import AdminInput from '../../foundation/input/AdminInput';
import AdminDropDown from '../../foundation/dropdown/AdminDropDown';
import AdminTextArea from '../../foundation/textarea/AdminTextArea';
import AdminUploadImage from '../../foundation/pictureUploader/PictureUploader';
import CheckBoxWithText from '../../foundation/checkboxwithtext/CheckBoxWithText';

import { Field, Formik } from 'formik';

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

const arr = [
  { show: 'Choose one item', value: '' },
  { show: '1', value: '1' },
  { show: '2', value: '2' },
  { show: '3', value: '3' },
];

const optionsArr = arr.map(k => {
  return (
    <option key={k.show} value={k.value}>
      {k.show}
    </option>
  );
});
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

        <Story>
          <p>COMPONENT: Button type=action borderRadius=sm margin="22px" </p>
          <Button
            margin="22px"
            width="100px"
            height="48px"
            type="action"
            fontSize="20px"
            borderRadius="sm"
          >
            Edit/Delete
          </Button>
        </Story>
      </ContainerBase>
    </ExpandableContainer>
    <ExpandableContainer title="Section">TODO..</ExpandableContainer>
    <ExpandableContainer title="Form" isCollapsed={false}>
      <Formik>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <p>COMPONENT: Admin input </p>
            <AdminInput
              classNameString="someString"
              label="label"
              type="text"
              width="50%"
            />

            <p>COMPONENT: AdminDropDown</p>
            <AdminDropDown
              classNameString="select"
              label="label"
              component="select"
              width="50%"
              options={optionsArr}
            />

            <p>COMPONENT: AdminDropDown displayLabelLeft={true}</p>
            <AdminDropDown
              classNameString="select"
              label="label"
              component="select"
              marginLeft="25px"
              marginRight="20px"
              width="100%"
              dropdownWidth="250px"
              height="47px"
              displayLabelLeft={true}
              options={optionsArr}
            />

            <p>COMPONENT: AdminTextArea</p>
            <AdminTextArea
              name="label"
              className="textarea"
              rows="10"
              cols="110"
              component="textarea"
              label="label"
              width="100%"
            />

            <p>COMPONENT: AdminUploadImage</p>
            <AdminUploadImage width="40%" label="label" />
          </form>
        )}
      </Formik>
    </ExpandableContainer>
    <ExpandableContainer title="Images">TODO..</ExpandableContainer>
    <ExpandableContainer title="Modal">TODO..</ExpandableContainer>
    <ExpandableContainer title="Typography" isCollapsed={true}>
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

      <p>COMPONENT: CheckBoxWithText 36px</p>
      <CheckBoxWithText
        label="CheckBoxWithText"
        width="30%"
        color="white"
        fontSize="h3"
      />
    </ExpandableContainer>
    <ExpandableContainer title="Footer">TODO..</ExpandableContainer>
    <ExpandableContainer title="Dashboard">TODO..</ExpandableContainer>
  </Wrapper>
);

export default StoryBook;
