import * as ad from './ad';
import * as user from './user';
import * as email from './email';
import app from '../firebase/app';

export default {
  ad,
  user,
  email,
  firebase: app.firebase,
};
