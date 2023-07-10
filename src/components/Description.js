const Description = (prop) => {
    return (
        <div className="description">
            <h3>{prop.info.tittle}</h3>
            <img src={prop.info.image} alt={prop.info.tittle} />
            <p>{prop.info.description}</p>
        </div>
    )
}

export default Description