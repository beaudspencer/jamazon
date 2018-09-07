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
        createElement('button', {class: 'btn btn-primary float-left'}, ['Add']),
        createElement('p', {class: 'card-text text-success text-right mt-2'}, [('$' + catalogItem.price)])
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

function renderCartCount(cart) {
  return createElement('div', {class: 'float-right m-3'}, [
    createElement('h6', {class: 'text-primary'}, [('Cart (' + cart.length + ')')])
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
  if (appState.view === 'catalog') {
    $catalog.appendChild(renderCatalog(appState.catalog))
  }
  else {
    $details.appendChild(renderItemDetails(appState.details.item))
  }
  $cart.appendChild(renderCartCount(appState.cart))
}

var $catalog = document.querySelector('[data-view="catalog"]')
var $details = document.querySelector('[data-view="details"]')
var $cart = document.querySelector('[data-view="cart"]')

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

$details.addEventListener('click', function (event) {
  var $clicked = event.target
  if ($clicked.closest('.btn') !== null) {
    app.cart.push(app.details.item)
    renderAppState(app)
  }
})
