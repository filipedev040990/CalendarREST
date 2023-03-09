import {ListCalendarByNameController} from '../src/controllers/ListCalendarByNameController';
import {CreateCalendarController} from '../src/controllers/CreateCalendarController';

describe ('List calendar controler by name', () => {

    let listCalendarByNameController;
    let createCalendarController;

    beforeAll(() => {
       listCalendarByNameController = new ListCalendarByNameController();
       createCalendarController = new CreateCalendarController();
    })

    it('Deve retornar o calendário caso o mesmo exista', () => {
        createCalendarController.execute({body:{name: "Teste"}});

        const response = listCalendarByNameController.execute({params:{name: "Teste"}});

        expect(response.status).toBe(200);

        //expect(response.body).toHaveProperty("id");

        //expect(response.body.name).toBe("Teste");

    })
}) 

