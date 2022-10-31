import { storage } from "./localStorage.js";


const baseUrl = "https://m2-api-living.herokuapp.com/news";
console.log(baseUrl)
async function postsR (page){
    const request = await fetch(`${baseUrl}?page=${page}`)

    try{
        const response = await request.json()
        const news = await response.news

        return news

    }catch(err){
        console.error(err)
    }
}

async function dataPagePost () {
    const local = storage
    console.log(local);
    console.log(storage);
    const idPost = local.id
    console.log(idPost);

    console.log(local.id);
    const request = await fetch(`${baseUrl}/${idPost}`)
    
    try{

        const response = await request.json()

        if(request.ok){
            return response
        }

    }catch(err){

        console.error(err)

    }
}

console.log(dataPagePost);
async function categorias (count) {

    const request = await fetch(`${baseUrl}?page=${count}`)
    
    try{
        
        const page = await request.json()
        
        const news = page.news
        let category = news.map((info)=> info.category)
        const categoriesNotRepeat = new Set(category)
        category = Array.from(categoriesNotRepeat)
        
        return category
        
    }catch(err){
        console.error(err)
    }
}

async function resp (page) {

    const request = await fetch(`${baseUrl}?page=${page}`)

    try{
        
        if(request.ok){

            const response = request.json()
            return response
            
        }

    }catch(err){
        console.error(err)
    }
}
export { dataPagePost, categorias, resp }
export { postsR}