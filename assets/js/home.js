   let id = null;
   window.onload = function(){
    let products2 = JSON.parse(localStorage.getItem("products2")) || {};
    const productTable = document.getElementById("products")
    for(i in products2){
         productTable.innerHTML += `<tr class="productRow">
                    <td scope="row"><strong>${i}</strong></td>
                    <td>${products2[i].name}</td>
                    <td>${products2[i].price}</td>
                    <td>${products2[i].description}</td>
                    <td><button onclick="deleteProduct(this)" class="btn btn-danger">Eliminar</button></td>
                    <td><button onclick="create2(this)" class="btn btn-warning">Actualizar</button></td>
                </tr>`
    }
    console.log(products2)
}
function create() {
    const form = document.getElementById("product-form")
    form.classList.remove("d-none")
}

const rows = document.querySelectorAll(".productRow")

function logout(){
    sessionStorage.setItem("auth", false)
    window.location = "../login.html"
}
function add() {
    const productName = document.getElementById("productName")
    const productPrice = document.getElementById("productPrice")
    const productDescription = document.getElementById("productDescription")
    const productTable = document.getElementById("products")
    let correo = sessionStorage.getItem("usuario");
    if(!productName.value || !productDescription.value || !productPrice.value){
        alert("Campos vacios. Llene todos los campos")
    }
    else{
    let counter = Number(localStorage.getItem("counter")) || 0;
    counter++
    let products2 = JSON.parse(localStorage.getItem("products2")) || {};
    products2[correo][counter] = {"name": productName.value.toLowerCase(), "price":productPrice.value.toLowerCase(), "description": productDescription.value.toLowerCase()}
    localStorage.setItem("products2", JSON.stringify(products2));
    localStorage.setItem("counter", counter)
    productTable.innerHTML += `<tr class="productRow">
                    <td scope="row"><strong>${counter}</strong></td>
                    <td>${products2[counter].name}</td>
                    <td>${products2[counter].price}</td>
                    <td>${products2[counter].description}</td>
                    <td><button onclick="deleteProduct(this)" class="btn btn-danger">Eliminar</button></td>
                    <td><button onclick="create2(this)" class="btn btn-warning">Actualizar</button></td>
                    </tr>`
    document.getElementById("newProductForm").reset()
    location.reload();
    console.log(products2)
    }

}
function create2(button) {
    const row = button.closest("tr");
    id = row.querySelector("td").innerText.trim()
    const form = document.getElementById("product-form2")
    form.classList.remove("d-none")
}
function update() {
  const productName2 = document.getElementById("productName2");
  const productPrice2 = document.getElementById("productPrice2");
  const productDescription2 = document.getElementById("productDescription2");
  let products2 = JSON.parse(localStorage.getItem("products2")) || {};
  if (productName2.value)
  {
    products2[id] = {
    name: productName2.value.toLowerCase(),
    price: products2[id].price,
    description : products2[id].description
    };
    };
  if (productPrice2.value)
  {
    products2[id] = {
    name : products2[id].name,
    price: productPrice2.value.toLowerCase(),
    description : products2[id].description

    };
    };
    if (productDescription2.value)
  {
    products2[id] = {
    name : products2[id].name,
    price: products2[id].price,
    description: productDescription2.value.toLowerCase()
  };
    };

    if(!productName2.value && !productPrice2.value && !productDescription2.value)
    {
        alert(" No relleno ningun campo");
    }

  localStorage.setItem("products2", JSON.stringify(products2));
  document.getElementById("updtProductForm")?.reset();
  console.log("Producto actualizado:", products2[id]);
  location.reload();
}


function deleteProduct(button) {
    const row = button.closest("tr");
    const id = row.querySelector("td").innerText.trim("")
    let products2 = JSON.parse(localStorage.getItem("products2")) || {};
    delete products2[id];
    localStorage.setItem("products2", JSON.stringify(products2));
    location.reload();
}

