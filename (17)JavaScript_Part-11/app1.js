let btn = document.querySelector("#tell");
let jokeP = document.querySelector("#joke");

btn.addEventListener("click", async () => {
    let response = await jokes();
    let data = response.data;

    if (data.type === "single") {
        jokeP.innerHTML = data.joke;
    } else {
        jokeP.innerHTML = `${data.setup}<br><br>${data.delivery}`;
    }
});

async function jokes() {
    let url = "https://v2.jokeapi.dev/joke/Any?safe-mode";
    return axios.get(url);
}
