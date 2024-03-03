
import astronaut from "../Interfaces/interfaces"

const getData = async () => {
    const promise = await fetch('https://astronautapi.azurewebsites.net/')
    const data: astronaut = await promise.json()
    return data
}


export default getData;
