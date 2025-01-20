import { useAtom } from 'jotai';
import { userInfo } from '../store/store';
import { Place } from '../constant/type';

export default function useUser() {
  const [user, setUser] = useAtom(userInfo);
  function setPlace(place: Place) {
    setUser((prev) => ({ ...prev, place }));
  }
  return { user, setPlace };
}
