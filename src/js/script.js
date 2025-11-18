
const sectionform = document.getElementById("sectionForm");
const photo = document.getElementById("Photo")
const 

function affichPhoto(url) {
    let plaveThePhoto = document.querySelector("#displayImag")
    let img = document.createElement("img")
    img.setAttribute("src" , url)
    img.classList.add("rounded-full")
    plaveThePhoto.innerHTML = ``
    plaveThePhoto.appendChild(img)

}


document.querySelector("#Photo").addEventListener("input" , (e) => {
    affichPhoto(e.currentTarget.value)
})

document.querySelector("#addWorcker").addEventListener("click" , () => {
    document.querySelector("#sectionForm").classList.toggle("hidden")
})
document.querySelector("#iconClosse").addEventListener("click" , (e) => {
    document.querySelector("#sectionForm").classList.toggle("hidden")
    
})





