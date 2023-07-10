import Links from "../components/Links"

export const Contact = () => {

    let datas = [
        {
            tittle: "Intagram",
            image: "https://i.pinimg.com/564x/a2/4c/cc/a24ccc83bec854a87cc133fd52eb9161.jpg",
            nickname: "Leyla707"
        },
        {
            tittle: "Github",
            image: "https://i.pinimg.com/736x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg",
            nickname: "@Leyla7"
        },
        {
            tittle: "Facebook",
            image: "https://thumbs.dreamstime.com/b/s%C3%ADmbolo-del-icono-logotipo-de-facebook-en-fondo-negro-la-ilustraci%C3%B3n-vector-173831891.jpg",
            nickname: "Leyla.san.707"
        },
    ]

  return (
    <div>
        <h2>Contact me</h2>
        {datas.map(data=>(
            <Links info={data} key={data.tittle}/>
        ))}
    </div>
  )
}

