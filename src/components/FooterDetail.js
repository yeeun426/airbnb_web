import styles from './footerDetail.module.css';

function FooterDetail() {
    return(
    <div className="FooterDetails">
        <div className={styles.footer_container}>
            <div className={styles.Detail_footer}>
                <div className={styles.footer_subtitle}>에어비앤비 지원</div>
                <button>도움말 센터</button>
                <button>에어커버</button>
                <button>안전 정보</button>
                <button>장애인 지원</button>
                <button>예약 취소 옵션</button>
                <button>에어비앤비의 코로나19 대응 방안</button>
                <button>이웃 민원 신고</button>
            </div>

            <div className={styles.Detail_footer}>
                <div className={styles.footer_subtitle}>커뮤니티</div>
                <button>Airbnb.org: 재난 구호 숙소</button>
                <button>아프간 난민 지원</button>
                <button>차별 철폐를 위한 노력</button>
            </div>

            <div className={styles.Detail_footer}>
                <div className={styles.footer_subtitle}>호스팅</div>
                <button>호스팅 시작하기</button>
                <button>호스트를 위한 에어커버</button>
                <button>호스팅 자료 둘러보기</button>
                <button>커뮤니티 포럼 방문하기</button>
                <button>책임감 있는 호스팅</button>
            </div>

            <div className={styles.Detail_footer}>
                <div className={styles.footer_subtitle}>에어비앤비</div>
                <button>뉴스룸</button>
                <button>새로운 기능에 대해 알아보기</button>
                <button>에어비앤비 공동창업자의 메시지</button>
                <button>채용정보</button>
                <button>투자자 정보</button>
            </div>
        </div>
    </div>
    )
}

export default FooterDetail;