import {
  LucideChevronDown,
  LucideMapPin,
  LucideSearch,
  LucideXCircle,
} from 'lucide-react';
import { Button } from '../ui/Button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/Select';
import { Input } from '../ui/Input';
import { useEffect, useState } from 'react';
import { cn } from '../../lib/utils';
import useModal from '../../hooks/useModal';
import { useAtomValue } from 'jotai';
import { userInfo } from '../../store/store';
type Item = {
  label: string;
  value: string;
};
const selectItems = [
  {
    label: '중고거래',
    value: 'buy-sell',
  },
  {
    label: '부동산',
    value: 'realEstate',
  },
  {
    label: '중고차',
    value: 'usedCar',
  },
  {
    label: '알바',
    value: 'partTimeJob',
  },
  {
    label: '동네업체',
    value: 'localBusiness',
  },
] as Item[];

const popularKeyword = [
  '아이폰',
  '의자',
  '자전거',
  '컴퓨터',
  '책상',
  '소파',
  '원피스',
  '전기자전거',
  '식탁',
  '모니터',
];

export default function SearchBar() {
  const [input, setInput] = useState<string>('');
  const [selectValue, setSelectValue] = useState<string>('usedItemTransaction');
  const user = useAtomValue(userInfo);
  const { openPlaceModal } = useModal();
  return (
    <div className="w-full h-full flex items-start xl:space-x-4 px-4 bg-black">
      <Button
        className="hidden xl:flex px-4 py-0 gap-1 bg-[#2C2E34] rounded-3xl text-white text-base font-bold items-center"
        onClick={openPlaceModal}
      >
        <LucideMapPin />
        {user.place.gu || user.place.si}
        <LucideChevronDown />
      </Button>
      <div className="grow flex flex-col">
        <div className="grow flex items-center text-white border border-gray-700 rounded-md font-medium">
          <Select
            defaultValue="buy-sell"
            onValueChange={(value) => {
              setSelectValue(value);
            }}
          >
            <SelectTrigger className="w-auto text-white border-0 focus:outline-none  border-r rounded-none border-gray-800 space-x-2">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="text-white border-0 bg-gray-900">
              {selectItems.map((item) => (
                <SelectItem
                  value={item.value}
                  className={cn(
                    'hover:bg-gray-800 text-gray-400',
                    item.value === selectValue && 'text-white'
                  )}
                  key={item.value}
                >
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            className="grow h-full bg-black border-0 focus:outline-none peer/input"
            placeholder="검색어를 입력해주세요"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            value={input}
          />
          <Button
            className={cn(
              'invisible peer-focus-visible/input:visible',
              !!input && 'visible'
            )}
            onClick={() => {
              setInput('');
            }}
          >
            <LucideXCircle />
          </Button>
          <Button className="hover:bg-gray-600">
            <LucideSearch />
          </Button>
        </div>
        <div className="max-w-[380px] flex items-center space-x-2  py-3 pl-2 overflow-auto ">
          <span className="hidden xl:inline text-white text-sm xl:mr-4">
            인기 검색어
          </span>
          {popularKeyword.map((keyword) => (
            <span
              className=" text-center text-white xl:text-gray-400 text-sm hover:underline cursor-pointer rounded-2xl border xl:border-0 border-gray-700 whitespace-nowrap px-4 py-1"
              key={keyword}
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
