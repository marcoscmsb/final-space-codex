import api from './api.js'

window.onload = () => {
    console.log("Página carregada")
    loadCharecters()
}

async function loadCharecters() {
    let characters = await api.findAllCharacters()
    let section = document.querySelector(".character-list")
    for (const iterator of characters) {
        section.innerHTML += `
        <div class="card">
            <img src="${iterator.img_url}" alt="Character's image">
            <div class="infos">
                <h2>${iterator.name}</h2>
                <p>${iterator.status}</p>
                <p>Species: ${iterator.species}</p>
            </div>
        </div>
        `
    }
}