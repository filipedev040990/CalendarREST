import { calendars } from "../bd/calendar";
 
export class DeleteCalendarController {

    execute(input){
        if(!input.body.name)
            return {status: 400, body: 'O campo nome é obrigatório'}

        const {name} = input.body;

        if(this.findByName(name))
            return {status: 400, body: 'O nome fornecido já existe'}
        
        
        calendars.push(calendar);

        return {status: 200, body: calendar};
        
    }

    findByName(name){
        return calendars.find(calendar => calendar.name === name);        
    }
}
