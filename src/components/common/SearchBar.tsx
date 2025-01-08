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
type Item = {
  label: string;
  value: string;
};
const selectItems = [
  {
    label: '중고거래',
    value: 'usedItemTrade',
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
  return (
    <div className="w-full h-full flex items-start space-x-4 bg-black">
      <Button className="px-4 py-0 gap-1 bg-[#2C2E34] rounded-3xl text-white text-base font-bold items-center">
        <LucideMapPin />
        강서구
        <LucideChevronDown />
      </Button>
      <div className="grow flex flex-col">
        <div className="grow flex items-center text-white border border-gray-700 rounded-md font-medium">
          <Select
            defaultValue="usedItemTrade"
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
        <div className="flex space-x-3 py-3 pl-2">
          <span className="text-white text-sm">인기 검색어</span>
          {popularKeyword.map((keyword) => (
            <span
              className="text-gray-400 text-sm hover:underline cursor-pointer"
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
