import { useState } from "react"

const PostAPIFetch = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [resultado, setResultado] = useState(false);
    const [error, setError] = useState(false);

    const generarPost = () => {
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method:"POST",
            headers:{'Content-type': 'application/json; charset=UTF-8'},
            body:JSON.stringify({
                title:title,
                body:body
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.id) {
                setTitle("");
                setBody("");
                setResultado(true);
                setError(false);
            } else {
                setResultado(false);
                setError(true);
            }
        });
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                <h1>POST API FETCH</h1>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Título</label>
                            <input type="text" className="form-control" value={title} onInput={(e) => {setTitle(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Mensaje</label>
                            <input type="text" className="form-control" value={body} onInput={(e) => {setBody(e.target.value)}} />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={generarPost}>Postear!</button>
                    </form>
                </div>
            </div>
            <div className="row my-5">
                <div className="col-md-6">
                    {resultado && <div className="alert alert-success" role="alert">Tu mensaje se posteó correctamente!</div>}
                    {error ? <div className="alert alert-danger" role="alert">Error! No se pudo postear</div> : ""}
                </div>
            </div>
        </div>
    )
}

export default PostAPIFetch