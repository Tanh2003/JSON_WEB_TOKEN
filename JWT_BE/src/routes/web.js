import express from "express";
import homeController from "../controller/homeController";

const router = express.Router();

/**
 *
 * @param {*} app :express app
 */

const initWebRoutes = (app) => {
  router.get("/", homeController.handleHelloword);

  router.get("/userpage",homeController.handleUserPage);

  // return app.use("/abc",router);  example stress link  localhost:8080/ab/aboutme mới được
  return app.use("/", router);
};

export default initWebRoutes;
