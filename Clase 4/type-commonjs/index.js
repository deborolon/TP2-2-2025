const fs = require("fs")
const express = require("express")
const dataFetchAppRM = require("./api.js")

function getDataApi() {
    dataFetchAppRM.fetchApi()
        //La respuesta del servidor tiene un formato sin procesar
        // .then((data) => console.log(data))
        //Acá se parsea la respuesta -> .json()
        //Convertir a un objeto Javascript la respuesta de un servidor
        .then((res) => res.json())
        .then((data) => {
            console.log("Datos: ", data)
            return data
        })
        // .then((res) => console.log("RESULT ", res))
        // .catch((err) => console.log(err))
}

getDataApi()