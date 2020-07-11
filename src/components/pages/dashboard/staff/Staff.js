import React, { useState } from 'react';
import { ContainerBase } from '../../../foundation';
import Button from '../../../foundation/button/Button';
import Styled from './Staff.styles';
import Table from '../table/Table';
import { Formik } from 'formik';
import CustomAdminDropDown from '../practicalTasks/customAdminDropDown/CustomAdminDropDown';
import AddNewMember from './addNew/addNewMember';

const Users = () => {
  const messages = {
    '124jq23j234': {
      senderId: '845235o2u35',
      memberName: 'Member Name',
      role: 'Admin',
    },
    '124jq23ddj234': {
      senderId: '845235o2u34',
      memberName: 'Member Name',
      role: 'Author',
    },
  };

  const columnHeaders = ['S.No', 'Member Name', 'Role', 'Image', 'Actions'];

  const levelarr = [{ show: 'All', value: '' }];
  const leveloptions = levelarr.map(k => {
    return (
      <option key={k.show} value={k.value}>
        {k.show}
      </option>
    );
  });

  const [newAdd, setNewAdd] = useState(false);
  const [edit, setEdit] = useState(false);

  return (
    <>
      <ContainerBase marginTop="30px">
        {/*<Styled.DropdownWrapper>*/}
        {/*  <Styled.DropdownItemWrapper>*/}
        {/*    <CustomAdminDropDown*/}
        {/*      name="all"*/}
        {/*      label="View"*/}
        {/*      options={leveloptions}*/}
        {/*    />*/}
        {/*  </Styled.DropdownItemWrapper>*/}
        {/*</Styled.DropdownWrapper>*/}

        <Styled.TableWrapper>
          <Table columnHeaders={columnHeaders}>
            {Object.keys(messages).map((id, idx) => {
              const rowData = messages[id];
              if (!rowData) return null;

              return (
                <Table.Tr key={id}>
                  <Table.Td>{idx + 1}</Table.Td>
                  <Table.Td>{rowData.memberName}</Table.Td>
                  <Table.Td>{rowData.role}</Table.Td>
                  <Table.Td>
                    {' '}
                    <img src="svg/icon_profile.svg" />
                  </Table.Td>
                  <Table.Td>
                    <Button
                      margin="22px"
                      width="100px"
                      height="48px"
                      type="action"
                      fontSize="20px"
                      borderRadius="sm"
                      onClick={() => setEdit(true)}
                    >
                      Edit
                    </Button>
                    <Button
                      width="100px"
                      height="48px"
                      type="action"
                      fontSize="20px"
                      borderRadius="sm"
                      onClick={() => handleReply(id)}
                    >
                      Delete
                    </Button>
                  </Table.Td>
                </Table.Tr>
              );
            })}
          </Table>
        </Styled.TableWrapper>
        <Styled.ButtonWrapper>
          <Button
            type="primary"
            width="200px"
            borderRadius="sm"
            height="45px"
            size="sm"
            onClick={() => setNewAdd(true)}
          >
            <i className="fa fa-plus" aria-hidden="true" />
            ADD NEW
          </Button>
        </Styled.ButtonWrapper>
      </ContainerBase>

      <ContainerBase>
        {(edit || newAdd) && (
          <AddNewMember
            editTask={edit}
            setEdit={setEdit}
            setNewAdd={setNewAdd}
          />
        )}
      </ContainerBase>
    </>
  );
};

export default Users;
