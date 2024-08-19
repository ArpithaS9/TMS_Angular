export class User{
    public uId:number;
    public firstName:string;
    public lastName:number;
    public email:string;
    public roles:string;

    constructor(id:number,fName:string,lName:number,email:string,roles:string)
    {
        this.uId=id;
        this.firstName=fName;
        this.lastName= lName;
        this.email= email;
        this.roles = roles;

    }
}