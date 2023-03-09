import {CreateCalendarController} from '../src/controllers/CreateCalendarController';

describe ('Create calendar controler', () => {

    let createCalendarController;
    let input;

    beforeEach(() => {
        input = {body:{name: "Teste"}}
    })

    it('Deve retornar 400 se o nome não for fornecido', () => {
        createCalendarController = new CreateCalendarController();
        input.body.name = null;

        const response = createCalendarController.execute(input);

        expect(response).toEqual({status:400, body:"O campo nome é obrigatório"})
    })

    it('Deve retornar o objeto criado', () => {
        createCalendarController = new CreateCalendarController();
        const response = createCalendarController.execute(input);

        expect(response.status).toBe(200);
    })

    it('Deve retornar 400 se o nome já existir', () => {
        createCalendarController = new CreateCalendarController();
        createCalendarController.execute(input);
        
        const response = createCalendarController.execute(input);

        expect(response).toEqual({status:400, body:"O nome fornecido já existe"})
    })
}) 

