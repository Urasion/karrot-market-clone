import { useEffect, useState } from 'react';
import { LucideChevronLeft, LucideChevronRight, LucideDot } from 'lucide-react';
import { cn, debounce2 } from '../../lib/utils';
import { debounce } from 'lodash';
import BannerIcon from '../icons/BannerIcon';

type Banner = {
  title: string;
  content: string;
  color: string;
};
const bannerList = [
  {
    title: `믿을만한\n이웃 간 중고거래`,
    content: '동네 주민들과 가깝고 따듯한 거래를\n지금 경험해보세요.',
    color: '#FFF1AA',
  },
  {
    title: '동네 이웃들이\n자주 가는 동네 업체',
    content: '우리 동네 사람들이\n이용하는 업체를 찾아보세요.',
    color: '#FFE2D2',
  },
  {
    title: '우리 동네에서 찾는\n당근알바',
    content: '걸어서 10분 거리의\n동네 알바들 여기 다 있어요.',
    color: '#FFE2D2',
  },
  {
    title: '복비 없이 투명한\n부동산 직거래',
    content: '이웃이 살던 집, 당근에서\n편하게 직거래 해보세요.',
    color: '#E3EFF9',
  },
  {
    title: '딜러 수수료 없는\n중고차 직거래',
    content: '딜러 없이 믿고 살 수 있는 중고차,\n당근에서 직거래 해보세요.',
    color: '#DAF4FF',
  },
] as Banner[];
let mouseDownX = 0;
let currnetScrollX = 0;
let speed = Date.now();
export default function MainBanner() {
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (isMouseDown) {
        document.getElementById('banner')?.scroll({
          left: currnetScrollX + (mouseDownX - event.clientX),
        });
      }
    };
    const handleMouseUp = async (event: MouseEvent) => {
      if (isMouseDown) {
        let index = Math.round(
          document.getElementById('banner')?.scrollLeft! / 1080
        );
        console.log(mouseDownX - event.clientX);
        if (mouseDownX - event.clientX < 400) {
          mouseDownX - event.clientX < 0
            ? index > 0 && index--
            : index < 4 && index++;
        }
        setActiveIndex(index);
        currnetScrollX = index * 1080;
        document
          .getElementById('banner')
          ?.scrollTo({ left: currnetScrollX, behavior: 'smooth' });

        setIsMouseDown(false);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isMouseDown, activeIndex]);
  const handleOnChangeBannerLeft = () => {
    const nextIndex =
      activeIndex === 0 ? bannerList.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
    currnetScrollX = nextIndex * 1080;
    document
      .getElementById('banner')
      ?.scrollTo({ left: nextIndex * 1080, behavior: 'smooth' });
  };
  const handleOnChangeBannerRight = () => {
    const nextIndex =
      activeIndex === bannerList.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
    currnetScrollX = nextIndex * 1080;
    document
      .getElementById('banner')
      ?.scrollTo({ left: nextIndex * 1080, behavior: 'smooth' });
  };
  return (
    <div
      className="w-full h-[470px] flex justify-center items-center duration-200 z-0 my-3 xl:my-0"
      style={{ backgroundColor: `${bannerList[activeIndex].color}` }}
    >
      <button className="size-9 mr-5" onClick={handleOnChangeBannerLeft}>
        <LucideChevronLeft className="size-full" />
      </button>
      <div className="w-[1080px] h-full relative">
        <ul
          id="banner"
          className="w-full h-[440px] relative overflow-hidden duration-500"
        >
          {bannerList.map((banner, index) => (
            <li
              className="w-full h-full absolute duration-200 z-20"
              style={{ left: index * 1080 }}
              onMouseDown={(e) => {
                setIsMouseDown(true);
                speed = Date.now();
                mouseDownX = e.clientX;
              }}
              key={index}
            >
              <h1
                className="text-4xl font-black select-none whitespace-pre-wrap mt-12 mb-3"
                style={{ lineHeight: '48px' }}
              >
                {banner.title}
              </h1>
              <h1 className="text-lg font-medium select-none whitespace-pre-wrap">
                {banner.content}
              </h1>
            </li>
          ))}
        </ul>
        <div className="size-96 absolute right-0 bottom-0 z-10">
          <BannerIcon index={activeIndex} />
        </div>
        <ul className="flex">
          {Array.from({ length: bannerList.length }, (v, k) => k).map(
            (index) => (
              <li key={index}>
                <button
                  className={cn(
                    index === activeIndex ? 'text-black' : 'text-gray-400',
                    'cursor-pointer'
                  )}
                  onClick={() => {
                    const nextIndex = index;
                    setActiveIndex(nextIndex);
                    currnetScrollX = nextIndex * 1080;
                    document.getElementById('banner')?.scrollTo({
                      left: nextIndex * 1080,
                      behavior: 'smooth',
                    });
                  }}
                >
                  <LucideDot />
                </button>
              </li>
            )
          )}
        </ul>
      </div>

      <button className="size-9 ml-5" onClick={handleOnChangeBannerRight}>
        <LucideChevronRight className="size-full" />
      </button>
    </div>
  );
}
