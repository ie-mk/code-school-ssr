import React, { useEffect } from 'react';
import { IS_SERVER } from '../../../constants';
import NewAdTest from '../NewAdMyForm';
import Grid from '../../../app/components/foundation/Grid';
import Styled from './AdminAds.styles';
import api from '../../../api';
import { adActions } from '../../../app/store/actions';
import { connect } from 'react-redux';
import UploadFromMockData from './UploadFromMockData';

const AdminAds = ({ dispatch, ads }) => {
  useEffect(() => {
    if (!IS_SERVER) {
      dispatch(adActions.fetchAds.request());
    }
  }, []);

  const fetchAds = () =>
    setTimeout(() => dispatch(adActions.fetchAds.request()), 300);

  const handleDelete = id => {
    confirm('Are you sure you want do delete this ad?') && api.ad.deleteAd(id);
    fetchAds();
  };

  console.log('-----Object.keys(ads): ', Object.keys(ads));

  return (
    <Grid columns="1fr 2fr">
      <div>
        <NewAdTest />
        <UploadFromMockData />
      </div>

      <div>
        <h2>{`Ads data Total: ${Object.keys(ads).length}`}</h2>
        {Object.keys(ads).map(key => (
          <Styled.ContentWrapper key={key}>
            <p>{JSON.stringify(ads[key])}</p>
            <div style={{ display: 'flex' }}>
              {ads[key].images &&
                ads[key].images.map(src => (
                  <img key={src} width="40px" src={src} alt="image" />
                ))}
            </div>
            <Styled.DeleteButton
              onClick={() => {
                handleDelete(key);
                fetchAds();
              }}
            >
              Delete X
            </Styled.DeleteButton>
          </Styled.ContentWrapper>
        ))}
      </div>
    </Grid>
  );
};

const mapStateToProps = state => ({
  ads: state.ads.data || [],
});

export default connect(mapStateToProps)(AdminAds);
