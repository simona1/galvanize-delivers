const FOOD_CHOICES = [
  {name: 'Royale with Cheese', price: 8.99, imageUrl: 'img/burger.jpg'},
  {name: 'Arugula Pie', price: 11.99, imageUrl: 'img/pizza.jpg'},
  {name: 'Smoked Swine', price: 14.99, imageUrl: 'img/ribs.jpg'},
  {name: 'Ice Cream Biscuit', price: 7.99, imageUrl: 'img/ice_cream.jpg'},
];

function makeItemOrderButton(name, price) {
  return $('<div>')
    .addClass('card-action')
    .append(
      $('<a>')
        .attr('href', '#')
        .text('Add to order')
        .click(event => {
          event.preventDefault();
          addItemToCart(name, price);
        })
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
    .append(numberToDollarString(price));
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
        .append(makeItemOrderButton(item.name, item.price))
    );
}

function dollarsStringToNumber(priceString) {
  return parseFloat(priceString.substring(1));
}

function numberToDollarString(number) {
  return '$' + number.toFixed(2);
}

function addItemToCart(name, price) {
  $('#items').append(
    $('<tr>')
      .append($('<td>').text(name))
      .append($('<td>').text(numberToDollarString(price)))
  );

  const subtotal = price + dollarsStringToNumber($('#subtotal').text());

  $('#subtotal').text(numberToDollarString(subtotal));
  $('#tax').text(numberToDollarString(0.1 * subtotal));
  $('#total').text(numberToDollarString(1.1 * subtotal));
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

  $('#order_button').click(event => {
    event.preventDefault();

    let message;
    if (dollarsStringToNumber($('#total').text()) === 0) {
      message = 'there is no toast :(';
    } else if ($('#customer').val() === '') {
      message = 'are you Bill Gates?';
    } else if ($('#telephone').val() === '') {
      message = 'no phone provided';
    } else if ($('#address').val() === '') {
      message = 'no address provided';
    } else {
      message = 'enjoy your arugula pie, should gotten some cannolis though';
    }
    Materialize.toast(message, 4000);
  });
}

window.onload = init;
