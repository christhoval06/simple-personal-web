export default function shuffle<T>(array: Array<T>): Array<T> {
    let counter = array.length
  
    while (counter > 0) {
      let index = Math.floor(Math.random() * counter)
      counter--
  
      let temp = array[counter]
      array[counter] = array[index]
      array[index] = temp
    }
  
    return array
  }