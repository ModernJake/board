import KakaoLogin from "react-kakao-login";
import axios from "axios";
import {useEffect} from "react";

const SocialKakaoLogin = () =>{
  const kakaoClientId = 'b6c0795e7bc13c58a80baa3155578ce6'

  const kakaoLoginSuccessCallback = async (data)=>{
    console.log(data);
    const accessToken = data.response.access_token; // 엑세스 토큰
    const refreshToken = data.response.refresh_token; // 리프레시 토큰
    const idToken = data.response.id_token; // 리프레시 토큰

    const agree = await window.Kakao.API.request({
      url: '/v2/user/scopes',
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });

    // 동의 항목(카카오 닉네임, 프로필 사진)
    const agreement = await window.Kakao.Auth.authorize({
      redirectUri: 'http://localhost:3000/',
      scope: 'profile_nickname,profile_image',
    });

    const response = await axios.get("https://kapi.kakao.com/v2/user/me", {
      headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(response.data);
    // try {
    //   const response = await axios.get("https://kapi.kakao.com/v2/user/me", {
    //     header: {
    //       // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    //       Authorization: `Bearer ${accessToken}`,
    //     },
    //   });
    //   console.log(response.data);
    // }
    // catch (error) {
    //   console.log(error);
    // }
  }
  const kakaoErrorCallback = (error) => {
    console.log(error);
  }

  useEffect(() => {

  }, []);

  return(
      <>
        <KakaoLogin
            token={kakaoClientId}
            onSuccess={kakaoLoginSuccessCallback}
            onFail={kakaoErrorCallback}
        />
      </>
  )
}

export default SocialKakaoLogin;