import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ContainerBase } from '../../../foundation';
import Button from '../../../foundation/button/Button';
import Styled from './PracticalTasks.style';
import Table from '../table/Table';
import { Formik } from 'formik';
import CustomAdminDropDown from './customAdminDropDown/CustomAdminDropDown';
import AddNewTask from './addNew/AddNew';
import { resourceActions } from '../../../../store/actions';
import SpinnerLarge from '../../../foundation/spinner/SpinnerLarge';
import { useRouter } from 'next/router';

const PracticalTasks = ({ dispatch, tasks, loading }) => {
  const columnHeaders = [
    'S.No',
    'Task Name',
    'Category',
    'Level',
    'Skills',
    'Link',
    'Actions',
  ];

  const [newAdd, setNewAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);
  const [clone, setClone] = useState(false);

  useEffect(() => {
    dispatch(resourceActions.fetchTasks.request({}));
  }, []);

  const deleteTask = id => {
    if (confirm('Are you sure you want to delete this task?')) {
      dispatch(resourceActions.deleteTask.request(id));
    }
  };

  const router = useRouter();

  return (
    <>
      {loading ? <SpinnerLarge /> : null}
      {!newAdd && !edit ? (
        <ContainerBase marginTop="30px">
          <Formik>
            <form>
              {/*<CustomAdminDropDown*/}
              {/*  label="Course"*/}
              {/*  name="course"*/}
              {/*  placeholder="Choose course"*/}
              {/*  options={categoryoptions}*/}
              {/*/>*/}
              {/*<Styled.DropdownItemWrapper>*/}
              {/*  <CustomAdminDropDown*/}
              {/*    name="skill"*/}
              {/*    label="Skill"*/}
              {/*    placeholder="Choose Skill"*/}
              {/*    options={skilloptions}*/}
              {/*  />*/}
              {/*</Styled.DropdownItemWrapper>*/}
              {/*<Styled.DropdownItemWrapper>*/}
              {/*  <CustomAdminDropDown*/}
              {/*    name="level"*/}
              {/*    label="Level"*/}
              {/*    options={leveloptions}*/}
              {/*  />*/}
              {/*</Styled.DropdownItemWrapper>*/}
            </form>
          </Formik>

          <Styled.TableWrapper>
            <Table columnHeaders={columnHeaders}>
              {Object.keys(tasks).map((id, idx) => {
                const rowData = tasks[id];
                if (!rowData) return null;

                return (
                  <Table.Tr key={id}>
                    <Table.Td>{idx + 1}</Table.Td>
                    <Table.Td>{rowData.title}</Table.Td>
                    <Table.Td>{rowData.Category}</Table.Td>
                    <Table.Td>{rowData.Level}</Table.Td>
                    <Table.Td>{rowData.Skills}</Table.Td>
                    <Table.Td>
                      {' '}
                      <Styled.Link
                        src="svg/noun_link.svg"
                        onClick={() => {
                          const url = `/editor?taskId=${id}`;
                          router.push(url, url, { shallow: true });
                        }}
                      />
                    </Table.Td>
                    <Table.Td>
                      <Button
                        margin="0 10px 0 0"
                        type="action"
                        fontSize="12px"
                        borderRadius="sm"
                        size="sm"
                        onClick={() => {
                          // setEditTaskId(id);
                          // setEdit(true);
                        }}
                      >
                        Clone
                      </Button>
                      <Button
                        margin="0 10px 0 0"
                        type="action"
                        fontSize="12px"
                        borderRadius="sm"
                        size="sm"
                        onClick={() => {
                          setEditTaskId(id);
                          setEdit(true);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        margin="0 10px 0 0"
                        type="action"
                        fontSize="12px"
                        borderRadius="sm"
                        size="sm"
                        onClick={() => deleteTask(id)}
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
              onClick={() => {
                setNewAdd(true);
                setClone(true);
              }}
            >
              <i className="fa fa-plus" aria-hidden="true" />
              ADD NEW
            </Button>
          </Styled.ButtonWrapper>
        </ContainerBase>
      ) : (
        <ContainerBase>
          <AddNewTask
            editTask={edit}
            editTaskId={editTaskId}
            setEdit={setEdit}
            setNewAdd={setNewAdd}
            setClone={setClone}
            clone={clone}
          />
        </ContainerBase>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  profile: state.user.loginProviderData,
  tasks: state.tasks.data,
  loading: state.tasks.loading,
});
export default connect(mapStateToProps)(PracticalTasks);
