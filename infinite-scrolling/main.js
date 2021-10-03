const postContainer = document.getElementById('posts-container')
const loading = document.querySelector('.loader')
const filter = document.getElementById('filter')

let limit = 5
let page = 1

document.addEventListener('DOMContentLoaded',() => showPosts())
window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement
    // scrollTop is getting the number of pixels scrolled 
    
    // scrollHeight is a measurement of the height of an element's content,
    // including content not visible on the screen due to overflow 
    
    // clientHeight is zero for elements with no CSS or inline boxes 
    // it includes padding but excludes borders, margins, and horizontal scrollbars if present.
    
    if(scrollHeight - scrollTop === clientHeight){
        showLoading()
    }
})

// Fetch posts from API
async function getPosts() {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
        )
        
        const data = await res.json()
        
        return data 
    }
    
    // Show posts in DOM
    async function showPosts() {
        const posts = await getPosts()
        
        posts.forEach(post => {
            const postEl = document.createElement('div')
            postEl.classList.add('post')
            postEl.innerHTML = `
            <div class="number">${post.id}</div>
            <div class="post-info">
            <h2 class="post-title">${post.title}</h2>
            <p class="post-body">${post.body}</p>
            </div>
            `
            
            postContainer.appendChild(postEl)
        })
    }
    
    //show and fetch more posts 
    function showLoading() {
        loading.classList.add('show')
        
        setTimeout(() => {
            loading.classList.remove('show')
            
            setTimeout(() => {
                page++
                showPosts()
            },300)
        }, 1000)
    }
    
    // filter posts by search 
    const filterPosts = e => {
        const term = e.target.value.toUpperCase()
        const posts = document.querySelectorAll('.post')
        
        posts.forEach(post => {
            const title = post.querySelector('.post-title').innerText.toUpperCase()
            const body = post.querySelector('.post-body').innerText.toUpperCase()
            
            if(title.indexOf(term) >= 0 || body.indexOf(term) >= 0) {
                post.style.display = 'flex'
            }else {
                post.style.display = 'none'
            }
        })
    }

    document.addEventListener('input', filterPosts)