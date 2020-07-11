import React, { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import Styled from './PictureUploader.styles';
import usePrevious from '../../../utils/hooks/usePrevious';
import Button from '../button/Button';
import ResponsiveImage from '../ResponsiveImage';
import CenteredFlexContainer from '../CenteredFlexContainer';
import { spacing } from '../../../constants/styles';

const PictureUploaderCopy = ({ label, width }) => {
  return (
    <Styled.Wrapper width={width}>
      <Styled.Label>{label}</Styled.Label>
      <Styled.UploadImageButton>
        <input type="file" />
        {label !== 'Attachements' ? 'Upload Image' : 'Add Attachment'}
      </Styled.UploadImageButton>
    </Styled.Wrapper>
  );
};

const PictureUploader = ({
  dispatch,
  ad,
  loading,
  uploadAction,
  width,
  setSelectedImages,
  uploadAsync,
}) => {
  const { query } = useRouter();

  const fileInputRef = useRef(null);
  // const [images, setImages] = useState(ad && ad.images);
  const [fileArray, setFileArray] = useState([]);
  // for pushing to the server we need file objects
  const [fileObj, setFileObj] = useState([]);
  const previousLoadingState = usePrevious(loading);

  useEffect(() => {
    // loading has finished
    if (previousLoadingState && !loading) {
      setFileArray([]);
    }
  }, [loading]);

  const handleChange = event => {
    const files = event.target.files;

    if (!files.length) return;

    const fileUrls = [].slice
      .call(files)
      .map(file => URL.createObjectURL(file));

    setFileArray(fileUrls);
    setFileObj(files);

    setSelectedImages({
      fileUrls,
      files,
    });
  };

  const handleUpload = () => {
    dispatch(
      uploadAction({
        adId: query && query.id,
        images: fileObj,
      }),
    );
  };

  return (
    <Styled.Wrapper width={width}>
      <input
        className="hidden"
        type="file"
        multiple
        onChange={event => handleChange(event)}
        ref={fileInputRef}
      />
      <Styled.ButtonWrapper>
        {!uploadAsync || (!fileArray.length && !loading) ? (
          <Button
            type="button"
            size="sm"
            onClick={() => fileInputRef.current.click()}
          >
            Select Pictures
          </Button>
        ) : null}
        {fileArray.length && !loading && uploadAsync ? (
          <>
            <Button type="primary" size="sm" onClick={handleUpload}>
              Upload
            </Button>
            <Button
              type="button"
              size="sm"
              onClick={() => {
                setSelectedImages(null);
                setFileArray([]);
              }}
            >
              Cancel
            </Button>
          </>
        ) : null}
      </Styled.ButtonWrapper>
    </Styled.Wrapper>
  );
};

const mapStateToProps = state => ({
  loading: state.loading,
});

export default connect(mapStateToProps)(PictureUploader);

//export default AdminUploadImage;
