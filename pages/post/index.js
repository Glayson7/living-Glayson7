/* Desenvolva seu script aqui */
console.log("Olá Marilene5")
import { renderCardP, renderCategoria, renderizandoPost } from '../../scripts/render.js'
import { localStoNoti, storage } from '../../scripts/localStorage.js'
import { categoria } from '../../scripts/categoria.js'

renderCategoria(await categoria())

renderizandoPost()

const allBts = document.querySelectorAll("#category")
const btHome = document.querySelector("#btHome")
const linkHome = btHome.dataset.path

btHome.onclick = (event) => {
    
    event.preventDefault()

    const categoryPreference = storage.category
    let allNewsAtLocal = localStoNoti()
    
    let filtered = []

    allNewsAtLocal.forEach((obj) =>{

        let category = obj.category.toLowerCase().replaceAll("ç", "c").replaceAll("ã", "a")

        if(category == categoryPreference){

            filtered.push(obj)

        }
        localStorage.setItem("@preference at home", JSON.stringify(filtered))
        window.location.replace(linkHome)
    })
}

allBts.forEach((bt)=>{
            
    bt.addEventListener("click", event =>{

        let filterCategories = []
        const list = localStoNoti()
        
        list.forEach((obj)=>{

        if(obj.category == event.target.innerText){

            filterCategories.push(obj)

        }
    })
    window.location.replace(linkHome)
    localStorage.setItem("@preferences at post", JSON.stringify(filterCategories))
    })
})