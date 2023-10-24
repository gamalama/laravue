export const register = ({dispatch}, {payload}) => {
    // console.log(payload);
    return axios
        .post("/api/auth/register", payload)
        .then((result) => {
            console.log(result.data)
        }).catch((err) => {
            console.log(err.response.data.errors);
        });
}
