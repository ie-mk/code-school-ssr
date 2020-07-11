import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ContainerBase } from '../../../foundation';
import Button from '../../../foundation/button/Button';
import Styled from './PracticalTasks.style';
import Table from '../table/Table';
import { Formik } from 'formik';
import CustomAdminDropDown from './customAdminDropDown/CustomAdminDropDown';
import AddNewTask from './addNew/AddNew';

const PracticalTasks = ({ profile, dispatch, tasks }) => {
  const messages = {
    '124jq23j234': {
      senderId: '845235o2u35',
      taskName: 'Task Name',
      Category: 'Development',
      Level: 'Beginner',
      Skills: 'Html,CSS',
    },
    '124jq23ddj234': {
      senderId: '845235o2u35',
      taskName: 'Task Name',
      Category: 'Development',
      Level: 'Beginner',
      Skills: 'PHP',
    },
  };

  const columnHeaders = [
    'S.No',
    'Task Name',
    'Category',
    'Level',
    'Skills',
    'Link',
    'Actions',
  ];
  const categoryarr = [
    { show: 'Choose category', value: '' },
    { show: 'development', value: 'development' },
    { show: 'testing', value: 'testing' },
  ];
  const categoryoptions = categoryarr.map(k => {
    return (
      <option key={k.show} value={k.value}>
        {k.show}
      </option>
    );
  });

  const skillarr = [
    { show: 'Choose Skill', value: '' },
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

  const levelarr = [
    { show: 'Choose Level', value: '' },
    { show: 'Beginner', value: 'Beginner' },
    { show: 'Intermidate', value: 'Intermidate' },
    { show: 'Advance', value: 'Advance' },
  ];
  const leveloptions = levelarr.map(k => {
    return (
      <option key={k.show} value={k.value}>
        {k.show}
      </option>
    );
  });

  const [newAdd, setNewAdd] = useState(false);
  const [edit, setEdit] = useState(false);

  const uid = profile && profile.uid;

  useEffect(() => {
    dispatch(
      resourceActions.fetchTasks.request({
        queries: {
          receiverId: ['==', uid],
        },
      }),
    );
  }, [uid]);

  return (
    <>
      {!newAdd && !edit ? (
        <ContainerBase marginTop="30px">
          <Formik enableReinitialize={true}>
            <form>
              <Styled.DropdownWrapper>
                <Styled.DropdownItemWrapper>
                  <CustomAdminDropDown
                    label="Category"
                    name="category"
                    placeholder="Choose Category"
                    options={categoryoptions}
                  />
                </Styled.DropdownItemWrapper>
                <Styled.DropdownItemWrapper>
                  <CustomAdminDropDown
                    name="skill"
                    label="Skill"
                    placeholder="Choose Skill"
                    options={skilloptions}
                  />
                </Styled.DropdownItemWrapper>
                <Styled.DropdownItemWrapper>
                  <CustomAdminDropDown
                    name="level"
                    label="Level"
                    options={leveloptions}
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
                    <Table.Td>{rowData.taskName}</Table.Td>
                    <Table.Td>{rowData.Category}</Table.Td>
                    <Table.Td>{rowData.Level}</Table.Td>
                    <Table.Td>{rowData.Skills}</Table.Td>
                    <Table.Td>
                      {' '}
                      <img src="svg/noun_link.svg" />
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
      ) : (
        <ContainerBase>
          <AddNewTask editTask={edit} setEdit={setEdit} setNewAdd={setNewAdd} />
        </ContainerBase>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  profile: state.user.loginProviderData,
  tasks: state.tasks.data,
});
export default connect(mapStateToProps)(PracticalTasks);
