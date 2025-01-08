import { Children } from 'react';
import CarrotIcon from '../icons/CarrotIcon';
import { LucideFacebook, LucideInstagram, LucideYoutube } from 'lucide-react';

type Card = {
  name: string;
  children?: Card[];
};

const CardList = [
  {
    name: '회사',
    Children: [
      {
        name: '회사 소개',
      },
      {
        name: '당근페이',
      },
      {
        name: '팀문화',
      },
      {
        name: '서비스 소개',
      },
      {
        name: '블로그',
      },
      {
        name: '채용',
      },
    ],
  },
  {
    name: '탐색',
    Children: [
      {
        name: '중고거래',
      },
      {
        name: '부동산',
      },
      {
        name: '중고차',
      },
      {
        name: '알바',
      },
      {
        name: '동네업체',
      },
      {
        name: '동네생활',
      },
      {
        name: '모임',
      },
      {
        name: '채팅하기',
      },
      {
        name: '이웃',
      },
    ],
  },
  {
    name: '비즈니스',
    Children: [
      {
        name: '당근 비즈니스',
      },
      {
        name: '제휴 문의',
      },
      {
        name: '광고 문의',
      },
    ],
  },
  {
    name: 'Karrot',
    Children: [
      {
        name: 'Canada',
      },
      {
        name: 'United States',
      },
      {
        name: 'United Kingdom',
      },
      {
        name: '日本',
      },
    ],
  },
  {
    name: '문의',
    Children: [
      {
        name: 'IR',
      },
      {
        name: 'PR',
      },
      {
        name: '고객센터',
      },
    ],
  },
];
export default function Footer() {
  return (
    <div className="w-full h-[1080px] ">
      <section className="w-[1400px] h-full flex flex-col m-auto p-20">
        <div className="flex">
          <div className="w-[552px] h-[384px] mb-10 flex items-start flex-col ">
            <CarrotIcon />
            <div className="flex text-white space-x-4">
              <LucideFacebook />
              <LucideInstagram />
              <LucideYoutube />
            </div>
          </div>
          <div className="w-[668px] h-full grid grid-cols-4 grid-rows-2 grid-flow-row gap-4  ">
            {CardList.map((card) => (
              <div
                className="w-40 flex flex-col space-y-3 text-white"
                key={card.name}
              >
                <h1 className="font-bold">{card.name}</h1>
                <div className="flex flex-col space-y-1">
                  {card.Children.map((cardChild) => (
                    <span
                      className="cursor-pointer hover:text-gray-400"
                      key={cardChild.name}
                    >
                      {cardChild.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full border-b border-gray-700 mb-5" />
        <div className="w-[1240px] h-44 whitespace-pre-wrap text-gray-300 text-sm font-bold">
          {`
          (주) 당근마켓
          대표 김용현, 황도연 | 사업자번호 375-87-00088
          직업정보제공사업 신고번호 J1200020200016
          통신판매업 신고번호 2021-서울서초-2875 
          호스팅 사업자 Amazon Web Service(AWS) 
          주소  서울특별시 구로구 디지털로 300, 10층 (당근서비스) 
          전화 1544-9796 | 고객문의 cs@daangnservice.com 

          
          이용약관    개인정보처리방침    운영정책     위치기반서비스 이용약관    이용자보호 비전과 계획    청소년보호정책`}
        </div>
      </section>
    </div>
  );
}
