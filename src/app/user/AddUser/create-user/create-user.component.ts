import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Roles, User } from 'src/app/models/User';
import { UserService } from 'src/app/Service/UserService';
import { AppConstants } from '../../UserConstants';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  addUserForm: FormGroup;
  successMsg: string = "";
  errorMsg: string = "";
  roles = Object.values(Roles); // Get all roles from the enum
  label = AppConstants.LABELS;
  placeHolder = AppConstants.PLACEHOLDERS;
   
    constructor(private fb: FormBuilder, private userService: UserService) {
      this.addUserForm = this.fb.group({
        firstName: ['', [Validators.required, Validators.maxLength(30)]],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        roles: [this.roles[2],Validators.required]
      });
    }
   
    onSubmit() {
      if (this.addUserForm.valid) {
        const newUser: User ={
           ...this.addUserForm.value,
           userId : 0
          };
   
    this.userService.AddUser(newUser).subscribe({
      next: (response) =>{
        this.successMsg ='User added successfully';
        this.errorMsg = "";
        this.addUserForm.reset();
            // Handle success, e.g., navigate to the user list or display a success message
       },
      error: (err) => {
        this.errorMsg = 'error, Please fill the role';
        this.successMsg ='';
            // Handle error
        }
    });

      }
    }
}
