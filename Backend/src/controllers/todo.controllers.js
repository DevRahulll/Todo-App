import { Todo } from "../models/todo.models.js";


export const listTodo = (async (req, res) => {
    try {
        const getTodos = await Todo.find({});
        return res.status(202).json({
            success: true,
            message: "todo fetch successfully",
            getTodos
        })
    } catch (error) {
        return res.status(404).json({
            success: false,
            message: "Todo NOT found"
        })
    }
})


export const addTodo = (async (req, res) => {
    try {
        const { content } = req.body;
        const addtodo = await Todo.create({ content });
        // console.log(todo);
        return res.status(201).json({
            success: true,
            message: "added todo successfully",
            todo: addtodo
        })
    } catch (error) {
        return res.status(404).json({
            success: false,
            message: "Todo NOT added", error
        })
    }
})


export const updateTodo = (async (req, res) => {
    try {
        const {id}=req.params
        const {content}=req.body

        if(!content){
            return res.status(404).json({
                message:false,
                message:"Write valid Todo"
            })
        }

        const updateTodo=await Todo.findByIdAndUpdate(id,req.body)
        if(!updateTodo){
            return res.status(404).json({
                message:false,
                message:"Todo not found"
            })
        }

        return res.status(202).json({
            success:true,
            message:"Todo Update Successfully",
            content
        })

    } catch (error) {
        return res.status(404).json({
            success: false,
            message: "Todo NOT updated", error
        })
    }
})


export const deleteTodo = (async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await Todo.findByIdAndDelete(id);
        if (!deleteTodo) {
            return res.status(403).json({
                success: false,
                message: "Todo not found"
            })
        }
        return res.status(202).json({
            success: true,
            message: "Deleted Todo Successfully",
            deleteTodo
        })
    } catch (error) {
        return res.status(404).json({
            success: false,
            message: "error in deleting todo ", error
        })
    }
})