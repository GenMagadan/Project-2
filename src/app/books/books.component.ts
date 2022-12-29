import { Component } from '@angular/core';
import { IAuthor } from '../interfaces/author';
import { IBook } from '../interfaces/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {

  constructor(

    public bookService: BookService
  ) { }

  public getBookLabel(book: IBook): string {
    return '"' + book.name + '"';
  }

  public getAuthorLabel(author: IAuthor): string {
    return author.lastName + ' ' + author.firstName[0] + '.';
  }
}
