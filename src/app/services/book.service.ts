import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IBook } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _books: IBook[] = [
    {
      id: 1,
      name: 'Дюна',
      author: {
        firstName: 'Френк',
        lastName: 'Герберт',
      }
    }
  ];

  constructor() { }

  public getList(): Observable<IBook[]> {
    return of(this._books);
  }

}
