const tarjetas = [
    {
        id: 1,
        titulo: "Titulo 1",
        descripcion:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        imagen: "https://picsum.photos/250/250?random=1",
    },
    {
        id: 2,
        titulo: "Titulo 2",
        descripcion:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        imagen: "https://picsum.photos/250/250?random=2",
    },
    {
        id: 3,
        titulo: "Titulo 3",
        descripcion:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        imagen: "https://picsum.photos/250/250?random=3",
    },
    {
        id: 4,
        titulo: "Titulo 4",
        descripcion:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        imagen: "https://picsum.photos/250/250?random=4",
    },
];

localStorage.setItem("tarjetas", JSON.stringify(tarjetas));

console.log(JSON.parse(localStorage.getItem("tarjetas")));
