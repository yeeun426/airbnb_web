/* eslint-disable array-callback-return */
import { Link, useNavigate } from 'react-router-dom';
import React, {useState, useEffect} from "react";

import '../App.css';
import styles from './Main.module.css';
// import styled from 'styled-components';

import place from '../data/TravelPlace.json'

import {useRecoilState} from "recoil"
import {countryState} from '../recoil/SearchMain'

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
// import HeartButton from '../components/HeartButton';

SwiperCore.use([Navigation, Pagination])

function Main() {
    const [popup, setPopup] = useState(false);

    const showPopup = (e) => {
        if(popup===false){
            setPopup(true)
            }else{
            setPopup(false)
            }    
        };
    
    const [viewMap, setViewMap] = useState(false)

    const navigate = useNavigate();
    
    const onClickHost = () => {
        navigate(`/behost`);
    };

    const onClickSearch = () => {
        navigate('/search')
    }
    
    const [country, setCountry] = useRecoilState(countryState);

    const onClickArea = (e) => {
        setCountry(document.activeElement.id);
    }

    return (
    <div className="App">
      <div className="header">
        {!popup ? (
        <div className="header_wrap">
            <div class = "header_content">
                <Link to="/">
                    <img src={logo} alt="logo" style={{width:"102px", height:"32px"}}/>
                </Link>
            </div>

            <div class = "header_content" id = "second_content">
                <div className="plan_filter" onClick={showPopup}>
                    <button className="btn_filter" alt="btn_filter">어디든지</button>
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
        ) : 
        <div id={styles.active_container}>
            <div className="header_wrap" onClick={showPopup}>
                <div class = "header_content">
                    <Link to="/">
                        <img src={logo} alt="logo" style={{width:"102px", height:"32px"}}/>
                    </Link>
                </div>

                <div class = "header_content" id = {styles.active_second}>
                    <div className={styles.upper_filter}>
                        <span>숙소</span>
                        <span>체험</span>
                        <span>온라인 체험</span>
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

            <div className={styles.lower_filter}>
                <div className={styles.lower_item} id={styles.active_ex} style={{flexGrow:2}}>
                    <div className={styles.lower_names}>
                        여행지
                    </div>

                    <div className={styles.lower_details}>
                        <input
                            type="text"
                            placeholder="여행지 검색"
                            value={country}
                            onChange={(e)=>setCountry(e.target.value)}
                        />
                    </div>
                </div>

                <div className={styles.lower_item} style={{flexGrow:1}}>
                    <div className={styles.lower_names}>
                        체크인
                    </div>

                    <div className={styles.lower_details}>
                        날짜 입력
                    </div>
                </div>

                <div className={styles.lower_item} style={{flexGrow:1}}>
                    <div className={styles.lower_names}>
                        체크아웃
                    </div>

                    <div className={styles.lower_details} >
                        날짜 입력
                    </div>
                </div>

                <div className={styles.lower_search} style={{flexGrow:1}}>
                    <div className={styles.lower_item}>
                        <div className={styles.lower_names}>
                            여행자
                        </div>

                        <div className={styles.lower_details}>
                            게스트 추가
                        </div>
                    </div>
                    <button className={styles.popup_search} onClick={onClickSearch}>
                        <div>
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{fill: "none", height: "16px", width: "16px", stroke: "currentcolor", "stroke-width": 4, overflow: "visible"}}><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg>
                        </div>

                        <div>
                            검색
                        </div>
                    </button>
                </div> 
            </div>   
        </div>
        }
    </div>

    {popup ?
    <div className={styles.header_modal}>
        <div className={styles.hd_title}>지역으로 검색하기</div>
        <div className={styles.hd_container}>
            <div className={styles.hd_item}>
                <button id="유연한 검색" className={styles.hd_img} onClick={onClickArea}>
                    <img alt="" src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg"/>
                </button>

                <button className={styles.hd_txt}>
                    유연한 검색
                </button>
            </div>
            <div className={styles.hd_item}>
                <button id="유럽" className={styles.hd_img} onClick={onClickArea}>
                    <img alt="" src="https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320"/>
                </button>

                <div className={styles.hd_txt}>
                    유럽
                </div>
            </div>
            
            <div className={styles.hd_item}>
                <button id="프랑스" className={styles.hd_img} onClick={onClickArea}>
                    <img alt="" src="https://a0.muscache.com/im/pictures/f0ece7c0-d9b2-49d5-bb83-64173d29cbe3.jpg?im_w=320"/>
                </button>

                <div className={styles.hd_txt}>
                    프랑스
                </div>
            </div>

            <div className={styles.hd_item}>
                <button id="동남아시아" className={styles.hd_img} onClick={onClickArea}>
                    <img alt="" src="https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320"/>
                </button>

                <div className={styles.hd_txt}>
                    동남아시아
                </div>
            </div>

            <div className={styles.hd_item}>
                <button id="이탈리아" className={styles.hd_img} onClick={onClickArea}>
                    <img alt="" src="https://a0.muscache.com/im/pictures/ea5598d7-2b07-4ed7-84da-d1eabd9f2714.jpg?im_w=320"/>
                </button>

                <div className={styles.hd_txt}>
                    이탈리아
                </div>
            </div>

            <div className={styles.hd_item}>
                <button id="미국" className={styles.hd_img} onClick={onClickArea}>
                    <img alt="" src="https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320"/>
                </button>

                <div className={styles.hd_txt} onClick={onClickArea}>
                    미국
                </div>
            </div>
        </div>
    </div>
    :null
    }
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

            <div className={styles.small_footer}>
                <div className={styles.sfooter_list}>
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ height: "24px", width: "24px", stroke: "currentcolor", "stroke-width": "4", color:"#FF385C"}}><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg>
                    <div className={styles.sfooter_item} style={{color:"black", fontWeight:"bold"}}>
                        둘러보기
                    </div>
                </div>

                <div className={styles.sfooter_list}>
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ height: "24px", width: "24px", fill:"none", stroke: "currentcolor", "stroke-width": "2.66667"}}><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path></svg>
                    <div className={styles.sfooter_item}>
                        위시리스트
                    </div>
                </div>

                <div className={styles.sfooter_list}>
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ height: "24px", width: "24px", fill:"currentcolor"}}><path d="m16 1c8.2842712 0 15 6.71572875 15 15 0 8.2842712-6.7157288 15-15 15-8.28427125 0-15-6.7157288-15-15 0-8.28427125 6.71572875-15 15-15zm0 8c-2.7614237 0-5 2.2385763-5 5 0 2.0143973 1.2022141 3.7998876 2.9996346 4.5835001l.0003231 2.0984999-.1499943.0278452c-2.8326474.5613112-5.31897338 2.2230336-6.93575953 4.5872979 2.34343054 2.291067 5.54974273 3.7028569 9.08579613 3.7028569 3.5355506 0 6.7414538-1.4113884 9.0850203-3.701476-1.6141801-2.3628535-4.0978119-4.0247647-6.929184-4.5867938l-.1558786-.0287302.001228-2.0991413c1.7288399-.7547474 2.9066959-2.4357565 2.9936498-4.355479l.0051645-.2283797c0-2.7614237-2.2385763-5-5-5zm0-6c-7.17970175 0-13 5.82029825-13 13 0 2.9045768.95257276 5.5866683 2.56235849 7.7509147 1.42074739-1.9134907 3.33951478-3.4002416 5.53860831-4.2955956l.3480332-.1363191-.0229565-.0189706c-1.43704227-1.2411241-2.34462949-3.045583-2.42083359-5.0285539l-.00520991-.2714755c0-3.8659932 3.1340068-7 7-7s7 3.1340068 7 7c0 1.9941317-.8415062 3.8279876-2.224566 5.1193683l-.225434.2006317.0447787.0163138c2.3268368.8792152 4.3570558 2.4138611 5.8430586 4.4127726 1.6098837-2.1632453 2.5621627-4.8449575 2.5621627-7.7490864 0-7.17970175-5.8202983-13-13-13z"></path></svg>
                    <div className={styles.sfooter_item}>
                        로그인
                    </div>
                </div>
            </div>
        </div>

    </div>
  );
}


