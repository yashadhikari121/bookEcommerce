import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/book.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  autoGeneratedBookId: string | undefined; // You can generate this dynamically in TypeScript
  bookDetails: any = {}; // Object to store book details
  selectedImage: string | undefined; // To store the selected image URL (for preview)
  constructor(private router: Router, private bookService: BookService,public imageService: ImageService) {}
  
  onFileSelected(event: any): void {
    const file = event.target.files[0];

    if (file) {
      this.convertImageToDataURL(file).then(dataURL => {
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


  // Function to add a new book
  addBook() {
    // Generate a unique ID (for demonstration purposes, use a simple timestamp)
    const bookId = new Date().getTime();

    // Add book details to the service
    this.bookService.addBook({ id: bookId, ...this.bookDetails });
    alert("Book is added sucessfully!!!")

    // You can navigate to a different page or show a success message
    this.router.navigate(['/seller-dashboard']);

 
  }
  

}
