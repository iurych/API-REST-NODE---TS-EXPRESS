import { Router } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();

router.get("/", (req, res) => {
  return res.send("Olá, dev!");
});
router.post("/teste", (req, res) => {
  const requisição = req.body;

  return res.status(StatusCodes.NETWORK_AUTHENTICATION_REQUIRED).json("tá vendo ali");
});

export { router };