const TripList = (props) => {
    const [like,setLike] = useState([]);

    // filter()를 사용해 kindList라는 새 배열을 만듦
    // place 객체 속의 kind는 위에서 변수 kind값이 됨.
    const kind = "섬"
    const kindList = place.place.filter(place => (place.kind === kind))

    // useEffect(() => {   
    // }, [like.like]);


    const toggleLike = (e) => {
        place.place[e.currentTarget.id-1].like
            ? place.place[e.currentTarget.id-1].like = false
            : place.place[e.currentTarget.id-1].like = true

        kindList.map((item) => {
            if(kindList[e.currentTarget.id-1].id === item.id) 
                setLike(item);
        })
        console.log(like.like)

    }   


    // 클릭하면 id값 받아오기
    //받아온 id값의 like를 true로 바꿈


    return(
    <div className="main_container">
        <div className={styles.sookso_container} style={{ textDecoration: 'none', color:"black"}}>
        {kindList.map((place) => ( //map 함수를 이용해 kindList 안의 원소를 검색한다.
            <div className={styles.container} key={place.id}> 
            {/* key값을 kindList원소(place) 안의  id로 지정*/}
                <div key={place.kind} id="main_img" style={{position: 'relative'}}>
                    <Link to="/Detail">
                        <Swiper
                            className={styles.main_detail}
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
                    {/* <HeartButton like={like} onClick={toggleLike}/> */}
                    {place.like?
                        <svg onClick={toggleLike}
                            id={place.id}
                            style={{fill:"red"}}
                            className={styles.like_icon}
                            viewBox="0 0 32 32" 
                            xmlns="http://www.w3.org/2000/svg" >
                            <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
                        </svg>
                        : 
                        <svg onClick={toggleLike}
                            id={place.id}
                            style={{fill:"rgba(0,0,0,0.5)"}}
                            className={styles.like_icon}
                            viewBox="0 0 32 32" 
                            xmlns="http://www.w3.org/2000/svg" >
                            <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
                        </svg>
                    }
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
                            : null}
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