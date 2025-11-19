
fetch("/src/role.json")
    .then(reponse => reponse.json())
    .then(data => {
        data.forEach((ele) => {
            let opt = document.createElement("option")
            opt.value = ele
            opt.textContent = ele 
            
        })
    })


const sectionform = document.getElementById("sectionForm")
const photoinp = document.getElementById("Photo")
const butpopup = document.querySelector("#popupform")
const clossbut = document.getElementById("iconClosse")
const addexpe = document.getElementById("addexperience")
const addempl = document.getElementById("addemployer")
const rooms = Array.from(document.querySelector("#worckspace").children)
let placecart = document.querySelector("#placeWorker");

let counterID = 0;
let employer = [];

const romandrolle = {
    conference : [ "Manager" , "Autres roles" , "Nettoyage" , "Techniciens IT"] ,
    Reception : ["Receptionnistes" , "Manager" , "Nettoyage" ] ,
    serveurs : ["Nettoyage" , "Techniciens IT" , "Manager"] ,
    securite : ["Agents de securite" , "Manager" ,"Nettoyage"],
    personnel : ["Autres roles" , "Nettoyage" ,"Manager"] ,
    archives  : ["Manager"]
}



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

function clearinput() {
    document.querySelector("#NameEmployer").value = "" 
    document.querySelector("#Role").value = ""
    photoinp.value = ""
    document.querySelector("#Email").value = ""
    document.querySelector("#Telephone").value = ""
    document.querySelector("#displayImag").innerHTML = "";
}


function affichercart() {
    placecart.innerHTML = ``
    employer.forEach((ele) => {
        if(ele.room == "null"){
            let cart = document.createElement("div");
            cart.className = "flex justify-between items-center w-full gap-3 px-4 py-3 my-3 bg-white rounded-3xl shadow-md border border-gray-200"
            cart.innerHTML = `
                <div class="rounded-full overflow-hidden size-14 ">
                <img src="${ele.photo}" alt="">
                </div>

                <div class="flex-1 min-w-0">
                <h2 class="font-semibold text-gray-800 text-sm">${ele.nam}</h2>
                <p class="text-gray-500 text-xs">${ele.role}</p>
                </div>

                <button data-id="${ele.id}" class="px-3 py-1.5 bg-green-500 text-white text-sm rounded-md hover:bg-green-600 ">details</button>
            `
            placecart.appendChild(cart)
        }
    })

}

function afficherdetailsofworckers(idset) {
    let found = employer.find((ele) => ele.id == idset)
    let sectiondetails = document.createElement("section")
    sectiondetails.className = "absolute top-0 left-0  w-screen h-screen bg-black/50"
    let experence = ""
    
    found.experience.forEach((exp) => {
        experence += `
            <div class="mb-3 p-3 bg-gray-50 rounded-lg">
                <p class="font-semibold text-gray-800">Enterprise : ${exp.enterprise}</p>
                <p class="text-sm text-gray-600">Post : ${exp.post}</p>
                <p class="text-xs text-gray-500">Datedebut : ${exp.datedebut}</p>
                <p class="text-xs text-gray-500">Datefin : ${exp.datefin}</p>
            </div>
        `
    })

    sectiondetails.innerHTML = `
        <div class="allfomr bg-white p-8 rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-[50%] max-h-[90vh] overflow-y-auto ">
            
            <button class="closform cursor-pointer text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>

            <div class="text-center mb-6">
                <div class="size-24 rounded-full overflow-hidden mx-auto mb-3 border-2 border-gray-200">
                    <img src="${found.photo }" alt="${found.nam}" class="w-full h-full ">
                </div>
                <h2 class="text-2xl font-bold text-gray-800">${found.nam}</h2>
                <p class="text-gray-600">${found.role}</p>
            </div>

            <div class="space-y-2 mb-6">
                <div class="flex items-center gap-2 text-gray-700">
                    <span class="font-medium">Email : <span>${found.email}</span></span>
                </div>
                <div class="flex items-center gap-2 text-gray-700">
                    <span class="font-medium">Téléphone : <span>${found.telephone}</span></span>
                </div>
            </div>

            <div class="placeexperience">
                <h3 class="font-bold text-lg text-gray-800 mb-3">Expériences</h3>
                ${found.experience && found.experience.length > 0 ? experence : `<p class="text-gray-500 text-center py-3">Aucune expérience</p>` }
            </div>

        </div>
    `
    document.querySelector("main").appendChild(sectiondetails)
    document.querySelector(".closform").addEventListener("click" , () => sectiondetails.remove())
    sectiondetails.addEventListener("click" , (e) => {
        if(!sectiondetails.querySelector(".allfomr").contains(e.target)){
            sectiondetails.remove()
        }
    })
}


