import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "./HeaderSwiper.css";

SwiperCore.use([Navigation])

function HeaderSwiper() {
    return(
        <div className="HeaderSwiper">
            <div className="swiper_filter">
                <div className="swiper-item">
                    <Swiper
                        className="header_swiper"
                        slidesPerView={12}
                        spaceBetween={5}
                        slidesPerGroup={9}
                        navigation
                        >
                        <SwiperSlide>
                            <button class = "btn_place" style={{"border-bottom":"3px solid black"}}>
                                <div className="place_filter">
                                    <img className="detail_filter" style={{filter:"none"}} src="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg" alt="" width="24" height="24"/>
                                    <span className="detail_filter" style={{color: "black"}}>섬</span>
                                </div>
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button class = "btn_place">
                                <div className="place_filter">
                                    <img className="detail_filter" src="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg" alt="" width="24" height="24"/>                
                                    <span className="detail_filter">국립공원</span>
                                </div>
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button class = "btn_place">
                                <div className="place_filter">
                                    <img className="detail_filter" src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg" alt="" width="24" height="24"/>                
                                    <span className="detail_filter">통나무집</span>
                                </div>
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button class = "btn_place">
                                <div className="place_filter">
                                    <img className="detail_filter" src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg" alt="" width="24" height="24"/>                
                                    <span className="detail_filter">기상천외한 숙소</span>
                                </div>
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button class = "btn_place">
                                <div className="place_filter">
                                    <img className="detail_filter" src="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg" alt="" width="24" height="24"/>                
                                    <span className="detail_filter">해변 근처</span>
                                </div>
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button class = "btn_place">
                                <div className="place_filter">
                                    <img className="detail_filter" src="https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg" alt="" width="24" height="24"/>                
                                    <span className="detail_filter">초소형 주택</span>
                                </div>
                            </button> 
                        </SwiperSlide>
                        <SwiperSlide>
                            <button class = "btn_place">
                                <div className="place_filter">
                                    <img className="detail_filter" src="https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg" alt="" width="24" height="24"/>                
                                    <span className="detail_filter">디자인</span>
                                </div>
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button class = "btn_place">
                                <div className="place_filter">
                                    <img className="detail_filter" src="https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg" alt="" width="24" height="24"/>                
                                    <span className="detail_filter">캠핑장</span>
                                </div>
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button class = "btn_place">
                                <div className="place_filter">
                                    <img className="detail_filter" src="https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg" alt="" width="24" height="24"/>
                                    <span className="detail_filter">A자형 주택</span>
                                </div>
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button class = "btn_place">
                                <div className="place_filter">
                                    <img className="detail_filter" src="https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg" alt="" width="24" height="24"/>
                                    <span className="detail_filter">호숫가</span>
                                </div>
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button class = "btn_place">
                                <div className="place_filter">
                                    <img className="detail_filter" src="https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg" alt="" width="24" height="24"/>                
                                    <span className="detail_filter">북극</span>
                                </div>
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button class = "btn_place">
                                <div className="place_filter">
                                    <img className="detail_filter" src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg" alt="" width="24" height="24"/>                
                                    <span className="detail_filter">멋진 수영장</span>
                                </div>
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button class = "btn_place">
                                <div className="place_filter">
                                    <img className="detail_filter" src="https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg" alt="" width="24" height="24"/>                
                                    <span className="detail_filter">동굴</span>
                                </div>
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button class = "btn_place">
                                <div className="place_filter">
                                    <img className="detail_filter" src="	https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg" alt="" width="24" height="24"/>
                                    <span className="detail_filter">서핑</span>
                                </div>
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button class = "btn_place">
                                <div className="place_filter">
                                    <img className="detail_filter" src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg" alt="" width="24" height="24"/>
                                    <span className="detail_filter">최고의 전망</span>
                                </div>
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button class = "btn_place">
                                <div className="place_filter">
                                    <img className="detail_filter" src="https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg" alt="" width="24" height="24"/>                
                                    <span className="detail_filter">복토 주택</span>
                                </div>
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button class = "btn_place">
                                <div className="place_filter">
                                    <img className="detail_filter" src="https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg" alt="" width="24" height="24"/>                
                                    <span className="detail_filter">열대 지역</span>
                                </div>
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button class = "btn_place">
                                <div className="place_filter">
                                    <img className="detail_filter" src="https://a0.muscache.com/pictures/52c8d856-33d0-445a-a040-a162374de100.jpg" alt="" width="24" height="24"/>
                                    <span className="detail_filter">셰어하우스</span>
                                </div>
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button class = "btn_place">
                                <div className="place_filter">
                                    <img className="detail_filter" src="https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg" alt="" width="24" height="24"/>
                                    <span className="detail_filter">Luxe</span>
                                </div>
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button class = "btn_place">
                                <div className="place_filter">
                                    <img className="detail_filter" src="https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg" alt="" width="24" height="24"/>                
                                    <span className="detail_filter">B&B</span>
                                </div>
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button class = "btn_place">
                                <div className="place_filter">
                                    <img className="detail_filter" src="https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg" alt="" width="24" height="24"/>
                                    <span className="detail_filter">캐슬</span>
                                </div>
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button class = "btn_place">
                                <div className="place_filter">
                                    <img className="detail_filter" src="https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg" alt="" width="24" height="24"/>
                                    <span className="detail_filter">농장</span>
                                </div>
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button class = "btn_place">
                                <div className="place_filter">
                                    <img className="detail_filter" src="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg" alt="" width="24" height="24"/>                
                                    <span className="detail_filter">한적한 시골</span>
                                </div>
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button class = "btn_place">
                                <div className="place_filter">
                                    <img className="detail_filter" src="https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg" alt="" width="24" height="24"/>                
                                    <span className="detail_filter">저택</span>
                                </div>
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button class = "btn_place">
                                <div className="place_filter">
                                    <img className="detail_filter" src="https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg" alt="" width="24" height="24"/>
                                    <span className="detail_filter">상징적 도시</span>
                                </div>
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button class = "btn_place">
                                <div className="place_filter">
                                    <img className="detail_filter" src="https://a0.muscache.com/pictures/8f7740f0-4854-4057-8082-e098649cf689.jpg" alt="" width="24" height="24"/>
                                    <span className="detail_filter">객잔</span>
                                </div>
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button class = "btn_place">
                                <div className="place_filter">
                                    <img className="detail_filter" src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg" alt="" width="24" height="24"/>
                                    <span className="detail_filter">해변 바로 앞</span>
                                </div>
                            </button>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="header_filter">
                    <svg viewBox="0 0 16 16" style={{display: "block", height: "14px", width:"14px", fill:"currentColor"}}><path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>
                    <div>필터</div>
                </div>
            </div>
        </div>
    )
}

export default HeaderSwiper;
