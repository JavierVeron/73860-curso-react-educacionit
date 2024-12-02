import BaseComponent from "./BaseComponent"

const withPosts = (BaseComponent) => {
    const posts = [
        {id:1, nombre:"Curso de Desarrollo Web"},
        {id:2, nombre:"Curso de JavaScript"},
        {id:3, nombre:"Curso de React JS"}
    ]

    return (props) => (
        <BaseComponent posts={posts} {...props} />
    )
}

const PostsList = (props) => {
    return (
        <ul>
            {props.posts.map(item => (
                <li key={item.id}>{item.id + " - " + item.nombre}</li>
            ))}
        </ul>
    )
}

export default withPosts(PostsList);