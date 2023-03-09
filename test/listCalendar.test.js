import {ListCalendarController} from '../src/controllers/ListCalendarController';
import {CreateCalendarController} from '../src/controllers/CreateCalendarController';

describe ('List calendar controler', () => {

    let listCalendarController;
    let createCalendarController;

    beforeAll(() => {
       listCalendarController = new ListCalendarController();
       createCalendarController = new CreateCalendarController();
    })

    it('Deve retornar uma lista de calendarios', () => {
        createCalendarController.execute({body:{name: "Teste"}});

        const response = listCalendarController.execute();

        expect(response.status).toBe(200);

        expect(response.body[0]).toHaveProperty("id");

        expect(response.body[0].name).toBe("Teste");

    })
}) 

