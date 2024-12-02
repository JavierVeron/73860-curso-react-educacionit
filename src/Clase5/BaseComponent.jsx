const BaseComponent = (prop) => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    {prop.children}
                </div>
            </div>
        </div>
    )
}

export default BaseComponent