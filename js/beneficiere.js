
const userData = [
    { nom: "zaki", Rib: "876947592837401837491784" },
    { nom: "lahmar", Rib: "876947592837401837491784" },
    { nom: "ayoub", Rib: "876947592837401837491784" }
];


const tableBody = document.getElementById('tableBeneficier');

tableBody.className='divide-y divide-gray-100 text-gray-800';

userData.forEach(personne => {
    const row = tableBody.insertRow();
    
    let cellNom = row.insertCell();
    cellNom.textContent = personne.nom;
    cellNom.className = 'px-6 py-3';

    let cellRIB = row.insertCell();
    cellRIB.textContent = personne.Rib;
    cellRIB.className = 'px-6 py-3';

    let cellActions = row.insertCell();
    cellActions.className = 'px-6 py-3';

    const htmlContent = `
        <div class="flex gap-3 justify-center items-center">
            <button data-modal-target="default-modal" data-modal-toggle="default-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button" >
                Modifier
            </button>

            <button class="block text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button">
                supprimer
            </button>
        </div>
        
    `;

    cellActions.innerHTML = htmlContent;

    
});
