import styles from './Main.module.css';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, {useState} from "react";

function MainTravel() {
    const [fill, setFill] = useState('rgba(0, 0, 0, 0.5)');

    const onClickLike = () => {
        fill === 'rgba(0, 0, 0, 0.5)' ? setFill('palevioletred'): setFill('rgba(0, 0, 0, 0.5)');
    };

    return(
        <div className={styles.container}>
        <div id="main_img" style={{position: 'relative'}}>
        <Link to="/Detail">
            <Swiper
                className={styles.main_detail}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                >
                <SwiperSlide>
                    <img className="detail_img" alt="detail_img" src="https://a0.muscache.com/im/pictures/373443ec-b377-4181-b753-3a2f3508c2b3.jpg?im_w=720"/>
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
            <div className="detail_info title">MV, 몰디브</div>
            <div>
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{height: "12px", width: "12px", fill: "currentcolor"}}><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd"></path></svg>
                <span>NEW</span>
            </div>
        </div>
        <div className="detail_info distance">6,596km 거리</div>
        <div className="detail_info day">8월 18일~24일</div>
        <div className="detail_info price">\886,626 /박</div>
    </div>
    )
}

export default MainTravel;