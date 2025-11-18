
const sectionform = document.getElementById("sectionForm")
const photo = document.getElementById("Photo")
const butAddworck = document.querySelector("#addWorcker")
const clossbut = document.getElementById("iconClosse")
const addexpe = document.getElementById("experience")


let employer = []

function affichPhoto(url) {
    let plaveThePhoto = document.querySelector("#displayImag")
    let img = document.createElement("img")
    img.setAttribute("src" , url)
    plaveThePhoto.innerHTML = ``
    plaveThePhoto.appendChild(img)

}

function addnewemployaer() {
    const nom = document.getElementById("NameEmployer");
    const role = document.getElementById("Role")
    const email = document.getElementById("Email")
    const numbertele = document.getElementById("Telephone")

    let card

}
function deletexperenceform() {
    let formdelet = document.querySelectorAll(".formexper")
    formdelet.forEach((ele) => ele.remove());
}


addexpe.addEventListener("click" , () => {

    let container = document.createElement("div")
    container.className = "formexper border border-gray-200 rounded-2xl p-4 space-y-3" ;
    let place = document.querySelector(".afterme")

    container.innerHTML = `
            <div class="flex flex-col">
              <label class="font-bold text-lg" for="enterprise">Enterprise</label>
              <input class="border outline-none px-3 py-2 rounded-3xl focus:border-green-400" 
                    type="text" id="enterprise" placeholder="Nom de l'entreprise">
            </div>

            <div class="flex flex-col">
              <label class="font-bold text-lg" for="post">Poste</label>
              <input class="border outline-none px-3 py-2 rounded-3xl focus:border-green-400" 
                    id="post" type="text" placeholder="Titre du poste">
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div class="flex flex-col">
                <label class="font-bold text-lg" for="dateDebut">Date début</label>
                <input class="border outline-none px-3 py-2 rounded-3xl focus:border-green-400" 
                      id="dateDebut" type="date">
              </div>

              <div class="flex flex-col">
                <label class="font-bold text-lg" for="dateFin">Date fin</label>
                <input class="border outline-none px-3 py-2 rounded-3xl focus:border-green-400" 
                      id="dateFin" type="date">
              </div>
            </div>
    `
    place.after(container)
})



photo.addEventListener("input" , (e) => {
    affichPhoto(e.currentTarget.value)
})

butAddworck.addEventListener("click" , () => {
    sectionform.classList.toggle("hidden")
    
})
clossbut.addEventListener("click" , () => {
    sectionform.classList.toggle("hidden")
    deletexperenceform()
})
sectionform.addEventListener("click" , (e) => {
    let containerform =  sectionform.querySelector("div");
    if(!containerform.contains(e.target)){
        sectionform.classList.toggle("hidden")
        deletexperenceform();
    }
})




