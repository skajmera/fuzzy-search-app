const express = require("express");
const router = express.Router();
const userController = require("../controllers/controller.user");




router.get('/ejs',(req,res)=>{
  res.render('index');
})

router.post("/addData", async (req, res) => {
  const result = await userController.createUser(req);
  return res.send(result);
});

router.get("/query",async (request, response) => {
  const result = await userController.getUser(request);
  return response.json(result);
});

router.get("/getAll", async (req, res) => {
  const result = await userController.getAllusers(req);
  return res.send(result);
});

module.exports = router;
