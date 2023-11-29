class CardNews extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({ mode: "open" })
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }

    build() {
        const componentRoot = document.createElement('div')
        componentRoot.setAttribute('class', 'card')

        const cardLeft = document.createElement('div')
        cardLeft.setAttribute('class', 'card__left')

        const author = document.createElement('span')
        author.textContent = "By " + (this.getAttribute('author') || "By Anonymous")

        const link = document.createElement('a')
        link.textContent = this.getAttribute('title')
        link.href = (this.getAttribute('url')) ||'http://dio.me'

        const text = document.createElement('p')
        text.textContent = this.getAttribute('content')

        cardLeft.append(author)
        cardLeft.append(link)
        cardLeft.append(text)

        const cardRight = document.createElement('div')
        cardRight.setAttribute('class', 'card__right')

        const image = document.createElement('img')
        image.src = (this.getAttribute('photo')) || "/portal/assets/default-profile-picture1.jpg"
        image.alt = "Foto da notícia"

        cardRight.appendChild(image)

        componentRoot.appendChild(cardLeft)
        componentRoot.appendChild(cardRight)
        
        return componentRoot
    }

    styles() {
        const style = document.createElement('style')
        style.textContent = ` 
    .card {
        width: 60%;
        display: flex;
        flex-direction: row;
        box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
        justify-content: space-between;
        margin-top: 20px;
        margin-left: 20px;
    }
    
    .card__left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 10px;
    }
    
    .card__left > a {
        margin-top: 15px;
        font-size: 25px;
        text-decoration: none;
        color: black;
        font-weight: bold;
    }
    
    .card__left > span {
        font-weight: 400;
    }
    
    .card__left > p {
        color: gray;
    }
    
    .card__right > img {
        width: 300px;
    }
        `

        return style
    }
}

customElements.define('card-news', CardNews)