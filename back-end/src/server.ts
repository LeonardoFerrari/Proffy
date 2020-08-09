import express from 'express';
import routes from './routes';
import cors from 'cors'


/* aplicação */ 
const app = express();
app.use(cors());

app.use(express.json())
app.use(routes)

/* Necessidade de ouvir uma requisição */
app.listen(3030);