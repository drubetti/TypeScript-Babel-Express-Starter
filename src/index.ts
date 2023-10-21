import 'source-map-support/register.js';
import process from 'process';
import './utils/loadEnv.js';
import app from './app.js';

const { SERVER_PORT = '3000' } = process.env;
const port = parseInt(SERVER_PORT);

app.listen(port, () => console.log(`Server is running on port ${port}!`));
