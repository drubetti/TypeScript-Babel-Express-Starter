import app from './app';

const { SERVER_PORT = '8000' } = process.env;
const port = parseInt(SERVER_PORT);

app.listen(port, () => console.log(`Server running on port ${port}!`));
