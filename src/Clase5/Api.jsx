import useApi from "./useApi"

const Api = () => {
    const users = useApi("https://jsonplaceholder.typicode.com/users");   

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Hook Personalizado</h1>
                    <ul>
                        {
                            users.map(item => (
                                <li key={item.id}>{item.id}- {item.name} ({item.username})</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Api