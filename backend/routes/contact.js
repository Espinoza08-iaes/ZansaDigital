import express from "express";
import { saveContact } from "../controllers/contactController.js";

const router = express.Router();

// Ruta POST para guardar datos del formulario
router.post("/", saveContact);

export default router;
