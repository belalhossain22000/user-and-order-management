import express, { Application, Request, Response } from 'express'
import cors from 'cors';
import { UserRoute } from './app/modules/users/users.route';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());


//applications route
app.use("/api/users", UserRoute)





//root route for check status
app.get('/', (req: Request, res: Response) => {
  res.send('server is running');
});

export default app;
