import { useState } from "react"
import PostsLists from "./PostsList";
import Loading from "./Loading";

const APIXML = () => {
    const [loaded, setLoaded] = useState(false);
    const [posts, setPosts] = useState([]);

    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xhr.send();
    xhr.addEventListener("load", () => {
        setLoaded(true);
        setPosts(xhr.response)
    })

    return loaded ? <PostsLists posts={posts} /> : <Loading />
}

export default APIXML