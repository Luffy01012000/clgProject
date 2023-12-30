import { Router } from "express";
import metricsData from "../controllers/metrics.controller";
const router = Router();

router.route("/").get(metricsData);
export default router;
