import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NoticeInterface} from '../interfaces/notice.interface';
import {UserInterface} from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
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
      district: 'Morena'
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
      priority: false,
    },
  ];

  user: UserInterface = {
    id: 'bbobnobn-1noniopnn-nnpi1',
    name: 'Piotr',
    city: 'Gdańsk',
    email: 'pitore@wo.pl',
    password: 'zaq1@WSX',
    voivodeship: 'pomorskie',
    phone: '123 456 789'
  };

  constructor(private httpClient: HttpClient) {
  }

  getUserData() {
    // return this.httpClient.get();

    return this.user;
  }

  getInProgressNotices() {
    // return this.httpClient.get();

    return this.noticeList.slice();
  }

  getEndedNotices() {
    // return this.httpClient.get();

    return this.noticeList.slice();
  }
}
