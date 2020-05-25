import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, change } from 'redux-form';
import { fetchAds, createAd } from '../../api/ad';
import { adActions } from '../../app/store/actions';

const NewAdForm = ({ handleSubmit, pristine, reset, submitting, dispatch }) => {
  const fileInputRef = useRef(null);
  const [images, setImages] = useState([]);

  let fileObj = [];
  const fileArray = [];

  const handleChange = event => {
    if (typeof event.target.files[0] === 'undefined') {
      return;
    }
    fileObj = [...event.target.files];

    for (let i = 0; i < fileObj.length; i++) {
      fileArray.push(URL.createObjectURL(fileObj[i]));
    }

    setImages(fileArray);
    dispatch(change('newAdForm', 'images', fileObj));
  };

  const submitHandler = async data => {
    await createAd(data);
    dispatch(adActions.fetchAds.request());
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <h1>New Ad</h1>
      <div>
        <div>Title</div>
        <div>
          <Field
            className="form-control"
            name="title"
            component="input"
            type="text"
          />
        </div>
      </div>
      <div>
        <div>Location</div>
        <div>
          <Field
            className="form-control"
            name="address"
            component="input"
            type="text"
          />
        </div>
      </div>
      <div>
        <div>Contact</div>
        <div>
          <Field
            className="form-control"
            name="phone"
            component="input"
            type="text"
          />
        </div>
      </div>
      <div>
        <div>Pricing</div>
        <div>
          <Field
            className="form-control"
            name="price"
            component="input"
            type="text"
          />
        </div>
      </div>
      <div>
        <div>Description</div>
        <div>
          <Field
            className="form-control"
            name="desc"
            component="textarea"
            type="text"
          />
        </div>
      </div>
      <div>
        <div>Pictures</div>
        <div>
          <input
            style={{ margin: '10px 0 0' }}
            type="file"
            name="files[]"
            multiple
            onChange={event => handleChange(event)}
            ref={fileInputRef}
          />
        </div>
      </div>
      <div style={{ display: 'flex', margin: '20px 0' }}>
        {images.map(src => (
          <img
            key={src}
            width="100px"
            style={{ marginLeft: '10px' }}
            src={src}
          />
        ))}
      </div>
      <div>
        <div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
          <button
            className="btn btn-primary"
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear Values
          </button>
        </div>
      </div>
    </form>
  );
};

function mapStateToProps({ form: { newAdForm } }) {
  return {
    newAdForm,
  };
}

const ConnectedForm = connect(mapStateToProps)(NewAdForm); //eslint-disable-line

export default reduxForm({
  form: 'newAdForm', // a unique identifier for this form
})(ConnectedForm);
