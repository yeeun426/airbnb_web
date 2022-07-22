import styles from '../pages/Main.module.css'
import { Link } from 'react-router-dom';

function Footer() {
    return(
        <div className={styles.total_footer}>
            <div className={styles.upper_footer}>
                <div className={styles.inc_container}>
                    <span>© 2022 Airbnb,Inc.</span>
                    <span> · </span>
                    <Link to="/*" style={{ textDecoration: 'none', color:"black"}}>
                    개인정보 처리방침
                    </Link>
                    <span> · </span>
                    <button>이용약관</button>
                    <span> · </span>
                    <button>사이트맵</button>
                    <span> · </span>
                    <button>한국의 변경된 환불 정책</button>
                    <span> · </span>
                    <button>회사 세부정보</button>
                </div>

                <div className="KRW_container">
                    <div style={{display:"flex"}}>
                        <svg viewBox="0 0 16 16" style={{display: "block", height: "16px", width: "16px", fill: "currentcolor" }}><path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path></svg>
                        <span style={{margin:"0 24px 0 8px"}}>한국어(KR)</span>
                    </div>
                    <span style={{"margin-right":"24px"}}>₩ KRW</span>
                    <span>지원 및 참고 자료</span>
                    <svg viewBox="0 0 32 32" style={{display: "block", fill: "none", height: "16px", width: "16px", stroke: "currentcolor", "stroke-width": "4", overflow: "visible", "margin-left":"8px"}}><path d="m4 20 11.2928932-11.29289322c.3905243-.39052429 1.0236893-.39052429 1.4142136 0l11.2928932 11.29289322"></path></svg>
                </div>
            </div>
        
        <div className={styles.line_container}></div>
        
        <div className='inc_details'>
            웹사이트 제공자: Airbnb Ireland UC, private unlimited company, 8 Hanover Quay Dublin 2, D02 DP23 Ireland | 이사: Dermot Clarke, Killian Pattwell, Andrea Finnegan | VAT 번호: IE9827384L | 사업자 등록 번호: IE 511825 | 연락처: terms@airbnb.com, 웹사이트, 080-822-0230 | 호스팅 서비스 제공업체: 아마존 웹서비스 | 에어비앤비는 통신판매 중개자로 에어비앤비 플랫폼을 통하여 게스트와 호스트 사이에 이루어지는 통신판매의 당사자가 아닙니다. 에어비앤비 플랫폼을 통하여 예약된 숙소, 체험, 호스트 서비스에 관한 의무와 책임은 해당 서비스를 제공하는 호스트에게 있습니다.
        </div>
    </div>   
    )
}

export default Footer