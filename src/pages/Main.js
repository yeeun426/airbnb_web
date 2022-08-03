import { Link, useNavigate } from 'react-router-dom';
import React, {useState} from "react";
import '../App.css';
import styles from './Main.module.css';
// import styled, { css } from 'styled-components';
import place from '../data/TravelPlace.json'

import MapContainer from '../components/MapContainer'
import Footer from '../components/Footer'

import logo from '../img/logo.png';
import search from '../img/search.png';
import earth from "../img/earth.png";
import menu from "../img/menu.png";
import profile from "../img/profile.png";
import HeaderSwiper from '../components/HeaderSwiper';

import SwiperCore,{ Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination])

function Main() {
    
    const [viewMap, setViewMap] = useState(false)

    const navigate = useNavigate();
    
    const onClickHost = () => {
        navigate(`/behost`);
    };
    
    return (
    <div className="App">
      <div className="header">
        <div className="header_wrap">
            <div class = "header_content">
                <Link to="/">
                    <img src={logo} alt="logo" style={{width:"102px", height:"32px"}}/>
                </Link>
            </div>

            <div class = "header_content" id = "second_content">
                <div className="plan_filter">
                    <button className="btn_filter" alt="btn_filter">어디든지</button>
                    <span className="wall_btn"></span>

                    <button className="btn_filter" alt="btn_filter">언제든 일주일</button>
                    <span className="wall_btn"></span>

                    <button id="addguest">
                        <div style={{padding: '0px 16px'}}>게스트 추가</div>
                        <div className="searchicon"><img src={search} alt="search" style={{width: '12px', height: '12px;'}}/></div>
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

    <div id="main">
        <div className="filter_header">
            <HeaderSwiper />
        </div>

        <div className={styles.main_area}>
            {viewMap ? <div className='main_map'><MapContainer /></div> : <TripList />}
        </div>
    </div>

        <div className={styles.footer}>
            <div className={styles.btn_map}>
                {!viewMap ?    
                <>          
                <button class={styles.btn_maplist} onClick={() => setViewMap(true)}>
                    <span>지도 표시하기</span>
                    <svg viewBox="0 0 32 32" style={{display:"block", height:"16px", width: "16px", fill:"#FFFFFF"}}><path d="M31.245 3.747a2.285 2.285 0 0 0-1.01-1.44A2.286 2.286 0 0 0 28.501 2l-7.515 1.67-10-2L2.5 3.557A2.286 2.286 0 0 0 .7 5.802v21.95a2.284 2.284 0 0 0 1.065 1.941A2.29 2.29 0 0 0 3.498 30l7.515-1.67 10 2 8.484-1.886a2.285 2.285 0 0 0 1.802-2.245V4.247a2.3 2.3 0 0 0-.055-.5zM12.5 25.975l-1.514-.303L9.508 26H9.5V4.665l1.514-.336 1.486.297v21.349zm10 1.36l-1.515.337-1.485-.297V6.025l1.514.304L22.493 6h.007v21.335z"></path></svg>
                </button>
                <Footer />
                </>
                :
                <button class={styles.btn_maplist} id = {styles.btn_list} onClick={() => setViewMap(false)}>
                    <span>목록보기</span>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{display:"block", height:"16px", width: "16px", fill:"#FFFFFF"}}><path fill-rule="evenodd" d="M2.5 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM15 12v2H6v-2h9zM2.5 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM15 7v2H6V7h9zM2.5 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM15 2v2H6V2h9z"></path></svg>                
                </button>
                }
                
            </div>
        </div>

    </div>
  );
}

