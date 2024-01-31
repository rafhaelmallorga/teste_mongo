import express from 'express';
import cors from 'cors';
import { main as conn } from './db/conn.js';
import { UserControler } from './controllers/userController.js';

const port = 3000;
const app = express();
app.use(cors());
app.use(express.json());

conn();

app.route('/user').post((req, res) => UserControler.create(req, res));
app
  .route('/')
  .get((req, res) => res.status(200).json({ message: 'Funcionou' }));

app.listen(port, () => console.log(`Server is running on port ${port}`));
