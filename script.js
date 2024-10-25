const contentCard = (nama, img, deskripsi) => {
    return `<div class="img-card"><img class="img-card-child" src="img/image-card/${img}" alt="${nama}" /></div><div class="content-card"><h3 class="h3-card">${nama}</h3><p class="p-card">${deskripsi.substring(0, 50) + '...'}</p></div>`
}

const changeArtikel = (data, elemenGambar, elemenH1, elemenP) => {
    const imgAnimalArtikel = document.querySelector(`#${elemenGambar}`)
    imgAnimalArtikel.children[0].src = `img/${data.gambar_artikel}`
    imgAnimalArtikel.children[0].alt = `Gambar ${data.nama}`
    const h1AnimalArtikel = document.querySelector(`#${elemenH1}`)
    h1AnimalArtikel.textContent = data.nama
    const pAnimalArtikel = document.querySelector(`#${elemenP}`)
    pAnimalArtikel.textContent = data.deskripsi

}

const onClickElement = (elemen, data, elemenGambar, elemenH1, elemenP) => {
    elemen.addEventListener('click', () => {
        changeArtikel(data, elemenGambar, elemenH1, elemenP)
    })
}


fetch('data.json')
    .then(response => response.json())
    .then(response => {
        for (item of response.data) {
            if (item.type_hewan == "liar") {
                const containerCard = document.querySelector('#liar')
                for (data_item of item.data) {
                    if (data_item.id === "1") {

                        changeArtikel(data_item, 'hewan-liar-img', 'hewan-liar-h1', 'hewan-liar-p')
                    }
                    // ! menampilkan html
                    const elemenCard = document.createElement('div')
                    elemenCard.classList.add("card");
                    onClickElement(elemenCard, data_item, 'hewan-liar-img', 'hewan-liar-h1', 'hewan-liar-p')
                    elemenCard.innerHTML = contentCard(data_item.nama, data_item.gambar_card, data_item.deskripsi)
                    containerCard.appendChild(elemenCard)

                }
            } else if (item.type_hewan == "ternak") {
                const containerCard = document.querySelector('#ternak')
                for (data_item of item.data) {
                    if (data_item.id === "1") {

                        changeArtikel(data_item, 'hewan-ternak-img', 'hewan-ternak-h1', 'hewan-ternak-p')
                    }
                    // ! menampilkan html
                    const elemenCard = document.createElement('div')
                    elemenCard.classList.add("card");
                    onClickElement(elemenCard, data_item, 'hewan-ternak-img', 'hewan-ternak-h1', 'hewan-ternak-p')
                    elemenCard.innerHTML = contentCard(data_item.nama, data_item.gambar_card, data_item.deskripsi)
                    containerCard.appendChild(elemenCard)
                }
            } else if (item.type_hewan == "peliharaan") {
                const containerCard = document.querySelector('#peliharaan')
                for (data_item of item.data) {
                    if (data_item.id === "1") {

                        changeArtikel(data_item, 'hewan-peliharaan-img', 'hewan-peliharaan-h1', 'hewan-peliharaan-p')
                    }
                    // ! menampilkan html
                    const elemenCard = document.createElement('div')
                    elemenCard.classList.add("card");
                    onClickElement(elemenCard, data_item, 'hewan-peliharaan-img', 'hewan-peliharaan-h1', 'hewan-peliharaan-p')
                    elemenCard.innerHTML = contentCard(data_item.nama, data_item.gambar_card, data_item.deskripsi)
                    containerCard.appendChild(elemenCard)
                }
            }
        }
    })
    .catch(error => console.log(error));