const TripList = () => {
    const [fill, setFill] = useState('rgba(0, 0, 0, 0.5)');

    const onClickLike = () => {
        fill === 'rgba(0, 0, 0, 0.5)' ? setFill('palevioletred'): setFill('rgba(0, 0, 0, 0.5)');
        console.log("좋아요")
    };
    
    const kind = "섬" 
    const kindList = place.place.filter(place => (place.kind === kind))
    // filter()를 사용해 kindList라는 새 배열을 만듦
    // place 객체 속의 kind는 위에서 변수 kind값이 됨.

    return(
    <div className="main_container">
        <div className={styles.sookso_container} style={{ textDecoration: 'none', color:"black"}}>
        {kindList.map((place) => (
            <div className={styles.container} key={place.id}>
                <div key={place.kind} id="main_img" style={{position: 'relative'}}>
                    <Link to="/Detail">
                        <Swiper
                            className={styles.main_detail}
                            spaceBetween={50}
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
                    <svg onClick = {onClickLike}
                        id={1}
                        style ={{fill: fill}} 
                        className={styles.like_icon} 
                        viewBox="0 0 32 32" 
                        xmlns="http://www.w3.org/2000/svg" >
                        <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
                    </svg>
                </div>

                <div className={styles.first_line}>
                    <div className="detail_info title">{place.country}</div>
                        {/* <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{height: "12px", width: "12px", fill: "currentcolor"}}><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd"></path></svg>
                        <span>NEW</span> */}
                        {place.new ? 
                            <div>
                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{height: "12px", width: "12px", fill: "currentcolor"}}><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd"></path></svg>
                                <span>NEW</span>
                            </div>
                            :
                            null}
                </div>
                <div className="detail_info distance">{place.distance}</div>
                <div className="detail_info day">{place.date}</div>
                <div className="detail_info price">{place.price}</div>
            </div>
            ))}
        </div>
    </div>  
    )
}

