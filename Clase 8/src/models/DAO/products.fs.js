import fs from "fs"

const readFile = async () => {
    const data = await fs.promises.readFile("doc.json", "utf-8")
    //Se pasa de un formato JSON (data) a un objeto de Javascript
    return JSON.parse(data)
}

const getProducts = async () => {
    const data = await readFile()
    return data
}

const postProducts = async (prod) => {
    const products = await getProducts()
    products.push(prod)
    console.log(products)
    //El array "products" se tiene que convertir a JSON para poder escribir el documento!
    await fs.promises.writeFile("doc.json", JSON.stringify(products))
    return prod
}

export default {
    getProducts,
    postProducts
}