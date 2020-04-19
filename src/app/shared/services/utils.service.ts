import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  voivodeships: {
    value: string,
    viewValue: string
  }[] = [
    {value: 'dolnośląskie', viewValue: 'dolnośląskie'},
    {value: 'kujawsko-pomorskie', viewValue: 'kujawsko-pomorskie'},
    {value: 'lubelskie', viewValue: 'lubelskie'},
    {value: 'lubuskie', viewValue: 'lubuskie'},
    {value: 'łódzkie', viewValue: 'łódzkie'},
    {value: 'małopolskie', viewValue: 'małopolskie'},
    {value: 'mazowieckie', viewValue: 'mazowieckie'},
    {value: 'opolskie', viewValue: 'opolskie'},
    {value: 'podkarpackie', viewValue: 'podkarpackie'},
    {value: 'podlaskie', viewValue: 'podlaskie'},
    {value: 'pomorskie', viewValue: 'pomorskie'},
    {value: 'śląskie', viewValue: 'śląskie'},
    {value: 'świętokrzyskie', viewValue: 'świętokrzyskie'},
    {value: 'warmińsko-mazurskie', viewValue: 'warmińsko-mazurskie'},
    {value: 'wielkopolskie', viewValue: 'wielkopolskie'},
    {value: 'zachodniopomorskie', viewValue: 'zachodniopomorskie'},
  ];

  getVoivodeshipList(): {
    value: string,
    viewValue: string
  }[] {
    return this.voivodeships.slice();
  }
}