export default Main;

        // <div className="container">
        //     <div id="main_img" style={{position: 'relative'}}>
        //         <Swiper
        //             className={styles.main_detail}
        //             spaceBetween={50}
        //             slidesPerView={1}
        //             navigation
        //             pagination={{ clickable: true }}
        //             >
        //             <SwiperSlide>
        //                 <img className="detail_img" alt="detail_img" src="https://a0.muscache.com/im/pictures/2f15fd34-ad65-4b22-a276-50c298cbae3e.jpg?im_w=720"/>
        //             </SwiperSlide>
        //             <SwiperSlide>
        //                 <img className="detail_img" alt="detail_img" src="https://a0.muscache.com/im/pictures/7c586cfa-6a5c-4ec1-8fcd-5890b6a50769.jpg?im_w=720"/>
        //             </SwiperSlide>                    
        //             <SwiperSlide>
        //                 <img className="detail_img" alt="detail_img" src="https://a0.muscache.com/im/pictures/4ee4b710-db54-417a-a2ee-9a3500cd0879.jpg?im_w=720"/>
        //             </SwiperSlide>                    
        //             <SwiperSlide>
        //                 <img className="detail_img" alt="detail_img" src="https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720"/>
        //             </SwiperSlide>                    
        //             <SwiperSlide>
        //                 <img className="detail_img" alt="detail_img" src="https://a0.muscache.com/im/pictures/8d085e29-d5d6-4cd5-908b-38b05f4f669b.jpg?im_w=720"/>
        //             </SwiperSlide>
        //         </Swiper>
        //         <svg onClick = {onClickLike}
        //             style ={{fill: fill}} 
        //             className={styles.like_icon} 
        //             viewBox="0 0 32 32" 
        //             xmlns="http://www.w3.org/2000/svg" >
        //             <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
        //         </svg>              
        //     </div>

        //         <div className={styles.first_line}>
        //             <div className="detail_info title">MV, 몰디브</div>
        //             <div>
        //                 <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{height: "12px", width: "12px", fill: "currentcolor"}}><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd"></path></svg>
        //                 <span>4.96</span>
        //             </div>
        //         </div>
        //     <div className="detail_info distance">6,693km 거리</div>
        //     <div className="detail_info day">7월 15일~20일</div>
        //     <div className="detail_info price">\1,550,115 /박</div>
        // </div>

        // <div className="container">
        //     <div id="main_img" style={{position: 'relative'}}>
        //         <Swiper
        //             className={styles.main_detail}
        //             spaceBetween={50}
        //             slidesPerView={1}
        //             navigation
        //             pagination={{ clickable: true }}
        //             >
        //             <SwiperSlide>
        //                 <img className="detail_img" alt="detail_img" src="https://a0.muscache.com/im/pictures/miso/Hosting-555632030522710376/original/c8b5a0c1-0468-4402-a772-2b93d75366df.jpeg?im_w=720"/>
        //             </SwiperSlide>
        //             <SwiperSlide>
        //                 <img className="detail_img" alt="detail_img" src="https://a0.muscache.com/im/pictures/7c586cfa-6a5c-4ec1-8fcd-5890b6a50769.jpg?im_w=720"/>
        //             </SwiperSlide>                    
        //             <SwiperSlide>
        //                 <img className="detail_img" alt="detail_img" src="https://a0.muscache.com/im/pictures/4ee4b710-db54-417a-a2ee-9a3500cd0879.jpg?im_w=720"/>
        //             </SwiperSlide>                    
        //             <SwiperSlide>
        //                 <img className="detail_img" alt="detail_img" src="https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720"/>
        //             </SwiperSlide>                    
        //             <SwiperSlide>
        //                 <img className="detail_img" alt="detail_img" src="https://a0.muscache.com/im/pictures/8d085e29-d5d6-4cd5-908b-38b05f4f669b.jpg?im_w=720"/>
        //             </SwiperSlide>
        //         </Swiper>
        //         <svg onClick = {onClickLike}
        //             style ={{fill: fill}} 
        //             className={styles.like_icon} 
        //             viewBox="0 0 32 32" 
        //             xmlns="http://www.w3.org/2000/svg" >
        //             <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
        //         </svg>               
        //     </div>

        //     <div className={styles.first_line}>
        //         <div className="detail_info title">Sail, Croatia 크로아티아</div>
        //         <div>
        //             <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{height: "12px", width: "12px", fill: "currentcolor"}}><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd"></path></svg>
        //             <span>NEW</span>
        //         </div>
        //     </div>
        //     <div className="detail_info distance">8,658km 거리</div>
        //     <div className="detail_info day">9월 24일~29일</div>
        //     <div className="detail_info price">\194,136 /박</div>
        // </div>

        // <div className="container">
        //     <div id="main_img" style={{position: 'relative'}}>
        //         <Swiper
        //             className={styles.main_detail}
        //             spaceBetween={50}
        //             slidesPerView={1}
        //             navigation
        //             pagination={{ clickable: true }}
        //             >
        //             <SwiperSlide>
        //                 <img className="detail_img" alt="detail_img" src="https://a0.muscache.com/im/pictures/03bf7345-f535-4266-9bb1-b1a84d464d1c.jpg?im_w=720"/>
        //             </SwiperSlide>
        //             <SwiperSlide>
        //                 <img className="detail_img" alt="detail_img" src="https://a0.muscache.com/im/pictures/7c586cfa-6a5c-4ec1-8fcd-5890b6a50769.jpg?im_w=720"/>
        //             </SwiperSlide>                    
        //             <SwiperSlide>
        //                 <img className="detail_img" alt="detail_img" src="https://a0.muscache.com/im/pictures/4ee4b710-db54-417a-a2ee-9a3500cd0879.jpg?im_w=720"/>
        //             </SwiperSlide>                    
        //             <SwiperSlide>
        //                 <img className="detail_img" alt="detail_img" src="https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720"/>
        //             </SwiperSlide>                    
        //             <SwiperSlide>
        //                 <img className="detail_img" alt="detail_img" src="https://a0.muscache.com/im/pictures/8d085e29-d5d6-4cd5-908b-38b05f4f669b.jpg?im_w=720"/>
        //             </SwiperSlide>
        //         </Swiper>
        //         <svg onClick = {onClickLike}
        //             style ={{fill: fill}} 
        //             className={styles.like_icon} 
        //             viewBox="0 0 32 32" 
        //             xmlns="http://www.w3.org/2000/svg" >
        //             <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
        //         </svg>            
        //     </div>

        //     <div className={styles.first_line}>
        //         <div className="detail_info title">Murter, 크로아티아</div>
        //         <div>
        //             <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{height: "12px", width: "12px", fill: "currentcolor"}}><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd"></path></svg>
        //             <span>4.91</span>
        //         </div>
        //     </div>

        //     <div className="detail_info distance">8,637km 거리</div>
        //     <div className="detail_info day">10월 16일~23일</div>
        //     <div className="detail_info price">\210,690 /박</div>
        // </div>

        // <div className="container">
        //     <div id="main_img" style={{position: 'relative'}}>
        //         <img className="detail_img" alt="detail_img" src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-48729525/original/f62e1b1a-d6af-438b-82ce-95c51a4e0ca1.jpeg?im_w=720"/>
        //         <svg onClick = {onClickLike}
        //             style ={{fill: fill}} 
        //             className={styles.like_icon} 
        //             viewBox="0 0 32 32" 
        //             xmlns="http://www.w3.org/2000/svg" >
        //             <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
        //         </svg>               
        //     </div>

        //     <div className={styles.first_line}>
        //         <div className="detail_info title">MV, 몰디브</div>
        //         <div>
        //             <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{height: "12px", width: "12px", fill: "currentcolor"}}><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd"></path></svg>
        //             <span>4.67</span>
        //         </div>
        //     </div>

        //     <div className="detail_info distance">6,596km 거리</div>
        //     <div className="detail_info day">8월 18일~24일</div>
        //     <div className="detail_info price">\886,626 /박</div>
        // </div>

        // <div className="container">
        //     <div id="main_img" style={{position: 'relative'}}>
        //         <img className="detail_img" alt="detail_img" src="https://a0.muscache.com/im/pictures/miso/Hosting-555701192524977533/original/234db0e5-8ef3-45c4-9cf9-d2c5eb8ad0c0.jpeg?im_w=720"/>
        //         <svg onClick = {onClickLike}
        //             style ={{fill: fill}} 
        //             className={styles.like_icon} 
        //             viewBox="0 0 32 32" 
        //             xmlns="http://www.w3.org/2000/svg" >
        //             <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
        //         </svg>               
        //     </div>

        //     <div className={styles.first_line}>
        //         <div className="detail_info title">MV, 몰디브</div>
        //         <div>
        //             <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{height: "12px", width: "12px", fill: "currentcolor"}}><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd"></path></svg>
        //             <span>NEW</span>
        //         </div>
        //     </div>
        //     <div className="detail_info distance">6,693km 거리</div>
        //     <div className="detail_info day">7월 15일~20일</div>
        //     <div className="detail_info price">\1,550,115 /박</div>
        // </div>

        // <div className="container">
        //     <div id="main_img" style={{position: 'relative'}}>
        //         <img className="detail_img" alt="detail_img" src="https://a0.muscache.com/im/pictures/177ed8a7-557b-480f-8319-4f8330e2c692.jpg?im_w=720"/>
        //         <svg onClick = {onClickLike}
        //             style ={{fill: fill}} 
        //             className={styles.like_icon} 
        //             viewBox="0 0 32 32" 
        //             xmlns="http://www.w3.org/2000/svg" >
        //             <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
        //         </svg>               
        //     </div>

        //     <div className={styles.first_line}>
        //         <div className="detail_info title">Sail, Croatia 크로아티아</div>
        //         <div>
        //             <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{height: "12px", width: "12px", fill: "currentcolor"}}><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd"></path></svg>
        //             <span>NEW</span>
        //         </div>
        //     </div>
        //     <div className="detail_info distance">8,658km 거리</div>
        //     <div className="detail_info day">9월 24일~29일</div>
        //     <div className="detail_info price">\194,136 /박</div>
        // </div>

        // <div className="container">
        //     <div id="main_img" style={{position: 'relative'}}>
        //         <img className="detail_img" alt="detail_img" src="https://a0.muscache.com/im/pictures/78fb8268-b999-4389-b072-e2a66910e41b.jpg?im_w=720"/>
        //         <svg onClick = {onClickLike}
        //             style ={{fill: fill}} 
        //             className={styles.like_icon} 
        //             viewBox="0 0 32 32" 
        //             xmlns="http://www.w3.org/2000/svg" >
        //             <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
        //         </svg>               
        //     </div>

        //     <div className={styles.first_line}>
        //         <div className="detail_info title">Murter, 크로아티아</div>
        //         <div>
        //             <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{height: "12px", width: "12px", fill: "currentcolor"}}><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd"></path></svg>
        //             <span>4.46</span>
        //         </div>
        //     </div> 
        //     <div className="detail_info distance">8,637km 거리</div>
        //     <div className="detail_info day">10월 16일~23일</div>
        //     <div className="detail_info price">\210,690 /박</div>
        // </div>