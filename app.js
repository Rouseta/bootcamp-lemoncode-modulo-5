const carrito = [
    {
        id: 198752,
        name: "Tinta DJ27 Color",
        price: 52.95,
        count: 3,
        premium: true
    },
    {
        id: 75621,
        name: "Impresora ticketera PRO-201",
        price: 32.75,
        count: 2,
        premium: true
    },
    {
        id: 54657,
        name: "Caja de rollos de papel para ticketera",
        price: 5.95,
        count: 3,
        premium: false
    },
    {
        id: 3143,
        name: "Caja de folios DIN-A4 80gr",
        price: 9.95,
        count: 2,
        premium: false
    }
];
let totalCarrito = document.getElementById("totalCarrito")
let calculation = []


//Mostrar el carrito de la compra y listar los productos

const products = []
for (let element of carrito) {
    products.push(element.id, element.name, element.price, element.count, element.premium)

}

const renderCarrito = (products) => {
    products.forEach(product => {
        totalCarrito.innerHTML += `<ul><li style= "list-style:none; margin:8px;">${product.id}, ${product.name},${product.price}, ${product.count},  ${product.premium}</li></ul>`;

    });
}
renderCarrito(carrito) // Mostrar el carrito en un listado de html básico.

//Eliminar el producto con id 54657 del carrito de la compra.
const deleteProduct = (id) => {
    products.forEach(product => {
        if (product === id)
            carrito.splice(2, 1)
    });
}
deleteProduct(54657)
//Calcular el total del carrito de la compra (el coste de una línea es precio * cantidad).OJO: ahora solo hay tres productos en el carrito!!

for (let element of carrito) {
    calculation.push(element.count * element.price)

}
let sum = 0
for (const value of calculation) {
    sum += value;
} console.log(sum);

//Filtrar por los productos que sean prime.
for (let element of carrito) {
    if (element.premium) {
        console.log(element)
    }

}
//Alternativa
const primeProducts = carrito.filter((primeProduct) => primeProduct.premium === true)
console.log(primeProducts)

//Si todos los productos son prime mostrar un mensaje "Pedido sin gastos de envío", si no "Este pedido
//tiene gastos de envío.
for (let element of carrito) {
    if (element.premium) {
        console.log("Pedido sin gastos de envío")
    } else {
        console.log("Este pedido tiene gastos de envío")
    }

}

//Aplicar un descuento del 5% si la compra es mayor de 100 €.
const applyDiscount = (sum) => {
    let discount = 0
    totalPrice = 0
    if (Number(sum) > 100) {
        discount = (Number(sum) * 5) / 100
        totalPrice = sum - discount

    }
    console.log(totalPrice)

}
applyDiscount(150)



