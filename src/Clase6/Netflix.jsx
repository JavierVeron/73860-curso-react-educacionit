import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const Netflix = () => {
    const [movies, setMovies] = useState([]);
    const [filter, setFilter] = useState("");
    const [params, setParams] = useSearchParams();
    const query = params.get("q");
    const navigate = useNavigate();

    const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'e7bd91d0a0mshefa487790ee2198p12d639jsna7a4cceb37b0',
            'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
        }
    };

    const searchMovie = () => {
        navigate("/?q=" + filter, {replace:true});
    }

    useEffect(() => {
        (async() => {
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                console.log(result);
                setMovies(query ? result.filter(item => item.title.toLowerCase().includes(query)) : result);
            } catch (error) {
                console.error(error);
            }
        })()
    }, [query])

    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-2">
                        <Link to={"/"}>
                            <img src="https://pngimg.com/d/netflix_PNG6.png" alt="Netflix" width={160} />
                        </Link>
                    </div>
                    <div className="col-md-10 d-flex align-items-center">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control text-white bg-black" placeholder="Buscar..." value={filter} onInput={(e) => {setFilter(e.target.value)}} />
                            <span className="input-group-text" id="basic-addon2" onClick={searchMovie}>Buscar</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row">
                    {movies.length == 0 && <div className="col text-center">
                        <h1>No se encontraron Películas!</h1>
                    </div>}
                    {
                        movies.map(movie => (
                            <div key={movie.id} className="col-md-3">
                                <div className="card border-0 mb-3 text-white bg-black">
                                    <img src={movie.image} className="img-fluid" alt={movie.title} />
                                    <div className="card-body">
                                        <p className="card-text">{movie.title} ({movie.year})</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Netflix