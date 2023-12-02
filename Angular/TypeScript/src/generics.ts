function concatArray<T>(...items: T[]): T[] {
    return new Array().concat(...items)
}

const numArray = concatArray<number[]>([1,5], [3])
const stgArray = concatArray<string[]>(['Lucas', 'Goku'], ['Vegeta'])
console.log(numArray)
console.log(stgArray)