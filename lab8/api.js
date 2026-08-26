const API_URL = "https://jsonplaceholder.typicode.com/users"
export async function getUsers() {
    try {
        const res = await fetch(API_URL)
        if (!res.ok) {throw new Error(`Error!`)}
        return await res.json()}
    catch (error) { console.log("Error!");}}