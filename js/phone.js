const allPhone = () => {
    const searchField = document.getElementById('phoneSearch');
    const searchText = searchField.value
    //clear data
    searchField.value = '';
    if (searchText == '') {
        //please write someting to display 
    }
    else {
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => displaySearchResult(data.data))
    }



}
const displaySearchResult = (phones) => {
    const totalPhone = document.getElementById('total-phone')
    //Load data clear
    totalPhone.textContent = '';

    if (phones.length == 0) {
        //show no result found
    }

    phones.slice(0, 20).forEach(phone => {

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <div class="img-info ">
                <img src="${phone.image}" class="card-img-top w-75  mt-3" alt="...">
            </div>
            <div class="card-body text-center">
               <h4 class="phone-brand">Brand: ${phone.brand}</h4>
               <p class="phone-name"><span class="fw-bolder">Model: </span>${phone.phone_name}<p>
               <button onclick="phoneDetails('${phone.slug}')" id="cal-button" class="calculator-button mx-auto mt-3 mb-3">Details</button>
            </div>
        
        </div>`
        totalPhone.appendChild(div)

    });
}
const phoneDetails = (id) => {
    const url = ` https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => setDetails(data.data))
}

const setDetails = (info) => {
    textContent = '';
    document.getElementById("phone-details").innerHTML = `
    <div class="card h-100 ">
       <div class="img-info ">
           <img class="card-img-top w-50 img-fluid mx-auto mt-3" src="${info.image}" alt="Card image cap">
        </div>
        <div class="card-body">
            <p class="phone-details"><span class="fw-bolder">Phone Name: </span> ${info.name}</p>
            <p class="phone-details"><span class="fw-bolder">Release-Date: </span>${info.releaseDate}</p>
            <h5 class="other-details">Main features:</h5>
            <p class="phone-details"><span class="fw-bolder">Chipset: </span>${info.mainFeatures.chipSet}</p>
            <p class="phone-details"><span class="fw-bolder">display-Size: </span>${info.mainFeatures.displaySize}</p>
            <p class="phone-details"><span class="fw-bolder">Memory: </span>${info.mainFeatures.memory}</p>
            <p class="phone-details"><span class="fw-bolder">Release-Date: </span>${info.releaseDate}</p>
            <button onclick="phoneMoreInfo('')" id="cal-button" class="calculator-button mx-auto mt-3 mb-3">More Info</button>
        
        </div>
    </div>`;




};