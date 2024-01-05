import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.css']
})
export class SellerLoginComponent {
  sellerLoginForm: FormGroup;


  constructor(private fb: FormBuilder,private router:Router) {
    this.sellerLoginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSellerLoginSubmit() {
    if (this.sellerLoginForm.valid) {
      console.log('Seller Login form submitted:', this.sellerLoginForm.value);
      alert('Seller login successful!!!');
      this.router.navigate(['/seller-dashboard']);

    } else {
      console.log('Form is not valid');
    }
  }

}
