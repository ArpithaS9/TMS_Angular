import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { CreateUserComponent } from './create-user.component';
import { UserService } from 'src/app/Service/UserService';
import { AppConstants } from '../../UserConstants';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
 
  class MockUserService {
  AddUser(user: any) {
    return of({ success: true });
  }
}
 
describe('CreateUserComponent', () => {
  let component: CreateUserComponent;
  let fixture: ComponentFixture<CreateUserComponent>;
  let mockUserService: MockUserService;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      declarations: [CreateUserComponent],
      providers: [{ provide: UserService, useClass: MockUserService}],
    }).compileComponents();
 
    fixture = TestBed.createComponent(CreateUserComponent);
    component = fixture.componentInstance;
    mockUserService = TestBed.inject(UserService) as unknown as MockUserService;
    fixture.detectChanges();
  });
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  it('should have a default form state', () => {
    const addUserForm = component.addUserForm;
    expect(addUserForm).toBeDefined();
    expect(addUserForm.valid).toBeFalsy();
    expect(addUserForm.controls['firstName'].value).toBe('');
    expect(addUserForm.controls['lastName'].value).toBe('');
    expect(addUserForm.controls['email'].value).toBe('');
    expect(addUserForm.controls['roles'].value).toBe('Employee');
  });
 
  it('should show error messages when form fields are touched and invalid', () => {
    const firstNameInput = component.addUserForm.controls['firstName'];
    const lastNameInput = component.addUserForm.controls['lastName'];
    const emailInput = component.addUserForm.controls['email'];
    const rolesInput = component.addUserForm.controls['roles'];
 
    firstNameInput.markAsTouched();
    lastNameInput.markAsTouched();
    emailInput.markAsTouched();
    rolesInput.markAsTouched();
 
    fixture.detectChanges();
 
  });
 
  it('should call userService.AddUser when form is valid and submitted', () => {
    const userServiceSpy = spyOn(mockUserService, 'AddUser').and.callThrough();
    component.addUserForm.setValue({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      roles: 'Admin'
    });
 
    component.onSubmit();
 
    expect(userServiceSpy).toHaveBeenCalled();
  });
 
  it('should show success message and reset form on successful user creation', () => {
    component.addUserForm.setValue({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      roles: 'Admin'
    });
 
    component.onSubmit();
 
    expect(component.successMsg).toBe('User added successfully');
    expect(component.errorMsg).toBe('');
    expect(component.addUserForm.valid).toBeFalsy();
  });
 
  it('should show error message on user creation failure', () => {
    spyOn(mockUserService, 'AddUser').and.returnValue(throwError({}));
 
    component.addUserForm.setValue({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      roles: 'Admin'
    });
 
    component.onSubmit();
 
    expect(component.errorMsg).toBe('error, Please fill the role');
    expect(component.successMsg).toBe('');
  });
});
