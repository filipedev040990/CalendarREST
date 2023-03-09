import {CreateCalendarController} from '../src/controllers/CreateCalendarController';
import { ListCalendarByNameController } from '../src/controllers/ListCalendarByNameController';
import { DeleteCalendarController } from '../src/controllers/DeleteCalendarControlle';
import { ListCalendarController } from '../src/controllers/ListCalendarController';

describe ('Create calendar controler', () => {

    let createCalendarController;
    let listCalendarByNameController;
    let deleteCalendarController;
    let listCalendarController;

    let input;

    beforeAll(() => {
       createCalendarController = new CreateCalendarController();
       listCalendarByNameController = new ListCalendarByNameController();
       deleteCalendarController = new DeleteCalendarController();
       listCalendarController = new ListCalendarController();
    })
    beforeEach(() => {
        input = {body:{name: "Teste"}}
    })

    /*it('Deve retornar 400 se o nome não for fornecido', () => {
        input.body.name = null;

        const response = createCalendarController.execute(input);

        expect(response).toEqual({status:400, body:"O campo nome é obrigatório"})
    })*/

    it('Deve excluir o calendário e listar os restantes', () => {
        createCalendarController.execute(input);
        const response = listCalendarByNameController.execute(input);

        if(expect(response).toBe(400))
            deleteCalendarController.execute(response)

        listCalendarController.execute();
    })
}) 

