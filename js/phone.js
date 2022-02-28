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
        </div>
    </div>`
        Totalphone.appendChild(div)

    });
}