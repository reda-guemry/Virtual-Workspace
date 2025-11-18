
const sectionform = document.getElementById("sectionForm")
const photoinp = document.getElementById("Photo")
const butpopup = document.querySelector("#popupform")
const clossbut = document.getElementById("iconClosse")
const addexpe = document.getElementById("addexperience")
const addempl = document.getElementById("addemployer")

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



function addexperience() {
    let formadd = document.querySelectorAll(".formexper")
    let experience = [] ;
    formadd.forEach((ele) => {
        let detai = {
           enterprise : ele.querySelector(".enterprise").value ,
           post : ele.querySelector(".post").value ,
           datedebut : ele.querySelector(".dateDebut").value,
           datefin: ele.querySelector(".dateFin").value
        }
        experience.push(detai)
    })
    return experience ;
}



addexpe.addEventListener("click" , () => {

    let container = document.createElement("div")
    container.className = "formexper border border-gray-200 rounded-2xl p-4 space-y-3" ;
    let place = document.querySelector(".afterme")

    container.innerHTML = `
            <div class="flex flex-col">
              <label class="font-bold text-lg" >Enterprise</label>
              <input class="enterprise border outline-none px-3 py-2 rounded-3xl focus:border-green-400" 
                    type="text" placeholder="Nom de l'entreprise">
            </div>

            <div class="flex flex-col">
              <label class="font-bold text-lg" >Poste</label>
              <input class="post border outline-none px-3 py-2 rounded-3xl focus:border-green-400" 
                    id="post" type="text" placeholder="Titre du poste">
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div class="flex flex-col">
                <label class="font-bold text-lg" >Date début</label>
                <input class="dateDebut border outline-none px-3 py-2 rounded-3xl focus:border-green-400" 
                       type="date">
              </div>

              <div class="flex flex-col">
                <label class="font-bold text-lg" >Date fin</label>
                <input class="dateFin border outline-none px-3 py-2 rounded-3xl focus:border-green-400" 
                       type="date">
              </div>
            </div>
    `
    place.after(container)
})


photoinp.addEventListener("input" , (e) => {
    affichPhoto(e.currentTarget.value)
})

butpopup.addEventListener("click" , () => {
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

addempl.addEventListener("click" , (e) => {
    e.preventDefault();

    
    let allexper = addexperience()
    let empl = {
        nam : document.querySelector("#NameEmployer").value , 
        role : document.querySelector("#Role").value ,
        photo : photoinp.value ,
        email : document.querySelector("#Email").value ,
        Telephone : document.querySelector("#Telephone").value ,
        experience : allexper
    }
    console.log(empl)
    
    sectionform.classList.toggle("hidden")
})




