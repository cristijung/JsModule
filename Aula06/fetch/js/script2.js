// Referência do Fetch: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// Referência do Dog API: https://docs.thedogapi.com/
// Referência do Bootstrap: https://getbootstrap.com/docs/5.2/forms/form-control/

const pesquisarRaca = async () => {
    let raca = document.getElementById('raca').value;

    if (raca.trim() === "") {
        document.getElementById('resposta').innerHTML = `<h5>O campo raça deve ser preenchido</h5>`
    } else {
        await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${raca}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
        }).then((dogs) => {
            if (dogs.length === 0) {
                document.getElementById('resposta').innerHTML = `<h5>Raça não encontrada</h5>`
            } else {
                document.getElementById('resposta').innerHTML =
                    `<div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${dogs[0]['name']}</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><b>Grupo:</b> ${dogs[0]['breed_group']}</li>
                            <li class="list-group-item"><b>Expectativa de vida:</b> ${dogs[0]['life_span']}</li>
                            <li class="list-group-item"><b>Temperamento:</b> ${dogs[0]['temperament']}</li>
                        </ul>
                    </div><br>`
            }
        })
    }
};