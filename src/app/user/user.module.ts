import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateUserComponent } from './AddUser/create-user/create-user.component';

@NgModule({
  declarations: [
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports:[
    CreateUserComponent  ]
})
export class UserModule { }
