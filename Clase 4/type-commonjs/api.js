//Promesas
//https://rickandmortyapi.com/

function fetchApi() {
    const data = fetch("https://rickandmortyapi.com/api/character")
                    //fuera del scope del .then
                    .then((res) => { return res })
                    //dentro del scope del .then
                    // .then((res) => console.log(res))
                    .catch((err) => console.log(err))

    return data
}

function fetchApi2() {
    const data = fetch("https://rickandmortyapi.com/api/character")
                    .then((res) => { return res })
                    .catch((err) => console.log(err))

    return data
}

// module.exports = fetchApi

module.exports = {
    fetchApi,
    fetchApi2
}