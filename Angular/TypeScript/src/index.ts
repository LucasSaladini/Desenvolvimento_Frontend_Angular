type heroi = {
    name: string
    vulgo: string
}

function printObject(person: heroi) {
    console.log(person)
}

printObject({
    name: 'Bruce Wayne',
    vulgo: "Batman"
})