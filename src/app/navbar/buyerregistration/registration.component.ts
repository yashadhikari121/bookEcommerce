import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
 


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder,private router: Router) {
    this.registrationForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]], // Ensure exactly 10 digits
      gender: ['', Validators.required],
      createPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onRegisterSubmit() {
    // Check if the form is valid before submitting
    if (this.registrationForm.valid) {
      // Add registration logic here
      console.log('Registration form submitted:', this.registrationForm.value);
      alert('User registration successful!! Please Login');

      this.router.navigate(['/login']);
    } else {
      // Handle the case where the form is not valid
      console.log('Form is not valid');
    }
  }

}
