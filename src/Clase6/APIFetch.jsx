import { useEffect, useState } from "react";
import Loading from "./Loading";
import PostsLists from "./PostsList";

const APIFetch = () => {
    const [loaded, setLoaded] = useState(false);
    const [posts, setPosts] = useState([]);

    // Consumo de API con Fetch y then()
    /* fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        setLoaded(true);
        setPosts(data);
    }) */

    // Consumo de API con Fetch con async y await
    useEffect(() => {
        (async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setLoaded(true);
            setPosts(data);
        })()
    }, [])

    return loaded ? <PostsLists posts={posts} /> : <Loading />
}

export default APIFetch