import express from "express"
import { test } from "../controllers/test.js"

export const router = express.Router()

router.get('/test', test)
