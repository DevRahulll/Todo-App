import express from 'express'
import { addTodo, deleteTodo, listTodo, updateTodo } from '../controllers/todo.controllers.js';

const router=express.Router();

router.route('/list').get(listTodo);
router.route('/add').post(addTodo);
router.route('/update/:id').put(updateTodo);
router.route('/delete/:id').delete(deleteTodo);

export {router};