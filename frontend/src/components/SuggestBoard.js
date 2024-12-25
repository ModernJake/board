import {useEffect, useState} from "react";

const SuggestBoard = () => {
    const [posts, setPosts] = useState([]);
    // let posts = [];
    const [loading, setLoading] = useState(false);

    // const getList = async() => {
    //     const response = await fetch("/api/board/suggest-board/list")
    //     const result = await response.json();
    //
    //     if(result.data ) setLoading(false);
    //
    //     return result.data;
    // }

    const getList = () => {
        fetch("/api/board/suggest-board/list")
            .then(
                (response) => {
                    response.json().then(
                        (result) => {
                            setPosts(result.data);
                        }
                    )
                }
            );
    }

    useEffect(() => {
        getList();
    }, []);
    useEffect(() => {
        console.log(posts);
    }, [posts]);

    return(
        <>
            <header>
                <h1>건의 게시판</h1>
            </header>
            <main>
                {loading ? (<p>Loading...</p>) : (
                <table>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>건의제목</th>
                            <th>건의내용</th>
                        </tr>
                    </thead>
                    <tbody>
                    {posts.map((post) => {
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.content}</td>
                        </tr>
                    })}
                    </tbody>
                </table> )}
            </main>
            <footer>
                <div>
                    <p>Copyright@?????</p>
                </div>
            </footer>
        </>
    );
};

export default SuggestBoard;