function sendEmail() {
  Email.send({
      Host : "smtp.mailtrap.io",
      Username : "caa4a05b124d8c",
      Password : "2742b36da17d5a",
      To : 'them@website.com',
      From : "you@isp.com",
      Subject : "This is the subject",
      Body : "And this is the body"
  }).then(
    message => alert(message)
  );
}