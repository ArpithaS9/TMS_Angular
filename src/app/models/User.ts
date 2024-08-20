export class User{
    public uId:number;
    public firstName:string;
    public lastName:number;
    public email:string;
    public roles:string;

    constructor(id:number,firstName:string,lastName:number,email:string,roles:string)
    {
        this.uId=id;
        this.firstName=firstName;
        this.lastName= lastName;
        this.email= email;
        this.roles = roles;

    }
}