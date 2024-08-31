import express from 'express'
import { router } from './routes/todo.routes.js';
import cors from 'cors'
const app=express();

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors())

app.use('/api',router);

export {app}
