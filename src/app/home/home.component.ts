 import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { ImageService } from '../services/image.service';
import { CartService } from '../cart.service';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy{
    books = [
      {
        id: 1,
        bookName: 'The Great Gatsby',
        authorName: 'F. Scott Fitzgerald',
        description: 'A novel about the American Dream.',
        price: 10.99,
        imageUrl: 'assets/images/1.jpg'
      },
      {
        id: 2,
        bookName: 'To Kill a Mockingbird',
        authorName: 'Harper Lee',
        description: 'A classic of modern American literature.',
        price: 12.99,
        imageUrl: 'assets/images/2.jpg'
      },
      {
        id: 3,
        bookName: '1984',
        authorName: 'George Orwell',
        description: 'A dystopian novel set in a totalitarian society.',
        price: 14.99,
        imageUrl: 'assets/images/3.png'
      },
      {
        id: 4,
        bookName: 'The Catcher in the Rye',
        authorName: 'J.D. Salinger',
        description: 'A story about teenage angst and alienation.',
        price: 9.99,
        imageUrl: 'assets/images/4.jpg'
      },
      {
        id: 5,
        bookName: 'One Hundred Years of Solitude',
        authorName: 'Gabriel García Márquez',
        description: 'A magical realist novel that tells the multi-generational story of the Buendía family.',
        price: 16.99,
        imageUrl: 'assets/images/5.jpg'
      },
      {
        id: 6,
        bookName: 'Brave New World',
        authorName: 'Aldous Huxley',
        description: 'A novel that envisions a dystopian future where technology controls society.',
        price: 13.99,
        imageUrl: 'assets/images/6.jpg'
      },
      {
        id: 7,
        bookName: 'The Lord of the Rings',
        authorName: 'J.R.R. Tolkien',
        description: 'A fantasy epic set in the world of Middle-earth.',
        price: 19.99,
        imageUrl: 'assets/images/7.jpg'
      },
      {
        id: 8,
        bookName: 'Pride and Prejudice',
        authorName: 'Jane Austen',
        description: 'A classic romantic novel about societal expectations and love.',
        price: 11.99,
        imageUrl: 'assets/images/8.jpg'
      },
      {
        id: 9,
        bookName: 'The Hobbit',
        authorName: 'J.R.R. Tolkien',
        description: 'The adventures of Bilbo Baggins in Middle-earth.',
        price: 15.99,
        imageUrl: 'assets/images/9.jpg'
      },
      {
        id: 10,
        bookName: 'Harry Potter and the Sorcerer\'s Stone',
        authorName: 'J.K. Rowling',
        description: 'The first book in the Harry Potter series.',
        price: 17.99,
        imageUrl: 'assets/images/10.jpg'
      },
      {
        id: 11,
        bookName: 'The Shining',
        authorName: 'Stephen King',
        description: 'A psychological horror novel set in an isolated hotel.',
        price: 14.99,
        imageUrl: 'assets/images/11.jpg'
      },
      {
        id: 12,
        bookName: 'The Da Vinci Code',
        authorName: 'Dan Brown',
        description: 'A mystery thriller that explores the secrets of the Catholic Church.',
        price: 12.99,
        imageUrl: 'assets/images/12.jpg'
      },
      {
        id: 13,
        bookName: 'The Alchemist',
        authorName: 'Paulo Coelho',
        description: 'A philosophical novel about a shepherd\'s journey to find his treasure.',
        price: 10.99,
        imageUrl: 'assets/images/13.jpg'
      },
      {
        id: 14,
        bookName: 'The Girl with the Dragon Tattoo',
        authorName: 'Stieg Larsson',
        description: 'A psychological thriller novel.',
        price: 16.99,
        imageUrl: 'assets/images/14.jpg'
      },
      {
        id: 15,
        bookName: 'The Hunger Games',
        authorName: 'Suzanne Collins',
        description: 'A dystopian novel set in a post-apocalyptic world.',
        price: 13.99,
        imageUrl: 'assets/images/15.jpg'
      },
      {
        id: 16,
        bookName: 'Dune',
        authorName: 'Frank Herbert',
        description: 'A science fiction novel set in a distant future amidst a feudal interstellar society.',
        price: 18.99,
        imageUrl: 'assets/images/16.jpg'
      },
      {
        id: 17,
        bookName: 'Moby-Dick',
        authorName: 'Herman Melville',
        description: 'A novel about Captain Ahab\'s quest for revenge against the white whale.',
        price: 15.99,
        imageUrl: 'assets/images/17.jpg'
      },
      {
        id: 18,
        bookName: 'The Road',
        authorName: 'Cormac McCarthy',
        description: 'A post-apocalyptic novel about a father and son\'s journey.',
        price: 14.99,
        imageUrl: 'assets/images/18.jpg'
      },
      {
        id: 19,
        bookName: 'Jane Eyre',
        authorName: 'Charlotte Brontë',
        description: 'A classic novel that follows the experiences of its titular character.',
        price: 11.99,
        imageUrl: 'assets/images/19.jpg'
      },
      {
        id: 20,
        bookName: 'The Chronicles of Narnia',
        authorName: 'C.S. Lewis',
        description: 'A series of high fantasy novels for children.',
        price: 19.99,
        imageUrl: 'assets/images/20.jpg'
      },
      {
        id: 21,
        bookName: 'The Picture of Dorian Gray',
        authorName: 'Oscar Wilde',
        description: 'A philosophical novel about the consequences of hedonism.',
        price: 12.99,
        imageUrl: 'assets/images/21.jpg'
      },
      {
        id: 22,
        bookName: 'Gone with the Wind',
        authorName: 'Margaret Mitchell',
        description: 'A historical novel set against the backdrop of the American Civil War.',
        price: 16.99,
        imageUrl: 'assets/images/22.jpg'
      },
      {
        id: 23,
        bookName: 'A Tale of Two Cities',
        authorName: 'Charles Dickens',
        description: 'A historical novel set in London and Paris before and during the French Revolution.',
        price: 14.99,
        imageUrl: 'assets/images/23.jpg'
      },
      {
        id: 24,
        bookName: 'The Fault in Our Stars',
        authorName: 'John Green',
        description: 'A novel about two teenagers who fall in love after meeting at a cancer support group.',
        price: 10.99,
        imageUrl: 'assets/images/24.jpg'
      },
      {
        id: 25,
        bookName: 'The Grapes of Wrath',
        authorName: 'John Steinbeck',
        description: 'A novel that tells the story of the Joad family during the Great Depression.',
        price: 15.99,
        imageUrl: 'assets/images/25.jpg'
      },
      {
        id: 26,
        bookName: 'The Hitchhiker\'s Guide to the Galaxy',
        authorName: 'Douglas Adams',
        description: 'A comedic science fiction series.',
        price: 11.99,
        imageUrl: 'assets/images/26.jpg'
      },
      {
        id: 27,
        bookName: 'Wuthering Heights',
        authorName: 'Emily Brontë',
        description: 'A novel about the passionate and destructive love between Heathcliff and Catherine Earnshaw.',
        price: 14.99,
        imageUrl: 'assets/images/27.jpg'
      },
      {
        id: 28,
        bookName: 'The Stand',
        authorName: 'Stephen King',
        description: 'A post-apocalyptic horror novel.',
        price: 17.99,
        imageUrl: 'assets/images/28.jpg'
      } 
      
    ];
  subscription: any;
  addedBooks: any[] | undefined; 
  editedImageData: string | null | undefined;
//books: any;
    constructor(private router: Router,private bookService: BookService,private imageService: ImageService,
      private readonly cartService: CartService) {}

    openBookDetails(bookId: string) {
      // Assuming you have a route for book details with the path '/book-details/:id'
      this.router.navigate(['/book-details', bookId]);
    }
    ngOnInit() {
      // Subscribe to changes in added books
      this.subscription = this.bookService.addedBooks$.subscribe((books) => {
        this.addedBooks = books;
        
      });
      this.editedImageData = this.imageService.getImageData();

    }
    addToCart(product:any){
      this.cartService.addToCart(product)
      alert( `${product.bookName} is added to the cart`);
    }
  
    ngOnDestroy() {
      // Unsubscribe to avoid memory leaks
      this.subscription.unsubscribe();
    }
    
}
 

