
const userData = [
    { id:1, nom: "Lahmar Zakariae", Rib: "876947592837401837491784" }
];

let jsonUserData = JSON.stringify(userData);

localStorage.setItem("userData", jsonUserData);


const listeBeneficier = document.getElementById('listeBeneficier');


let data1 = JSON.parse(localStorage.getItem("userData") || "[]");

listeBeneficier.className = 'divide-y divide-gray-100 text-gray-800';

data1.forEach( (d ) => {
    
    const li = document.createElement("li");
    li.className = 'flex flex-col md:flex-row md:justify-between md:items-center p-4 mb-3 rounded-lg shadow-lg bg-white border-0 gap-4';
    li.innerHTML = `<div class="flex-1 flex flex-col sm:flex-row sm:gap-6">
        
        <div class="flex-1">
            <span class="font-bold sm:hidden">Nom: </span>
            <span class="text-gray-800">${d.nom}</span>
        </div>

        <div class="flex-1">
            <span class="font-bold sm:hidden">RIB: </span>
            <span class="text-gray-800">${d.Rib}</span>
        </div>
    </div>

    <div class="flex flex-col sm:flex-row gap-3 justify-end items-center mt-4 md:mt-0">
        
        <button 
            data-modal-target="default-modal" 
            data-modal-toggle="default-modal" 
            class="block w-full sm:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" 
            type="button"
            aria-label="Modifier le bénéficiaire">
            Modifier
        </button>

        <button 
            class="block w-full sm:w-auto text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" 
            type="button"
            aria-label="Supprimer le bénéficiaire" onclick="supprimer(${d.id})">
            Supprimer
        </button>

    </div>
    `;
    listeBeneficier.appendChild(li);


});


function supprimer(id) {
  if (!confirm("Voulez-vous vraiment supprimer ce versement ?")) return;
    data1.splice(id, 1);

}