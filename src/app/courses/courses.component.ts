import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

    title = 'Angular';
    Courses: any;
    
    binding = 'property-binding';
    imageUrl = 'https://loremflickr.com/640/360';
    colspan = 2;
  isActive = false;
  nama = 'shintia';

  onSave($event: any) {
    $event.stopPropagation();
      console.log("button sudah diklik",$event)
    }
  
  onDivClick($event: any) {
    console.log("ini method div",$event)
  }

  onKeyUp() {
    console.log(this.nama);
  }

    constructor(private service:CoursesService) {
      this.Courses=service.getCourses();
    }

    ngOnInit() {}

}
