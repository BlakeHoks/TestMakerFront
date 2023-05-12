import axios from "axios";

export const TestService = {
    async getAll(){
        const response = await axios.get('')
        return response.data
    },

    async sortBy(selector){
    }
}