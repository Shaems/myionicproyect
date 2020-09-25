import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {AlertController} from '@ionic/angular'
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place

  constructor(private activatedRoute: ActivatedRoute, private placesService: PlacesService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paranMap => {
      //redirect
      const recipedId = paranMap.get('placeId')
      this.place = this.placesService.getPlace(recipedId);
    })
  }

  async deletePlace() {

    const alertElement = await this.alertCtrl.create({
      header: 'Are your sure, you want to delete it?',
      message: 'Be careful',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () =>{
            this.placesService.deletePlace(this.place.id)
            this.router.navigate(['/places'])
          }

        }
      ]
    });
//Que mostrar dentro de la alerta
    await alertElement.present();
   
  }
// llama al servicio deletePlace, y elimina de ese place la id
//Le decimos a que ruta queremos que nos redirija
}
