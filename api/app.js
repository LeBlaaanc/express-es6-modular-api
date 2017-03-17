import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { routes, views } from './modules';

const app = express();
app.use('/', routes);
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

export default app;