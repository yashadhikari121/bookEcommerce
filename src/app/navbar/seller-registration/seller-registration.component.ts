import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-seller-registration',
  templateUrl: './seller-registration.component.html',
  styleUrls: ['./seller-registration.component.css']
})
export class SellerRegistrationComponent {
  sellerRegistrationForm: FormGroup;

  constructor(private fb: FormBuilder,private router: Router) {
    this.sellerRegistrationForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]], // Ensure exactly 10 digits
      gender: ['', Validators.required],
      createPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSellerRegisterSubmit() {
    if (this.sellerRegistrationForm.valid) {
      console.log('Seller Registration form submitted:', this.sellerRegistrationForm.value);
       // Show a success message using the alert function
       alert('Seller registration successful!! Please Login');
      this.router.navigate(['/seller-login']);

    } else {
      console.log('Form is not valid');
    }
  }

}
