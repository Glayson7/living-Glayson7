import { resp } from "./api.js";
import { renderScroll } from "./render.js";
console.log("Olá Marilene1")

const all = document.querySelector(".all")

let page = 0

if(all !== null){

    all.onclick = () => {

        localStorage.removeItem("@preferences at post")
        localStorage.removeItem("@preference at home")
        console.log(all);
    }
}

async function scroll (alert) {

    let response = await resp(page)

    if(alert == "home"){

        window.location.replace('../../index.html')

    }else{

        if(alert == "selected"){
    
            response = false
    
        }
    
        if(response.nextPage <= 3){
    
            await renderScroll(page)

            page++
    
        }
    }
}

const observer = new IntersectionObserver((entries) => {
    if(entries.some(entry => entry.isIntersecting)){
        scroll()
        const footer = document.querySelector("footer")
        setTimeout(()=>{
            footer.classList.remove("hide")
        },3000)
    }
})

export{scroll, observer, page }