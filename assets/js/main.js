// UI elements

import loader from "./components/loader.js";
// ocultar loader
loader()

import showMenu from "./components/showMenu.js"
;
// mostrar menu
showMenu()

import showCart from "./components/showCart.js";
// mostrar carrito
showCart()

// ----------------------------------------------

// products
import products from "./components/products.js";
import getProducts from "./helpers/getProducts.js";

const {db, printProducts} = products(await getProducts())

// ----------------------------------------------

// carrito              5:20
import cart from "./components/cart.js";

cart(db, printProducts)