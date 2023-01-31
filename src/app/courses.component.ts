import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";
import { HelloService } from "./hello.service";

@Component({
    selector: 'courses',
    template: `<h2>{{title}}</h2>
        <ul>
        <li *ngFor="let course of hellos" >{{ course }}</li>
        <li *ngFor="let course of courses" >{{ course }}</li>
        </ul>`,
    providers: []
})

export class CoursesComponent {
    title = "Courses";
    courses;
    hellos;
    constructor(service: HelloService, service2: CoursesService) {
        // let service = new CoursesService();
        this.courses = service2.getCourses();
        this.hellos = service.getName();
    }
}