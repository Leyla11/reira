const Links = (prop) => {
    return (
        <div className="links">
            <h3>{prop.info.tittle}</h3>
            <img src={prop.info.image} alt={prop.info.tittle} />
            <p>{prop.info.nickname}</p>
        </div>
    )
}

export default Links