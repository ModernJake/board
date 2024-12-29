import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {Button, Col, Container, Form, Row, Spinner, Table} from "react-bootstrap";

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
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchWord, setSearchWord] = useState("");
  let searchQuery = "";

  const handleInputChange = (e) => {
    setSearchWord(e.target.value);
  };

  const handleSearch = () => {
    // let searchParam = {};
    // searchParam.word = searchWord;
    // searchQuery = new URLSearchParams(searchParam).toString();
    searchQuery = `searchWord=${searchWord}`;
    getList();
  }

  const getList = async () => {
    const querystring = `?${searchQuery}`;
    const response = await axios.get(`/api/board/suggest-board/list${querystring}`);
    const result = await response.data;
    await setPosts(result.data);

    if(result.data) setLoading(false);
  }

  const handleDetailsPage = (row) => {
    const data = {
      id: row.id,
      title: row.title,
      content: row.content
    }
    navigate("/suggest-board/details", {state: data});
  }

  useEffect(() => {
    // getList(setPosts, setLoading);
    setSearchWord("");
    getList();
  }, []);

  // return(
  //     <>
  //       <header>
  //         <h1>건의 게시판</h1>
  //       </header>
  //       <main>
  //         <div className={"searchbar"}>
  //           <label>제목 검색 </label>
  //           <input type={"text"} value={searchWord} onChange={handleInputChange}
  //                  placeholder={"검색어"}/>
  //           <Button onClick={handleSearch}>검색</Button>
  //         </div>
  //         <Button style={{margin: "5%"}} onClick={handleDetailsPage}>등록</Button>
  //         {loading ? (<p>Loading...</p>) : (
  //             <div className={"boardtable"}>
  //               <table>
  //                 <thead>
  //                 <tr>
  //                   <th>번호</th>
  //                   <th>건의제목</th>
  //                   {/*<th>건의내용</th>*/}
  //                 </tr>
  //                 </thead>
  //                 <tbody>
  //                 {posts.map((post) =>
  //                     <tr key={post.id} onClick={() => handleDetailsPage(post)}>
  //                       <td>{post.id}</td>
  //                       <td>{post.title}</td>
  //                       {/*<td>{post.content}</td>*/}
  //                     </tr>
  //                 )}
  //                 </tbody>
  //               </table>
  //             </div>)}
  //       </main>
  //       <footer>
  //         <div>
  //           <p>Copyright@JakeLee&ebLee&msKim</p>
  //         </div>
  //       </footer>
  //     </>
  // );
  return (
      <>
        {/* Header */}
        <header className="bg-primary text-white py-3">
          <Container>
            <h1 className="text-center">건의 게시판</h1>
          </Container>
        </header>

        {/* Main Content */}
        <main>
          <Container className="mt-4">
            {/* Search Bar */}
            <Row className="mb-3">
              <Col md={8}>
                <Form.Group>
                  <Form.Label>제목 검색</Form.Label>
                  <Form.Control
                      type="text"
                      value={searchWord}
                      onChange={handleInputChange}
                      // onKeyUp={handleSearch}
                      placeholder="검색어"/>
                </Form.Group>
              </Col>
              <Col md={4} className="d-flex align-items-end">
                <Button variant="primary" onClick={handleSearch}>
                  검색
                </Button>
              </Col>
            </Row>

            {/* 등록 버튼 */}
            <Row>
              <Col className="text-end mb-3">
                <Button variant="success" onClick={handleDetailsPage}>
                  등록
                </Button>
              </Col>
            </Row>

            {/* Table */}
            {loading ? (
                <div className="text-center">
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                  <p>Loading...</p>
                </div>
            ) : (
                <Table striped bordered hover>
                  <thead>
                  <tr>
                    <th>번호</th>
                    <th>건의제목</th>
                  </tr>
                  </thead>
                  <tbody>
                  {posts.map((post) => (
                      <tr key={post.id} onClick={() => handleDetailsPage(post)}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                      </tr>
                  ))}
                  </tbody>
                </Table>
            )}
          </Container>
        </main>

        {/* Footer */}
        <footer className="bg-dark text-white py-3 mt-4">
          <Container>
            <p className="text-center mb-0">
              Copyright@JakeLee & ebLee & msKim
            </p>
          </Container>
        </footer>
      </>
  );
};

export default SuggestBoard;