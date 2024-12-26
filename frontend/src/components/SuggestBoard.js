import {useEffect, useState} from "react";
// import axios from "axios";

// const getResponse = async() => {
//   const response = await axios.get("/api/board/suggest-board/list");
//   return response;
// }

// const getList = (posts, loading) => {
//   getResponse().then(
//       (response) => {
//         if(response.status === 200) {
//           const result = response.data;
//           if(result.data) posts(result.data); loading(false);
//         }
//       }
//   )
// }

const SuggestBoard = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchWord, setSearchWord] = useState("");
    let json = {};
    let searchQuery = "";

    const handleInputChange = (e) => {
      setSearchWord(e.target.value);
    };

    const handleSearch = () => {
      let searchParam = {};
      searchParam.word = searchWord;
      searchQuery = new URLSearchParams(searchParam).toString();
      console.log(searchQuery);
      getList();
    }

    const getList = async() => {
        const querystring = `?${searchQuery}`;
        const response = await fetch(`/api/board/suggest-board/list${querystring}`);
        const result = await response.json();
        await setPosts(result.data);
        console.log(result.data);

        if(result.data) setLoading(false);
    }

    const rowClick = (row) => {
      console.log(row);
    }

    useEffect(() => {
        // getList(setPosts, setLoading);
        getList();
    }, []);

    return(
        <>
            <header>
                <h1>건의 게시판</h1>
            </header>
            <main>
                <label>제목 검색 </label>
                <input type={"text"} value={searchWord} onChange={handleInputChange} placeholder={"검색어"}/>
              <button onClick={handleSearch}>검색</button>
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
                      {posts.map((post) =>
                          <tr key={post.id} onClick={() => rowClick(post.id)}>
                              <td>{post.id}</td>
                              <td>{post.title}</td>
                              <td>{post.content}</td>
                          </tr>
                      )}
                      </tbody>
                    </table>)}
            </main>
          <footer>
            <div>
              <p>Copyright@JakeLee&ebLee&msKim</p>
            </div>
          </footer>
        </>
    );
};

export default SuggestBoard;