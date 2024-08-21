export interface User{
    userId:number;
    firstName:string;
    lastName:number;
    email:string;
    roles:Roles;  
}
export enum Roles {
   Admin = 'Admin',    
   Manager ='Manager',    
   Employee= 'Employee'
}