import {useEffect, useState} from "react";

const SuggestBoardDetails = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  let json = {};

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleInsert = async () => {
    json = {};
    json.title = title;
    json.content = content;
    console.log(json);
    const response = await fetch("/api/board/suggest-board/insert",
        {
          method: "POST",
          headers: {
            'Content-Type' : 'application/json',
          },
          body: {
            json
          }
        });
    const result = await response.json();
    console.log(result);
  }

  useEffect(() => {
    setTitle("");
    setContent("");
  }, []);

  return (
      <>
        <h1>건의 상세</h1>
        <div className="layout">
          <input value={title} onChange={handleTitleChange}/>
          <textarea value={content} onChange={handleContentChange}></textarea>
          {/*<input type="file" name="file"/>*/}
          <button onClick={handleInsert}>작성</button>
        </div>
      </>
  )
}

export default SuggestBoardDetails;