console.log("Olá Marilene3")

function localSt () {
    const local = JSON.parse(localStorage.getItem("@preference at home")) || ""
    return local
}

function prefPost () {
    const local = JSON.parse(localStorage.getItem("@preferences at post")) || ""
    return local
}

function localStSet (obj) {
    localStorage.setItem("@preference at home", obj)
}

function localSSet (post) {

    post.forEach((elementos)=>{

        elementos.onclick = (event) =>{
            
            let category = event.target.classList[0].toLowerCase().replaceAll("ç", "c").replaceAll("ã", "a")
            
            let data = {
                id: event.target.id,
                category: category,
            }
            localStSet(JSON.stringify(data))
        }
    })
}

async function setNews (allNews){
    localStorage.setItem("@all-news", JSON.stringify(await allNews))
}

function localStoNoti () {
    const noticiaLocalS = JSON.parse(localStorage.getItem("@all-news"))
    return noticiaLocalS
}

const storage = localSt()
console.log(storage);
console.log(localSt);
export {localSt, prefPost, localStSet, localSSet,setNews, localStoNoti, storage}