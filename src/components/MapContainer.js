import React, { useEffect, useState } from 'react';
import styles from './MapContainer.module.css'
import maplist from '../data/map.json'
import styled from 'styled-components';

const { kakao } = window;

const MapContainer = ({ searchPlace }) => {
  
  const [map, setMap ] = useState();
  // 검색결과 배열에 담아줌W
    useEffect(() => {
      //var markers = [] // 마커를 담을 배열
      const container = document.getElementById('kakaoMap')
      const options = {
        center: new kakao.maps.LatLng(35.163, 129.15), // 지도의 중심좌표
        level: 7, // 지도의 확대 레벨
      };
      const map = new kakao.maps.Map(container, options);

      //마커가 표시 될 위치

      for(let i=0; i <maplist.marker.length; i++) {
        const markerPosition = new kakao.maps.LatLng(
          maplist.marker[i].latitude, 
          maplist.marker[i].longitude
        );

        const content = `<div class=marker>`+ maplist.marker[i].price +`</div>`;        //마커 생성
        let marker = new kakao.maps.CustomOverlay({
          map:map,
          position: markerPosition,
          content: content,
        });

        //useState밖으로 map정보를 가져옴 -> useState        
        marker.setMap(map)
        }

      },[]);  
    //useState로 map정보를 가져와서 지도 줌인줌아웃
    const zoomIn = () => {
      map.setLevel(map.getLevel() - 1);
    }

    const zoomOut = () => {
      map.setLevel(map.getLevel() + 1);
    }

    const LocationLoad = (pos) => {
      const currentPos = new kakao.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
      map.panTo(currentPos);

      const marker = new kakao.maps.Marker({map: map, position:currentPos});

      marker.setMap(map);
    }
    
    const locationLoadError = () =>{
      alert('위치 정보를 가져오는데 실패했습니다.');
    };

    const getCurrentPosBtn = () => {
      setMap(LocationLoad,locationLoadError);
    }
  
    return (
        <MapItem id="kakaoMap">
          <div className={styles.zoom_btn}>
            <button className="zoom" onClick={zoomIn}>
              <svg viewBox="0 0 16 16" height="16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 1a1 1 0 0 1 2 0v14a1 1 0 1 1-2 0V1z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"></path></svg>
            </button>
            <div className={styles.border_zoom}></div>
            <button className="zoom" onClick={zoomOut}>
              <svg viewBox="0 0 16 16" height="16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"></path></svg>
            </button>
          </div>

          <button className={styles.mylocation} onClick={getCurrentPosBtn}>
            <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" style={{display: "block", height: "18px", width: "18px", fill: "rgb(176, 176, 176)"}}><path d="m10.8431856 16.3486078c-.1735846.4112215-.6145289.7245188-1.05402708.6364803-.43949821-.0880384-.78907341-.5390778-.78915852-.9850881v-7l-7.05847799-.00695887c-.44831896-.00008467-.83440826-.31461578-.92290244-.75185074-.08849417-.43723497.14515025-.87590858.55850035-1.04859923l13.11043368-5.11686739c.3538762-.15082918.7644025-.07215022 1.0366284.19867383.272226.27082405.3513122.67923635.1997023 1.03129017z"></path></svg>
          </button>  
        </MapItem>
    );
  } 

  const MapItem = styled.div `
    height: 100%;
    width: 100%;
    .marker {
      padding: 6px 12px 4px 12px;
      background-color: white;
      height: 28px;
      font-weight: bold;
      border-radius: 28px;
      font-size: 14px;
      box-sizing: border-box;
      box-shadow: rgb(0 0 0 / 4%) 0px 0px 0px 1px, rgb(0 0 0 / 18%) 0px 2px 4px;
      :hover {
        transform: scale(1.1);
        color:white;
        background-color:black;
      }
  `;

export default MapContainer