import { CalendarModel } from '../model/CalendarModel';

export class ListCalendarController{
    execute(){
        return {status: 200, body: (new CalendarModel).all()};
    }

}