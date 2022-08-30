export default function choice<T>(array: Array<T>): T {
    const counter = array.length

    return array[Math.floor(Math.random() * counter)]
}
