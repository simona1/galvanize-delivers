const FOOD_CHOICES = [
  {name: 'Royale with Cheese', price: 8.99, imageUrl: 'img/burger.jpg'},
  {name: 'Arugula Pie', price: 11.99, imageUrl: 'img/pizza.jpg'},
  {name: 'Smoked Swine', price: 14.99, imageUrl: 'img/ribs.jpg'},
  {name: 'Ice Cream Biscuit', price: 7.99, imageUrl: 'img/ice_cream.jpg'},
];

function makeItemOrderButton() {
  return $('<div>')
    .addClass('card-action')
    .append(
      $('<a>')
        .attr('href', '#')
        .text('Add to order')
    );
}

function makeItemDescription(name, price) {
  return $('<div>')
    .addClass('card-content')
    .append(
      $('<span>')
        .addClass('card-title')
        .text(name)
    )
    .append('$' + price);
}

function makeItemImage(imageUrl) {
  return $('<div>')
    .addClass('card-image')
    .append($('<img>').attr('src', imageUrl));
}

function makeItemCard(item) {
  return $('<div>')
    .addClass('col s12 l6 item')
    .append(
      $('<div>')
        .addClass('card small')
        .append(makeItemImage(item.imageUrl))
        .append(makeItemDescription(item.name, item.price))
        .append(makeItemOrderButton())
    );
}

function init() {
  const rows = [];
  FOOD_CHOICES.map(makeItemCard).forEach((item, i) => {
    if (i % 2 === 0) {
      rows.push($('<div>').addClass('row'));
    }
    rows[rows.length - 1].append(item);
  });
  $('#menu').append(rows);
}

window.onload = init;
