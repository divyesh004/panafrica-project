function fetchdata() {
    fetch("https://panafrica-server.onrender.com/cartpage")
        .then((res) => res.json())
        .then((data) => CardList(data))
        .catch((err) => console.log(err))
}
fetchdata()

function CardList(data) {
    let totalcard = data.map((el) => SignleCard(el.image, el.tittle, el.price,el.id))
    document.getElementById("main-card").innerHTML = totalcard.join("")
}

function SignleCard(image, tittle, price ,id) {
    let card = `
    <div class="container">
        <div class="row">
            <div class="col-12 flex-column flex-lg-row border d-flex align-items-center justify-content-between mb-2">
                <div class="col-12 col-lg-2 p-2" >
                    <img src="${image}"
                        alt="" class="img-fluid" >
                </div>
                <div class="col-12 col-lg-8 text-center">
                    <h2 class="mb-0 text-uppercase" >${tittle} </h2>
                    <p class="mb-0 fs-4 text-secondary">${price}</p>
                </div>
                <div class="col-3">
                    <div style=" text-align: center; font-size: 20px;" ><i class="bi bi-trash3 delete" style="cursor: pointer;" data-id=${id}></i>
                    </div>
                </div>
            </div>
        </div>

    </div>
    `
    return card
}
document.addEventListener("click",(event)=>{
    if(event.target.classList.contains("delete")){
        deleteproduct(event.target.dataset.id);
    }
})

function deleteproduct(id)
{
    fetch(`https://panafrica-server.onrender.com/cartpage/${id}`,{
        method: "DELETE",

    })
    .then((res)=>res.json())
    .then((data)=>{
        alert("YOUR ITEM IS DELETE")
    })
    .catch((err)=>console.log(err))
}

