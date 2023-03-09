import { Router } from "express";
import { CreateCalendarController } from "./controllers/CreateCalendarController";
import { ListCalendarController } from "./controllers/ListCalendarController";
import { ListCalendarByNameController } from "./controllers/ListCalendarByNameController";

const router = Router();
const createCalendarController = new CreateCalendarController();
const listCalendarController = new ListCalendarController();
const listCalendarByNameController = new ListCalendarByNameController();

router.post('/calendars',(req,res) => {
    const response = createCalendarController.execute(req);

    res.status(response.status).json(response.body);
})

router.get('/calendars',(req,res) => {
    const response = listCalendarController.execute();

    res.status(response.status).json(response.body);
})

router.get('/calendars/:name',(req,res) => {
    const response = listCalendarByNameController.execute(req);

    res.status(response.status).json(response.body);
})

export {router};