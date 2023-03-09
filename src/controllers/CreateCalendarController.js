import {CalendarModel} from "../model/CalendarModel";
 
export class CreateCalendarController {

    execute(input){
        
        if(!input.body.name)
            return {status: 400, body: 'O campo nome é obrigatório'}

        const {name} = input.body;
        const calendar = new CalendarModel(name);

        if(calendar.find('name', name))
            return {status: 400, body: 'O nome fornecido já existe'}
        
        calendar.save()

        return {status: 200, body: calendar.get()};
        
    }
}
