function apiVersion(version: string) {
    return (target: any) => {
        Object.assign(target.prototype, {__version: version, __name: "Lucas"})
    }
}

@apiVersion("1.10")
class Api {}

const api = new Api()

console.log(api.__version)
console.log(api.__name)