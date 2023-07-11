import express from "express";
import { getDosen, getDosenById, updateDosen, deleteDosen, createDosen } from "../controllers/DosenController.js";

const router = express.Router();

router.get('/dosen', getDosen);
router.get('/dosen/:id',getDosenById);
router.post('/dosen', createDosen);
router.patch('/dosen/:id', updateDosen);
router.delete('/dosen/:id', deleteDosen);

export default router;