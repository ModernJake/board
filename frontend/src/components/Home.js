import {Button} from "react-bootstrap";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  const handleLoginBtn = () => {
    navigate("/login");
  }

  return (
      <>
        <Button onClick={handleLoginBtn}>{isLogin ? "로그아웃" : "로그인"}</Button>
      </>
  )
}

export default Home;