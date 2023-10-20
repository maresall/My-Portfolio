const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const messages = document.getElementById('messages');
const submit = document.getElementsByClassName('contact1-form')[0];

submit.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e);
  console.log(fname);

  Email.send({
    SecureToken: "f5fff3b8-38cc-41ef-a0e8-868e49a33e3b",
    To: 'tnr450@gmail.com',
    From: "tnr450@gmail.com",
    Subject: "Merhaba",
    Body: "And this is the body"
  }).then(
    message => alert(message)
  );
});
