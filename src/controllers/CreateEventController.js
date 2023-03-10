import {EventModel} from "../model/EventModel";
 
export class CreateEventController {

    async execute(input){
        if(!input.body.name)
            return {status: 400, body: 'The name field is required'}

        const {name} = input.body;
        const event = new EventModel(name);

        if(await event.find('name', name))
            return {status: 400, body: 'The provided name already exists'}

        try{
            await event.save()
            return {status: 201, body: await event.get()};
        }catch(error){
            throw new Error(error);
        }
  
    }
}
