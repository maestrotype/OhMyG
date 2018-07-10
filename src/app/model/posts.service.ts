import {Posts} from './posts';
 
export class PostsService{
 
    private data: Posts[] = [
        { date: "05 марта", imageurl:"../../assets/images/image_1.jpg", title: "Lorem Ipsum dolor", content: `Lorem ipsum dolor sit amet. 
        Voluptatem, quia voluptas 
        assumenda est, qui dolorem. 
        Quasi architecto beatae vitae 
        dicta sunt. Lorem ipsum dolor 
        sit amet. Voluptatem, quia 
        voluptas assumenda est, qui 
        dolorem. Quasi architecto 
        beatae vitae dicta sunt. Lorem
         ipsum dolor sit amet. 
        Voluptatem, quia voluptas 
        assumenda est, qui 
        dolorem.
        `},
        { date: "05 марта", imageurl:"../../assets/images/image_1.jpg", title: "Lorem Ipsum dolor", content: `Lorem ipsum dolor sit amet. 
        Voluptatem, quia voluptas 
        assumenda est, qui dolorem. 
        Quasi architecto beatae vitae 
        dicta sunt. Lorem ipsum dolor 
        sit amet. Voluptatem, quia 
        voluptas assumenda est, qui 
        dolorem. Quasi architecto 
        beatae vitae dicta sunt. Lorem
         ipsum dolor sit amet. 
        Voluptatem, quia voluptas 
        assumenda est, qui 
        dolorem.
        `},
        { date: "05 марта", imageurl:"../../assets/images/image_1.jpg", title: "Lorem Ipsum dolor", content: `Lorem ipsum dolor sit amet. 
        Voluptatem, quia voluptas 
        assumenda est, qui dolorem. 
        Quasi architecto beatae vitae 
        dicta sunt. Lorem ipsum dolor 
        sit amet. Voluptatem, quia 
        voluptas assumenda est, qui 
        dolorem. Quasi architecto 
        beatae vitae dicta sunt. Lorem
         ipsum dolor sit amet. 
        Voluptatem, quia voluptas 
        assumenda est, qui 
        dolorem.
        `},
        { date: "05 марта", imageurl:"../../assets/images/image_1.jpg", title: "Lorem Ipsum dolor", content: `Lorem ipsum dolor sit amet. 
        Voluptatem, quia voluptas 
        assumenda est, qui dolorem. 
        Quasi architecto beatae vitae 
        dicta sunt. Lorem ipsum dolor 
        sit amet. Voluptatem, quia 
        voluptas assumenda est, qui 
        dolorem. Quasi architecto 
        beatae vitae dicta sunt. Lorem
         ipsum dolor sit amet. 
        Voluptatem, quia voluptas 
        assumenda est, qui 
        dolorem.
        `},
        { date: "05 марта", imageurl:"../../assets/images/image_1.jpg", title: "Lorem Ipsum dolor", content: `Lorem ipsum dolor sit amet. 
        Voluptatem, quia voluptas 
        assumenda est, qui dolorem. 
        Quasi architecto beatae vitae 
        dicta sunt. Lorem ipsum dolor 
        sit amet. Voluptatem, quia 
        voluptas assumenda est, qui 
        dolorem. Quasi architecto 
        beatae vitae dicta sunt. Lorem
         ipsum dolor sit amet. 
        Voluptatem, quia voluptas 
        assumenda est, qui 
        dolorem.
        `},
        { date: "05 марта", imageurl:"../../assets/images/image_1.jpg", title: "Lorem Ipsum dolor", content: `Lorem ipsum dolor sit amet. 
        Voluptatem, quia voluptas 
        assumenda est, qui dolorem. 
        Quasi architecto beatae vitae 
        dicta sunt. Lorem ipsum dolor 
        sit amet. Voluptatem, quia 
        voluptas assumenda est, qui 
        dolorem. Quasi architecto 
        beatae vitae dicta sunt. Lorem
         ipsum dolor sit amet. 
        Voluptatem, quia voluptas 
        assumenda est, qui 
        dolorem.
        `},
        { date: "05 марта", imageurl:"../../assets/images/image_1.jpg", title: "Lorem Ipsum dolor", content: `Lorem ipsum dolor sit amet. 
        Voluptatem, quia voluptas 
        assumenda est, qui dolorem. 
        Quasi architecto beatae vitae 
        dicta sunt. Lorem ipsum dolor 
        sit amet. Voluptatem, quia 
        voluptas assumenda est, qui 
        dolorem. Quasi architecto 
        beatae vitae dicta sunt. Lorem
         ipsum dolor sit amet. 
        Voluptatem, quia voluptas 
        assumenda est, qui 
        dolorem.
        `},
        { date: "05 марта", imageurl:"../../assets/images/image_1.jpg", title: "Lorem Ipsum dolor", content: `Lorem ipsum dolor sit amet. 
        Voluptatem, quia voluptas 
        assumenda est, qui dolorem. 
        Quasi architecto beatae vitae 
        dicta sunt. Lorem ipsum dolor 
        sit amet. Voluptatem, quia 
        voluptas assumenda est, qui 
        dolorem. Quasi architecto 
        beatae vitae dicta sunt. Lorem
         ipsum dolor sit amet. 
        Voluptatem, quia voluptas 
        assumenda est, qui 
        dolorem.
        `},
        { date: "05 марта", imageurl:"../../assets/images/image_1.jpg", title: "Lorem Ipsum dolor", content: `Lorem ipsum dolor sit amet. 
        Voluptatem, quia voluptas 
        assumenda est, qui dolorem. 
        Quasi architecto beatae vitae 
        dicta sunt. Lorem ipsum dolor 
        sit amet. Voluptatem, quia 
        voluptas assumenda est, qui 
        dolorem. Quasi architecto 
        beatae vitae dicta sunt. Lorem
         ipsum dolor sit amet. 
        Voluptatem, quia voluptas 
        assumenda est, qui 
        dolorem.
        `},
        { date: "05 марта", imageurl:"../../assets/images/image_1.jpg", title: "Lorem Ipsum dolor", content: `Lorem ipsum dolor sit amet. 
        Voluptatem, quia voluptas 
        assumenda est, qui dolorem. 
        Quasi architecto beatae vitae 
        dicta sunt. Lorem ipsum dolor 
        sit amet. Voluptatem, quia 
        voluptas assumenda est, qui 
        dolorem. Quasi architecto 
        beatae vitae dicta sunt. Lorem
         ipsum dolor sit amet. 
        Voluptatem, quia voluptas 
        assumenda est, qui 
        dolorem.
        `},
        { date: "05 марта", imageurl:"../../assets/images/image_1.jpg", title: "Lorem Ipsum dolor", content: `Lorem ipsum dolor sit amet. 
        Voluptatem, quia voluptas 
        assumenda est, qui dolorem. 
        Quasi architecto beatae vitae 
        dicta sunt. Lorem ipsum dolor 
        sit amet. Voluptatem, quia 
        voluptas assumenda est, qui 
        dolorem. Quasi architecto 
        beatae vitae dicta sunt. Lorem
         ipsum dolor sit amet. 
        Voluptatem, quia voluptas 
        assumenda est, qui 
        dolorem.
        `},
        { date: "05 марта", imageurl:"../../assets/images/image_1.jpg", title: "Lorem Ipsum dolor", content: `Lorem ipsum dolor sit amet. 
        Voluptatem, quia voluptas 
        assumenda est, qui dolorem. 
        Quasi architecto beatae vitae 
        dicta sunt. Lorem ipsum dolor 
        sit amet. Voluptatem, quia 
        voluptas assumenda est, qui 
        dolorem. Quasi architecto 
        beatae vitae dicta sunt. Lorem
         ipsum dolor sit amet. 
        Voluptatem, quia voluptas 
        assumenda est, qui 
        dolorem.
        `},   
    ];

    length = this.data.length;

    getData(): Posts[] {
         
        return this.data;
    }
    addData(date: string, imageurl: string, title: string, content: string){
         
        this.data.push(new Posts(date, imageurl, title, content));
    }
}