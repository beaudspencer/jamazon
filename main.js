var app = {
  view: 'catalog',
  cart: [],
  catalog: {
    items: [
      {
        itemId: 1,
        brand: 'Ludwig',
        name: 'Black Beauty',
        price: 749.99,
        description: 'A snare drum for people with too many drumsticks.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'United States',
        imageUrl: 'https://goo.gl/ubY0QA'
      },
      {
        itemId: 2,
        name: 'Darbuka',
        brand: 'Vatan',
        price: 79.99,
        description: 'A hand drum for people who like belly dancing.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Turkey',
        imageUrl: 'https://static.bax-shop.nl/image/product/153173/302981/0c2d119f/450x450/Meinl_HE_124_darbuka.jpg'
      },
      {
        itemId: 3,
        name: 'Djembe',
        brand: 'Remo',
        price: 49.99,
        description: 'A hand drum for people with dreadlocks.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'West Africa',
        imageUrl: 'https://goo.gl/iKtU8x'
      },
      {
        itemId: 4,
        name: 'Hi-Hats',
        brand: 'Paiste',
        price: 400,
        description: 'A set of hats for people who spare no expense.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Switzerland',
        imageUrl: 'https://goo.gl/LV9l8O'
      },
      {
        itemId: 5,
        name: 'Giant Step',
        brand: 'Sonor',
        price: 599,
        description: 'A pedal for metal drummers with only one foot.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Germany',
        imageUrl: 'https://goo.gl/zsFo1q'
      },
      {
        itemId: 6,
        name: 'Travis Barker Signature',
        brand: 'Zildjian',
        price: 24.99,
        description: 'A set of drumsticks from the 90s.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'United States',
        imageUrl: 'https://goo.gl/Cro3tL'
      },
      {
        itemId: 7,
        name: 'Bodhran',
        brand: 'Meinl',
        price: 129.99,
        description: 'A frame drum for people who like to jig.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Ireland',
        imageUrl: 'https://goo.gl/YNb74O'
      },
      {
        itemId: 8,
        name: 'TR-09',
        brand: 'Roland',
        price: 399,
        description: 'A drum machine for people with no desk space.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Japan',
        imageUrl: 'https://goo.gl/gJYUxz'
      }
    ]
  },
  details: {
    item: null
  }
}

function createElement(tagName, attributes, children) {
  var $element = document.createElement(tagName)
  if (attributes) {
    for (var name in attributes) {
      var value = attributes[name]
      $element.setAttribute(name, value)
    }
  }
  for (var i = 0; i < children.length; i++) {
    var child = children[i]
    if (child instanceof Node) {
      $element.appendChild(child)
    }
    else {
      var textNode = document.createTextNode(child)
      $element.appendChild(textNode)
    }
  }
  return $element
}

function renderCatalogItem(catalogItem) {
  return createElement('div', {class: 'card border-info', itemID: catalogItem.itemId, style: 'width: 18.5rem; height: 30rem; margin: 0 auto;'}, [
    createElement('div', {class: 'card-body'}, []),
    createElement('img', {class: 'card-img', src: catalogItem.imageUrl}, []),
    createElement('div', {class: 'card-body'}, []),
    createElement('div', {class: 'card-footer'}, [
      createElement('h5', {class: 'card-title'}, [catalogItem.name]),
      createElement('h6', {class: 'card-subtitle'}, [catalogItem.brand]),
      createElement('p', {class: 'card-text text-success text-right'}, [('$' + catalogItem.price)])
    ])])
}

function renderItemDetails(catalogItem) {
  return createElement('div', {class: 'details'}, [
    createElement('h1', {class: 'text-center text-primary'}, ['Jamazon']),
    createElement('div', {class: 'card border-info align-middle', style: 'width: 40rem; margin: 0 auto;'}, [
      createElement('h5', {class: 'card-title ml-2'}, [catalogItem.name, ' -- ',
        createElement('span', {class: 'text-muted'}, [catalogItem.description])
      ]),
      createElement('div', {class: 'card-body'}, [
        createElement('div', {class: 'card border-info float-left mr-3', style: 'width: 14rem;'}, [
          createElement('img', {class: 'card-img p-2', src: catalogItem.imageUrl}, [])
        ]),
        createElement('p', {class: 'card-text'}, [catalogItem.details])
      ]),
      createElement('div', {class: 'card-footer'}, [
        createElement('span', {class: 'card-text text-success float-right mt-2'}, [('$' + catalogItem.price)]),
        createElement('button', {class: 'btn btn-primary float-right mr-3', id: 'add'}, ['Add']),
        createElement('button', {class: 'btn btn-warning ml-3', id: 'return'}, ['Back'])
      ])
    ])
  ])
}

function renderCatalog(catalog) {
  var $container = createElement('div', {class: 'container-fluid'}, [
    createElement('h1', {class: 'text-center text-primary'}, ['Jamazon'])])
  var $row = createElement('div', {class: 'row justify-content-start'}, [])
  $container.appendChild($row)
  for (var c = 0; c < catalog.items.length; c++) {
    $row.appendChild(createElement('div', {class: 'col p-3'}, [renderCatalogItem(catalog.items[c])]))
  }
  return $container
}

function findItem(catalogItems, id) {
  for (var c = 0; c < catalogItems.length; c++) {
    if (catalogItems[c].itemId === id) {
      return catalogItems[c]
    }
  }
}

function getTotal(cart) {
  var total = 0
  for (var c = 0; c < cart.length; c++) {
    total += cart[c].price
  }
  return total
}

