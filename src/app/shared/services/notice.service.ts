import {Injectable} from '@angular/core';
import {NoticeInterface} from '../interfaces/notice.interface';
import {ApiService} from './api.service';
import {HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
  noticeList: NoticeInterface[] = [
    {
      id: 'ninpinpnm 11',
      description: 'Przykładowy opis zlecenia wystawionego przez osobę korzystającą z serwisu. Przykładowy opis zlecenia wystawionego przez osobę korzystającą z serwisu. Przykładowy opis zlecenia wystawionego przez osobę korzystającą z serwisu.',
      email: 'example@gmail.com',
      phone: '123 456 789',
      dateEnd: new Date(),
      dateStart: new Date(),
      city: 'Gdańsk',
      name: 'Jan Kowalski',
      priority: false,
      district: 'Morena'
    },
    {
      id: 'ninpinpnm 22',
      description: 'Priorytetowy Przykładowy opis zlecenia wystawionego przez osobę korzystającą z serwisu. Przykładowy opis zlecenia wystawionego przez osobę korzystającą z serwisu. Przykładowy opis zlecenia wystawionego przez osobę korzystającą z serwisu.',
      email: 'example@gmail.com',
      phone: '123 456 789',
      dateEnd: new Date(),
      dateStart: new Date(),
      city: 'Gdańsk',
      name: 'Jan Kowalski',
      priority: true,
      district: 'Wrzeszcz'
    },
    {
      id: 'ninpinpnm 33',
      description: 'Przykładowy opis zlecenia wystawionego przez osobę korzystającą z serwisu. Przykładowy opis zlecenia wystawionego przez osobę korzystającą z serwisu. Przykładowy opis zlecenia wystawionego przez osobę korzystającą z serwisu.',
      email: 'example@gmail.com',
      phone: '123 456 789',
      dateEnd: new Date(),
      dateStart: new Date(),
      city: 'Gdańsk',
      name: 'Jan Kowalski',
      priority: false
    },
    {
      id: 'ninpinpnm 11',
      description: 'Przykładowy opis zlecenia wystawionego przez osobę korzystającą z serwisu. Przykładowy opis zlecenia wystawionego przez osobę korzystającą z serwisu. Przykładowy opis zlecenia wystawionego przez osobę korzystającą z serwisu.',
      email: 'example@gmail.com',
      phone: '123 456 789',
      dateEnd: new Date(),
      dateStart: new Date(),
      city: 'Gdańsk',
      name: 'Jan Kowalski',
      priority: false
    },
    {
      id: 'ninpinpnm 22',
      description: 'Priorytetowy Przykładowy opis zlecenia wystawionego przez osobę korzystającą z serwisu. Przykładowy opis zlecenia wystawionego przez osobę korzystającą z serwisu. Przykładowy opis zlecenia wystawionego przez osobę korzystającą z serwisu.',
      email: 'example@gmail.com',
      phone: '123 456 789',
      dateEnd: new Date(),
      dateStart: new Date(),
      city: 'Gdańsk',
      name: 'Jan Kowalski',
      priority: true,
    },
    {
      id: 'ninpinpnm 33',
      description: 'Przykładowy opis zlecenia wystawionego przez osobę korzystającą z serwisu. Przykładowy opis zlecenia wystawionego przez osobę korzystającą z serwisu. Przykładowy opis zlecenia wystawionego przez osobę korzystającą z serwisu.',
      email: 'example@gmail.com',
      phone: '123 456 789',
      dateEnd: new Date(),
      dateStart: new Date(),
      city: 'Gdańsk',
      name: 'Jan Kowalski',
      priority: false
    },
    {
      id: 'ninpinpnm 11',
      description: 'Przykładowy opis zlecenia wystawionego przez osobę korzystającą z serwisu. Przykładowy opis zlecenia wystawionego przez osobę korzystającą z serwisu. Przykładowy opis zlecenia wystawionego przez osobę korzystającą z serwisu.',
      email: 'example@gmail.com',
      phone: '123 456 789',
      dateEnd: new Date(),
      dateStart: new Date(),
      city: 'Gdańsk',
      name: 'Jan Kowalski',
      priority: false
    },
    {
      id: 'ninpinpnm 22',
      description: 'Priorytetowy Przykładowy opis zlecenia wystawionego przez osobę korzystającą z serwisu. Przykładowy opis zlecenia wystawionego przez osobę korzystającą z serwisu. Przykładowy opis zlecenia wystawionego przez osobę korzystającą z serwisu.',
      email: 'example@gmail.com',
      phone: '123 456 789',
      dateEnd: new Date(),
      dateStart: new Date(),
      city: 'Gdańsk',
      name: 'Jan Kowalski',
      priority: true,
    },
    {
      id: 'ninpinpnm 33',
      description: 'Przykładowy opis zlecenia wystawionego przez osobę korzystającą z serwisu. Przykładowy opis zlecenia wystawionego przez osobę korzystającą z serwisu. Przykładowy opis zlecenia wystawionego przez osobę korzystającą z serwisu.',
      email: 'example@gmail.com',
      phone: '123 456 789',
      dateEnd: new Date(),
      dateStart: new Date(),
      city: 'Gdańsk',
      name: 'Jan Kowalski',
      priority: false
    },
    {
      id: 'ninpinpnm 11',
      description: 'Przykładowy opis zlecenia wystawionego przez osobę korzystającą z serwisu. Przykładowy opis zlecenia wystawionego przez osobę korzystającą z serwisu. Przykładowy opis zlecenia wystawionego przez osobę korzystającą z serwisu.',
      email: 'example@gmail.com',
      phone: '123 456 789',
      dateEnd: new Date(),
      dateStart: new Date(),
      city: 'Gdańsk',
      name: 'Jan Kowalski',
      priority: false
    },
    {
      id: 'ninpinpnm 22',
      description: 'Priorytetowy Przykładowy opis zlecenia wystawionego przez osobę korzystającą z serwisu. Przykładowy opis zlecenia wystawionego przez osobę korzystającą z serwisu. Przykładowy opis zlecenia wystawionego przez osobę korzystającą z serwisu.',
      email: 'example@gmail.com',
      phone: '123 456 789',
      dateEnd: new Date(),
      dateStart: new Date(),
      city: 'Gdańsk',
      name: 'Jan Kowalski',
      priority: true,
    },
    {
      id: 'ninpinpnm 33',
      description: 'Przykładowy opis zlecenia wystawionego przez osobę korzystającą z serwisu. Przykładowy opis zlecenia wystawionego przez osobę korzystającą z serwisu. Przykładowy opis zlecenia wystawionego przez osobę korzystającą z serwisu.',
      email: 'example@gmail.com',
      phone: '123 456 789',
      dateEnd: new Date(),
      dateStart: new Date(),
      city: 'Gdańsk',
      name: 'Jan Kowalski',
      priority: false
    }
  ];

  constructor(private apiService: ApiService) {
  }


  getNoticeStandardList(city: string) {
    // return this.apiService.get('notices/');

    return this.noticeList.filter(m => m.priority === false);
  }

  getNoticePriorityList(city: string) {
    return this.noticeList.filter(m => m.priority === true);
  }
}
