import Description from "../components/Description"

export const About = () => {

    let datas = [
        {
            tittle: "About me",
            image: "https://img.freepik.com/fotos-premium/obra-arte-digital-chica-anime-fantasia-solitaria-mirando-al-cielo_410516-19784.jpg",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi eligendi eius nisi quis ipsum fugit? Molestias recusandae totam, autem dolorum id magni? Recusandae, fuga iste a nisi quae quaerat repellendus!",
        },
        {
            tittle: "Hobbies",
            image: "https://ceinaseg.com/wp-content/uploads/2021/09/videogames-controller-1920x1080-1.jpg",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi eligendi eius nisi quis ipsum fugit? Molestias recusandae totam, autem dolorum id magni? Recusandae, fuga iste a nisi quae quaerat repellendus!",
        },
        {
            tittle: "My work",
            image: "https://midu.dev/images/wallpapers/una-taza-de-javascript.png",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi eligendi eius nisi quis ipsum fugit? Molestias recusandae totam, autem dolorum id magni? Recusandae, fuga iste a nisi quae quaerat repellendus!",
        },
        
    ]

    return (
        <div>
            <h2>More from me</h2>
            {datas.map(data=>(
                <Description info={data} key={data.tittle}/>
            ))}
        </div>
    )
}