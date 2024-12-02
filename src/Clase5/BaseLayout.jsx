const BaseLayout = (prop) => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className={prop.class}>
                    <h1>{prop.academia}</h1>
                    <h3>{prop.curso}</h3>
                    {prop.children}
                </div>
            </div>
        </div>
    )
}

export default BaseLayout