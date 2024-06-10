let queryLocation=location.search
let queryString=new URLSearchParams(queryLocation)
let id= queryString.get("id")

console.log(id);

fetch(`https://fakestoreapi.com/products/${id}`)
.then(function(resp){
return resp.json()
})

.then(function(data){
console.log(data);
})
.catch(function(err){
console.log(err);
})