import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

// Add the interface right here:
interface User {
  fullName: string;
  email: string;
  age: number;
  password: string;
  confirmPassword: string;
}

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './user-form.html',
  styleUrls: ['./user-form.css']
})
export class UserFormComponent {
  userForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder){
    this.userForm = this.fb.group({
      fullName: ['',[Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      confirmPassword: ['', Validators.required]
    }, {validators: this.passwordMatchValidator});
  }

  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  get f(){
    return this.userForm.controls;
  }

  onsubmit() {
    this.submitted = true;
    if (this.userForm.valid) {
      const user: User = this.userForm.value;
      console.log('Submitted user:', user);
      alert('Form submitted successfully!');
      this.userForm.reset();
      this.submitted = false;
    }
  }
}