function formadd(room , romclick) {
    let emplafich = employer.filter(ele => ele.room == "null" && romandrolle[room].includes(ele.role)) ;
    
    let popupaffich = document.createElement("section")
    popupaffich.className = "absolute top-0 left-0  w-screen h-screen bg-black/50"

    let cart = "";
    emplafich.forEach((ele) => {
        cart += `
            <div class ="flex justify-between items-center w-full gap-3 px-4 py-3 my-3 bg-white rounded-3xl shadow-md border border-gray-200">
                <div class="rounded-full overflow-hidden size-14 ">
                <img src="${ele.photo}" alt="">
                </div>
                
                <div class="flex-1 min-w-0">
                <h2 class="font-semibold text-gray-800 text-sm">${ele.nam}</h2>
                <p class="text-gray-500 text-xs">${ele.role}</p>
                </div>
                
                <button data-id="${ele.id}" class="px-3 py-1.5 bg-green-500 text-white text-sm rounded-md hover:bg-green-600 ">Ajjouter</button>
            </div>
        `
    })
    popupaffich.innerHTML = `
        <div class="allfomr bg-white p-8 rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-[50%] max-h-[90vh] overflow-y-auto ">
            <div >
                <div class="flex items-center justify-between">
                    <h3 class="font-bold text-3xl">Employer disponible</h3>
                    <button class="closform cursor-pointer text-gray-400 hover:text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div id="placecard">
                    ${emplafich.length > 0 ? cart : `<p class="text-gray-500 text-center text-xl py-3">Aucune employer for this room</p>`}
                </div>
            </div>
        </div>
    `
    document.querySelector("main").appendChild(popupaffich)
    popupaffich.querySelector(".closform").addEventListener("click" , () => popupaffich.remove())
    popupaffich.addEventListener("click" , (e) => {
        if(!popupaffich.querySelector(".allfomr").contains(e.target)){
            popupaffich.remove()
        }
    })
    document.querySelector("#placecard").addEventListener("click" , (e) => {
        if(e.target.matches("[data-id]")){
            let emplafich = employer.find(ele => ele.id == e.target.dataset.id)
            emplafich.room = room ;
            ajouteraroom(emplafich , popupaffich , romclick)
        }
    })
}


function ajouteraroom(empl , section , romclick) {
    section.remove() ;
    affichercart();
    let cart = document.createElement("div")
    cart.className = "flex  items-center  gap-3 px-2 py-1 my-1 bg-white rounded-3xl shadow-md border border-gray-200";
    cart.innerHTML = `
        <div class="rounded-full overflow-hidden size-8 border border-gray-600 ">
        <img src="${empl.photo}" alt="">
        </div>
        
        <div class=" min-w-0">
        <h2 class="font-semibold text-gray-800 text-[10px]">${empl.nam}</h2>
        <p class="text-gray-500 text-[10px]">${empl.role}</p>
        </div>
        
        <button data-id="${empl.id}" class="returnsidebar cursor-pointer text-red-500 hover:text-red-600 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
        </button>
    `
    romclick.appendChild(cart)
    
}





addexpe.addEventListener("click" , () => {

    let container = document.createElement("div")
    container.className = "formexper border border-gray-200 rounded-2xl p-4 space-y-3" ;
    let place = document.querySelector(".afterme")

    container.innerHTML = `
            <div class="flex flex-col">
              <label class="font-bold text-lg" >Enterprise</label>
              <input class="enterprise border outline-none px-3 py-2 rounded-3xl focus:border-green-400" type="text" placeholder="Nom de l'entreprise">
            </div>

            <div class="flex flex-col">
              <label class="font-bold text-lg" >Poste</label>
              <input class="post border outline-none px-3 py-2 rounded-3xl focus:border-green-400" id="post" type="text" placeholder="Titre du poste">
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div class="flex flex-col">
                <label class="font-bold text-lg" >Date début</label>
                <input class="dateDebut border outline-none px-3 py-2 rounded-3xl focus:border-green-400" type="date">
              </div>

              <div class="flex flex-col">
                <label class="font-bold text-lg" >Date fin</label>
                <input class="dateFin border outline-none px-3 py-2 rounded-3xl focus:border-green-400" type="date">
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
        telephone : document.querySelector("#Telephone").value ,
        experience : allexper,
        id : counterID++ , 
        room : "null"
    }
    
    employer.push(empl);

    affichercart();

    sectionform.classList.toggle("hidden");
    deletexperenceform();
    clearinput();
})

document.querySelector("#placeWorker").addEventListener("click" , (e) => {
    if(e.target.matches("button")){
        afficherdetailsofworckers(e.target.dataset.id)
    }
})

rooms.forEach((ele) => {
    ele.addEventListener("click" , (e) => {
        if(e.target.dataset.room){
            formadd(e.target.dataset.room , e.currentTarget);

        }
        if(e.target.closest("[data-id]")){
            let idremv = e.target.closest("[data-id]").dataset.id
            console.log(idremv)
            let removeele = employer.find(ele => ele.id == idremv)
            console.log(removeele)
            removeele.room = "null"
            e.target.closest("[data-id]").parentElement.remove();
            affichercart();
        }
    })
})


