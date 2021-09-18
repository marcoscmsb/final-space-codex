export default {

    findAllCharacters: async () => {
        // Requisição para API do Final Space
        let result = await axios.get("https://finalspaceapi.com/api/v0/character/")
        return result.data
    }

}