import Task from "../models/tasks.model.js"

const createTask = async(req,res)=>{
    const payload = req.body
    const task = await Task.create(payload)
    return res.status(201).json({task})
}

const getAllTasks = async(req,res)=>{
    const tasks = await Task.find()
    return res.status(200).json({tasks})
}

const getTask = async(req,res)=>{
    const id = req.params.id
    const task = await Task.findById(id)
    return res.status(200).json({task})
}

const updateTask = async(req,res)=>{
    const id = req.params.id
    const {title,description,category,dueDate,priority,completed} = req.body
    const task = await Task.findById(id)
    task.title = title
    task.description = description
    task.category = category
    task.dueDate = dueDate
    task.priority = priority
    task.completed = completed
    console.log(req.body,task);
    await task.save()
    return res.status(200).json({task})
}

const deleteTask = async(req,res)=>{
    const id = req.params.id
    const task = await Task.findById(id)
    if(!task) return res.status(404).end()
    await Task.findByIdAndDelete(id)
    return res.status(204).end()
}

export {
    createTask,
    getAllTasks,
    getTask,
    updateTask,
    deleteTask
}