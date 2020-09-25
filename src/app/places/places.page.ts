import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PlacesService} from './places.service'


@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  places = []
  placesService: any;

  constructor(private placeService: PlacesService, private router: Router) { }

  ngOnInit() {
    this.places = this.placeService.getPlaces()
  }
// this.places tendra el valor que me traen del servicio
  ionViewWillEnter () {
    this.places = this.placeService.getPlaces();
  }
  // Vuelve a pintar el inicio

  addNewPlace() {
    this.router.navigate(['/new-place']);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

}
