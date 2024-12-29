import React, {useEffect, useState} from "react";
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa"; // Font Awesome 아이콘

const SuggestBoardDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [title, setTitle] = useState(""); // 건의 제목
    const [content, setContent] = useState(""); // 건의 내용

    const data = location.state; // 게시판 행 데이터
    console.log(data);

    let json = {}; // API 호출 시 넘겨줄 json 값

    const url = data.id ? "update" : "insert";
    const text = data.id ? "수정" : "등록";

    // 제목 입력/수정 시
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    // 내용 입력/수정 시
    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    // 등록/수정
    const handleInsertUpdate = async () => {
        json = {};
        if(data.id) json.id = data.id;
        json.title = title;
        json.content = content;
        console.log(json);
        // const response = await fetch("/api/board/suggest-board/insert",
        //     {
        //       method: "POST",
        //       headers: {
        //         'Content-Type' : 'application/json',
        //       },
        //       body: JSON.stringify(json),
        //     });
        // const result = await response.json();

        if(!window.confirm(`${text} 하시겠습니까?`)) return;
        const response = await axios.post(`/api/board/suggest-board/${url}`, json)
        console.log(response);

        if(response) {
            alert(`${text} 되었습니다.`);
            goBack();
            // window.location.href = "/suggest-board"; // 건의 게시판 페이지로 이동
        }
    }

    // 삭제
    const handleDelete = async () => {
        if(!window.confirm("삭제하시겠습니까?")) return;
        const response = await axios.post("/api/board/suggest-board/delete", data);
        console.log(response.data);
        if(response.status === 200) {
            alert("삭제 되었습니다.");
            goBack();
        }
    }

    // 이전 화면으로 이동
    const goBack = () => {navigate(-1)}

    useEffect(() => {
        setTitle("");
        setContent("");
        if(data.id) {
            setTitle(data.title);
            setContent(data.content);
        }
    }, []);

    // return (
    //     <>
    //         <h1>건의 {text}</h1>
    //         <button
    //             onClick={goBack}
    //             style={{
    //                 background: "none",
    //                 border: "none",
    //                 cursor: "pointer",
    //                 fontSize: "24px",
    //             }}
    //         >←</button>
    //         <div className="layout">
    //             <h7>건의 제목</h7>
    //             <input value={title} onChange={handleTitleChange}/>
    //             <h7>건의 내용</h7>
    //             <textarea value={content} onChange={handleContentChange}></textarea>
    //             <Button onClick={handleInsertUpdate}>{text}</Button>
    //             {data.id ? <Button onClick={handleDelete}>삭제</Button> : null}
    //         </div>
    //     </>
    // )
    return (
        <Container className="mt-4">
            {/* Header */}
            <Row>
                <Col>
                    <div className="d-flex align-items-center">
                        {/*<button*/}
                        {/*    onClick={goBack}*/}
                        {/*    style={{*/}
                        {/*        background: "none",*/}
                        {/*        border: "none",*/}
                        {/*        cursor: "pointer",*/}
                        {/*        fontSize: "24px",*/}
                        {/*        marginRight: "10px",*/}
                        {/*    }}>*/}
                        {/*    ←*/}
                        {/*</button>*/}
                        <Button variant="secondary" onClick={goBack} className="d-flex align-items-center">
                            <FaArrowLeft style={{ marginRight: "5px" }} />
                        </Button>
                    </div>
                </Col>
            </Row>
            <Row className={"mb-4"}>
                <h1 className="mb-0">건의 {text}</h1>
            </Row>

            {/* Form Layout */}
            <Form>
            <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="suggestionTitle">
                            <Form.Label>건의 제목</Form.Label>
                            <Form.Control
                                type="text"
                                value={title}
                                onChange={handleTitleChange}
                                placeholder="건의 제목을 입력하세요"/>
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col>
                        <Form.Group controlId="suggestionContent">
                            <Form.Label>건의 내용</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                value={content}
                                onChange={handleContentChange}
                                placeholder="건의 내용을 입력하세요"/>
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                        <Button variant="primary" onClick={handleInsertUpdate}>
                            {text}
                        </Button>
                        {data.id && (
                            <Button
                                variant="danger"
                                onClick={handleDelete}
                                className="ms-2">삭제</Button>
                        )}
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default SuggestBoardDetails;