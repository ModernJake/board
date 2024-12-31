import {Button, Container, FormLabel, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import img from "../assets/images/kakao_login_medium_wide.png"
import SocialKakaoLogin from "./SocialKakaoLogin";

const Login = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleIdInput = (e) => {
    setId(e.target.value);
  }
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  }

  const handleLogin = () => {
    console.log(id, password);
  }
  const handleKakaoLogin = () => {
    navigate("/login/kakao-login")
  }

  return (
      <>
        <Container><h1>로그인</h1></Container>
        <Container className="login">
          <FormLabel>아이디</FormLabel>
          <input value={id} onChange={handleIdInput}/>
          <FormLabel>비밀번호</FormLabel>
          <input type={"password"} value={password} onChange={handlePasswordInput}/>
          <Button onClick={handleLogin}>로그인</Button>
          <SocialKakaoLogin/>
        </Container>
        {/*<Image onClick={handleKakaoLogin} src={img}/>*/}
      </>
  )
}

export default Login;