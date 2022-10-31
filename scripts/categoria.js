import { categorias, postsR } from "./api.js"


async function noticias () {

    let primeiro = await postsR(0)
    let segundo = await postsR(1)
    let terceiro = await postsR(2)

    let noticiaCompleta = [...primeiro, ...segundo, ...terceiro]

    return noticiaCompleta

}

async function categoria() {

    let primeira = await categorias(0);
    let segunda = await categorias(1);
    let terceira = await categorias(2);
  
    let categoriaCompleta = [...primeira, ...segunda, ...terceira];
  
    let categoriesNotRepeat = new Set(categoriaCompleta);
    categoriaCompleta = Array.from(categoriesNotRepeat);
    
    return categoriaCompleta
  }

  export {noticias, categoria}

