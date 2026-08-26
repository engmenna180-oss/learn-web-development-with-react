import { getUsers } from "./api.js"
const btn = document.querySelector("#btn")
const user = document.querySelector("#user")
btn.addEventListener("click", async ()=> {
    btn.disabled = true
    try{
        const users = await getUsers()
        user.innerHTML = users.map(user=>`<h2>${user.name}</h2> <p>Email: ${user.email}</p> <p>City: ${user.address.city}</p>`).join("");
    }catch{
        user.innerHTML = `${error.message}`
    }finally {
        btn.disabled = false}
});