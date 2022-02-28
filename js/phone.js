const allPhone = () => {
    const searchText = document.getElementById('phoneSearch').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => displaySearchResult(data.data))


}
const displaySearchResult = (phones) => {
    const Totalphone = document.getElementById('total-phone')
    phones.forEach(phone => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `<div class="card">
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
    const phoneDetail = document.getElementById('phone-details').innerHTML = `
    <div>
    <img class="card-img-top" src="${info.image}" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
            the
            card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>`;




}
