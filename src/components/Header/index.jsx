import React from "react";
import { Head } from "./style";
import logo from "../../static/icons/logo.svg";
import bell from "../../static/icons/bell.svg";
import avatar from "../../static/images/avatar.jpg";

function Header() {
  return (
    <Head>
      <div>
        <div>
          <a href="/">
            <img src={logo} alt="로고" />
          </a>
        </div>

        <ul>
          <li>
            <a href="/">채용정보</a>
          </li>
          <li>
            <a href="https://www.saramin.co.kr/zf_user/companylab">기업정보</a>
          </li>
          <li>
            <a href="https://www.saramin.co.kr/zf_user/service/talent-pool">
              이직제안
            </a>
          </li>
          <li>
            <a href="https://www.saramin.co.kr/zf_user/memcom/preview/custom-guide">
              인적성·면접
            </a>
          </li>
          <li>
            <a href="https://www.saramin.co.kr/zf_user/jobs/theme/it-headhunting">
              합격
            </a>
          </li>
          <li>
            <a href="https://gig.saramin.co.kr/?utm_source=sri_pc&utm_medium=gnb&utm_campaign=sri_gnb&_ga=2.168628389.589765131.1645546845-670019062.1634537357">
              프리랜서N잡
            </a>
          </li>
        </ul>
      </div>

      <div>
        {localStorage.getItem("user") !== "true" ? (
          <a href="/login">로그인</a>
        ) : (
          <strong>
            <img src={avatar} alt="" />
          </strong>
        )}
        <img src={bell} alt="알림" />
      </div>
    </Head>
  );
}

export default Header;
