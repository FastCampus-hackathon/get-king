import React from 'react'
import { Head } from './style'
import logo from '../../static/icons/logo.svg'
import bell from '../../static/icons/bell.svg'

function Header() {
  return (
    <Head>
      <div>
        <div>
          <img src={logo} alt="로고" />
        </div>

        <ul>
          <li>채용정보</li>
          <li>기업정보</li>
          <li>이직제안</li>
          <li>인적성·면접</li>
          <li>합격</li>
          <li>프리랜서N잡</li>
        </ul>
      </div>

      <div>
        <a href="/login">로그인</a>
        <img src={bell} alt="알림" />
      </div>
    </Head>
  )
}

export default Header
