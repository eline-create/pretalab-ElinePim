const app = require('./index');

const port = 3000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.info(`App listening at http://localhost:${port}`);
});
