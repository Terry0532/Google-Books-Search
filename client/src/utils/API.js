import axios from "axios";

export default {
    googleBook: title => {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title);
    },
    saveBook: info => {
        return axios.post("/api/saved", info);
    },
    savedBooks: () => {
        return axios.get("/api/saved");
    },
    deleteBook: id => {
        return axios.delete("/api/saved", { data: { id: id } });
    }
}