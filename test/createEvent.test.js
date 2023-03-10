import {CreateEventController} from '../src/controllers/CreateEventController';

describe (' Creates a new event on a specific calendar.', () => {

    let createEventController;
    let input;

    beforeEach(() => {
        input = {body:{name: "Test"}}
    })

    it('Return 400 if the name is not provided', async () => {
        createEventController = new CreateEventController();
        input.body.name = null;

        const response = await createEventController.execute(input);

        expect(response).toEqual({status:400, body:"The name field is required"})
    })

    it('Return the created object', async () => {
        createEventController = new CreateEventController();
        const response = await createEventController.execute(input);

        expect(response.status).toBe(201);
    })
}) 

