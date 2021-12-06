import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...arg: string[]): any {
    const arrNombre = [];
    for (const nombre of value) {
      if (nombre.titulo.toLowerCase().indexOf(arg) > -1) {
        arrNombre.push(nombre);
      }
    }

    return arrNombre;
  }

}
