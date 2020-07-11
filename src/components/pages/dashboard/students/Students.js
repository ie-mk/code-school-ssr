import React, { useState } from 'react';
import { ContainerBase } from '../../../foundation';
import Button from '../../../foundation/button/Button';
import Styled from './Students.style';
import Table from '../table/Table';
import { Formik } from 'formik';
import CustomAdminDropDown from '../practicalTasks/customAdminDropDown/CustomAdminDropDown';

const messages = {
  '124jq23j234': {
    senderId: '845235o2u35',
    studentName: 'Student Name',
    email: 'student@gmail.com',
    phone: '+44 7911234567',
    courses: 'Frontend Development',
    skills: 'Html,CSS',
    joinDate: '24-11-2019',
  },
  '124jq23ddj234': {
    senderId: '845235o2u35',
    studentName: 'Student Name',
    email: 'student@gmail.com',
    phone: '+44 7911234567',
    courses: 'Backend Development',
    skills: 'PHP',
    joinDate: '24-11-2019',
  },
};

const columnHeaders = [
  'S.No',
  'Student Name',
  'Email',
  'Phone',
  'Courses',
  'Skills',
  'Join Date',
];
const batcharr = [
  { show: 'Choose Batch/year', value: '' },
  { show: '2017', value: '2017' },
  { show: '2018', value: '2018' },
];
const batchoptions = batcharr.map(k => {
  return (
    <option key={k.show} value={k.value}>
      {k.show}
    </option>
  );
});

const skillarr = [
  { show: 'Choose Skill Set', value: '' },
  { show: 'Html', value: 'Html' },
  { show: 'Php', value: 'Php' },
];
const skilloptions = skillarr.map(k => {
  return (
    <option key={k.show} value={k.value}>
      {k.show}
    </option>
  );
});

const subscriptionarr = [
  { show: 'Contract', value: '' },
  { show: '1 Year', value: '1' },
  { show: '2 Years', value: '2' },
  { show: '3 Years', value: '3' },
];
const subscriptionoptions = subscriptionarr.map(k => {
  return (
    <option key={k.show} value={k.value}>
      {k.show}
    </option>
  );
});
const PracticalTasks = () => {
  return (
    <ContainerBase marginTop="30px">
      <Formik enableReinitialize={true}>
        <form>
          <Styled.DropdownWrapper>
            <Styled.DropdownItemWrapper>
              <CustomAdminDropDown
                label="Batch"
                name="batch"
                placeholder="Choose Batch/Year"
                options={batchoptions}
              />
            </Styled.DropdownItemWrapper>
            <Styled.DropdownItemWrapper>
              <CustomAdminDropDown
                name="skillSet"
                label="Skill"
                placeholder="Choose Skill Set"
                options={skilloptions}
              />
            </Styled.DropdownItemWrapper>
            <Styled.DropdownItemWrapper>
              <CustomAdminDropDown
                name="subscription"
                label="Subscription"
                placeholder="Contract"
                options={subscriptionoptions}
              />
            </Styled.DropdownItemWrapper>
          </Styled.DropdownWrapper>
        </form>
      </Formik>

      <Styled.TableWrapper>
        <Table columnHeaders={columnHeaders}>
          {Object.keys(messages).map((id, idx) => {
            const rowData = messages[id];
            if (!rowData) return null;

            return (
              <Table.Tr key={id}>
                <Table.Td>{idx + 1}</Table.Td>
                <Table.Td>{rowData.studentName}</Table.Td>
                <Table.Td>{rowData.email}</Table.Td>
                <Table.Td>{rowData.phone}</Table.Td>
                <Table.Td>{rowData.courses}</Table.Td>
                <Table.Td>{rowData.skills}</Table.Td>
                <Table.Td>{rowData.joinDate}</Table.Td>
              </Table.Tr>
            );
          })}
        </Table>
      </Styled.TableWrapper>
    </ContainerBase>
  );
};

export default PracticalTasks;
