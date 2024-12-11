import { useEffect, useState } from "react";
import BaseAPI from "./BaseAPI";
import Loading from "./Loading";
import PostsLists from "./PostsList";

const APIAxios = () => {
    const [loaded, setLoaded] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await BaseAPI.get("posts/");
            
            if (result.status == 200) {
                setLoaded(true);
                setPosts(result.data);
            }            
        })()
    }, [])

    return loaded ? <PostsLists posts={posts} /> : <Loading />
}

export default APIAxios