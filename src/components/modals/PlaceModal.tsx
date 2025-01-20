import { LucideSearch } from 'lucide-react';
import { Button } from '../ui/Button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/Dialog';
import { Input } from '../ui/Input';
import { Place } from '../../constant/type';
import useUser from '../../hooks/useUser';

type Props = {
  isOpen: boolean;
  data?: any[];
  closeModal: () => void;
};
const placeList = [
  {
    si: '서울특별시',
    gu: '강남구',
  },
  {
    si: '서울특별시',
    gu: '송파구',
  },
  {
    do: '경기도',
    si: '부천시',
  },
  {
    do: '경기도',
    si: '화성시',
  },
  {
    si: '서울특별시',
    gu: '강서구',
  },
  {
    si: '인천광역시',
    gu: '서구',
  },
  {
    do: '경기도',
    si: '남양주시',
  },
  {
    do: '경기도',
    si: '김포시',
  },
  {
    do: '경기도',
    si: '수원시',
  },
  {
    do: '경기도',
    si: '화성시',
  },
  {
    do: '경기도',
    si: '파주시',
  },
  {
    do: '경상남도',
    si: '진주시',
  },
] as Place[];
export default function PlaceModal({ isOpen, data, closeModal }: Props) {
  const { setPlace } = useUser();
  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="bg-black border-0 text-white">
        <DialogHeader>
          <DialogTitle>지역변경</DialogTitle>
          <DialogDescription className="flex flex-col justify-center items-center space-y-10 py-10">
            <div className="w-full max-h-10 flex rounded-lg border border-gray-600 has-[:focus]:border-white">
              <Input
                className="grow h-full bg-black border-0"
                placeholder="지역이나 동네로 검색하기"
              />
              <Button className="hover:bg-gray-600">
                <LucideSearch />
              </Button>
            </div>
            <div className="w-full space-y-4 ">
              <span className="text-sm text-blue-300">추천</span>
              <ul className="w-full max-h-56 flex flex-col space-y-4  overflow-auto ">
                {placeList.map((value, idx) => (
                  <li key={idx}>
                    <button
                      className="w-full text-base text-left border-b border-gray-800"
                      onClick={() => {
                        setPlace(value);
                        closeModal();
                      }}
                    >
                      {value.do} {value.si} {value.gu}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
