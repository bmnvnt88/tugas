import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  // inputs:['isFavorite']
})
export class FavoriteComponent implements OnInit {
  @Input() isFavorite: boolean | undefined;
  // coba: boolean | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
  }
}
