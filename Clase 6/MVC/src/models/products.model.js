const products = [
    {id: 1, name: "Monitor", color: "Negro"},
    {id: 2, name: "Mouse", color: "Violeta"},
    {id: 3, name: "Hub", color: "Gris"},
    {id: 4, name: "Notebook", color: "Verde"}
]

//El modelo se encarga de todo lo relacionado a los datos (ODM, ORM...)

// const products = fetch("https://swapi.dev/api/people")

const getProducts = async () => {
    // return (await products).json()
    return await products
}

const postProducts = async (prod) => {
    products.push(prod)
    return await prod
}

const putProducts = async (id, prod) => {
    const index = products.findIndex((e) => e.id == id)
    if(index == -1){
        return "Error. No se encontró el id."
    } else {
        prod.id = Number(id)
        products.splice(index, 1, prod)
        return prod
    }
}

export default {
    getProducts,
    postProducts,
    putProducts
}