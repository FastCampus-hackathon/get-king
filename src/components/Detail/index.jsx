import React from 'react'
import dayjs from 'dayjs'

function Detail({ data }) {
  return (
    <>
      <dl>
        <dt>회사명</dt>
        <dd>{data.jobs.job[0].company.detail.name}</dd>

        <dt>회사 홈페이지</dt>
        <dd>
          <a href={data.jobs.job[0].company.detail.href}>바로가기</a>
        </dd>

        <dt>접수 시작일</dt>
        <dd>
          {dayjs(new Date(data.jobs.job[0]['opening-timestamp'] * 1000)).format(
            'YYYY.MM.DD'
          )}
        </dd>

        <dt>접수 마감일</dt>
        <dd>
          {dayjs(
            new Date(data.jobs.job[0]['expiration-timestamp'] * 1000)
          ).format('YYYY.MM.DD')}
        </dd>

        <dt>오늘</dt>
        <dd>{dayjs(new Date()).format('YYYY.MM.DD')}</dd>

        <dt>마감까지?</dt>
        <dd>
          {dayjs(
            new Date(data.jobs.job[0]['expiration-timestamp'] * 1000) -
              new Date()
          ).format('DD') + '일 남음'}
        </dd>

        <dt>공고 언제 닫히나?</dt>
        <dd>{data.jobs.job[0]['close-type'].name}</dd>

        <dt>키워드</dt>
        <dd>{data.jobs.job[0].keyword}</dd>

        <dt>경력 요건</dt>
        <dd>{data.jobs.job[0].position['experience-level'].name}</dd>

        <dt>산업 분야</dt>
        <dd>{data.jobs.job[0].position.industry.name}</dd>

        <dt>직무</dt>
        <dd>{data.jobs.job[0].position['job-code'].name}</dd>

        <dt>직무 세부</dt>
        <dd>{data.jobs.job[0].position['job-mid-code'].name}</dd>

        <dt>근무 형태</dt>
        <dd>{data.jobs.job[0].position['job-type'].name}</dd>

        <dt>연봉</dt>
        <dd>{data.jobs.job[0].salary.name}</dd>

        <dt>지역</dt>
        <dd>{data.jobs.job[0].position.location.name}</dd>

        <dt>공고문</dt>
        <dd>{data.jobs.job[0].position.title}</dd>

        <dt>사람인에서 다시보기</dt>
        <dd>
          <a href={data.jobs.job[0].url}>바로가기</a>
        </dd>
      </dl>
    </>
  )
}

export default Detail
