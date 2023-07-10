import Principal from "../components/Principal"

export const Home = () => {
    
    let datas = [
        {
            name: "Reira Serizawa",
            image: "https://live.staticflickr.com/1033/1014035927_1e4cdda2f1.jpg",
        }
    ]

    return (
        <div>
            {datas.map(data=> (
                <Principal info={data} key={data.name}/>
            ))}
        </div>
    )
}