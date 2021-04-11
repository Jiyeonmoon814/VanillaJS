const posts = [
    {title: 'Post One', body : 'This is post one'},
    {title: 'Post Two', body : 'This is post two'}
];

function getPosts(){
    setTimeout(()=>{
        let output ='';
        posts.forEach((post,index)=>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000);
}

function createPost(post){
    //The Promise object represents the eventual completion (or failure) of 
    //an asynchronous operation and its resulting value.
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);

            //const error = true;
            const error = false;
            if(!error){
                resolve();
            }else {
                reject('Error:Something went wrong');
            }
        },2000);
    });
}

// createPost({title:'Post Three',body:'This is post three'})
//             .then(getPosts)
//             .catch(err=>console.log(err));

//Promise.all
const promise1 = Promise.resolve('Hello');
const promise2 = 10;
const promise3 = new Promise((reslove,reject)=>
    setTimeout(reslove,2000,'GoodBye'));
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json());
Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));