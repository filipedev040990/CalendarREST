import { events } from "../bd/event";
import {randomUUID} from "crypto";

export class Event{
    constructor(calendarId, name, category, startDate, endDate = null) {
        this.id = this.generateId();
        this.idCalendar = calendarId;
        this.name = name;
        this.category = category;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    generateId(){
       return randomUUID(); 
    }

    async getId(){
        return [{id: this.id}];    
    }

    async getName(){
        return [{id: this.name}];    
    }

    async save(){
        events.push({id: this.id, name: this.name});
    }

    async delete(index){
        events.splice(index,1)
    }

    async find(collumn, value){
        if(collumn === "id")
            return events.find(event => event.id === value); 
        else
            return events.find(event => event.name === value); 
    }

    async findIndex(collumn, value){
        if(collumn === "id")
            return calendars.findIndex(calendar => calendar.id === value); 
        else
            return calendars.findIndex(calendar => calendar.name === value); 
    }

    async all(){
       return events;
    }

    async update(id, newItem){
        const index = await this.findIndex("id", id);
        events[index] = {id, name : newItem.name};

        return events[index];
    }

    async get(){
        return [{id: this.id, name: this.name}];    
    }
}