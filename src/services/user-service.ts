import apiClient from "./api-client";

class UserService {
    deleteUser(id:number) {
     const request = apiClient.delete(`/users/${id}`)
     return {request}
    }
    getAllUsers() {
        // const contorler = new AbortController()
        const request = apiClient('/users',)
        return {request }
    }
}
export default new UserService()