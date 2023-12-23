import express from "express"

const router = express.Router()

import {createTask,getAllTasks,getTask,updateTask,deleteTask} from "../controllers/users.controller.js"

router.route('/').post(createTask).get(getAllTasks)
router.route('/:id').get(getTask).put(updateTask).delete(deleteTask)

export default router