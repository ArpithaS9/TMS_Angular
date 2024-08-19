export class Task{
    public uId:number;
    public title:string;
    public description:string;
    public status:string;
    public priority:string;
    public assignedTo:any;
    public createdAt:any;
    public updatedAt:any;

    constructor(id:number,title:string,desc:string,status:string,priority:string,assignedTo:any,createdAt:any,updatedAt:any)
    {
        this.uId=id;
        this.title=title;
        this.description= desc;
        this.status= status;
        this.priority = priority;
        this.assignedTo = assignedTo;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt


    }
}