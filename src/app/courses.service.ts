import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getCourses() {
    return [
      { id: 0, name: 'author1' },
      { id: 1, name: 'author2' },
      { id: 2, name: 'author3' },
    ];
  }
}
