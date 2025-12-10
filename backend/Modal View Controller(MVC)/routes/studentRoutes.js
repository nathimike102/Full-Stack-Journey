import express from 'express';
import { getStudent, addStudent, updateStudent, deleteStudent } from '../controller/studentController.js';

const router = express.Router();
router.get('/get-student', getStudent);
router.post('/add-student', addStudent);
router.put('/update-student/:id', updateStudent);
router.delete('/delete-student/:id', deleteStudent);

export default router;