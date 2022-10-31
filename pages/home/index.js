import { categoria, noticias } from "../../scripts/categoria.js";
import { scroll } from "../../scripts/inifiniteScroll.js";
import { localSt, localStoNoti, localStSet, prefPost, setNews, localSSet, storage } from "../../scripts/localStorage.js";
import { renderCardP, renderCategoria, renderizandoPost, renderizarCategoria, renderScroll } from "../../scripts/render.js";

console.log("Olá Marilene!!");

const verifyLocalFromPost = prefPost()


if(verifyLocalFromPost.length > 0){

    renderizarCategoria(verifyLocalFromPost)
    renderCategoria(await categoria())

    setTimeout(() => {

        const redirects = document.querySelectorAll(".link")
        const btsCategory = document.querySelectorAll("#category")
    
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
    
        btsCategory.forEach((category)=>{
                
            category.addEventListener("click", event =>{
                
                scroll("selected")
                let filterCategories = []
                const list = localStoNoti()

                if(event.target.innerText == "Todos"){

                    renderCardP()

                }else{
        
                    list.forEach((obj)=>{

                        if(obj.category == event.target.innerText){
        
                            filterCategories.push(obj)
                        }
                    })
                }
                renderizarCategoria(filterCategories)
            })
        })
    }, 1000);

}else{

    if(storage !== ""){

        renderizarCategoria(storage)
        renderCategoria(await categoria())
        localStorage.removeItem("@preference at home")

        setTimeout(() => {

            const redirects = document.querySelectorAll(".link")
            const btsCategory = document.querySelectorAll("#category")
        
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
        
            btsCategory.forEach((category)=>{
                    
                category.addEventListener("click", event =>{
            
                    scroll("selected")
                    let filterCategories = []
                    const list = localStoNoti()
    
                    if(event.target.innerText == "Todos"){
    
                        renderCardP()
    
                    }else{
            
                        list.forEach((obj)=>{
    
                            if(obj.category == event.target.innerText){
            
                                filterCategories.push(obj)
                            }
                        })
                    }
                    renderizarCategoria(filterCategories)
                })
            })
        }, 1000);

    }else{

        setNews(await noticias())
    renderCategoria(await categoria())
    scroll()
    
    setTimeout(() => {

        const redirects = document.querySelectorAll(".link")
        const btsCategory = document.querySelectorAll("#category")
    
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
    
        btsCategory.forEach((category)=>{
                
            category.addEventListener("click", event =>{
        
                let filterCategories = []
                const list = localStoNoti()

                if(event.target.innerText == "Todos"){

                    renderCardP()

                }else{
        
                    list.forEach((obj)=>{
                        
                        if(obj.category == event.target.innerText){
        
                            filterCategories.push(obj)
                        }
                    })
                }
                renderizarCategoria(filterCategories)
            })
        })
    }, 1000);
}
}

setTimeout(()=>{
    let div = document.querySelector("#observed")
    div.classList.remove("hide")

},2000)