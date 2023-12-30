import client from "prom-client";
import type { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler.utils";
import ApiResponse from "../utils/ApiResponse.utils";

const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ register: client.register });

const metricsData =  asyncHandler(
    async (req: Request, res: Response) => {
    res.setHeader("Content-Type", client.register.contentType);
    const metrics = await client.register.metrics();
    res.send(metrics);
    // res.status(200).json(new ApiResponse(200, metrics, "Metrics data"));
  }
  );

  export default metricsData;