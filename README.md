# Airbnb (클론코딩)
--------------
## Project Purpose
> 본 프로젝트는 프론트엔드 공부를 하며 에어비앤비를 클론코딩하였다.
> <br/>제작기간은 22-07-08 ~ 2022-08-10로 4주이다.
--------------
## Project Idea
> 웹 프론트엔드에 관심을 가지게 되면서 방학기간동안 실력을 늘리고자 라이징캠프(웹)을 들으며 클론 코딩을 진행하였다.
--------------
## Learn
> [컴포넌트 분리 / 재사용]
> - header나 footer와 같은 모든 화면에서 반복적으로 사용될 수 있는 컴포넌트 단위로 화면을 분리시키고 재사용가능하게 하는 방식이다.
> - 틀은 반복되지만 안에 데이터 만 바뀌는 메인 화면의 숙소 리스트들에 경우, 하나의 컴포넌트를 만들고 반복적으로 데이터만 변경하여 뿌려주도록 구현하였다.
> 
> [카카오맵 API]
> - 카카오맵 api를 사용하여 지도를 구현했고 위도, 경도를 데이터로 저장시켜 그 위치에 마커를 찍어 가격을 표시하였다.
> 
> [리코일]
> - 리코일을 사용하여 atom에 고유한 키값에 기본값 ‘country’ 과 기본값인 ‘여행지 검색’을 저장하고 필요한 컴포넌트에서 이 값을 사용할 수 있게 하였다.
> - 리코일은 검색 기능에서 나라를 선택할 때 다음 페이지로 넘어가도 선택한 나라가 띄어져있도록 하는데 사용되었다.
> - 만약 나라를 선택하지 않고 검색을 누른다면 ‘여행지 검색’ 문구가 뜨게 된다.
>
> [styled components]
> - 스타일드 컴포넌트를 사용하여 상속과 props를 유동적으로 사용하여 스타일링할 수 있었다.
> - 예를 들어 메인 화면에서 하트 버튼이 true일 때 빨간색으로 false일 때 흰색으로 칠하고 싶었고 이 기능에 스타일드 컴포넌트의 props 기능을 사용할 수 있었다.
> - 하트 버튼을 눌렀을 때 like.like를 false로 바꾸는 함수를 작성하였고 like.like의 boolean값을 받아 스타일드 컴포넌트에 전달하여 boolean값에 따라 fill의 색을 다르게 부여하는 방식으로 사용하였다.
>
> [반응형 웹]
> - 핵심 화면의 크기별 레이아웃이 변경되는 메인 화면을 모바일 버전까지 고려하여 반응형 웹으로 코딩하였다.
>- px단위를 최대한 지양하고 폰트는 rem으로, width나 height는 %단위, vw등의 상대적인 단위를 사용하여 반응형 웹으로 변경하였다.
>- 레이아웃이 달라지는 경우,  여행지가 한줄에 4개씩 줄이면 줄일 수록 3개, 2개, 1개로 보이도록 grid 속성을 사용하여 수정하였다.
>- 반응형 css 의 핵심인 미디어쿼리를 사용하여 화면의 해상도 별로 css 속성을 변경할 수 있게끔 하였다.

```css
/* 1128px보다 작을 때 */
@media (max-width: 1128px) {
    .sookso_container{
        grid-template-columns: 1fr 1fr 1fr;
    }
    .container{
        width: 28vw;
    }
    :global #main_img {
        height: 28vw;
    }
}

/* 950px보다 작을 때 */
@media (max-width: 950px) {
    .sookso_container{
        grid-template-columns: repeat(2, 1fr) !important;
    }
    .container{
        width: 42vw !important;
    }
    :global #main_img {
        height: 42vw !important;
    }
    .btn_map {
		display: none;
	}
}
```
--------------
## PAGES
> [메인화면]
![airbnb(1)](https://github.com/yeeun426/airbnb_web/assets/88296511/2e6226a8-3fbe-40a2-919b-4c8b54338cc9)
<br/>

> [세부화면]
![airbnb(2)](https://github.com/yeeun426/airbnb_web/assets/88296511/2c512ef6-2b5a-4437-91e9-33984597c99e)
<br/>

> [호스트되기]
![airbnb(3)](https://github.com/yeeun426/airbnb_web/assets/88296511/81318dbc-85f0-41af-b7a6-8acc1646a0e5)
<br/>

> [지도API]
![스크린샷(18)](https://github.com/yeeun426/airbnb_web/assets/88296511/f8752875-b9b3-4241-b056-89701e025662)

--------------
## Current Folder Structure
> #### 🗂 *src/components*
> > ⌙공통 컴포넌트들을 포함하고있다.
> #### 🗂 *src/data*
> > ⌙백엔드 API 없이 개발한 프로젝트이기 때문에 더미데이터를 담아두고있다.
> #### 🗂 *src/img*
> > ⌙구현에 필요한 이미지 파일들을 포함하고 있다.
> #### 🗂 *src/pages*
> > ⌙웹 상의 모든 페이지들이 있다.
> #### 🗂 *src/recoil*
> > ⌙리코일을 사용하는 컴포넌트들을 포함하고 있다.
-------------
## Project Preview
> 시현 영상 <br>
https://drive.google.com/drive/folders/113-xXCJ0R3WV6a9f4WHf79QP1Io8UKCT
-------------
## Project Environment
> > <img src = "https://user-images.githubusercontent.com/88296511/217285156-6deaeb5d-38cf-4311-a529-cb6534d53c7f.png" width="250" height="150">
>
-------------
## Organizer
> 라이징캠프
-------------
## Project Role
> **frontend** : yeeun426
>
-------------
## Source
> 에어비앤비 이미지 그대로 사용
>
-------------
## Design
> 에어비앤비 https://www.airbnb.co.kr/)https://www.airbnb.co.kr/
