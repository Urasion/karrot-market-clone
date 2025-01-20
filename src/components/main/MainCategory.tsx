import { ReactNode, useEffect, useRef, useState } from 'react';
import MainCategoryItem from './MainCategoryItem';
import { LucideChevronLeft, LucideChevronRight } from 'lucide-react';
type Category = {
  name: string;
  icon: ReactNode;
};
const categorys = [
  {
    name: '디지털기기',
    icon: (
      <img
        src="https://dnvefa72aowie.cloudfront.net/origin/etc/202403/d29808aa01c0a41269248321a456abe2abe0c66e390dd54cc3db0faa50bf8c4b.png"
        alt="thumbnail"
      ></img>
    ),
  },
  {
    name: '생활가전',
    icon: (
      <img
        src="https://dnvefa72aowie.cloudfront.net/origin/etc/202403/8999c0c18e64026e11b7859fcd1ca85142b8de45ba6c29b8d886c2841d7a2eaa.png"
        alt="thumbnail"
      ></img>
    ),
  },
  {
    name: '가구/인테리어',
    icon: (
      <img
        src="https://dtxw8q4qct0d4.cloudfront.net/origin/etc/202307/7bb08256f1f87ac704907ee82a03201e6c4a3e668d71ef44d4129b30ccb3dfcf.png"
        alt="thumbnail"
      ></img>
    ),
  },
  {
    name: '생활/주방',
    icon: (
      <img
        src="https://dnvefa72aowie.cloudfront.net/origin/etc/202403/5db61d75ec51aefb77820d293491594d53ca63ab1ade5d7a154f1f51b678d1e2.png"
        alt="thumbnail"
      ></img>
    ),
  },
  {
    name: '유아동',
    icon: (
      <img
        src="https://dnvefa72aowie.cloudfront.net/origin/etc/202403/e3f9aeef2cc1efb65bd139c125a4983d552d62aca69eb16f8349b36bcaa17d62.png"
        alt="thumbnail"
      ></img>
    ),
  },
  {
    name: '유아도서',
    icon: (
      <img
        src="https://dnvefa72aowie.cloudfront.net/origin/etc/202403/4c69e8c4c4598e5b23a1fba1a821a830cbd830702b533d3a85ae14aa22a62e5c.png"
        alt="thumbnail"
      ></img>
    ),
  },
  {
    name: '여성의류',
    icon: (
      <img
        src="https://dtxw8q4qct0d4.cloudfront.net/origin/etc/202307/fffafa3aec1d4e1bf2454e2ff08f7930ae465e3b84eb1436109edbfac2ed754b.png"
        alt="thumbnail"
      ></img>
    ),
  },
  {
    name: '여성잡화',
    icon: (
      <img
        src="https://dnvefa72aowie.cloudfront.net/origin/etc/202403/0f027dc5447cad28a8f7e2099aceddbfff33983095d74656688d86584de306b9.png"
        alt="thumbnail"
      ></img>
    ),
  },
  {
    name: '남성패션/잡화',
    icon: (
      <img
        src="https://dnvefa72aowie.cloudfront.net/origin/etc/202403/5ee0336ba4a336ac3753f91e0cdd4a7e40d48d4045c01cbd2863fc29f9ba807c.png"
        alt="thumbnail"
      ></img>
    ),
  },
  {
    name: '뷰티/미용',
    icon: (
      <img
        src="https://dnvefa72aowie.cloudfront.net/origin/etc/202403/cb1bc00059165d7717565482ae8b32eb995292b541662bd96e362fa12953ae94.png"
        alt="thumbnail"
      ></img>
    ),
  },
  {
    name: '스포츠/레저',
    icon: (
      <img
        src="https://dnvefa72aowie.cloudfront.net/origin/etc/202403/b9c9bc30b96ec4290e0cfb845d4793b62436365247694d6fb6509931fd1dffac.png"
        alt="thumbnail"
      ></img>
    ),
  },
  {
    name: '취미/게임/음반',
    icon: (
      <img
        src="https://dnvefa72aowie.cloudfront.net/origin/etc/202403/9235ff5b6ac73472f7017af0da02a9c10e885665483a9a9be699d30042c322e0.png"
        alt="thumbnail"
      ></img>
    ),
  },
  {
    name: '도서',
    icon: (
      <img
        src="https://dnvefa72aowie.cloudfront.net/origin/etc/202403/ea0004e57d8568edd100fc180679434e4b7ce79af54bdee6ee5225b7662bcde3.png"
        alt="thumbnail"
      ></img>
    ),
  },
  {
    name: '티켓/교환권',
    icon: (
      <img
        src="https://dnvefa72aowie.cloudfront.net/origin/etc/202403/87b9796e107536045708710b43c1c08ed4ba54a7de9e111acd8641358f909d11.png"
        alt="thumbnail"
      ></img>
    ),
  },
  {
    name: '가공식품',
    icon: (
      <img
        src="https://dnvefa72aowie.cloudfront.net/origin/etc/202403/76c3ef340db1e72a16ba5634e05a6e904594597f5caefd4824cd0eb14e5ad54f.png"
        alt="thumbnail"
      ></img>
    ),
  },
  {
    name: '건강기능식품',
    icon: (
      <img
        src="https://dnvefa72aowie.cloudfront.net/origin/brand/202404/0217fbee57e1770b32fb91e099a2ae2533bab1f604a0c070d5298532196ee5bc.png?f=webp"
        alt="thumbnail"
      ></img>
    ),
  },
  {
    name: '반려동물용품',
    icon: (
      <img
        src="https://dnvefa72aowie.cloudfront.net/origin/etc/202403/9c398f0af4fdc28e56e1dd3ed2b43e22644024652650620655e70784bacc21f2.png"
        alt="thumbnail"
      ></img>
    ),
  },
  {
    name: '식물',
    icon: (
      <img
        src="https://dnvefa72aowie.cloudfront.net/origin/etc/202403/0648bfe8225a703f2951814b5b6b3a7d0cda4e58a57e5def865f72fcc800a2b8.png"
        alt="thumbnail"
      ></img>
    ),
  },
  {
    name: '기타 중고물품',
    icon: (
      <img
        src="https://dnvefa72aowie.cloudfront.net/origin/etc/202403/44e503183258bbe2af29548fd8c6052b269a93125aaf229568be18247a3c7cc3.png"
        alt="thumbnail"
      ></img>
    ),
  },
  {
    name: '삽니다',
    icon: (
      <img
        src="https://dnvefa72aowie.cloudfront.net/origin/etc/202403/51f8ac6c2583e7cca4c90837570172d21544813b70a4feda4db834ec440b6075.png"
        alt="thumbnail"
      ></img>
    ),
  },
] as Category[];
export default function MainCategory() {
  const [page, setPage] = useState<number>(0);
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {}, [page]);
  return (
    <section className="w-full xl:w-[1400px] h-[284px] flex flex-col xl:px-20 mx-auto px-4 ">
      <header className="text-white font-bold text-2xl my-6">
        인기 카테고리
      </header>
      <div className="w-full flex relative group">
        <button
          className="hidden xl:flex size-12 absolute -left-8 top-[60px] rounded-full z-10 bg-black group-hover:opacity-100 group-hover:disabled:opacity-0 opacity-0  duration-300"
          disabled={page === 0}
          onClick={() => {
            const nextPage = page - 1;
            setPage(nextPage);
            divRef.current?.scrollTo({
              left: nextPage * 1240,
              behavior: 'smooth',
            });
          }}
        >
          <LucideChevronLeft className="size-12 text-white " />
        </button>
        <div className="w-full flex space-x-5 overflow-auto" ref={divRef}>
          {categorys.map((category) => (
            <MainCategoryItem
              name={category.name}
              icon={category.icon}
              key={category.name}
            />
          ))}
        </div>
        <button
          className="hidden xl:flex size-12 absolute -right-8 top-[60px] rounded-full z-10 bg-black group-hover:opacity-100 opacity-0 group-hover:disabled:opacity-0 duration-300"
          disabled={page === Math.floor(divRef.current?.scrollWidth! / 1240)}
          onClick={() => {
            const nextPage = page + 1;
            setPage(nextPage);
            divRef.current?.scrollTo({
              left: nextPage * 1240,
              behavior: 'smooth',
            });
          }}
        >
          <LucideChevronRight className="size-12  text-white  " />
        </button>
      </div>
    </section>
  );
}
