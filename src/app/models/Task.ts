export interface Task{
    taskId:number;
    title:string;
    description:string;
    status:string;
    priority:string;
    assignedTo:number;
    createdAt:Date;
    updatedAt:Date; 
}