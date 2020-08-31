import React, { useEffect } from 'react';
import Table from '../../table/Table';
import Button from '../../../../foundation/button/Button';
import { connect } from 'react-redux';
import { getUsers } from '../../../../../store/selectors';
import { userActions } from '../../../../../store/actions';

const columnHeaders = [
  'S.No',
  'Author Name',
  'Email',
  'Phone',
  'Courses',
  'Skills',
  'Actions',
];

const Authors = ({ dispatch, users }) => {
  useEffect(() => {
    dispatch(userActions.fetchAllUsers.request({}));
  });

  return (
    <Table columnHeaders={columnHeaders}>
      {Object.keys(users).map((id, idx) => {
        const rowData = users[id];
        if (!rowData) return null;

        return (
          <Table.Tr key={id}>
            <Table.Td>{idx + 1}</Table.Td>
            <Table.Td>{rowData.authorName}</Table.Td>
            <Table.Td>{rowData.email}</Table.Td>
            <Table.Td>{rowData.phone}</Table.Td>
            <Table.Td>{rowData.courses}</Table.Td>
            <Table.Td>{rowData.skills}</Table.Td>
            <Table.Td>
              <Button
                width="100px"
                height="48px"
                type="action"
                fontSize="20px"
                borderRadius="sm"
                onClick={() => {}}
              >
                Remove
              </Button>
            </Table.Td>
          </Table.Tr>
        );
      })}
    </Table>
  );
};

const mapStateToProps = state => ({
  users: getUsers(state),
});

export default connect(mapStateToProps)(Authors);
