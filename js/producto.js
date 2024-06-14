let queryLocation=location.search
let queryString=new URLSearchParams(queryLocation)
let id=queryString.get("id")

console.log(id)

fetch(`https://fakestoreapi.com/products/${id}`)

.then(function (resp) {
    return resp.json()
})

.then(function(data){
    console.log(data);

    let detalleProductoEspecifico = document.querySelector(".detalleProducto");
    
    detalleProductoEspecifico.innerHTML=`
    
        <div class="detalleProducto">
            <h2>${data.title}</h2>
            <p>Description: ${data.description}</p>
            <p>Precio: $${data.price}</p>
            <img src=${data.image} alt="detalleProducto"</img>
            <p>Category: ${data.category}</p>
        </div>
        `
    
})

.catch(function(err){
    console.log(err);
}) 

