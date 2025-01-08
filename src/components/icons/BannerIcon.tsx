import { cn } from '../../lib/utils';
import BuildingIcon from './BuildingIcon';
import CarIcon from './CarIcon';
import HouseIcon from './HouseIcon';
import JobIcon from './JobIcon';
import ShoppingIcon from './ShoppingIcon';

type Props = {
  index: number;
};
export default function BannerIcon({ index }: Props) {
  return (
    <div className="w-full h-full relative">
      <ShoppingIcon visible={index === 0} />
      <HouseIcon visible={index === 1} />
      <JobIcon visible={index === 2} />
      <BuildingIcon visible={index === 3} />
      <CarIcon visible={index === 4} />
    </div>
  );
}
