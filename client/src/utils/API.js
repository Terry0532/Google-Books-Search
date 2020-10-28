import axios from "axios";
import authHeader from "./authHeader";

export default {
    googleBook: title => {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title);
    },
    saveBook: info => {
        return axios.post("/api/saved", info, { headers: authHeader() });
    },
    savedBooks: () => {
        return axios.get("/api/saved", { headers: authHeader() });
    },
    // savedBooks: id => {
    //     return axios.get("/api/saved", { params: { id: id } });
    // },
    deleteBook: id => {
        return axios.delete("/api/saved", { data: { id: id } });
    },
    // randomWord: () => {
    //     return axios.get("https://random-word-api.herokuapp.com/word?number=1");
    // },
    topSaved: () => {
        return axios.get("/api/top");
    }
}