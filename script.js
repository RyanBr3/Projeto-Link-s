function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // pegar a tag img

    const img = document.querySelector("#profile img")

    // substituir a imagem 
    if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
      img.setAttribute("src", "/assets/avatar-light.png")
    } else {
    // se tiver sem light mode, manter a imagem normal
      img.setAttribute("src", "/assets/Avatar.png")
    }

    const alt = document.querySelector("#profile")

    if (html.classList.contains("light")) {
        // se tiver light mode, adicionar o Alt light
        img.setAttribute("alt", "Foto de Ryan de Oliveira de longe, em um espelho no shopping, com um celular azul na mão")
    } else {
        // se tiver sem light mode, manter o alt normal
        img.setAttribute("alt", "Foto de Ryan de Oliveira de perto, mostrando o seu rosto")
        }
    
}