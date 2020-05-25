import React, { useEffect, useState } from 'react';
import { IS_SERVER } from '../../../constants';
import { adminActions } from '../../store/actions';
import { connect } from 'react-redux';
import Styled from './Users.styles';
import Select from '@kiwicom/orbit-components/lib/Select';
import SpinnerLarge from '../../../app/components/spinner/SpinnerLarge';

const permissionConstants = {
  guest: true,
  registered: true,
  admin: true,
  superAdmin: true,
};

const options = Object.keys(permissionConstants).map(str => ({
  label: str,
  value: str,
}));

const UserDetails = ({
  firstName,
  lastName,
  email,
  uid,
  dispatch,
  userPermissions,
  emailVerified,
}) => {
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
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>
        <Select onChange={addPermission} options={options} size="small" />
      </td>
      <td>
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
            Fetch permissions
          </Styled.FetchPermissionsButton>
        )}
      </td>
      <td>{emailVerified ? 'Yes' : 'No'}</td>
      <td>
        <Styled.DeleteButton
          onClick={() => {
            if (confirm('Are you sure you want to delete this user?')) {
              dispatch(adminActions.deleteUser.request(uid));
            }
          }}
        >
          Delete user
        </Styled.DeleteButton>
      </td>
    </tr>
  );
};

const AdminAds = ({
  dispatch,
  users,
  updatingUserId,
  permissions,
  loading,
}) => {
  useEffect(() => {
    if (!IS_SERVER) {
      dispatch(adminActions.fetchUsers.request());
    }
  }, []);

  return (
    <Styled.Wrapper>
      <h2>{`Number of users: ${Object.keys(users).length}`}</h2>
      {loading ? <SpinnerLarge /> : null}
      <table>
        <tbody>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Ad Role</th>
            <th>Roles</th>
            <th>Email verified</th>
            <th>Delete</th>
          </tr>
          {Object.keys(users).map(key => (
            <UserDetails
              key={key}
              {...users[key]}
              updating={updatingUserId === 'key'}
              userPermissions={permissions && permissions[key]}
              dispatch={dispatch}
            />
          ))}
        </tbody>
      </table>
    </Styled.Wrapper>
  );
};

const mapStateToProps = state => ({
  users: state.admin.users,
  updatingUserId: state.admin.users.updatingUserId,
  permissions: state.admin.permissions,
  loading: state.admin.loading,
});

export default connect(mapStateToProps)(AdminAds);
