function apiVersion(version: string) {
    return (target: any) => {
        Object.assign(target.prototype, { __version: version, __name: "Luccas"})
    }
}

function minLength(length: number) {
    return (target: any, key: string) => {
        let _value = target[key]

        const getter = () => _value
        const setter = (value: string) => {
            if(value.length < length) {
                throw new Error(`Tamanho menor do que ${length}`)
            } else {
                _value = value
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        })
    }
}

class Api1 {
    @minLength(3)
    name: string

    constructor(name: string) {
        this.name = name
    }
}

const api1 = new Api1("us")
console.log(api1.name)