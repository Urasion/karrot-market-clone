import { Outlet } from 'react-router-dom';
import Header from '../common/Header';
import SearchBar from '../common/SearchBar';
import Footer from '../common/Footer';
import { useRef, useState } from 'react';
import { debounce } from '../../lib/utils';
import { UserInfo } from '../../constant/type';
import { useAtomValue } from 'jotai';
import { userInfo } from '../../store/store';

export default function MainLayout() {
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [isEvent, setIsEvent] = useState<boolean>(false);
  const headerRef = useRef<HTMLDivElement>(null);
  return (
    <div className="w-full h-full flex flex-col ">
      <Header
        isSearch={isSearch}
        isEvent={isEvent}
        setIsEvent={setIsEvent}
        ref={headerRef}
      />
      <main
        className="w-full flex flex-grow flex-col  overflow-auto"
        onScroll={debounce((e, currentHeight) => {
          setIsEvent(true);
          if (currentHeight > headerRef.current?.offsetHeight!) {
            setIsSearch(true);
          } else {
            setIsSearch(false);
          }
        }, 50)}
        onClick={debounce(() => {
          setIsEvent(true);
        }, 50)}
      >
        <div className="xl:w-[1400px] h-[86px] flex flex-col justify-center items-center xl:px-20 mx-auto">
          <SearchBar />
        </div>
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}
