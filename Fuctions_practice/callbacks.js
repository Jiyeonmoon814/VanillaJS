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

//어떤 이벤트가 발생했거나 특정 시점에 도달했을 때 시스템에서 호출하는 함수 callback 
//A callback function is a function passed into another function as an argument, 
//which is then invoked inside the outer function to complete some kind of routine or action.
function createPost(post, callback){ //post와 callback함수를 변수로 이용 
    setTimeout(()=>{
        posts.push(post);
        callback();
    },2000);
}


createPost({title:'Post Three',body:'This is post three'}
            ,getPosts); //callback할 함수가 getPosts
