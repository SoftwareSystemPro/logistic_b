import { Router } from "express";
import checkToken from "../middlewares/checkToken";
import admin from "../controller/admin";
import blog from "../controller/blog";
import form from "../controller/form";
import vehicle from "../controller/vehicle";
import contact from "../controller/contact";
import category from "../controller/category";
import services from "../controller/services";
import seo from "../controller/seo";
import cars from "../controller/cars";
import city from "../controller/city";
import states from "../controller/states";

const router = Router()

// route admin
router.get("/admins", admin.Get);
router.get("/admins/:id", admin.GetId);
router.post("/admins",checkToken,admin.Post);
// router.post("/admins",admin.Post);
router.post("/signin", admin.SignIn);
router.put("/admins/:id", checkToken, admin.Put);
router.delete("/admins/:id", checkToken, admin.Delete);

// route blog
router.get("/blog", blog.Get);
router.get("/blog/:id", blog.GetId);
router.post("/blog", checkToken, blog.Post);
router.put("/blog/:id", checkToken, blog.Put);
router.delete("/blog/:id", checkToken, blog.Delete);

// route form
router.get("/form", form.Get);
router.get("/form/:id", form.GetId);
router.post("/form", form.Post);
router.put("/form/:id", checkToken, form.Put);
router.delete("/form/:id", checkToken, form.Delete);

// route vehicle
router.get("/vehicle", vehicle.Get);
router.get("/vehicle/:id", vehicle.GetId);
router.post("/vehicle",vehicle.Post);
router.put("/vehicle/:id", checkToken, vehicle.Put);
router.delete("/vehicle/:id", checkToken, vehicle.Delete);

// route contact
router.get("/contact", contact.Get);
router.get("/contact/:id", contact.GetId);
router.post("/contact",contact.Post);
router.put("/contact/:id", checkToken, contact.Put);
router.delete("/contact/:id", checkToken, contact.Delete);

// route category
router.get("/category", category.Get);
router.get("/category/:id", category.GetId);
router.post("/category", checkToken, category.Post);
router.put("/category/:id", checkToken, category.Put);
router.delete("/category/:id", checkToken, category.Delete);

// route services
router.get("/services", services.Get);
router.get("/services/:id", services.GetId);
router.post("/services", checkToken, services.Post);
router.put("/services/:id", checkToken, services.Put);
router.delete("/services/:id", checkToken, services.Delete);

// route seo
router.get("/seo", seo.Get);
router.get("/seo/:id", seo.GetId);
router.post("/seo", checkToken, seo.Post);
router.put("/seo/:id", checkToken, seo.Put);
router.delete("/seo/:id", checkToken, seo.Delete);

// route cars
router.get("/cars", cars.Get);
router.get("/cars/:id", cars.GetId);

// route city
router.get("/cities", city.Get);
router.get("/cities/:id", city.GetId);

// route states
router.get("/states", states.Get);
router.get("/states/:id", states.GetId);

export default router;

