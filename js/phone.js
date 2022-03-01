const allPhone = () => {
    //search 
    const searchField = document.getElementById('phoneSearch');
    const searchText = searchField.value;
    document.getElementById('total-phone').textContent = '';
    document.getElementById("phone-details").textContent = '';
    if (searchText == '') {
        document.getElementById('search-area').classList.remove('d-none');
    }
    else {
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => displaySearchResult(data.data))
    }
    searchField.value = '';
}
//total phone area
const displaySearchResult = (phones) => {
    const totalPhone = document.getElementById('total-phone');
    totalPhone.textContent = '';
    if (phones !== 'object') {
        document.getElementById('search-area').classList.remove('d-none');
    }
    phones.slice(0, 20).forEach(phone => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card shadow-lg p-3 mb-5 bg-white rounded" id="card-info">
            <div class="img-info ">
                <img src="${phone.image}" class="card-img-top w-75  mt-3" alt="...">
            </div>
            <div class="card-body text-center">
               <p class="phone-name"><span class="fw-bolder">Model: </span>${phone.phone_name}<p>
               <h4 class="phone-brand">Brand: ${phone.brand}</h4>
               <button onclick="phoneDetails('${phone.slug}')" id="cal-button" class="calculator-button mx-auto mt-3 mb-3">Details</button>
            </div>
        </div>`
        document.getElementById('search-area').classList.add('d-none')
        totalPhone.appendChild(div)
    });
}

//Phone details area
const phoneDetails = (id) => {
    const url = ` https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => setDetails(data.data))
}

const setDetails = (info) => {
    document.getElementById("phone-details").innerHTML = `
    <div class="card h-100 ">
       <div class="img-info ">
           <img class="card-img-top w-50 img-fluid mx-auto mt-3" src="${info.image}" alt="Card image cap">
        </div>
        <div class="card-body">
            <p class="phone-details"><span class="fw-bolder">Phone Name: </span> ${info.name}</p>
            <p class="phone-details"><span class="fw-bolder">Release-Date: </span>${info.releaseDate ? info.releaseDate : 'relese date comming soon'}</p>
            <h5 class="other-details">Main features:</h5>
            <p class="phone-details"><span class="fw-bolder">Chipset: </span>${info.mainFeatures.chipSet}</p>
            <p class="phone-details"><span class="fw-bolder">display-Size: </span>${info.mainFeatures.displaySize}</p>
            <p class="phone-details"><span class="fw-bolder">Memory: </span>${info.mainFeatures.memory}</p>
            
            <p class="phone-sensors"><span class="fw-bolder">Sensor: </span>${info.mainFeatures.sensors}</p>
            
            <h4 class="text-info text-center"> Others Information</h4>
            
            <p class="phone-others"><span class="fw-bolder">WLAN: </span>${info.others?.WLAN ? info.others.WLAN : 'error'}</p>
            <p class="phone-others"><span class="fw-bolder">Bluetooth: </span>${info.others?.Bluetooth ? info.others.Bluetooth : 'error'}</p>
            <p class="phone-others"><span class="fw-bolder">GPS: </span>${info.others?.GPS ? info.others.GPS : 'error'}</p>
            <p class="phone-others"><span class="fw-bolder">NFC: </span>${info.others?.NFC ? info.others.NFC : 'error'}</p>
            <p class="phone-others"><span class="fw-bolder">Radio: </span>${info.others?.Radio ? info.others.Radio : 'error'}</p>
            <p class="phone-others"><span class="fw-bolder">USB: </span>${info.others?.USB ? info.others.USB : 'error'}</p>
        </div>
    </div>`;




};