import express, { Application, Request, Response } from 'express'
import cors from 'cors';
import { UserRoutes } from './app/modules/users/users.route';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());


//applications route
app.use('/api/v1/users', UserRoutes);




//root route for check status
app.get('/', (req: Request, res: Response) => {
  res.send('server is runig!');
});

export default app;
