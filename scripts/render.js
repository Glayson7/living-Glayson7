import { dataPagePost, postsR } from "./api.js"
import { observer, scroll } from "./inifiniteScroll.js"
import { localSSet, localStSet } from "./localStorage.js"
renderizandoPost
async function renderCardP (){

    const posts = await postsR()
    const ul = document.querySelector("#posts")

    ul.innerHTML = ""
    posts.forEach((post)=>{

        ul.insertAdjacentHTML("afterbegin",
        `
        <li class="card">
            <img src="${post.image}" alt="${post.title}">
            <div class="infos">
                <h2 class="margin_titulo2">${post.title}</h2>
                <p class="margin_botton c-g-2">${post.description}</p>
            </div>
            <span class="${post.category} span c-b-1" id="${post.id}" data-post="pages/post/index.html">Acessar conteúdo</span>
        </li>
        `)
    })

    const redirects = document.querySelectorAll(".link")

    redirects.forEach((choice)=>{
    
        choice.onclick = (event) =>{
            let category = event.target.classList[0].toLowerCase().replaceAll("ç", "c").replaceAll("ã", "a")

            let pref = {
                id: event.target.id,
                category: `${category}`,
            }
            localStSet(JSON.stringify(pref))
            window.location.replace(event.target.dataset.post)
        }
    })
}

function renderCategoria (categories){

    const ul = document.querySelector("#categories")

    categories.forEach((category)=>{

        ul.insertAdjacentHTML("beforeend",
        `
        <li class="category">
            <button id="category" class="bt-grey terceiro">${category}</button>
        </li>
        `)
    })

    const categoriesNode = document.querySelectorAll("#category")

    categoriesNode.forEach((bt)=>{

        bt.onclick = () => {
            scroll("selected")
        }
    })

    return categoriesNode
}



function renderizarCategoria (posts){

    const ul = document.querySelector("#posts")
    ul.innerHTML = ""
    
    posts.forEach((info)=>{

        ul.insertAdjacentHTML("afterbegin",
        `
        <li class="card">
            <img src="${info.image}" alt="${info.title}">
            <div class="info">
                <h2 class="margin_titulo2">${info.title}</h2>
                <p class="margin_botton c-g-2">${info.description}</p>
            </div>
            <span class="${info.category} span c-b-1" id="${info.id}" data-post="pages/post/index.html">Acessar Conteúdo</span>
        </li>
        `)
    })

    const redirects = document.querySelectorAll(".link")

    localSSet(redirects) 

    redirects.forEach((choice)=>{

        choice.onclick = (event) =>{
            let category = event.target.classList[0].toLowerCase().replaceAll("ç", "c").replaceAll("ã", "a")

            let pref = {
                id: event.target.id,
                category: `${category}`,
            }

            localStSet(JSON.stringify(pref))
            window.location.replace(event.target.dataset.post)
        }
    })
}


async function renderizandoPost (){

    const post = await dataPagePost()
    const main = document.querySelector("main")
console.log(dataPage);
    main.insertAdjacentHTML("afterbegin",
        `
        <section class="post-sec-title-desc">
            <h1 class="post-title primeiro">${post.title}</h1>
            <p class="post-desc terceiro g-2">${post.description}</p>
        </section>
        <section class="post-sec-img-content">
            <div class="post-div-img">
                <img src="${post.image}" alt="${post.title}">
            </div>
            <p class="post-content terceiro g-2">${post.content}</p>
        </section>
        `
    )
}

async function renderScroll (page) {

    const posts = await postsR(page)
    const ul = document.querySelector("#posts")

    posts.forEach((post)=>{

        ul.insertAdjacentHTML("beforeend",
        `
        <li class="card">
            <img src="${post.image}" alt="${post.title}">
            <div class="infos">
                <h2 class="margin_titulo2">${post.title}</h2>
                <p class="margin_botton c-g-2">${post.description}</p>
            </div>
            <span class="${post.category} span c-b-1" id="${post.id}" data-post="pages/post/index.html">Acessar conteúdo</span>
        </li>
        `)
    })

    const redirects = document.querySelectorAll(".link")

    redirects.forEach((choice)=>{
    
        choice.onclick = (event) =>{
            let category = event.target.classList[0].toLowerCase().replaceAll("ç", "c").replaceAll("ã", "a")

            let pref = {
                id: event.target.id,
                category: `${category}`,
            }
            localStSet(JSON.stringify(pref))
            window.location.replace(event.target.dataset.post)
        }
    })
    const observed = document.querySelector("#observed")
    observer.observe(observed)
}

export { renderCardP, renderCategoria, renderizarCategoria, renderizandoPost, renderScroll }