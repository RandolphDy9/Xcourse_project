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

        return items.filter(item => {
            return JSON.stringify(item).toLowerCase().includes(textInput);
        });
    };
}