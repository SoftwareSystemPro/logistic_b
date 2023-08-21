import { Router } from "express";
import checkToken from "../middlewares/checkToken";
import admin from "../controller/admin";
import blog from "../controller/blog";
import form from "../controller/form";
import vehicle from "../controller/vehicle";
import contact from "../controller/contact";
import category from "../controller/category";
import services from "../controller/services";

const router = Router()

// route admin
router.get("/admins", admin.Get);
router.get("/admins/:id", admin.GetId);
router.post("/admins",checkToken,admin.Post);
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
router.post("/form", checkToken, form.Post);
router.put("/form/:id", checkToken, form.Put);
router.delete("/form/:id", checkToken, form.Delete);

// route vehicle
router.get("/vehicle", vehicle.Get);
router.get("/vehicle/:id", vehicle.GetId);
router.post("/vehicle", checkToken, vehicle.Post);
router.put("/vehicle/:id", checkToken, vehicle.Put);
router.delete("/vehicle/:id", checkToken, vehicle.Delete);

// route contact
router.get("/contact", contact.Get);
router.get("/contact/:id", contact.GetId);
router.post("/contact", checkToken, contact.Post);
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

export default router;

