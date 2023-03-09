import { calendars } from "../bd/calendar";
import {randomUUID} from "crypto";

export class CalendarModel{
    constructor(name) {
        this.id = this.generateId();
        this.name = name;
    }

    generateId(){
       return randomUUID(); 
    }

    save(){
        calendars.push({id: this.id, name: this.name});
    }

    delete(index){
        calendars.splice(index,1);
    }

    find(collumn, value){
        if(collumn === "id")
            return calendars.find(calendar => calendar.id === value); 
        else
            return calendars.find(calendar => calendar.name === value); 
    }

    all(){
       return calendars;
    }

    update(){

    }

    get(){
        return [{id: this.id, name: this.name}];    
    }
}