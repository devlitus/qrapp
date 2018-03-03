import { Injectable } from '@angular/core';
import { ScanData } from "../../model/scan-data.model";

@Injectable()
export class HistorialProvider {
  private _historial: ScanData[] = []
  constructor() {}
  agregarHistorial(texto){
    let data = new ScanData(texto);
    this._historial.unshift(data);
    console.log(this._historial);
    
  }

  cargarHistorial(){}
}
