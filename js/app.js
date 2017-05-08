const FOOD_CHOICES = [
  {name: 'Royale with Cheese', price: '$8.99', picture: 'img/burger.jpg'},
  {name: 'Arugula Pie', price: '$11.99', picture: 'img/pizza.jpg'},
  {name: 'Smoked Swine', price: '$14.99', picture: 'img/ribs.jpg'},
  {name: 'Ice Cream Biscuit', price: '$7.99', picture: 'img/ice_cream.jpg'},
];

/*
function createMenu() {


}
*/






function makeTagWithClass(tag, name) {
  return $(tag).addClass(name);
}


function createCard(cardInfo) {
  const card = makeTagWithClass('div', 'card');

  const cardImage = makeTagWithClass('div', 'card-image');
  const imageSource = ['<img src=', cardInfo.picture, '>'].join();
  const imageTag = $(imageSource);

  const cardTitle = makeTagWithClass('span', 'card-title').append(cardInfo.name);
  const itemPrice = makeTagWithClass('span', 'price').append(cardInfo.price);

  const a = $('<a>').append('Add to order').attr('href', "#");
  const cardAction = makeTagWithClass('div', 'card-action').append(a);
  return card;
}

/*
<div class="row">
  <div class="col s12 m7">
    <div class="card">
      <div class="card-image">
        <img src="img/pizza.jpg">
        <span class="card-title">Arugula Pie</span>
        <span class="price">Price</span>
      </div>
      <div class="card-action">
        <a href="#">Add to order</a>
      </div>
    </div>
  </div>
</div>
*/
