import process from 'process';
import './utils/loadEnv';
import app from './app';

const { SERVER_PORT = '3000' } = process.env;
const port = parseInt(SERVER_PORT);

app.listen(port, () => console.log(`Server is running on port ${port}!`));
