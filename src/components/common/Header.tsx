import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/NavigationMenu';
import CarrotIcon from '../icons/CarrotIcon';
import { LucideChevronDown, LucideMapPin, LucideSearch } from 'lucide-react';
import { cn } from '../../lib/utils';
import SearchBar from './SearchBar';
import {
  Dispatch,
  forwardRef,
  LegacyRef,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import useModal from '../../hooks/useModal';
import useUser from '../../hooks/useUser';
type menu = {
  label: string;
  value: string;
  children?: menu[];
};
export const menus = [
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
    children: [
      {
        label: '알바 검색',
        value: 'search',
      },
      {
        label: '당근알바 소개',
        value: 'introduce',
      },
    ] as menu[],
  },
  {
    label: '동네업체',
    value: 'localBusiness',
  },
  {
    label: '동네생활',
    value: 'localLife',
  },
  {
    label: '모임',
    value: 'meeting',
  },
] as menu[];
type Props = {
  isSearch: boolean;
  isEvent: boolean;
  setIsEvent: Dispatch<SetStateAction<boolean>>;
};
const Header = forwardRef(({ isSearch, isEvent, setIsEvent }: Props, ref) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { openQRModal } = useModal();
  const { user } = useUser();
  useEffect(() => {
    if (isOpen && isEvent) {
      setIsOpen(false);
      setIsEvent(false);
    } else if (!isOpen && isEvent) {
      setIsEvent(false);
    }
  }, [isOpen, isEvent, setIsEvent]);
  return (
    <div
      className="w-full h-[72px] flex flex-col relative"
      ref={ref as LegacyRef<HTMLDivElement>}
    >
      <nav className="xl:w-[1400px] h-full flex justify-between items-center xl:px-20 xl:m-auto z-40 px-4">
        <CarrotIcon />
        <ul className="hidden xl:flex group ">
          {menus.map((menu) => (
            <li key={menu.value}>
              {menu.children ? (
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="w-20 h-full flex justify-center items-center py-2 px-3 text-white text-center text-base font-bold group-hover:text-gray-400 group-hover:hover:text-white  ">
                        {menu.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="flex flex-col bg-gray-800 ">
                        {menu.children.map((childMenu) => (
                          <NavigationMenuLink
                            className=" py-3 px-3 text-white text-sm hover:bg-gray-700 "
                            key={childMenu.value}
                          >
                            <span className="whitespace-nowrap font-thin">
                              {childMenu.label}
                            </span>
                          </NavigationMenuLink>
                        ))}
                        <NavigationMenuLink></NavigationMenuLink>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              ) : (
                <Link
                  to={menu.value}
                  className="w-20 h-full flex justify-center items-center py-2 px-3 group-hover:text-gray-400 group-hover:hover:text-white text-white text-center text-base font-bold duration-500"
                >
                  {menu.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="flex space-x-2">
          <Button
            className={`flex xl:hidden px-4 py-0 gap-1 bg-[#2C2E34] rounded-3xl text-white text-base font-bold items-center z-10 duration-200  ${
              isSearch ? 'translate-x-0' : 'translate-x-12'
            }`}
            onClick={() => {}}
          >
            <LucideMapPin />
            {user.place.gu || user.place.si}
            <LucideChevronDown />
          </Button>
          <Button
            size="sm"
            className={cn('hover:bg-gray-600 group')}
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            disabled={!isSearch}
          >
            <LucideSearch className="opacity-100 text-white group-disabled:opacity-0 duration-300" />
          </Button>
          <Button
            size="sm"
            className="hidden xl:flex bg-orange-950 hover:bg-orange-900 text-[#ff6402] font-bold"
            onClick={openQRModal}
          >
            앱 다운로드
          </Button>
        </div>
      </nav>
      <div
        className={cn(
          'w-full h-[86px] bg-black z-30 duration-300',
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-24'
        )}
      >
        <div className="w-[1400px] h-[86px] flex flex-col justify-center items-center px-20 mx-auto">
          <SearchBar />
        </div>
      </div>
    </div>
  );
});
export default Header;
