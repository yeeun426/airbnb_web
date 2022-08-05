import React, {useState} from "react";

import Footer from '../components/Footer'
import FooterDetail from '../components/FooterDetail'
import { countryState } from '../recoil/SearchMain';

import stylesmain from './Main.module.css';
import styles from './search.module.css';

import place from '../data/TravelPlace.json'
import MapContainer from '../components/MapContainer'

import {Link, useNavigate} from 'react-router-dom';

import logo from '../img/logo.png';
import search from '../img/search.png';
import earth from "../img/earth.png";
import menu from "../img/menu.png";
import profile from "../img/profile.png";

import { useRecoilValue } from 'recoil';
import { Swiper, SwiperSlide } from 'swiper/react';

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

    const kind = "섬"
    const kindList = place.place.filter(place => (place.kind === kind))

    // const [color, setColor] = useState('rgba(0,0,0,0.5)');
    // const [fill, setFill] = useState([]);

    return(
        <div className = "Search">
            <div className="header">
                <div className="header_wrap" style={{paddingInline: "24px"}}>
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

                            <button className={stylesmain.activeSearch}>
                                <div style={{display: 'flex'}}>
                                    <div style={{"padding-right":"16px", "align-self":"center"}}>
                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{height: "16px", width: "16px"}}><path d="M13 0c7.18 0 13 5.82 13 13 0 2.868-.929 5.519-2.502 7.669l7.916 7.917-2.828 2.828-7.917-7.916A12.942 12.942 0 0 1 13 26C5.82 26 0 20.18 0 13S5.82 0 13 0zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" opacity=".8"></path></svg>
                                    </div>

                                    <div>
                                        <div className={stylesmain.small_search}>
                                            어디로 여행가세요?
                                        </div>
                                        <div className={stylesmain.small_detail}>
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

            <div className={styles.container}>
            <div className={styles.search_container}>
                <div className={styles.txt_info}>
                    <div>숙소 1,000개 이상</div>
                    
                    <button>
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={{display: "block", height: "16px", width: "16px", fill: "currentcolor"}}><path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>
                        <div>필터</div>
                    </button>
                </div>

                <div className={styles.main_container}>
                    <div className={styles.sookso_container} style={{ textDecoration: 'none', color:"black"}}>
                    {kindList.map((place) => ( //map 함수를 이용해 kindList 안의 원소를 검색한다.
                        <div className={stylesmain.container} key={place.id}> 
                        {/* key값을 kindList원소(place) 안의  id로 지정*/}
                            <div key={place.kind} id="main_img" style={{position: 'relative'}}>
                                <Link to="/Detail">
                                    <Swiper
                                        className={stylesmain.main_detail}
                                        // spaceBetween={50}
                                        slidesPerView={1}
                                        navigation
                                        pagination={{ clickable: true }}
                                        >
                                        <SwiperSlide>
                                            <img className="detail_img" alt="detail_img" src={place.img}/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img className="detail_img" alt="detail_img" src="https://a0.muscache.com/im/pictures/7c586cfa-6a5c-4ec1-8fcd-5890b6a50769.jpg?im_w=720"/>
                                        </SwiperSlide>                    
                                        <SwiperSlide>
                                            <img className="detail_img" alt="detail_img" src="https://a0.muscache.com/im/pictures/4ee4b710-db54-417a-a2ee-9a3500cd0879.jpg?im_w=720"/>
                                        </SwiperSlide>                    
                                        <SwiperSlide>
                                            <img className="detail_img" alt="detail_img" src="https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720"/>
                                        </SwiperSlide>                    
                                        <SwiperSlide>
                                            <img className="detail_img" alt="detail_img" src="https://a0.muscache.com/im/pictures/8d085e29-d5d6-4cd5-908b-38b05f4f669b.jpg?im_w=720"/>
                                        </SwiperSlide>
                                    </Swiper>
                                </Link>

                                <svg
                                    id={place.id}
                                    style={{fill:'rgba(0,0,0,0.5)'}}
                                    className={stylesmain.like_icon}
                                    viewBox="0 0 32 32" 
                                    xmlns="http://www.w3.org/2000/svg" >
                                    <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
                                </svg>
                            </div>

                            <div className={stylesmain.first_line}>
                                <div className="detail_info title">{place.country}</div>
                                    {/* <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{height: "12px", width: "12px", fill: "currentcolor"}}><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd"></path></svg>
                                    <span>NEW</span> */}
                                    {place.new ? 
                                        <div>
                                            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{height: "12px", width: "12px", fill: "currentcolor"}}><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd"></path></svg>
                                            <span>NEW</span>
                                        </div>
                                        : null}
                            </div>
                            <div className="detail_info distance">{place.distance}</div>
                            <div className="detail_info day">{place.date}</div>
                            <div className="detail_info price">{place.price}</div>
                        </div>
                        ))}
                    </div>
                </div> 
            </div>
            
            <div className={styles.map_container}>
                <MapContainer />
            </div>
        </div>
        <FooterDetail/>
        <Footer/>
    </div>
    )
}

export default Search;