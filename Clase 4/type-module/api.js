async function fetchApi() {
    const data = await fetch("https://rickandmortyapi.com/api/character")
    return data
}

async function fetchApi2() {
    const data = await fetch("https://rickandmortyapi.com/api/character")
    return data
}

export default {
    fetchApi,
    fetchApi2
}