import express from 'express'
import  { auth, checkUser, createUser } from '../controller/auth.js';

const router = express.Router();

router.get("/user", auth);
router.post("/createUser", createUser);
router.get("/isUser?", checkUser);

export default router;