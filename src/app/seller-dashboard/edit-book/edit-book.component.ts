import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/book.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  books: any[] | undefined;
  selectedBookForEdit: any;
  selectedImage: string | undefined; // To store the selected image URL (for preview)
  editedImageData: string | null = null;
  newImage: File | null = null;

  onNewFileSelected(event: any): void {
    this.newImage = event.target.files[0];

    if (this.newImage) {
      this.convertImageToDataURL(this.newImage).then(dataURL => {
        this.editedImageData = dataURL;
        // Update the image service with the new data
        this.imageService.setImageData(dataURL);
      });
    }
  }

  convertImageToDataURL(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        resolve(reader.result as string);
      };

      reader.onerror = () => {
        reject(new Error('Error reading the file.'));
      };

      reader.readAsDataURL(file);
    });
  }
  constructor(private router: Router, private bookService: BookService,private imageService: ImageService) {}

  ngOnInit() {
    // Fetch the list of books from the service
    this.books = this.bookService.getBooks();
    this.editedImageData = this.imageService.getImageData();

  }

  editBook(book: any) {
    // Navigate to the edit book page with the book ID as a parameter
    this.router.navigate(['/edit', book.id]);
  }
  editBookDetails(book: any) {
    // Set the selected book for editing
    this.selectedBookForEdit = { ...book };
  }
  deleteBook(bookId: number) {
    // Delete the book using the service
    this.bookService.deleteBook(bookId);
    // Reload the list of books after deletion
    this.loadBooks();
    alert('Book deleted successfully!');
  }
  private loadBooks() {
    // Load the list of books from the service
    this.books = this.bookService.getBooks();
  }
  saveEditedBook() {
    // Save the edited book using the service
    if (this.selectedBookForEdit) {
      this.bookService.updateBook(this.selectedBookForEdit.id, this.selectedBookForEdit);
      this.selectedBookForEdit = null; // Clear selected book after saving
      alert('Book edited successfully!');

    }
  }
}
