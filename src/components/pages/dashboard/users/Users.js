import React, { useEffect, useState } from 'react';
import { ContainerBase } from '../../../foundation';
import Button from '../../../foundation/button/Button';
import { connect } from 'react-redux';
import Styled from './User.styles';
import Table from '../table/Table';
// import CustomAdminDropDown from '../practicalTasks/customAdminDropDown/CustomAdminDropDown';
// import AddNewMember from '../staff/addNew/addNewMember';
import needsAdmin from '../../../../utils/needsAdmin';
import { adminActions } from '../../../../store/actions';
import { getUsers } from '../../../../store/selectors';
import ResponsiveImage from '../../../foundation/ResponsiveImage';
import AdminDropDown from '../../../foundation/dropdown/AdminDropDown';

const permissionConstants = {
  guest: true,
  registered: true,
  admin: true,
  superAdmin: true,
  author: true,
};

const options = Object.keys(permissionConstants).map(str => ({
  label: str,
  value: str,
}));

const UserDetails = ({ dispatch, data, idx, userPermissions }) => {
  const { displayName, email, uid, emailVerified } = data;

  const addPermission = e => {
    dispatch(
      adminActions.addUserPermission.request({
        permission: { [e.target.value]: true },
        uid,
      }),
    );
  };

  const fetchPermissions = () => {
    dispatch(adminActions.fetchUserPermissions.request(uid));
  };

  const removePermission = permission => {
    dispatch(
      adminActions.addUserPermission.request({
        permission: { [permission]: false },
        uid,
      }),
    );
  };

  return (
    <Table.Tr>
      <Table.Td>{idx + 1}</Table.Td>
      <Table.Td>{displayName}</Table.Td>
      <Table.Td>{email}</Table.Td>
      <Table.Td>
        <AdminDropDown
          onChange={addPermission}
          options={options}
          formikField={false}
          size="small"
        />
      </Table.Td>
      <Table.Td>
        {userPermissions ? (
          Object.keys(userPermissions).map(permission => {
            return permissionConstants[permission] &&
              userPermissions[permission] ? (
              <Styled.PermissionTag
                key={permission}
                onClick={() => removePermission(permission)}
              >
                {permission}
                <i className="fa fa-window-close" />
              </Styled.PermissionTag>
            ) : null;
          })
        ) : (
          <Styled.FetchPermissionsButton onClick={fetchPermissions}>
            Fetch roles
          </Styled.FetchPermissionsButton>
        )}
      </Table.Td>
      <Table.Td>{emailVerified ? 'Yes' : 'No'}</Table.Td>
      <Table.Td>
        <Styled.DeleteButton
          onClick={() => {
            if (confirm('Are you sure you want to delete this user?')) {
              dispatch(adminActions.deleteUser.request(uid));
            }
          }}
        >
          Delete user
        </Styled.DeleteButton>
      </Table.Td>
    </Table.Tr>
  );
};

const DashBoardUsers = ({
  dispatch,
  users = {},
  updatingUserId,
  permissions,
  loading,
}) => {
  useEffect(() => {
    dispatch(adminActions.fetchUsers.request());
  }, []);

  const columnHeaders = [
    'S.No',
    'Name',
    'Email',
    'Assign',
    'Roles',
    'Email Verif',
    'Actions',
  ];

  const [newAdd, setNewAdd] = useState(false);
  const [edit, setEdit] = useState(false);

  return (
    <>
      <ContainerBase marginTop="30px">
        <Styled.TableWrapper>
          <Table columnHeaders={columnHeaders}>
            {Object.keys(users).map((id, idx) => {
              const rowData = users[id];
              if (!rowData) return null;

              return (
                <UserDetails
                  key={id}
                  data={rowData}
                  idx={idx}
                  updating={updatingUserId === id}
                  userPermissions={permissions && permissions[id]}
                  dispatch={dispatch}
                />
              );
            })}
          </Table>
        </Styled.TableWrapper>
      </ContainerBase>
    </>
  );
};

const mapStateToProps = state => ({
  users: getUsers(state),
  updatingUserId: state.admin.users.updatingUserId,
  permissions: state.admin.permissions,
  loading: state.admin.loading,
});

export default needsAdmin(connect(mapStateToProps)(DashBoardUsers));
