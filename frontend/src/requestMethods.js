import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzk2NTBiZjA0MjlmYjVlZmNhOTQ1YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MjE4NDUzNywiZXhwIjoxNjUyNDQzNzM3fQ.y1TZnGv4Vw_FcJJ3Pq2Nyfo9kEkomdUJHR59MXra2bQ"
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});
