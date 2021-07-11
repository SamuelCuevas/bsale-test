function getData() {

  let text = document.getElementById('search').value;
  handleSearch(text);

}

const getProducts = ( data, method = 'GET' ) => {

const url = 'https://bsale-test-samuelcuevas.herokuapp.com/api';

if( method === 'GET' ){

  return fetch( url )
    .then(function (response) {
      return response;
    });

} else{
    alert( 'An error has ocurred' );
}

}

const getSearch = ( data, method = 'POST' ) => {

    const url = 'https://bsale-test-samuelcuevas.herokuapp.com/api/search';

    if( method === 'POST' ){
        return fetch(url, {
            method,
            headers : {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        }).then(function (response) {
          return response;
          });
    } else{
        alert( 'An error has ocurred' );
    }

}

const handleSearch = async(text) => {

  const resp = await getSearch({ text }, 'POST');
  const body = await resp.json();
  let { productsFiltered } = body;

  let card = document.getElementById('card');
  
  let p = document.getElementById('p');

  card.innerHTML = '';

  if(productsFiltered.length === 0) {
    card.innerHTML= `
    <div class="alert alert-warning empty" role="alert">
    No hay productos para esta busqueda
    </div>`;
    p.appendChild(card);
  } else {
    for( let item of productsFiltered) {
    
      card.innerHTML += `
      <div class="card shadow product">
      <img src="${ item.url_image }" id="url_image" class="card-img-top">
      <div class="card-body">
      <h5 class="card-title" id="name">${ item.name }</h5>
      <hr>
      <div class="row no-gutters">
      <div class="col-md-8">
      <p class="card-text" id="price">$ ${ item.price }</p>
      <span class="badge bg-danger">Descuento: ${ item.discount }%</span>
      </div>
  
     <div class="col-md-4">
     <span style="font-size: 3em; color: Tomato;"><i class="fas fa-cart-plus"></i></span>
     </div>
  
     </div>
      </div>
      </div>
      `;
  
  
    }
    p.appendChild(card);
  }


}

const handleProducts = async() => {
  const resp = await getProducts();
  const body = await resp.json();
  let data = body.product;

  let card = document.getElementById('card');
  
  let p = document.getElementById('p');

  card.innerHTML = '';
  
  for( let item of data) {
    
    card.innerHTML += `
    <div class="card shadow product">
    <img src="${ item.url_image }" id="url_image" class="card-img-top">
    <div class="card-body">
    <h5 class="card-title" id="name">${ item.name }</h5>
    <hr>
    <div class="row no-gutters">
    <div class="col-md-8">
    <p class="card-text" id="price">$ ${ item.price }</p>
    <span class="badge bg-danger">Descuento: ${ item.discount }%</span>
    </div>

   <div class="col-md-4">
   <span style="font-size: 3em; color: Tomato;"><i class="fas fa-cart-plus"></i></span>
   </div>

   </div>
    </div>
    </div>
    `;


  }
  p.appendChild(card);

}

handleProducts();




