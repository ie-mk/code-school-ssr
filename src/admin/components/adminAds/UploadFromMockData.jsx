import React, { useState } from 'react';
import { connect } from 'react-redux';
import Styled from './UploadFromMockData.styles';
import Select from '@kiwicom/orbit-components/lib/Select';
import mockData from '../../../app/mockData/adListData.json';
import { adminActions } from '../../store/actions';
import { Button } from '@kiwicom/orbit-components/es';

const options = Object.keys(mockData).map(str => ({
  label: str,
  value: str,
}));

const UploadFromMockData = ({ dispatch }) => {
  const [mockDataId, setMockDataId] = useState(null);

  const uploadAdData = () => {
    dispatch(adminActions.createAdFromJson.request(mockData[mockDataId]));
  };

  const uploadWholeFile = () => {
    Object.keys(mockData).map((key, idx) => {
      setTimeout(() => {
        dispatch(adminActions.createAdFromJson.request(mockData[key]));
      }, idx * 200);
    });
  };

  return (
    <Styled.Wrapper>
      <h2>Upload json from mockData:</h2>
      <Select
        value={mockDataId}
        onChange={e => setMockDataId(e.target.value)}
        options={options}
        size="small"
      />
      {mockDataId && (
        <Styled.UploadButton onClick={uploadAdData}>
          Upload data
        </Styled.UploadButton>
      )}
      <h2>Upload whole file:</h2>
      <Styled.UploadButton onClick={uploadWholeFile}>
        Upload
      </Styled.UploadButton>
    </Styled.Wrapper>
  );
};

export default connect()(UploadFromMockData);
