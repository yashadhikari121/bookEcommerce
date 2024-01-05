import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,private router:Router){
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onLoginSubmit() {
    // Check if the form is valid before submitting
    if (this.loginForm.valid) {
      // Add login logic here
      console.log('Login form submitted:', this.loginForm.value);
      alert('User login successful!!!');
      this.router.navigate(['/home']);

    } else {
      // Handle the case where the form is not valid
      console.log('Form is not valid');
    }
  } 

   
}
