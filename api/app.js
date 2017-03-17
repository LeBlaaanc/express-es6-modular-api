import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { routers, views } from './modules';

const app = express();
app.use('/', routers);
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

export default app;