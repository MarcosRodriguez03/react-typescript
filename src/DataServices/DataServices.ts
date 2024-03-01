
import astronaut from "../Interfaces/interfaces"

const getData = async () => {
    const promise = await fetch('http://api.open-notify.org/astros.json')
    const data: astronaut = await promise.json()
    return data
}


export default getData;