function renderCartCount(cart) {
  return createElement('div', {class: 'float-right m-3'}, [
    createElement('h6', {class: 'text-primary'}, [('Cart (' + cart.length + ')')])
  ])
}

function renderCartItem(cartItem) {
  return createElement('div', {class: 'row', style: 'margin: 0 auto;'}, [
    createElement('div', {class: 'col'}, [
      createElement('div', {style: 'width: 26rem;'}, [
        createElement('img', {class: 'card-img float-left', src: cartItem.imageUrl}, [])
      ])
    ]),
    createElement('div', {class: 'col'}, [
      createElement('div', {class: 'card float-right', style: 'height: 100%;'}, [
        createElement('h5', {class: 'card-header text-dark'}, [(cartItem.name + ' - ' + cartItem.brand)]),
        createElement('p', {class: 'card-body'}, [cartItem.details]),
        createElement('p', {class: 'text-success text-right mr-3'}, [('$' + cartItem.price)])
      ])
    ])
  ])
}

function renderCartSummary(cart) {
  var $cartSummary = createElement('div', {}, [
    createElement('h2', {class: 'text-center text-primary'}, ['Cart'])
  ])
  var $cartList = createElement('ul', {class: 'list-group'}, [])
  $cartSummary.appendChild($cartList)
  for (var c = 0; c < cart.length; c++) {
    $cartList.appendChild(createElement('li', {class: 'list-group-item'}, [renderCartItem(cart[c])]))
  }
  $cartList.appendChild(createElement('div', {class: 'text-right', style: 'margin-right: 3rem;'}, [
    createElement('p', {style: 'margin-top: 2rem;'}, [(cart.length + ' item(s)')]),
    createElement('p', {class: 'text-success mt-3'}, [('Total: $' + getTotal(cart))])
  ]))

  $cartSummary.appendChild(createElement('button', {class: 'btn btn-warning float-right', style: 'margin: 0 8.5rem 0 0;', id: 'continue'}, ['Continue Shopping']))
  $cartSummary.appendChild(createElement('div', {class: 'text-right', style: 'margin: 3.5rem 8.5rem;'}, [
    createElement('button', {class: 'btn btn-primary', id: 'checkout'}, ['Checkout'])
  ]))
  return $cartSummary
}

function renderCheckout(cart) {
  return createElement('div', {class: ''}, [
    createElement('h2', {class: 'text-center text-primary'}, ['Checkout']),
    createElement('div', {class: 'card'}, [
      createElement('h4', {class: 'card-header text-center'}, ['Customer Info']),
      createElement('div', {class: 'card-body'}, [
        createElement('input', {type: 'text', class: 'form-control mt-3', placeholder: 'Name'}, []),
        createElement('input', {type: 'text', class: 'form-control mt-3', placeholder: 'Adress'}, []),
        createElement('input', {type: 'text', class: 'form-control mt-3', placeholder: 'Credit Card'}, [])
      ]),
      createElement('div', {class: 'text-right mr-3'}, [
        createElement('p', {}, [(cart.length + ' item(s)')]),
        createElement('p', {class: 'text-success mt-2'}, [('Total: $' + getTotal(cart))])
      ]),
      createElement('div', {class: 'card-footer text-center'}, [
        createElement('button', {class: 'btn btn-primary'}, ['Pay'])
      ])
    ])
  ])
}

function viewState(view) {
  var $containers = document.querySelectorAll('[data-view]')
  for (var c = 0; c < $containers.length; c++) {
    if ($containers[c].getAttribute('[data-view]') !== view) {
      $containers[c].classList.add('hidden')
    }
    else {
      $containers[c].classList.remove('hidden')
    }
  }
}

function renderAppState(appState) {
  $catalog.innerHTML = ''
  $details.innerHTML = ''
  $cart.innerHTML = ''
  viewState(app.view)
  $cart.appendChild(renderCartCount(appState.cart))
  if (appState.view === 'catalog') {
    $catalog.appendChild(renderCatalog(appState.catalog))
  }
  else if (appState.view === 'details') {
    $details.appendChild(renderItemDetails(appState.details.item))
  }
  else if (appState.view === 'cart') {
    $cart.appendChild(renderCartSummary(appState.cart))
  }
  else if (appState.view === 'checkout') {
    $checkout.appendChild(renderCheckout(appState.cart))
    $cart.innerHTML = ''
  }
}

var $catalog = document.querySelector('[data-view="catalog"]')
var $details = document.querySelector('[data-view="details"]')
var $cart = document.querySelector('[data-view="cart"]')
var $checkout = document.querySelector('[data-view="checkout"]')

renderAppState(app)

$catalog.addEventListener('click', function (event) {
  var $selectedCard = event.target.closest('[itemID]')
  if ($selectedCard !== null) {
    var idNum = $selectedCard.getAttribute('itemID')
    idNum = parseInt(idNum, 10)
    app.view = 'details'
    app.details.item = findItem(app.catalog.items, idNum)
  }
  renderAppState(app)
})

$cart.addEventListener('click', function (event) {
  var $target = event.target
  app.view = 'cart'
  if ($target.getAttribute('id') === 'continue') {
    app.view = 'catalog'
  }
  if ($target.getAttribute('id') === 'checkout') {
    app.view = 'checkout'
  }
  renderAppState(app)
})

$details.addEventListener('click', function (event) {
  var $clicked = event.target
  if ($clicked.getAttribute('id') === 'add') {
    app.cart.push(app.details.item)
  }
  if ($clicked.getAttribute('id') === 'return') {
    app.view = 'catalog'
  }
  renderAppState(app)
})
