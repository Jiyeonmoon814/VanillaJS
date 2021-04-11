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

//Async / Await >> The more elegant way to handle promises 
async function init(){
    await createPost({title:'Post Three',body:'This is post three'})
    
    getPosts();
}
init();

// // Async,Await with Fetch 
// The Promise returned from fetch() won’t reject on HTTP error status even if the response is an HTTP 404 or 500. 
//Instead, it will resolve normally (with ok status set to false), and it will only reject on network failure or 
//if anything prevented the request from completing.

async function fetchUsers(){
    //함수 앞에 async를 붙이면 항상 promise를 반환 
    
    //await는 async 안에서만 작동 
    //promise가 settled될때까지 await 
    //즉 결과값을 얻을 때까지 기다려줌 
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    
    const data = await res.json();
    console.log(data);
}

fetchUsers();


//Promise.all

const promise1 = Promise.resolve('Hello');
const promise2 = 10;
const promise3 = new Promise((reslove,reject)=>
        setTimeout(reslove,2000,'GoodBye'));
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json());
Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));
