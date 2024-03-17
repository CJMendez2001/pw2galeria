
const handlerBarsContext = {
    "/index.html": {
        "gallery" :[
            {
                imgSrc: "/public/audifonos.jpg",
                title: "Headphones",
                price: "$24.99"
            },
            {
                imgSrc: "/public/enfriador.jpg",
                title: "Enfriador",
                price: "$19.99"
            },
            {
                imgSrc: "/public/img3.jpg",
                title: "Dualshock 4",
                price: "$79.99"
            },
            {
                imgSrc: "/public/impresora.jpeg",
                title: "Impresora",
                price: "$99.99"
            },
            {
                imgSrc: "/public/parlantes.jpg",
                title: "Parlantes RGB",
                price: "$89.99"
            },
            {
                imgSrc: "/public/microfono.jpg",
                title: "Microfono",
                price: "$59.99"
            },
            {
                imgSrc: "/public/silla.jpg",
                title: "Sila gaming",
                price: "$119.99"
            },
            {
                imgSrc: "/public/teclado2.jpg",
                title: "Teclado RGB",
                price: "$39.99"
            },
            {
                imgSrc: "/public/router.jpg",
                title: "Router",
                price: "$19.99"
            },
            {
                imgSrc: "/public/PC.png",
                title: "Escritorio HP",
                price: "$399.99"
            },
            {
                imgSrc: "/public/laptop.jpg",
                title: "Laptop HP",
                price: "$599.99"
            },
            {
                imgSrc: "/public/mouse.jpeg",
                title: "Mouse Logitech",
                price: "$29.99"
            },
            {
                imgSrc: "/public/monitor.jpg",
                title: "Monitor Gaming",
                price: "$159.99"
            },
            {
                imgSrc: "/public/cajagaming.jpg",
                title: "Caja RGB",
                price: "$999.99"
            },
            {
                imgSrc: "/public/laptopgaming.jpg",
                title: "Laptop Asus",
                price: "$777.99"
            },
        ],
    },
}

const pageContext = (page)=>{
    const context= {...handlerBarsContext[page]}
    return context;
}
export default pageContext;