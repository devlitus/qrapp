export class ScanData{
    info: string;
    tipo: string;
    constructor(texto){
        this.tipo = 'no definido';
        this.info = texto;

        if (texto.startsWith('http')) {
            this.tipo = 'http';
        }
    }
}