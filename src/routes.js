import { Router } from "express";
import { CreateCalendarController } from "./controllers/CreateCalendarController";
import { ListCalendarController } from "./controllers/ListCalendarController";
import { ListCalendarByNameController } from "./controllers/ListCalendarByNameController";
import { DeleteCalendarController} from "./controllers/DeleteCalendarController";
import { UpdateCalendarController } from "./controllers/UpdateCalendarController";

const router = Router();
const createCalendarController = new CreateCalendarController();
const listCalendarController = new ListCalendarController();
const listCalendarByNameController = new ListCalendarByNameController();
const deleteCalendarController = new DeleteCalendarController();
const updateCalendarController = new UpdateCalendarController();

router.post('/calendars', async (req,res) => {
    const response = await createCalendarController.execute(req);

    res.status(response.status).json(response.body);
})

router.get('/calendars',async (req,res) => {
    const response = await listCalendarController.execute();

    res.status(response.status).json(response.body);
})

router.get('/calendars/:name', async (req,res) => {
    const response = await listCalendarByNameController.execute(req);

    res.status(response.status).json(response.body);
})

router.delete('/calendars/:id', async (req,res) => {
    const response = await deleteCalendarController.execute(req);

    res.status(response.status).json(response.body);
})

router.put('/calendars/:id', async (req,res) => {
    const response = await updateCalendarController.execute(req);

    res.status(response.status).json(response.body);
})

//cria
router.post('/calendars/:calendarId/events', async (req,res) => {
    const response = await createEventoController.execute(req);

    res.status(response.status).json(response.body);
})

export {router};