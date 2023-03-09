import { CalendarModel } from '../model/CalendarModel';

export class ListCalendarByNameController{
    execute(input){
        if(!input.params)
            return {status: 400, body: 'O campo nome é necessário para que a pesquisa seja realizada'}
        
        const {name} = input.params;
        const calendarModel = new CalendarModel();
        const calendar = calendarModel.find('name', name);

        if(calendar)
            return {status: 200, body: calendar};

        return {status: 400, body: 'Calendário inexistente'};
    }

}