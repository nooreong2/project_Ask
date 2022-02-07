import './App.css';
import React from 'react';
import {SiNaver} from "react-icons/si";
import {RiChat1Line} from "react-icons/ri";
import {AiFillGithub} from "react-icons/ai";

function App() {
    return (

        <div className="App">
            <div className="container">
                <div className="logo"></div>
                <div className="total_login">통합 로그인</div>
                <div className="input-container">
                    <div className="input-wrap">
                        <input type="text" className="input-id" placeholder="아이디 입력"/>
                    </div>
                    <div className="input-wrap">
                        <input type="text" className="input-password" placeholder="비밀번호 8자리 입력"/>
                    </div>
                </div>
                <div className="social_login">
                    <button>
                        <div className="icon"><SiNaver/></div>
                        <span className="button_name">네이버 아이디로 로그인</span>
                    </button>
                    <button>
                        <div className="icon"><RiChat1Line/></div>
                        <span>카카오 계정으로 로그인</span>
                    </button>
                    <button>
                        <div className="icon"><AiFillGithub/></div>
                        <span>Github으로 로그인</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
