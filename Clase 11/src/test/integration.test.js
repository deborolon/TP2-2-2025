import supertest from "supertest"
import { expect } from "chai"


const url = supertest("http://localhost:8080")
const tkn = "eyJ.."

// bloque de test de alguna entidad y/o funcionalidad de la app -> solo agrupa los verdaderos tests
describe("Test de integracion de productos", () => {

    //solo agrupar test que correspondan a la entidad de productos
    //en caso de EXITO
    it("GET Products 200 -> ", async () => {
        //set -> variables que tengamos que enviar -> en este caso del tipo Authorization
        const res = await url.get("/api/products").set("Authorization", `Bearer ${tkn}`)
        expect(res.status).to.equal(200)
        expect(res.body).to.be.an("object")
    })

    //x para saltear un it
    //en caso de ERROR
    it("GET Products 500 -> ", async () => {
        const res = await url.get("/api/products")
        //en este caso se espera que la aplicación devuelva un 500 por falta de token
        expect(res.status).to.equal(500)
    })

    it("POST Products 200 -> ", async () => {
        const res = await url.post("/api/products").send({
            name: "Producto de prueba",
            color: "Azul",
            stock: 10
        })
        expect(res.status).to.equal(200)
    })

})