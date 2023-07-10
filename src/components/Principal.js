
const Principal = (prop) => {
    return (
        <div className="principal">
            <h1>{prop.info.name}</h1>
            <img src={prop.info.image} alt={prop.info.name} />
        </div>
    )
}

export default Principal