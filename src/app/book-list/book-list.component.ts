import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'wea5-book-list',
  templateUrl: './book-list.component.html',
  styles: [
  ]
})
export class BookListComponent implements OnInit {

  books: Book[] = [];

  @Output() showDetailsEvent = new EventEmitter<Book>();

  showDetails(book: Book) {
    this.showDetailsEvent.emit(book)
  }

  constructor(private store: BookStoreService) { 

  }

  ngOnInit() {
    this.books = this.store.getAll();
  }

}
