import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books: any[] = []; 
  // Replace 'any[]' with your book model interface if you have one
  private addedBooks: any[] = [];

  constructor() {}

  getBooks(): any[] {
    return this.books;
  }

  addBook(book: any): void {
    this.books.push(book);
    const currentBooks = this.addedBooksSubject.value;
    this.addedBooksSubject.next([...currentBooks, book]);
  }

  updateBook(bookId: number, updatedBook: any): void {
    const index = this.books.findIndex((book) => book.id === bookId);
    if (index !== -1) {
      this.books[index] = updatedBook;
    }
  }

  deleteBook(bookId: number): void {
    this.books = this.books.filter((book) => book.id !== bookId);
  }

  private addedBooksSubject = new BehaviorSubject<any[]>([]);
  addedBooks$ = this.addedBooksSubject.asObservable();
  
}
