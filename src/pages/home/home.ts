import { Component } from '@angular/core';
//Componentes
import { ToastController, Platform } from 'ionic-angular'
//plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
//servicios
import { HistorialProvider } from "../../providers/historial/historial";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    private barcodeScanner: BarcodeScanner, 
    private toastCtrl: ToastController,
    private platform: Platform,
    private historialService: HistorialProvider
  ) {}

  scan(){
    console.log('Realizando scan');
    if (!this.platform.is('cordova')) {
      this.historialService.agregarHistorial('http://google.es');
      return;
    }

    this.barcodeScanner.scan().then((barcodeData) => {
      console.log('Data del scan: ', barcodeData);
      console.log("Result: " + barcodeData.text);
      console.log("Format: " + barcodeData.format);
      console.log("Cancelled: " + barcodeData.cancelled);
      if (barcodeData.cancelled == true && barcodeData.text != null) {
        this.historialService.agregarHistorial(barcodeData.text);
      }

     }, (err) => {
         console.log('Error: ', err);
         this.mostrarError('Error: ' +err);
     });
    
  }
  mostrarError(mensaje: string){
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 2500
    });
    toast.present();
  }
}


