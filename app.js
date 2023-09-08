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


//Mostrar el carrito de la compra y listar los productos

const products = []
for (let element of carrito) {
    products.push(element.id, element.name, element.price, element.count, element.premium)

}

const renderProducts = (products) => {
    products.forEach(product => {
        totalCarrito.innerHTML += `<ul><li style= "list-style:none; margin:8px;">${product.id}, ${product.name},${product.price}, ${product.count},  ${product.premium}</li></ul>`;

    });
}
renderProducts(carrito)

//Eliminar el producto con id 54657 del carrito de la compra.
const deleteProduct = (id) => {
    products.forEach(product => {
        if (product === id)
            carrito.splice(2, 1)
    });
}
deleteProduct(54657)


