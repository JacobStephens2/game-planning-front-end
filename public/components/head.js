const baseURL = window.location.origin;
document.querySelector('head').innerHTML = `
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="This site helps people manage their plans for presenting games at events" />
  <base href="${baseURL}">
  <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
  <link rel="manifest" href="/manifest.json" />
  <link rel="stylesheet" href="/styles/vendor/remedy.css">
  <link rel="stylesheet" href="/styles/vendor/reminders.css">
  <link rel="stylesheet" href="/styles/style.css">
`;
