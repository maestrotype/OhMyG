import {Posts} from './posts';
 
export class PostsService{
 
    private data: Posts[] = [
        { date: "05 марта", title: "Lorem Ipsum Vitae dicta sunt, explicabo sed quia quia."},
        { date: "05 марта", title: "Lorem Ipsum Vitae dicta sunt, explicabo sed quia quia."},
        { date: "05 марта", title: "Lorem Ipsum Vitae dicta sunt, explicabo sed quia quia."},
        { date: "05 марта", title: "Lorem Ipsum Vitae dicta sunt, explicabo sed quia quia."}    
    ];

    length = this.data.length;

    getData(): Posts[] {
         
        return this.data;
    }
    addData(date: string, title: string){
         
        this.data.push(new Posts(date,title));
    }
}