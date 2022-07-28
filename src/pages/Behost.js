import { useEffect, useState } from "react";  
import './Behost.css'
import logo from "../img/logo_white.png"
import { Link } from 'react-router-dom';
import MapContainer from "../components/MapContainer";
import Footer from "../components/Footer";
import FooterDetail from "../components/FooterDetail";
import host_data from '../data/behost.json';
import { Swiper, SwiperSlide } from 'swiper/react';

function Behost(id) {

    const [data, setDetail] = useState([]);

    useEffect(() => {
        host_data.details.map((item) => {
            if(id === item.id) {
                setDetail(item);
            }
        })
    })
    return (
    <div className="behost">
        <div className="video_container" style={{height: "480px"}}>
        <Link to ="/">
            <img src={logo} alt="logo" width="32px" height="36px"/>
            <button id="logo_button" onClick="location.href='index.html'"></button>
        </Link>
        <div className="video_left">
            <div className="first_item" id="hosting_txt">
                호스팅을
                <br/>시작해보세요
            </div>

            <button className="start_btn">
                호스팅 시작하기
            </button>
        </div>

        <div className="video_right">
            <video src="https://a0.muscache.com/v/a9/a7/a9a7873c-95de-5e37-8995-a5abb5b6b02f/a9a7873c95de5e378995a5abb5b6b02f_4000k_1.mp4" controls autoplay>대체텍스트</video>
        </div>
    </div>

    <div id="second_container">
        <div className="second_item title_host">
            호스팅으로 올릴 수 있는
            <br/>수입을 확인하세요
        </div>

        <div class = "second_item" id="host_income">
            <div className="income_info">
                <div className="income_box">
                    동일 지역 내 호스트의 평균 수입은 다음과 같습니다.*
                    <div className="income_price">
                        <span className="info_host" style={{color: "#ff385c"}}>₩3,048,591</span>
                        <span style={{color: "#ff385c"}}>/월</span>
                    </div>
                </div>
                <div className="income_box">
                    호스팅 수입
                    <div className="income_price">
                        <span className="info_host">₩127,025</span>
                        <span>/박</span>
                    </div>
                </div>
                <div className="income_box">
                    예약 일수:
                    <div className="income_price">
                        <span className="info_host">24</span>
                        <span>박/월</span>
                    </div>
                </div>
            </div>

            <p>숙소를 소개해주세요</p>

            <div id="map_income">
                <MapContainer />
            </div>
            
            <div id="income_method">*에어비앤비가 예상 수입을 산정하는 방법</div>
        </div>

        <div class = "second_item title_host" style={{padding: "120px 0 0 48px"}}>
            언제 어디서든
            <br/>호스팅하실 수 있습니다    

            <div class = "swiper mySwiper">
                    <Swiper
                        className = "small_img"
                        spaceBetween={50}
                        slidesPerView={3}
                        navigation
                    >
                    <SwiperSlide>
                        <img className="detail_filter" alt="detail_fileter" src="https://a0.muscache.com/im/pictures/4f3047b2-58ea-4335-8430-dfc6f436634d.jpg"/> 
                    </SwiperSlide>  
                    
                    <SwiperSlide>
                        <img className="detail_filter" alt="detail_fileter"src="https://a0.muscache.com/im/pictures/31fb3cb1-c2a1-4e14-a9e9-6f279991790b.jpg"/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className="detail_filter" alt="detail_fileter" src="https://a0.muscache.com/im/pictures/a464d642-695e-4d2c-aa51-2302de067f45.jpg"/>    
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className="detail_filter" alt="detail_fileter" src="https://a0.muscache.com/im/pictures/d8627b07-b42c-40a1-807f-1eac9de39311.jpg?im_w=720"/> 
                    </SwiperSlide>
 
                    <SwiperSlide>
                        <img className="detail_filter" alt="detail_fileter" src="https://a0.muscache.com/im/pictures/b56f3d7c-5006-4ed2-967a-c421e3275b1f.jpg?im_w=720"/>  
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className="detail_filter" alt="detail_fileter" src="https://a0.muscache.com/im/pictures/334530d8-2ad6-40e8-8fd2-4ac0835e693a.jpg?im_w=720"/>
                    </SwiperSlide>                
                </Swiper>

                <div className="img-detail">{data.detail}</div>
            </div>
        </div>
    </div>
    
    <div id="third_container">
        <div className="third_item">
            10만 명에 달하는 우크라이나 피란민에게 임시 
            <br/>숙소를 제공해주세요
        </div>

        <button className="detail_btn">
            자세히 알아보기
        </button>
    </div>

    <div id="fourth_container">
        {/* <img src="https://a0.muscache.com/im/pictures/93ef1829-62d1-4349-8b4a-b02ebc650a25.jpg?im_w=2560&amp;im_q=highq" style={{vertical-align: "bottom", border-radius: "12px"}}/> */}
        <img alt="fourth_img" src="https://a0.muscache.com/im/pictures/93ef1829-62d1-4349-8b4a-b02ebc650a25.jpg?im_w=2560&amp;im_q=highq" />

        <div id="fourth_superhost">
            <div className="fourth_item">
                호스팅에 관해 궁금하신 점이 있나요?
                <br/>슈퍼호스트에게 물어보세요.
            </div>

            <button className="detail_btn">
                자세히 알아보기
            </button>
        </div>
    </div>

    
    <div id="fifth_container">
        <div className="left_item">
            <img alt="left_img" src="https://a0.muscache.com/im/pictures/d3537125-14e0-48e1-b760-97490570d937.jpg" />

            <div className="fifth_item">
                호스팅 전반에 대한 보호.
                <br/>모든 예약에 항상 무⁠료⁠로 제⁠공.
                <br/>오직 에어비앤비에서만.
            </div>
            <button className="start_btn">
                자세히 알아보기
            </button>
        </div>

        <div className="right_item">
            {/* <img className="fifth_img" src="https://a0.muscache.com/im/pictures/11e10d64-867e-4dba-b0b4-896026a4f0e0.jpg?im_w=2560&amp;im_q=highq" style={{object-fit: contain; vertical-align: bottom; width: 630px; height: 750px;"/> */}
            <img className="fifth_img" alt="fifth_img" src="https://a0.muscache.com/im/pictures/11e10d64-867e-4dba-b0b4-896026a4f0e0.jpg?im_w=2560&amp;im_q=highq" />
        </div>
    </div>

        <div className="video_container" id="six_container" style={{height: "721px"}}>
            <div className="video_right">
                <video src="https://a0.muscache.com/v/9a/7a/9a7ad4a1-cfab-5f7d-96e6-fda8abceabe7/9a7ad4a1cfab5f7d96e6fda8abceabe7_4000k_1.mp4" controls autoplay></video>
            </div>

            <div className="video_left">
                <div className="six_item">
                    에어비앤비에서
                    <br/>호스팅을 시작해보세요
                </div>

                <div className="six_item" id="subtxt_six">
                    에어비앤비 호스트가 되어보세요. 에어비앤비가
                    <br/>모든 단계에서 도와드립니다.
                </div>

                <button className="start_btn">
                    시작하기
                </button>
            </div>
        </div>
        <FooterDetail />
        <Footer />
    </div>
    );
}

export default Behost;