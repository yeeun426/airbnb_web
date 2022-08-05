import React, {useState} from "react";

import Footer from '../components/Footer'
import FooterDetail from '../components/FooterDetail'
import { countryState } from '../recoil/SearchMain';

import styles from './Main.module.css';
import {Link, useNavigate} from 'react-router-dom';

import logo from '../img/logo.png';
import search from '../img/search.png';
import earth from "../img/earth.png";
import menu from "../img/menu.png";
import profile from "../img/profile.png";

import { useRecoilValue } from 'recoil';

function Search() {
    const navigate = useNavigate();
    
    const [popup, setPopup] = useState(false);

    const showPopup = (e) => {
        if(popup===false){
            setPopup(true)
            }else{
            setPopup(false)
            }    
        };

    const onClickHost = () => {
        navigate(`/behost`);
    };

    const country= useRecoilValue(countryState);

    return(
        <div className = "Search">
            <div className="header">
                <div className="header_wrap">
                    <div class = "header_content">
                        <Link to="/">
                            <img src={logo} alt="logo" style={{width:"102px", height:"32px"}}/>
                        </Link>
                    </div>

                    <div class = "header_content" id = "second_content">
                        <div className="plan_filter" onClick={showPopup}>
                            <button className="btn_filter" alt="btn_filter">{country}</button>
                            <span className="wall_btn"></span>

                            <button className="btn_filter" alt="btn_filter">언제든 일주일</button>
                            <span className="wall_btn"></span>

                            <button id="addguest">
                                <div style={{padding: '0px 16px'}}>게스트 추가</div>
                                <div className="searchicon"><img src={search} alt="search" style={{width: '12px', height: '12px;'}}/></div>
                            </button>

                            <button className={styles.activeSearch}>
                                <div style={{display: 'flex'}}>
                                    <div style={{"padding-right":"16px", "align-self":"center"}}>
                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{height: "16px", width: "16px"}}><path d="M13 0c7.18 0 13 5.82 13 13 0 2.868-.929 5.519-2.502 7.669l7.916 7.917-2.828 2.828-7.917-7.916A12.942 12.942 0 0 1 13 26C5.82 26 0 20.18 0 13S5.82 0 13 0zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" opacity=".8"></path></svg>
                                    </div>

                                    <div>
                                        <div className={styles.small_search}>
                                            어디로 여행가세요?
                                        </div>
                                        <div className={styles.small_detail}>
                                            어디든지 • 언제든 일주일 • 게스트 추가
                                        </div>
                                    </div>
                                </div>
                                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={{height: "16px", width: "16px", fill: "rgb(34, 34, 34)"}}><path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>
                            </button>
                        </div>                
                    </div>

                    <div className= "header_content" id="third_content">
                        {/* <Link to="/behost"> */}
                        <button className="header_btn" id="BeHost" onClick={onClickHost}>
                            호스트 되기
                        </button>
                        {/* </Link> */}
                        <button className="header_btn" style={{width:'40px', height:'42px'}}>
                        <img src={earth} alt="earth" style={{width: '16px', height: "16px"}}/>
                        </button>
                        <button className="mypage">
                            <button className="mypage_icon"><img src={menu} alt = "menu" style={{width: "16px", height: "16px"}}/></button>
                            <button className="mypage_icon"><img src={profile} alt="profile"style={{width: "30px", height: "30px"}}/></button>
                        </button>
                    </div>
                </div>
                </div>
            <FooterDetail/>
            <Footer/>
        </div>
    )
}

export default Search;