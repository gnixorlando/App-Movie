import axios from "axios"

export const moviesApi = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers:  {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTgwNmU0MGZkNDdjM2Q2YmNjNWZhZWM2NjkxYjdmNyIsIm5iZiI6MTc0MzE4NjI2OS41MjE5OTk4LCJzdWIiOiI2N2U2ZTk1ZDJlNzJiYTJmNzYyNWNmZDEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.fWROjwFq26xbofHkEX5Y-JVScf-aTulx-rkfPjB5G6M'
    }
});