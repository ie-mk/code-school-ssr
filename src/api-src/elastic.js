import app from '../firebase/app';

const auth = app.auth;

export const pushResolutionsToElastic = () =>
  setTimeout(() => {
    auth.currentUser.getToken().then(token => {
      const headers = new Headers();
      headers.append('Authorization', `Bearer ${token}`);
      headers.append('Content-Type', 'application/json');

      fetch(
        'https://us-central1-lawbook-e9997.cloudfunctions.net/expressApp/pushResolutionsToElastic',
        {
          method: 'GET',
          mode: 'cors',
          headers,
        },
      ).then(res => console.log('result of pushResolutionsToElastic: ', res));
      // 	.then(res =>
      // 	res.json().then(resolutions => {
      // 		console.log(resolutions);
      // 	})
      // );
    });
  }, 4000);
