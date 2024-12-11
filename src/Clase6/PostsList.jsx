const PostsLists = ({posts}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <ul className="list-group">
                        {
                            posts.map(item => (
                                <li key={item.id} className="list-group-item">{item.title}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PostsLists