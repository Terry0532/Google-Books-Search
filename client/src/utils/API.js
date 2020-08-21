import axios from "axios";
import authHeader from "./authHeader";

export default {
    googleBook: title => {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title);
    },
    saveBook: info => {
        return axios.post("/api/saved", info);
    },
    savedBooks: id => {
        return axios.get("/api/saved", { params: { id: id } });
    },
    deleteBook: id => {
        return axios.delete("/api/saved", { data: { id: id } });
    },
    getSavedPage: () => {
        return axios.get("api/user", { headers: authHeader() });
    }
}