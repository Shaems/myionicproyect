import { getLocalePluralCase } from '@angular/common';
import { Injectable } from '@angular/core';
import {Place} from './place.model'

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  
  private places: Place[] = [
    {
      id:'1',
      title:'Eiffel tower',
      imageURL: 'https://www.hola.com/imagenes/viajes/20200325164049/torre-eiffel-paris-maravillas-del-mundo-desde-mi-pantalla/0-803-221/maravillas-desde-mi-pantalla-torre-eiffel-m.jpg',
      comments: ['Awesome place', 'wonderful experience']
    },
    {
      id:'2',
      title:'Eiffel tower 2',
      imageURL: 'https://www.hola.com/imagenes/viajes/20200325164049/torre-eiffel-paris-maravillas-del-mundo-desde-mi-pantalla/0-803-221/maravillas-desde-mi-pantalla-torre-eiffel-m.jpg',
      comments: ['Awesome place', 'wonderful experience']
    },
    {
      id:'3',
      title:'Eiffel tower',
      imageURL: 'https://www.hola.com/imagenes/viajes/20200325164049/torre-eiffel-paris-maravillas-del-mundo-desde-mi-pantalla/0-803-221/maravillas-desde-mi-pantalla-torre-eiffel-m.jpg',
      comments: []
    },
  ]

  constructor() { }

  getPlaces() {
    return [...this.places]
  }
  //retorna una copia de los lugares

  getPlace(placeId: string) {
    return {
    ...this.places.find(place => {
      return place.id === placeId
      })
    }
  }
// busqueda de Id. recorre. Retorna dentro de un objeto
  addPlace(title: string, imageURL: string) {
    this.places.push({
      title,
      imageURL,
      comments: [],
      id: this.places.length + 1 + ""
    })
  }

// Recibe los datos del lugar
  deletePlace(placeId: string) {
    this.places = this.places.filter(place=> {
      return place.id !== placeId
    })
  }

//si cada lugar que estas recoriendo coincide con el id que me mandan no agregarlo a la lista. Este nuevo valor no guardarlo
}
