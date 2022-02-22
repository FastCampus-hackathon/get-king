const ADD_COMPITEM = "ADD_COMPITEM"
const DELETE_COMPITEM = "DELETE_COMPITEM"

export const addCompItem = (data) => {
  return {
    type: ADD_COMPITEM,
    payload: data
  }
}

export const deleteCompItem = (data) => {
  return {
    type: DELETE_COMPITEM,
    payload: data
  }
}

const initial = {
  compList: [  {
    "url": "http://www.saramin.co.kr/zf_user/jobs/relay/view?rec_idx=42400355&utm_source=job-search-api&utm_medium=api&utm_campaign=saramin-job-search-api",
    "active": 1,
    "company": {
        "detail": {
            "href": "http://www.saramin.co.kr/zf_user/company-info/view?csn=1208607747&utm_source=job-search-api&utm_medium=api&utm_campaign=saramin-job-search-api",
            "name": "에스케이쉴더스(주)"
        }
    },
    "position": {
        "title": "Platform개발본부 '22년 상반기 경력직 개발자 수시 채용",
        "industry": {
            "code": "308",
            "name": "정보보안·백신"
        },
        "location": {
            "code": "102190",
            "name": "경기 &gt; 성남시 분당구"
        },
        "job-type": {
            "code": "1",
            "name": "정규직"
        },
        "job-mid-code": {
            "code": "2",
            "name": "IT개발·데이터"
        },
        "job-code": {
            "code": "82,83,86,87,101,136,146,201,214,235,292",
            "name": "IDS·IPS,네트워크보안,보안,보안컨설팅,정보보안,데이터분석가,데이터엔지니어,앱개발,웹개발,SI개발,클라우드,DevOps,AWS,Docker,Java,SpringBoot,cloud,msa,플랫폼개발,platform,eureka,ribbon,hystrix,엔진"
        },
        "experience-level": {
            "code": 0,
            "min": 0,
            "max": 0,
            "name": "경력무관"
        },
        "required-education-level": {
            "code": "8",
            "name": "대학교졸업(4년)이상"
        }
    },
    "keyword": "IDS·IPS,네트워크보안,보안,보안컨설팅,정보보안",
    "salary": {
        "code": "99",
        "name": "면접후 결정"
    },
    "id": "42400355",
    "posting-timestamp": "1645527020",
    "modification-timestamp": "1645527379",
    "opening-timestamp": "1645524000",
    "expiration-timestamp": "1648133999",
    "close-type": {
        "code": "1",
        "name": "접수마감일"
    }
}]
}

const compReducer = (state = initial, action) => {
  switch (action.type) {
    case ADD_COMPITEM:
      return {
        ...state,
        compList: state.compList.concat(action.payload)
      }
      case DELETE_COMPITEM:
      return {
        ...state,
        compList: state.compList.filter(
          (blog) => blog.jobs.job.id !== action.payload.jobs.job.id
        ),
      }
    default:
      return state
  }
}

export default compReducer
