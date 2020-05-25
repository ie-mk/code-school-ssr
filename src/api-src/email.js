import app from '../firebase/app';

const auth = app.auth;

const emailService = (addressees, text, subject) => {
  return new Promise((resolve, reject) => {
    auth.currentUser.getToken().then(token => {
      const headers = new Headers();
      headers.append('Authorization', `Bearer ${token}`);
      headers.append('Content-Type', 'application/json');

      fetch(
        'https://us-central1-lawbook-e9997.cloudfunctions.net/expressApp/sendEmail',
        {
          method: 'POST',
          mode: 'cors',
          headers,
          body: JSON.stringify({
            addressees,
            text,
            subject,
          }),
        },
      ).then(response => {
        resolve(response);
        console.log('sendEmail response: ', response);
      });
    });
  });
};

export function sendEmail(newUserEmail) {
  const addressees = ['justinas.simutis@gmail.com'];
  const subject = 'New user registration';
  const text = `New user with the following email: ${newUserEmail}, has registered on the property rent website.`;
  emailService(addressees, text, subject);
}
