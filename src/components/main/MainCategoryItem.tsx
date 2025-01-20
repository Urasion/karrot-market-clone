import { LucideTv } from 'lucide-react';
import { ReactNode } from 'react';
type Props = {
  key: string;
  name: string;
  icon: ReactNode;
};
export default function MainCategoryItem({ key, name, icon }: Props) {
  return (
    <article className="w-40 h-[196px] flex flex-col space-y-3" key={key}>
      <div className="size-32 xl:size-40 flex justify-center items-center rounded-full bg-[#2C2E34] xl:p-10 p-5">
        {icon}
      </div>
      <span className="text-[14px] text-center text-white font-bold">
        {name}
      </span>
    </article>
  );
}
