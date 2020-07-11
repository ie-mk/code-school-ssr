import React, { useEffect } from 'react';
import DashboardItem from './dashboardItem/DashboardItem';
import ContainerBase from '../../foundation/ContainerBase';
import { connect } from 'react-redux';
import { resourceActions } from '../../../store/actions';

const DescriptionSection = props => (
  <ContainerBase
    paddingTop="xxl"
    paddingBottom="sm"
    paddingLeft="xl"
    display="flex"
    flexDirection="row"
    {...props}
  />
);
const mockdata = [
  {
    title: 'Students',
    count: 324,
    New: 24,
    Active: 50,
  },
  {
    title: 'Courses',
    count: 8,
    New: 2,
    Active: 10,
  },
  {
    title: 'Messages',
    count: 14,
  },
];

const Items = () => {
  return mockdata.map((item, idx) => {
    return <DashboardItem key={idx} data={item} />;
  });
};

const DashboardContent = ({ dispatch }) => {
  // useEffect(() => {
  //   dispatch(resourceActions.createCourse.request());
  // }, []);

  return (
    <DescriptionSection>
      <Items />
    </DescriptionSection>
  );
};

export default connect()(DashboardContent);
