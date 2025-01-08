import DownloadBanner from '../components/common/DownloadBanner';
import MainBanner from '../components/main/MainBanner';
import MainCategory from '../components/main/MainCategory';

export default function MainPage() {
  return (
    <main className="w-full flex flex-col">
      <MainBanner />
      <MainCategory />
      <DownloadBanner />
    </main>
  );
}
