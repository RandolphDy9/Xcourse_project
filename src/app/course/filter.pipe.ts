import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filterCourses'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], textInput: string): any[] {
        if(!items) {
            return [];
        }

        if(!textInput) {
            return items;
        }

        textInput = textInput.toLowerCase();
        console.log("The textInput: " + textInput);

        return items.filter(item => {
            console.log("The item: " + JSON.stringify(item).toLowerCase().includes(textInput));
            return JSON.stringify(item).toLowerCase().includes(textInput);
        });
    };
}