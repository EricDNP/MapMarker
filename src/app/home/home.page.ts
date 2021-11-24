import { MapControllerService } from './../services/map-controller.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Marker } from '../models/marker.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router,
    private alertController: AlertController, private mapController: MapControllerService)
    {}

  async sendMarker(Title, Lat, Lng) {
    if(Title == "" || Lat == "" || Lng == "") {
      const alert = await this.alertController.create({
        header: 'Alerta',
        message: 'Debe ingresar todos los parametros para continuar',
        buttons: ['OK']
      });
      await alert.present();
    }
    else {
      var marker: Marker = { 
        position: { 
          lat: parseFloat(Lat),
          lng: parseFloat(Lng)
        },
        title: Title
      }
      this.mapController.addMarker(marker);
      this.router.navigate(['./map']);
    }
  }

}
