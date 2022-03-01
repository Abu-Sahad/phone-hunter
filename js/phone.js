const allPhone = () => {
    const searchText = document.getElementById('phoneSearch').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => displaySearchResult(data.data))


}
const displaySearchResult = (phones) => {
    const Totalphone = document.getElementById('total-phone')
    phones.slice(0, 20).forEach(phone => {

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `<div class="card h-100">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
               <h2 class="phone-name">${phone.phone_name}</h2>
               <h3 class="phone-brand">${phone.brand}</h3>
               <button onclick="phoneDetails('${phone.slug}')" id="cal-button" class="calculator-button mx-auto mt-3 mb-3">Details</button>
        </div>
        
    </div>`
        Totalphone.appendChild(div)

    });
}
const phoneDetails = (id) => {
    const url = ` https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => setDetails(data.data))
}

const setDetails = (info) => {
    console.log(info)
    document.getElementById("phone-details").innerHTML = `
    <div class="card h-100">
       <div class="details-img-info ">
           <img class="card-img-top w-50 h-25 mt-3" src="${info.image}" alt="Card image cap">
        </div>
        <div class="card-body">
           <p class="">Release-Date:${info.releaseDate}</p>
           <h5 class="other-details">Main features:<br>
              Chipset:${info.mainFeatures.chipSet}<br>
              display-Size:${info.mainFeatures.displaySize}<br>
              Memory:${info.mainFeatures.memory}
            </h5>
        
            <button onclick="phoneMoreInfo('')" id="cal-button" class="calculator-button mx-auto mt-3 mb-3">More Info</button>
        
        </div>
    </div>`;




};