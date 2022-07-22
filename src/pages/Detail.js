import { Link } from 'react-router-dom';
import styles from './Detail.module.css'

import React from "react";
import '../pages/Detail.css'
import logo from '../img/logo.png';
import search from "../img/search.png"
import earth from "../img/earth.png"
import menu from "../img/menu.png"
import profile from "../img/profile.png"

import Footer from "../components/Footer"
import FooterDetail from '../components/FooterDetail';

function Detail() {

    return (
        <div className={styles.Detail}>
            <div class="header">
                <div class="header_wrap" id="detail_header">
                <div class = "header_content" style={{display: "inline-flex"}}>
                    <Link to="/">
                        <img src={logo} alt="logo" style={{width:"102px", height:"32px"}}/>
                    </Link>
                </div>

                <div class = "header_content middle_content">
                    <div class="plan_filter" id="search_input">
                    {/* <button class="btn_filter" style={{font-weight: "bold"}}>검색 시작하기</button> */}
                    <button class="btn_filter">검색 시작하기</button>

                    <button class="startsearch">
                        <div class="searchicon"><img src={search} alt="search"style={{width: "12px", height: "12px"}}/></div>
                    </button>
                    </div>                
                </div>

                <div class = "header_content" id="third_content">
                    <Link to="/behost">
                        <button className="header_btn" id="BeHost" onClick="location.href='host.html'">
                            호스트 되기
                        </button>
                    </Link>
                    <button className="header_btn" style={{width:'40px', height:'42px'}}>
                        <img src={earth} alt="earth" style={{width: '16px', height: "16px"}}/>
                    </button>                    
                    <div className="mypage">
                        <button class="mypage_icon"><img src= {menu} alt = "menu" style={{width: "16px", height: "16px"}}/></button>
                        <button class="mypage_icon"><img src={profile} alt="profile" style={{width: "30px", height: "30px"}}/></button>
                    </div>
                </div>
                </div>
            </div>

            <div class="info">
                <div id="info_container">
                    <div class="name_container">
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-label="자동 번역된 이름: 아다란 클럽 Rannalhi, 몰디브, 워터 방갈로" role="img" focusable="false" style={{display: "block", height: "24px", width: "24px", fill: "currentcolor"}}><path d="M9 0a1 1 0 0 1 .993.883L10 1v5h5a1 1 0 0 1 .993.883L16 7v8a1 1 0 0 1-.883.993L15 16H7a1 1 0 0 1-.993-.883L6 15v-5H1a1 1 0 0 1-.993-.883L0 9V1A1 1 0 0 1 .883.007L1 0h8zm1.729 7l-1.393.495.233.217.13.132c.125.127.227.245.308.352l.073.103.048.073.045.077H7.308v1.309h1.207l.166.52.09.266.112.29a6.294 6.294 0 0 0 1.109 1.789c-.495.315-1.119.607-1.87.87l-.331.112-.346.108-.445.134L7.72 15l.407-.125.386-.128c1.007-.349 1.836-.752 2.486-1.214.57.405 1.277.764 2.12 1.08l.369.134.386.128.406.125.72-1.153-.445-.134-.26-.08-.345-.115c-.783-.27-1.43-.57-1.94-.895a6.3 6.3 0 0 0 1.068-1.694l.128-.32.114-.33.165-.521h1.208V8.449H11.64l-.093-.231a3.696 3.696 0 0 0-.554-.917l-.126-.149-.14-.152zm1.35 2.758l-.042.133-.076.224-.103.264A4.985 4.985 0 0 1 11 11.76a4.952 4.952 0 0 1-.743-1.127l-.115-.254-.103-.264-.076-.224-.042-.133h2.158zM9 1H1v8h5V7c0-.057.005-.113.014-.167H3.827L3.425 8H2l2.257-6h1.486l1.504 4H9V1zM5 3.411L4.253 5.6h1.502L5 3.411z"></path></svg>
                        <div>아다란 클럽 Rannalhi, 몰디브, 워터 방갈로</div>
                    </div>

                    <div class="name_sub">
                        <div id="country_name">몰디브</div>
                        <div id="share_save">
                            <div id="share" style={{display: "flex"}}>
                                {/* <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", fill: "none", height: "16px", width: "16px", stroke: "currentcolor", stroke-width: "2", overflow: "visible"}}><path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9"></path><path d="M16 3v23V3z"></path><path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13"></path></svg> */}
                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", fill: "none", height: "16px", width: "16px", stroke: "currentcolor", overflow: "visible"}}><path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9"></path><path d="M16 3v23V3z"></path><path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13"></path></svg>
                                공유하기
                            </div>
                            <div id="save" style={{display: "flex"}}>
                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", fill: "none", height: "16px", width: "16px", stroke: "currentcolor", overflow: "visible"}}><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path></svg>
                                저장
                            </div>
                        </div>
                    </div>

                    <div class="img_container">
                        <div id="first_img">
                        <img src="https://a0.muscache.com/im/pictures/373443ec-b377-4181-b753-3a2f3508c2b3.jpg?im_w=1200" alt="main_img"/>
                        </div>

                        <div class="sub_img">
                        <img class = "first_pict" src="https://a0.muscache.com/im/pictures/7c586cfa-6a5c-4ec1-8fcd-5890b6a50769.jpg?im_w=720" alt="sub_img"/>
                        <img class = "second_pict" src="https://a0.muscache.com/im/pictures/4ee4b710-db54-417a-a2ee-9a3500cd0879.jpg?im_w=720" alt="sub_img"/>
                        </div>

                        <div class="sub_img">
                        <img class = "first_pict" id="third_img" src="https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720" alt="sub_img"/>
                        <img class = "second_pict" id="fourth_img" src="https://a0.muscache.com/im/pictures/8d085e29-d5d6-4cd5-908b-38b05f4f669b.jpg?im_w=720" alt="sub_img"/>
                        </div>
                    </div>
                </div>

                <div id="total_info">
                    <div class="left_info">
                        <div id="host_container">
                        <div>
                            <div className="title_txt" style={{"padding-bottom":"14px"}}>Dorothy님이 호스팅하는 돔하우스</div>    
                            <ul>
                            <li><span>최대 인원 6명</span></li>
                            <li><span>침실 1개</span></li>
                            <li><span>침대 1개</span></li>
                            <li><span>욕실 1개</span></li>
                            </ul>
                        </div> 

                        <button class="btn_host">
                            {/* <img class="host_info" src="https://a0.muscache.com/im/pictures/user/0ea3cd74-7ce9-4f59-bf57-334651d552c6.jpg?im_w=240"  style={{object-fit: "cover", vertical-align: "bottom"}}/> */}
                            <img class="host_info" alt="host_info" src="https://a0.muscache.com/im/pictures/user/0ea3cd74-7ce9-4f59-bf57-334651d552c6.jpg?im_w=240"/>
                        </button>
                        </div> 

                        <div id="enjoy_info">
                            <div class="list_enjoy">
                            {/* svg태그 있었는데 개빡치게 오류내서 삭제함 */}
                                <svg viewBox="0 0 32 32" style={{display: "block", height: "24px", width: "24px", fill: "currentcolor"}}><path d="M24 26c.988 0 1.945.351 2.671 1.009.306.276.71.445 1.142.483L28 27.5v2l-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 28c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 28c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 28c-.503 0-.98.175-1.33.491a3.96 3.96 0 0 1-2.442 1.003L4 29.5v-2l.187-.008a1.953 1.953 0 0 0 1.142-.483A3.975 3.975 0 0 1 8 26c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492A3.974 3.974 0 0 1 16 26c.988 0 1.945.351 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.491A3.975 3.975 0 0 1 23.999 26zm0-5c.988 0 1.945.351 2.671 1.009.306.276.71.445 1.142.483L28 22.5v2l-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 23c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 23c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 23c-.503 0-.98.175-1.33.491a3.96 3.96 0 0 1-2.442 1.003L4 24.5v-2l.187-.008a1.953 1.953 0 0 0 1.142-.483A3.975 3.975 0 0 1 8 21c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492A3.974 3.974 0 0 1 16 21c.988 0 1.945.351 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.491A3.975 3.975 0 0 1 23.999 21zM20 3a4 4 0 0 1 3.995 3.8L24 7v2h4v2h-4v5c.912 0 1.798.3 2.5.862l.171.147c.306.276.71.445 1.142.483L28 17.5v2l-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 18c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 18c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 18c-.503 0-.98.175-1.33.491a3.96 3.96 0 0 1-2.442 1.003L4 19.5v-2l.187-.008a1.953 1.953 0 0 0 1.142-.483A3.975 3.975 0 0 1 8 16c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492a3.956 3.956 0 0 1 2.444-1.002L16 16v-5H4V9h12V7a2 2 0 0 0-3.995-.15L12 7h-2a4 4 0 0 1 7-2.645A3.985 3.985 0 0 1 20 3zm-2 13.523c.16.091.313.194.459.307l.212.179c.35.316.826.49 1.33.491.439 0 .86-.134 1.191-.38l.137-.111c.206-.187.431-.35.67-.486V11h-4zM20 5a2 2 0 0 0-1.995 1.85L18 7v2h4V7a2 2 0 0 0-2-2z"></path></svg>
                                <div class="intrd_enjoy">
                                    <div style={{"font-weight": "600", "margin-bottom": "8px"}}>마음껏 물놀이를 즐기세요</div>
                                    {/* <div>마음껏 물놀이를 즐기세요</div> */}
                                    <div style={{color: "#717171", "font-size":"14px"}}>해당 지역에서 수영장을 갖춘 몇 안 되는 숙소 중 하나입니다.</div>
                                </div>
                            </div>

                            <div class="list_enjoy">
                                <svg viewBox="0 0 32 32" style={{display: "block", height: "24px", width: "24px", fill: "currentcolor"}}><path d="M14.998 1.032a2 2 0 0 0-.815.89l-3.606 7.766L1.951 10.8a2 2 0 0 0-1.728 2.24l.031.175A2 2 0 0 0 .87 14.27l6.36 5.726-1.716 8.608a2 2 0 0 0 1.57 2.352l.18.028a2 2 0 0 0 1.215-.259l7.519-4.358 7.52 4.358a2 2 0 0 0 2.734-.727l.084-.162a2 2 0 0 0 .147-1.232l-1.717-8.608 6.361-5.726a2 2 0 0 0 .148-2.825l-.125-.127a2 2 0 0 0-1.105-.518l-8.627-1.113-3.606-7.765a2 2 0 0 0-2.656-.971zm-3.07 10.499l4.07-8.766 4.07 8.766 9.72 1.252-7.206 6.489 1.938 9.723-8.523-4.94-8.522 4.94 1.939-9.723-7.207-6.489z"></path></svg>                            <div class="intrd_enjoy">
                                <div style={{"font-weight": "600", "margin-bottom": "8px"}}>경험이 풍부한 호스트</div>
                                    {/* <div>경험이 풍부한 호스트</div> */}
                                    <div style={{color: "#717171", "font-size":"14px"}}>Dorothy님은 다른 숙소에 대해 748개의 후기가 있습니다.</div>
                                </div>
                            </div>
                        </div>

                        <div id="aircover">
                            <img class="img_aircover" alt="img_aircover" src="https://a0.muscache.com/im/pictures/51a7f002-b223-4e05-a2af-0d4838411d92.jpg" style={{height: "26px"}}/>
                            <div style={{margin: "16px 0"}}> 모든 예약에는 호스트가 예약을 취소하거나 숙소 정보가 정확하지 않은 경우 또는 체크인에 문제가 있는 상황에 대비한 무료 보호 프로그램이 포함됩니다.</div>
                            <button class="btn_underline">더 알아보기</button>
                        </div>

                        <div id="detail_hotel">
                            <div style={{display:"flex", "padding-top": "32px", "align-items": "center"}}>
                                <svg viewBox="0 0 16 16" style={{display: "block", height: "16px", width: "16px", fill: "currentcolor"}}><path d="M9 0a1 1 0 0 1 .993.883L10 1v5h5a1 1 0 0 1 .993.883L16 7v8a1 1 0 0 1-.883.993L15 16H7a1 1 0 0 1-.993-.883L6 15v-5H1a1 1 0 0 1-.993-.883L0 9V1A1 1 0 0 1 .883.007L1 0h8zm1.729 7l-1.393.495.233.217.13.132c.125.127.227.245.308.352l.073.103.048.073.045.077H7.308v1.309h1.207l.166.52.09.266.112.29a6.294 6.294 0 0 0 1.109 1.789c-.495.315-1.119.607-1.87.87l-.331.112-.346.108-.445.134L7.72 15l.407-.125.386-.128c1.007-.349 1.836-.752 2.486-1.214.57.405 1.277.764 2.12 1.08l.369.134.386.128.406.125.72-1.153-.445-.134-.26-.08-.345-.115c-.783-.27-1.43-.57-1.94-.895a6.3 6.3 0 0 0 1.068-1.694l.128-.32.114-.33.165-.521h1.208V8.449H11.64l-.093-.231a3.696 3.696 0 0 0-.554-.917l-.126-.149-.14-.152zm1.35 2.758l-.042.133-.076.224-.103.264A4.985 4.985 0 0 1 11 11.76a4.952 4.952 0 0 1-.743-1.127l-.115-.254-.103-.264-.076-.224-.042-.133h2.158zM9 1H1v8h5V7c0-.057.005-.113.014-.167H3.827L3.425 8H2l2.257-6h1.486l1.504 4H9V1zM5 3.411L4.253 5.6h1.502L5 3.411z"></path></svg>
                                <span style={{"margin-left": "12px"}}>일부 정보는 자동 번역되었습니다. </span>
                                <button class="btn_underline" style={{"margin-left": "7px"}}>원문 보기</button>
                            </div>

                            <div style={{padding:"32px 0 48px 0", "line-height": "1.5"}}>
                                Adaaran Club Rannalhi는 몰디브 최고의 호텔 중 하나이며 몰디브로 알려진 이국적인 섬 컬렉션 내에서 남말레 환초 끝에 독점적으로 자리잡고 있습니다. 독특한 위치는 자연 그대로의 해변, 탁월한 스쿠버 다이빙 기회, 편안한 환경을 제공하며 수도인 말레로 쉽게 이동할 수 있습니다.
                            </div>
                        </div>

                        <div id="place_hotel">
                        {/* <div role="title_txt">숙박 장소</div> */}
                        <div className="title_txt">숙박 장소</div>
                        <div id="box_place">
                            <svg viewBox="0 0 32 32"  style={{display: "block", height: "24px", width: "24px", fill: "currentcolor"}}><path d="M26 4a2 2 0 0 1 1.995 1.85L28 6v7.839l1.846 5.537a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H4v2H2v-9.675a3 3 0 0 1 .087-.717l.067-.232L4 13.836V6a2 2 0 0 1 1.697-1.977l.154-.018L6 4zm2 18H4v4h24zm-1.388-6H5.387l-1.333 4h23.891zM26 6H6v8h2v-4a2 2 0 0 1 1.85-1.995L10 8h12a2 2 0 0 1 1.995 1.85L24 10v4h2zm-11 4h-5v4h5zm7 0h-5v4h5z"></path></svg>
                            <div style={{"font-size": "16px", "font-weight": "bold", "margin-bottom": "8px"}}>침실</div>
                            <div style={{"font-size": "14px"}}>더블 침대 1개</div>
                        </div>
                        </div>

                        <div className={styles.detail_item}>
                            <div className="title_txt">숙소 편의시설</div>

                            <div className={styles.facilities}>
                                <div className = {styles.fac_home}>
                                    <svg viewBox="0 0 32 32" style={{display: "block", height: "24px", width: "24px", fill: "currentcolor"}}><path d="m15.9999 20.33323c2.0250459 0 3.66667 1.6416241 3.66667 3.66667s-1.6416241 3.66667-3.66667 3.66667-3.66667-1.6416241-3.66667-3.66667 1.6416241-3.66667 3.66667-3.66667zm0 2c-.9204764 0-1.66667.7461936-1.66667 1.66667s.7461936 1.66667 1.66667 1.66667 1.66667-.7461936 1.66667-1.66667-.7461936-1.66667-1.66667-1.66667zm.0001-7.33323c3.5168171 0 6.5625093 2.0171251 8.0432368 4.9575354l-1.5143264 1.5127043c-1.0142061-2.615688-3.5549814-4.4702397-6.5289104-4.4702397s-5.5147043 1.8545517-6.52891042 4.4702397l-1.51382132-1.5137072c1.48091492-2.939866 4.52631444-4.9565325 8.04273174-4.9565325zm.0001-5.3332c4.9804693 0 9.3676401 2.540213 11.9365919 6.3957185l-1.4470949 1.4473863c-2.1746764-3.5072732-6.0593053-5.8431048-10.489497-5.8431048s-8.31482064 2.3358316-10.48949703 5.8431048l-1.44709488-1.4473863c2.56895177-3.8555055 6.95612261-6.3957185 11.93659191-6.3957185zm-.0002-5.3336c6.4510616 0 12.1766693 3.10603731 15.7629187 7.9042075l-1.4304978 1.4309874c-3.2086497-4.44342277-8.4328305-7.3351949-14.3324209-7.3351949-5.8991465 0-11.12298511 2.89133703-14.33169668 7.334192l-1.43047422-1.4309849c3.58629751-4.79760153 9.31155768-7.9032071 15.7621709-7.9032071z"></path></svg>
                                    <div>무선 인터넷</div>
                                </div>
                                <div className = {styles.fac_home}>
                                    <svg viewBox="0 0 32 32" style={{display: "block", height: "24px", width: "24px", fill: "currentcolor"}}><path d="M24 26c.988 0 1.945.351 2.671 1.009.306.276.71.445 1.142.483L28 27.5v2l-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 28c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 28c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 28c-.503 0-.98.175-1.33.491a3.96 3.96 0 0 1-2.442 1.003L4 29.5v-2l.187-.008a1.953 1.953 0 0 0 1.142-.483A3.975 3.975 0 0 1 8 26c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492A3.974 3.974 0 0 1 16 26c.988 0 1.945.351 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.491A3.975 3.975 0 0 1 23.999 26zm0-5c.988 0 1.945.351 2.671 1.009.306.276.71.445 1.142.483L28 22.5v2l-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 23c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 23c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 23c-.503 0-.98.175-1.33.491a3.96 3.96 0 0 1-2.442 1.003L4 24.5v-2l.187-.008a1.953 1.953 0 0 0 1.142-.483A3.975 3.975 0 0 1 8 21c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492A3.974 3.974 0 0 1 16 21c.988 0 1.945.351 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.491A3.975 3.975 0 0 1 23.999 21zM20 3a4 4 0 0 1 3.995 3.8L24 7v2h4v2h-4v5c.912 0 1.798.3 2.5.862l.171.147c.306.276.71.445 1.142.483L28 17.5v2l-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 18c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 18c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 18c-.503 0-.98.175-1.33.491a3.96 3.96 0 0 1-2.442 1.003L4 19.5v-2l.187-.008a1.953 1.953 0 0 0 1.142-.483A3.975 3.975 0 0 1 8 16c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492a3.956 3.956 0 0 1 2.444-1.002L16 16v-5H4V9h12V7a2 2 0 0 0-3.995-.15L12 7h-2a4 4 0 0 1 7-2.645A3.985 3.985 0 0 1 20 3zm-2 13.523c.16.091.313.194.459.307l.212.179c.35.316.826.49 1.33.491.439 0 .86-.134 1.191-.38l.137-.111c.206-.187.431-.35.67-.486V11h-4zM20 5a2 2 0 0 0-1.995 1.85L18 7v2h4V7a2 2 0 0 0-2-2z"></path></svg>
                                    <div>수영장</div>
                                </div>
                                <div className = {styles.fac_home}>
                                    <svg viewBox="0 0 32 32"  style={{display: "block", height: "24px", width: "24px", fill: "currentcolor"}}><path d="M9 29v-2h2v-2H6a5 5 0 0 1-4.995-4.783L1 20V8a5 5 0 0 1 4.783-4.995L6 3h20a5 5 0 0 1 4.995 4.783L31 8v12a5 5 0 0 1-4.783 4.995L26 25h-5v2h2v2zm10-4h-6v2h6zm7-20H6a3 3 0 0 0-2.995 2.824L3 8v12a3 3 0 0 0 2.824 2.995L6 23h20a3 3 0 0 0 2.995-2.824L29 20V8a3 3 0 0 0-2.824-2.995z"></path></svg>
                                    <div>TV</div>
                                </div>
                                <div className = {styles.fac_home}>
                                    <svg viewBox="0 0 32 32"  style={{display: "block", height: "24px", width: "24px", fill: "currentcolor"}}><path d="M17 1v4.03l4.026-2.324 1 1.732L17 7.339v6.928l6-3.464V5h2v4.648l3.49-2.014 1 1.732L26 11.381l4.026 2.325-1 1.732L24 12.535l-6 3.464 6 3.465 5.026-2.902 1 1.732L26 20.618l3.49 2.016-1 1.732L25 22.351V27h-2v-5.804l-6-3.465v6.929l5.026 2.902-1 1.732L17 26.97V31h-2v-4.031l-4.026 2.325-1-1.732L15 24.66v-6.929l-6 3.464V27H7v-4.65l-3.49 2.016-1-1.732 3.489-2.016-4.025-2.324 1-1.732 5.025 2.901 6-3.464-6-3.464-5.025 2.903-1-1.732L6 11.38 2.51 9.366l1-1.732L7 9.648V5h2v5.803l6 3.464V7.339L9.974 4.438l1-1.732L15 5.03V1z"></path></svg>
                                    <div>에어컨</div>
                                </div>
                                <div className = {styles.fac_home}>
                                    <svg viewBox="0 0 32 32"  style={{display: "block", height: "24px", width: "24px", fill: "currentcolor"}}><path d="M14 27l-.005.2a4 4 0 0 1-3.789 3.795L10 31H4v-2h6l.15-.005a2 2 0 0 0 1.844-1.838L12 27zM10 1c.536 0 1.067.047 1.58.138l.38.077 17.448 3.64a2 2 0 0 1 1.585 1.792l.007.166v6.374a2 2 0 0 1-1.431 1.917l-.16.04-13.554 2.826 1.767 6.506a2 2 0 0 1-1.753 2.516l-.177.008H11.76a2 2 0 0 1-1.879-1.315l-.048-.15-1.88-6.769A9 9 0 0 1 10 1zm5.692 24l-1.799-6.621-1.806.378a8.998 8.998 0 0 1-1.663.233l-.331.008L11.76 25zM10 3a7 7 0 1 0 1.32 13.875l.331-.07L29 13.187V6.813L11.538 3.169A7.027 7.027 0 0 0 10 3zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path></svg>
                                    <div>헤어드라이어</div>
                                </div>
                                <div className = {styles.fac_home}>
                                    <svg viewBox="0 0 32 32"  style={{display: "block", height: "24px", width: "24px", fill: "currentcolor"}}><path d="M14 27l-.005.2a4 4 0 0 1-3.789 3.795L10 31H4v-2h6l.15-.005a2 2 0 0 0 1.844-1.838L12 27zM10 1c.536 0 1.067.047 1.58.138l.38.077 17.448 3.64a2 2 0 0 1 1.585 1.792l.007.166v6.374a2 2 0 0 1-1.431 1.917l-.16.04-13.554 2.826 1.767 6.506a2 2 0 0 1-1.753 2.516l-.177.008H11.76a2 2 0 0 1-1.879-1.315l-.048-.15-1.88-6.769A9 9 0 0 1 10 1zm5.692 24l-1.799-6.621-1.806.378a8.998 8.998 0 0 1-1.663.233l-.331.008L11.76 25zM10 3a7 7 0 1 0 1.32 13.875l.331-.07L29 13.187V6.813L11.538 3.169A7.027 7.027 0 0 0 10 3zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path></svg>
                                    <div>아침식사</div>
                                </div>
                                <div className = {styles.fac_home}>
                                    <svg viewBox="0 0 32 32"  style={{display: "block", height: "24px", width: "24px", fill: "currentcolor"}}><path d="m11.6667 0-.00095 1.666h8.667l.00055-1.666h2l-.00055 1.666 6.00065.00063c1.0543745 0 1.9181663.81587127 1.9945143 1.85073677l.0054857.14926323v15.91907c0 .4715696-.1664445.9258658-.4669028 1.2844692l-.1188904.1298308-8.7476886 8.7476953c-.3334303.3332526-.7723097.5367561-1.2381975.5778649l-.1758207.0077398h-12.91915c-2.68874373 0-4.88181754-2.1223321-4.99538046-4.7831124l-.00461954-.2168876v-21.66668c0-1.05436021.81587582-1.91815587 1.85073739-1.99450431l.14926261-.00548569 5.999-.00063.00095-1.666zm16.66605 11.666h-24.666v13.6673c0 1.5976581 1.24893332 2.9036593 2.82372864 2.9949072l.17627136.0050928 10.999-.0003.00095-5.6664c0-2.6887355 2.122362-4.8818171 4.7832071-4.9953804l.2168929-.0046196 5.66595-.0006zm-.081 8-5.58495.0006c-1.5977285 0-2.9037573 1.2489454-2.9950071 2.8237299l-.0050929.1762701-.00095 5.5864zm-18.586-16-5.999.00062v5.99938h24.666l.00065-5.99938-6.00065-.00062.00055 1.66733h-2l-.00055-1.66733h-8.667l.00095 1.66733h-2z"></path></svg>
                                    <div>장기 숙박 가능</div>
                                </div>                                                                                                                                                                        
                            </div>

                            <div className={styles.btn_facility}>
                                편의시설 14개 모두 보기
                            </div>
                        </div>

                        <div style={{padding:'48px 0'}}>
                            <div className={styles.calender_txt}>
                                <div className="title_txt" style={{"padding-bottom": "8px"}}>체크인 날짜를 선택해주세요.</div>
                                <div style={{"font-size":"14px"}}>여행 날짜를 입력하여 정확한 요금을 확인하세요.</div>
                            </div>

                            <div className={styles.calender}>
                                <div className={styles.calender_item}>
                                    <div style={{display: 'flex', 'align-items':"center"}}>
                                        <svg viewBox="0 0 18 18" style={{height: "12px", width: "12px", display: "block", "margin-right": "100px"}}><path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fill-rule="evenodd"></path></svg>
                                        <div className={styles.month}>2022년 9월</div>
                                    </div>
                                    <tbody>
                                        <tr>
                                            <td><div className={styles.calender_content}>일</div></td>
                                            <td><div className={styles.calender_content}>월</div></td>
                                            <td><div className={styles.calender_content}>화</div></td>
                                            <td><div className={styles.calender_content}>수</div></td>
                                            <td><div className={styles.calender_content}>목</div></td>
                                            <td><div className={styles.calender_content}>금</div></td>
                                            <td><div className={styles.calender_content}>토</div></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>1</td>
                                            <td>2</td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                            <td>9</td>
                                            <td>10</td>
                                        </tr>                                    
                                        <tr>
                                            <td>11</td>
                                            <td>12</td>
                                            <td>13</td>
                                            <td>14</td>
                                            <td>15</td>
                                            <td>16</td>
                                            <td>17</td>
                                        </tr>                                    
                                        <tr>
                                            <td>18</td>
                                            <td>19</td>
                                            <td>20</td>
                                            <td>21</td>
                                            <td>22</td>
                                            <td>23</td>
                                            <td>24</td>
                                        </tr>                                    
                                        <tr>
                                            <td>25</td>
                                            <td>26</td>
                                            <td>27</td>
                                            <td>28</td>
                                            <td>29</td>
                                            <td>30</td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </div>

                                <div className={styles.calender_item}>
                                    <div style={{display: 'flex', 'align-items':"center", "justify-content": "right"}}>
                                        <div className={styles.month}>2022년 10월</div>
                                        <svg viewBox="0 0 18 18" style={{height: "12px", width: "12px", display: "block", "margin-left": "100px"}}><path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fill-rule="evenodd"></path></svg>

                                    </div>
                                    <tbody>
                                        <tr>
                                            <td><div className={styles.calender_content}>일</div></td>
                                            <td><div className={styles.calender_content}>월</div></td>
                                            <td><div className={styles.calender_content}>화</div></td>
                                            <td><div className={styles.calender_content}>수</div></td>
                                            <td><div className={styles.calender_content}>목</div></td>
                                            <td><div className={styles.calender_content}>금</div></td>
                                            <td><div className={styles.calender_content}>토</div></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                        </tr>                                    
                                        <tr>
                                            <td>9</td>
                                            <td>10</td>
                                            <td>11</td>
                                            <td>12</td>
                                            <td>13</td>
                                            <td>14</td>
                                            <td>15</td>
                                        </tr>                                    
                                        <tr>
                                            <td>16</td>
                                            <td>17</td>
                                            <td>18</td>
                                            <td>19</td>
                                            <td>20</td>
                                            <td>21</td>
                                            <td>22</td>
                                        </tr>                                    
                                        <tr>
                                            <td>23</td>
                                            <td>24</td>
                                            <td>25</td>
                                            <td>26</td>
                                            <td>27</td>
                                            <td>28</td>
                                            <td>29</td>
                                        </tr>
                                        <tr>
                                            <td>30</td>
                                            <td>31</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                    
                                    <div className={styles.remove_day}>날짜 지우기</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="right_info">
                        <div className="right_box">
                            <div id="box">
                                <div className={styles.price_box}>
                                    <span id={styles.price}>₩786,518</span>
                                    <span id={styles.price_day}>/박</span>
                                </div>

                                <button className={styles.btn_check}>
                                    <div className={styles.btn_upper} style={{"border-top-left-radius":"8px"}}>
                                        <div className={styles.checkinout}>체크인</div>
                                        <div className={styles.check_day}>2022.9.13</div>
                                    </div>
                                    <div className={styles.btn_upper} style={{"border-top-right-radius":"8px"}}>
                                        <div className={styles.checkinout}>체크아웃</div>
                                        <div className={styles.check_day}>2022.9.18</div>
                                    </div>
                                </button>

                                <button className={styles.btn_guest} style={{"border-bottom-left-radius":"8px", "border-bottom-right-radius":"8px", display: "flex"}}>
                                    <div>
                                        <div className={styles.checkinout}>
                                            인원
                                        </div>
                                        <div className={styles.check_day}>
                                            게스트 1명
                                        </div>
                                    </div>
                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", fill: "none", height: "16px",width: "16px", stroke: "currentcolor", "stroke-width": "4", overflow: "visible"}}><g fill="none"><path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"></path></g></svg>
                                </button>

                                <button className={styles.btn_reserv}>
                                    예약하기
                                </button>

                                <div style={{"font-size":"14px", "margin-top":"16px", "text-align": "center"}}>
                                    예약 확정 전에는 요금이 청구되지 않습니다.
                                </div>
                            </div>

                            <div className={styles.Declaration}>
                                <svg viewBox="0 0 32 32" style={{display: "block", height: "16px", width: "16px"}}><path d="M28 6H17V4a2 2 0 0 0-2-2H3v28h2V18h10v2a2 2 0 0 0 2 2h11l.115-.006a1 1 0 0 0 .847-1.269L27.039 14l1.923-6.724A1 1 0 0 0 28 6z"></path></svg>
                                <div>숙소 신고하기</div>
                            </div>
                        </div>
                    </div>  
                </div>

                <div className={styles.another_info}>
                    <div className={styles.another_item}>
                        <div className={styles.review_content}>
                            <div className={styles.another_txt}>후기(아직)없음</div>
                        </div>

                        <div className={styles.review_list} style={{display:"flex", width: "calc(100% + 16px)"}}>
                            <div className={styles.review_oneitem}>
                                <svg viewBox="0 0 32 32" style={{display: "block", height: "24px", width: "24px"}}><path d="M14.998 1.032a2 2 0 0 0-.815.89l-3.606 7.766L1.951 10.8a2 2 0 0 0-1.728 2.24l.031.175A2 2 0 0 0 .87 14.27l6.36 5.726-1.716 8.608a2 2 0 0 0 1.57 2.352l.18.028a2 2 0 0 0 1.215-.259l7.519-4.358 7.52 4.358a2 2 0 0 0 2.734-.727l.084-.162a2 2 0 0 0 .147-1.232l-1.717-8.608 6.361-5.726a2 2 0 0 0 .148-2.825l-.125-.127a2 2 0 0 0-1.105-.518l-8.627-1.113-3.606-7.765a2 2 0 0 0-2.656-.971zm-3.07 10.499l4.07-8.766 4.07 8.766 9.72 1.252-7.206 6.489 1.938 9.723-8.523-4.94-8.522 4.94 1.939-9.723-7.207-6.489z"></path></svg>
                                <div>
                                    <span>이 호스트의 다른 숙소에 대한 후기가 748개 있습니다.</span>
                                    <span>다른 숙소 후기 보기</span>
                                </div>
                            </div>

                            <div className={styles.review_twoitem}>
                                <svg viewBox="0 0 32 32"  style={{display: "block", height: "24px", width: "24px"}}><path d="M16 1c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C1 7.716 7.716 1 16 1zm4.398 21.001h-8.796C12.488 26.177 14.23 29 16 29c1.77 0 3.512-2.823 4.398-6.999zm-10.845 0H4.465a13.039 13.039 0 0 0 7.472 6.351c-1.062-1.58-1.883-3.782-2.384-6.351zm17.982 0h-5.088c-.5 2.57-1.322 4.77-2.384 6.352A13.042 13.042 0 0 0 27.535 22zM9.238 12H3.627A12.99 12.99 0 0 0 3 16c0 1.396.22 2.74.627 4h5.61A33.063 33.063 0 0 1 9 16c0-1.383.082-2.724.238-4zm11.502 0h-9.482A30.454 30.454 0 0 0 11 16c0 1.4.092 2.743.26 4.001h9.48C20.908 18.743 21 17.4 21 16a30.31 30.31 0 0 0-.26-4zm7.632 0h-5.61c.155 1.276.237 2.617.237 4s-.082 2.725-.238 4h5.61A12.99 12.99 0 0 0 29 16c0-1.396-.22-2.74-.627-4zM11.937 3.647l-.046.016A13.04 13.04 0 0 0 4.464 10h5.089c.5-2.57 1.322-4.77 2.384-6.353zM16 3l-.129.005c-1.725.133-3.405 2.92-4.269 6.995h8.796C19.512 5.824 17.77 3 16 3zm4.063.648l.037.055C21.144 5.28 21.952 7.46 22.447 10h5.089a13.039 13.039 0 0 0-7.473-6.352z"></path></svg>
                                <span>여행에 차질이 없도록 최선을 다해 도와드리겠습니다. 모든 예약은 에어비앤비의 게스트 환불 정책에 따라 보호를 받습니다.</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.another_item}>
                        <div className={styles.another_txt}>호스팅 지역</div>
                        <div style={{"margin-bottom":"24px"}}>몰디브</div>

                        <div className={styles.hosting_area}>
                            <div id={styles.circle_home} style={{width:"48px", height:"48px", "background-color":"rgb(223 20 97)", "border-radius":"50%"}}>
                                <svg viewBox="0 0 16 16" style={{display: "block", height: "22px", width: "22px"}}><path d="M8.602 1.147l.093.08 7.153 6.914-.696.718L14 7.745V14.5a.5.5 0 0 1-.41.492L13.5 15H10V9.5a.5.5 0 0 0-.41-.492L9.5 9h-3a.5.5 0 0 0-.492.41L6 9.5V15H2.5a.5.5 0 0 1-.492-.41L2 14.5V7.745L.847 8.86l-.696-.718 7.153-6.915a1 1 0 0 1 1.297-.08z"></path></svg>                        
                            </div>
                            <img alt="Google" src="data:image/svg+xml,%3Csvg%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2069%2029%22%3E%3Cg%20opacity%3D%22.3%22%20fill%3D%22%23000%22%20stroke%3D%22%23000%22%20stroke-width%3D%221.5%22%3E%3Cpath%20d%3D%22M17.4706%207.33616L18.0118%206.79504%2017.4599%206.26493C16.0963%204.95519%2014.2582%203.94522%2011.7008%203.94522c-4.613699999999999%200-8.50262%203.7551699999999997-8.50262%208.395779999999998C3.19818%2016.9817%207.0871%2020.7368%2011.7008%2020.7368%2014.1712%2020.7368%2016.0773%2019.918%2017.574%2018.3689%2019.1435%2016.796%2019.5956%2014.6326%2019.5956%2012.957%2019.5956%2012.4338%2019.5516%2011.9316%2019.4661%2011.5041L19.3455%2010.9012H10.9508V14.4954H15.7809C15.6085%2015.092%2015.3488%2015.524%2015.0318%2015.8415%2014.403%2016.4629%2013.4495%2017.1509%2011.7008%2017.1509%209.04835%2017.1509%206.96482%2015.0197%206.96482%2012.341%206.96482%209.66239%209.04835%207.53119%2011.7008%207.53119%2013.137%207.53119%2014.176%208.09189%2014.9578%208.82348L15.4876%209.31922%2016.0006%208.80619%2017.4706%207.33616z%22/%3E%3Cpath%20d%3D%22M24.8656%2020.7286C27.9546%2020.7286%2030.4692%2018.3094%2030.4692%2015.0594%2030.4692%2011.7913%2027.953%209.39009%2024.8656%209.39009%2021.7783%209.39009%2019.2621%2011.7913%2019.2621%2015.0594c0%203.25%202.514499999999998%205.6692%205.6035%205.6692zM24.8656%2012.8282C25.8796%2012.8282%2026.8422%2013.6652%2026.8422%2015.0594%2026.8422%2016.4399%2025.8769%2017.2905%2024.8656%2017.2905%2023.8557%2017.2905%2022.8891%2016.4331%2022.8891%2015.0594%2022.8891%2013.672%2023.853%2012.8282%2024.8656%2012.8282z%22/%3E%3Cpath%20d%3D%22M35.7511%2017.2905v0H35.7469C34.737%2017.2905%2033.7703%2016.4331%2033.7703%2015.0594%2033.7703%2013.672%2034.7343%2012.8282%2035.7469%2012.8282%2036.7608%2012.8282%2037.7234%2013.6652%2037.7234%2015.0594%2037.7234%2016.4439%2036.7554%2017.2961%2035.7511%2017.2905zM35.7387%2020.7286C38.8277%2020.7286%2041.3422%2018.3094%2041.3422%2015.0594%2041.3422%2011.7913%2038.826%209.39009%2035.7387%209.39009%2032.6513%209.39009%2030.1351%2011.7913%2030.1351%2015.0594%2030.1351%2018.3102%2032.6587%2020.7286%2035.7387%2020.7286z%22/%3E%3Cpath%20d%3D%22M51.953%2010.4357V9.68573H48.3999V9.80826C47.8499%209.54648%2047.1977%209.38187%2046.4808%209.38187%2043.5971%209.38187%2041.0168%2011.8998%2041.0168%2015.0758%2041.0168%2017.2027%2042.1808%2019.0237%2043.8201%2019.9895L43.7543%2020.0168%2041.8737%2020.797%2041.1808%2021.0844%2041.4684%2021.7772C42.0912%2023.2776%2043.746%2025.1469%2046.5219%2025.1469%2047.9324%2025.1469%2049.3089%2024.7324%2050.3359%2023.7376%2051.3691%2022.7367%2051.953%2021.2411%2051.953%2019.2723v-8.8366zm-7.2194%209.9844L44.7334%2020.4196C45.2886%2020.6201%2045.878%2020.7286%2046.4808%2020.7286%2047.1616%2020.7286%2047.7866%2020.5819%2048.3218%2020.3395%2048.2342%2020.7286%2048.0801%2021.0105%2047.8966%2021.2077%2047.6154%2021.5099%2047.1764%2021.7088%2046.5219%2021.7088%2045.61%2021.7088%2045.0018%2021.0612%2044.7336%2020.4201zM46.6697%2012.8282C47.6419%2012.8282%2048.5477%2013.6765%2048.5477%2015.084%2048.5477%2016.4636%2047.6521%2017.2987%2046.6697%2017.2987%2045.6269%2017.2987%2044.6767%2016.4249%2044.6767%2015.084%2044.6767%2013.7086%2045.6362%2012.8282%2046.6697%2012.8282zM55.7387%205.22081v-.75H52.0788V20.4412H55.7387V5.22081z%22/%3E%3Cpath%20d%3D%22M63.9128%2016.0614L63.2945%2015.6492%2062.8766%2016.2637C62.4204%2016.9346%2061.8664%2017.3069%2061.0741%2017.3069%2060.6435%2017.3069%2060.3146%2017.2088%2060.0544%2017.0447%2059.9844%2017.0006%2059.9161%2016.9496%2059.8498%2016.8911L65.5497%2014.5286%2066.2322%2014.2456%2065.9596%2013.5589%2065.7406%2013.0075C65.2878%2011.8%2063.8507%209.39832%2060.8278%209.39832%2057.8445%209.39832%2055.5034%2011.7619%2055.5034%2015.0676%2055.5034%2018.2151%2057.8256%2020.7369%2061.0659%2020.7369%2063.6702%2020.7369%2065.177%2019.1378%2065.7942%2018.2213L66.2152%2017.5963%2065.5882%2017.1783%2063.9128%2016.0614zM61.3461%2012.8511L59.4108%2013.6526C59.7903%2013.0783%2060.4215%2012.7954%2060.9017%2012.7954%2061.067%2012.7954%2061.2153%2012.8161%2061.3461%2012.8511z%22/%3E%3C/g%3E%3Cpath%20d%3D%22M11.7008%2019.9868C7.48776%2019.9868%203.94818%2016.554%203.94818%2012.341%203.94818%208.12803%207.48776%204.69522%2011.7008%204.69522%2014.0331%204.69522%2015.692%205.60681%2016.9403%206.80583L15.4703%208.27586C14.5751%207.43819%2013.3597%206.78119%2011.7008%206.78119%208.62108%206.78119%206.21482%209.26135%206.21482%2012.341%206.21482%2015.4207%208.62108%2017.9009%2011.7008%2017.9009%2013.6964%2017.9009%2014.8297%2017.0961%2015.5606%2016.3734%2016.1601%2015.7738%2016.5461%2014.9197%2016.6939%2013.7454h-4.9931V11.6512h7.0298C18.8045%2012.0207%2018.8456%2012.4724%2018.8456%2012.957%2018.8456%2014.5255%2018.4186%2016.4637%2017.0389%2017.8434%2015.692%2019.2395%2013.9838%2019.9868%2011.7008%2019.9868zM29.7192%2015.0594C29.7192%2017.8927%2027.5429%2019.9786%2024.8656%2019.9786%2022.1884%2019.9786%2020.0121%2017.8927%2020.0121%2015.0594%2020.0121%2012.2096%2022.1884%2010.1401%2024.8656%2010.1401%2027.5429%2010.1401%2029.7192%2012.2096%2029.7192%2015.0594zM27.5922%2015.0594C27.5922%2013.2855%2026.3274%2012.0782%2024.8656%2012.0782S22.1391%2013.2937%2022.1391%2015.0594C22.1391%2016.8086%2023.4038%2018.0405%2024.8656%2018.0405S27.5922%2016.8168%2027.5922%2015.0594zM40.5922%2015.0594C40.5922%2017.8927%2038.4159%2019.9786%2035.7387%2019.9786%2033.0696%2019.9786%2030.8851%2017.8927%2030.8851%2015.0594%2030.8851%2012.2096%2033.0614%2010.1401%2035.7387%2010.1401%2038.4159%2010.1401%2040.5922%2012.2096%2040.5922%2015.0594zM38.4734%2015.0594C38.4734%2013.2855%2037.2087%2012.0782%2035.7469%2012.0782%2034.2851%2012.0782%2033.0203%2013.2937%2033.0203%2015.0594%2033.0203%2016.8086%2034.2851%2018.0405%2035.7469%2018.0405%2037.2087%2018.0487%2038.4734%2016.8168%2038.4734%2015.0594zM51.203%2010.4357v8.8366C51.203%2022.9105%2049.0595%2024.3969%2046.5219%2024.3969%2044.132%2024.3969%2042.7031%2022.7955%2042.161%2021.4897L44.0417%2020.7095C44.3784%2021.5143%2045.1997%2022.4588%2046.5219%2022.4588%2048.1479%2022.4588%2049.1499%2021.4487%2049.1499%2019.568V18.8617H49.0759C48.5914%2019.4612%2047.6552%2019.9786%2046.4808%2019.9786%2044.0171%2019.9786%2041.7668%2017.8352%2041.7668%2015.0758%2041.7668%2012.3%2044.0253%2010.1319%2046.4808%2010.1319%2047.6552%2010.1319%2048.5914%2010.6575%2049.0759%2011.2323H49.1499V10.4357H51.203zM49.2977%2015.084C49.2977%2013.3512%2048.1397%2012.0782%2046.6697%2012.0782%2045.175%2012.0782%2043.9267%2013.3429%2043.9267%2015.084%2043.9267%2016.8004%2045.175%2018.0487%2046.6697%2018.0487%2048.1397%2018.0487%2049.2977%2016.8004%2049.2977%2015.084zM54.9887%205.22081V19.6912H52.8288V5.22081H54.9887zM63.4968%2016.6854L65.1722%2017.8023C64.6301%2018.6072%2063.3244%2019.9869%2061.0659%2019.9869%2058.2655%2019.9869%2056.2534%2017.827%2056.2534%2015.0676%2056.2534%2012.1439%2058.2901%2010.1483%2060.8278%2010.1483%2063.3818%2010.1483%2064.6301%2012.1768%2065.0408%2013.2773L65.2625%2013.8357%2058.6843%2016.5623C59.1853%2017.5478%2059.9737%2018.0569%2061.0741%2018.0569%2062.1746%2018.0569%2062.9384%2017.5067%2063.4968%2016.6854zM58.3312%2014.9115L62.7331%2013.0884C62.4867%2012.4724%2061.764%2012.0454%2060.9017%2012.0454%2059.8012%2012.0454%2058.2737%2013.0145%2058.3312%2014.9115z%22%20fill%3D%22%23fff%22/%3E%3C/svg%3E" style={{position: "absolute", width: "66px", height: "26px", "user-select": "none", border: "0px", padding: "0px", margin: "0px", bottom:"0"}}></img>
                            <div className={styles.pos_txt}>정확한 위치는 예약 완료 후에 표시됩니다.</div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>

                    <div className={styles.another_item}>
                        <div style={{display: 'flex', "align-items": "center", "margin-bottom":"24px"}} >
                            <img className={styles.img_host} alt="호스트 Dorothy님에 대해 자세히 알아보세요." src="https://a0.muscache.com/im/pictures/user/0ea3cd74-7ce9-4f59-bf57-334651d552c6.jpg?im_w=240" style={{"object-fit": "cover", "vertical-align": "bottom"}}/>
                            <div>
                                <div className={styles.another_txt} style={{"padding-bottom":"8px"}}>호스트: Dorothy님</div>
                                <div className={styles.regist_txt}>회원 가입일: 2015년 10월</div>
                            </div>
                        </div>
                        <div className={styles.host_item}>
                            <div className={styles.host_left}>
                                <div className={styles.tag_host}>
                                    <div className={styles.host_review}>
                                        <svg viewBox="0 0 32 32" style={{display: "block", height: "16px", width: "16px"}}><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"></path></svg>
                                        <div style={{"margin-right":"20px"}}>후기 748개</div>
                                    </div>

                                    <div className={styles.host_review}>
                                        <svg viewBox="0 0 32 32" style={{display: "block", height: "16px", width: "16px"}}><path d="M16 .798l.555.37C20.398 3.73 24.208 5 28 5h1v12.5C29 25.574 23.21 31 16 31S3 25.574 3 17.5V5h1c3.792 0 7.602-1.27 11.445-3.832L16 .798zm7 9.08l-9.5 9.501-4.5-4.5L6.879 17l6.621 6.621L25.121 12 23 9.879z"></path></svg>
                                        <div>본인 인증 완료</div>
                                    </div>
                                </div>

                                <div id={styles.host_info}>
                                    I was born in 1978 in Izmir. After I have graduated Tourism and Hotel Management, I have worked at various departments in tourism sector from house keeping to guest relations. At t…
                                    <button style={{"font-size":"16px", "text-decoration":"underline", "font-weight":"bold"}}>더 읽기</button>
                                </div>
                            </div>

                            <div className={styles.host_right}>
                                <div className={styles.host_response}>언어: English, Türkçe</div>
                                <div className={styles.host_response}>응답률: 63%</div>
                                <div className={styles.host_response}>응답 시간: 하루 이내</div>

                                <button className="btn_contactHost">호스트에게 연락하기</button>

                                <div className={styles.security_host}>
                                    <svg viewBox="0 0 48 48" style={{display: "block", height: "24px", width: "24px", fill: "rgb(227, 28, 95)", stroke: "currentcolor"}}><path d="m25 5 .5846837.00517475c4.2905015.07574932 8.8374917.98334075 13.644943 2.73687823l.7703733.28794702v27.3705076l-.0084766.1301365c-.0392237.2994207-.2122236.5656263-.4699074.7230756l-.1154775.0605995-11.4234694 5.0774159c.0623636-.7458456-.0433445-1.4943022-.3209346-2.2783707-.2495178-.7044496-.7667703-1.7805075-1.0418654-2.3950548-1.9094732-4.1561789-3.9589781-8.3688465-6.0912876-12.5211487l-.3317555-.6369277c-.4686141-.9115826-.8248653-1.6297768-1.3147672-2.2052384-.743401-.8737317-1.7668654-1.3549948-2.8821508-1.3549948-1.1154695 0-2.1391179.4816323-2.8828868 1.3557332-.6050254.7114646-1.0306408 1.6819288-1.6457867 2.8412431-.4956822.9653459-.9868615 1.9338929-1.47282629 2.9041739l.00159179-19.0721502.769087-.28647781c4.798406-1.75037189 9.3373349-2.65799308 13.6207364-2.73688762z" fill-opacity=".2"></path><path d="m25 1c5.5985197 0 11.5175072 1.27473768 17.7548231 3.81642897.7027419.28641855 1.1783863.94329535 1.2386823 1.69066764l.0064946.16143432v28.73197667c0 1.8999458-1.0758761 3.6285379-2.7638433 4.4721215l-.2054644.0969363-15.0427818 6.6856808c-.4614217.2050763-1.8621146.3276624-2.7955525.3430957l-.192358.0016581.0009065-1.0005013c.6483674-.0069073 1.2843321-.1330366 1.8784107-.3747752.8327784-.3388673 1.5457548-.8939986 2.0790671-1.5885618l13.2600311-5.8942194c1.023196-.4547538 1.7028179-1.4383245 1.7751735-2.5449525l.0064111-.1964822v-28.73197667l-.6916987-.27704554c-5.7517231-2.26330416-11.1871718-3.39148539-16.3083013-3.39148539-5.1211255 0-10.5565697 1.12817946-16.3082877 3.39148006l-.6917123.27707479-.00030284 24.49382405c-.68067737 1.4079172-1.34834149 2.8151846-2.00083161 4.2173468l.00113445-28.71117085c0-.81311953.4922453-1.5453083 1.24525131-1.85215622 6.23725069-2.54166294 12.15623339-3.81639863 17.75474869-3.81639863z"></path><path d="m15.999908 41.6930234.6867258-.8851772c1.5957359-2.0328613 2.5919668-3.8873951 2.9612752-5.511912.2804314-1.2318637.2318527-2.5167089-.4804505-3.5591688-.6801015-.9952012-1.8642067-1.5894421-3.1673665-1.5894421-1.3033438 0-2.487633.5940563-3.1675505 1.5890729-.7099111 1.039137-.761802 2.3201055-.4810025 3.5580612.3689403 1.6247015 1.3653552 3.4796045 2.9616432 5.5133888l.6867258.8851772.6447715.7192179c1.1495113 1.2599236 2.1735278 2.122579 3.2227536 2.7149739.8151649.4602182 1.6400823.7413704 2.4521191.8358878.8812245.1033783 1.7585848-.0123685 2.559765-.3383795 1.6422905-.6682672 2.8186673-2.1775911 3.0700251-3.9387151.1205267-.8438258.0264975-1.6854363-.2876078-2.572644-.2495178-.7044496-.7667703-1.7805075-1.0418654-2.3950548-1.9094732-4.1561789-3.9589781-8.3688465-6.0912876-12.5211487-.6486357-1.2222643-1.0477537-2.1388241-1.6465227-2.8421661-.743401-.8737317-1.7668654-1.3549948-2.8821508-1.3549948-1.1154695 0-2.1391179.4816323-2.8828868 1.3557332-.6050254.7114646-1.0306408 1.6819288-1.6457867 2.8412431-2.1326775 4.1534098-4.1819984 8.3660775-6.09128759 12.5211487-.28227155.6306079-.79308369 1.6933742-1.04168139 2.3948702-.3141053.8872077-.40813448 1.7288182-.28760784 2.5731978.25117384 1.7609394 1.42736664 3.2700787 3.06965711 3.9385305.81939715.3333951 1.69418134.4397272 2.55958102.3385641.81295679-.0948866 1.63805829-.3760388 2.45248709-.8360724 1.0492258-.5922103 2.0732422-1.4550503 3.2227536-2.7149739z" fill="none" stroke-width="2"></path></svg>
                                    <div>안전한 결제를 위해 에어비앤비 웹사이트나 앱 외부에서 송금하거나 대화를 나누지 마세요.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                        
                    <div className={styles.another_item}>
                        <div className={styles.another_txt}>알아두어야 할 사항</div>
                        
                        <div id="rule_home">      
                            <div className={styles.rules}>
                                <div className={styles.rule_hotels}>숙소 이용규칙</div>
                                <div className={styles.sub_rules}>
                                    <svg viewBox="0 0 32 32" style={{display: "block", height: "16px", width: "16px", fill: "currentcolor"}}><path d="M16 1C7.716 1 1 7.716 1 16s6.716 15 15 15 15-6.716 15-15S24.284 1 16 1zm7.895 22.954l-9.526-5.5a1.5 1.5 0 0 1-.743-1.154l-.007-.145v-11h3V16.29l8.776 5.067-1.5 2.598z"></path></svg>
                                    <div>체크인: 오후 3:00 이후</div>
                                </div>
                            </div>

                            <div className={styles.rules}>
                                <div className={styles.rule_hotels}>건강과 안전</div>
                                <div>
                                    <div className={styles.sub_rules}>
                                        <svg viewBox="0 0 32 32" style={{display: "block", height: "16px", width: "16px"}}><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"></path></svg>
                                        <div>에어비앤비 코로나19 방역 수칙을 준수하셔야 합니다.</div>
                                    </div>
                                    <div className={styles.sub_rules}>
                                        <svg viewBox="0 0 16 16" style={{display: "block", height: "16px", width: "16px", fill: "currentcolor"}}><path d="M12.5 1A2.5 2.5 0 0 1 15 3.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5v-9A2.5 2.5 0 0 1 3.5 1zM5.846 9H4.515A3.632 3.632 0 0 0 7 11.485v-1.33A2.384 2.384 0 0 1 5.846 9zm5.64 0h-1.332a2.384 2.384 0 0 1-1.153 1.154v1.331A3.632 3.632 0 0 0 11.484 9zM8 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM7 4.515A3.632 3.632 0 0 0 4.515 7h1.33A2.384 2.384 0 0 1 7 5.845zm2 0v1.33c.508.237.919.647 1.155 1.155h1.33A3.632 3.632 0 0 0 9 4.515zM12.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5z"></path></svg>
                                        <div>일산화탄소 경보기</div>
                                    </div>
                                    <div className={styles.sub_rules}>
                                        <svg viewBox="0 0 16 16" style={{display: "block", height: "16px", width: "16px", fill: "currentcolor"}}><path d="M8 .5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15zM5.846 9H4.515A3.632 3.632 0 0 0 7 11.485v-1.33A2.384 2.384 0 0 1 5.846 9zm5.64 0h-1.332a2.384 2.384 0 0 1-1.153 1.154v1.331A3.632 3.632 0 0 0 11.484 9zM8 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM7 4.515A3.632 3.632 0 0 0 4.515 7h1.33A2.384 2.384 0 0 1 7 5.845zm2 0v1.33c.508.237.919.647 1.155 1.155h1.33A3.632 3.632 0 0 0 9 4.515zm3-1.265a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5z"></path></svg>
                                        <div>화재경보기</div>
                                    </div>
                                    <div className={styles.see_more} style={{display:"flex", "align-items": "center"}}>
                                        더 보기
                                        <svg viewBox="0 0 32 32" style={{display: "block", fill: "none", height: "12px", width: "12px", stroke: "currentcolor", "stroke-width": "5.33333", overflow: "visible"}}><path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path></svg>
                                    </div>
                                </div>
                            </div>
                                
                            <div className={styles.rules}>
                                <div className={styles.rule_hotels}>환불 정책</div> 
                                <div className={styles.sub_rules} style={{display: 'flex', flexDirection: 'column'}}>
                                    <div>이 예약은 환불되지 않습니다.</div>
                                    <div className={styles.see_more} style={{display:"flex", "align-items": "center"}}>
                                        <div>더 보기</div>
                                        <svg viewBox="0 0 32 32" style={{display: "block", fill: "none", height: "12px", width: "12px", stroke: "currentcolor", "stroke-width": "5.33333", overflow: "visible"}}><path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path></svg>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>

            <FooterDetail />
            <Footer />
        </div>
    );
}

export default Detail;