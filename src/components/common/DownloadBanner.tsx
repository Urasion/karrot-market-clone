import useModal from '../../hooks/useModal';

export default function DownloadBanner() {
  const { useQRModal } = useModal();
  return (
    <section className="w-full h-[360px] flex justify-center space-x-56 items-center bg-[#31241F] overflow-hidden mt-24">
      <div className="flex flex-col space-y-3">
        <span className="text-4xl text text-[#FF6600] font-bold tracking-tighter">
          당근에서 가까운 이웃과 함께해요.
        </span>
        <span className="text-5xl text-white font-bold tracking-tighter">
          지금 바로 다운로드하기
        </span>
        <div className="flex items-center space-x-2">
          <button onClick={useQRModal}>
            <img
              src="https://karrotmarket-com-sanity-cdn.krrt.io/production/49380c1c7e70e49f0f93baf0f790925eefc69082-120x40.svg"
              alt="Download on the App Store"
              loading="lazy"
            />
          </button>
          <button onClick={useQRModal}>
            <img
              src="https://karrotmarket-com-sanity-cdn.krrt.io/production/0d8f72b8e4cdb98af115a7c1f04c4abf19f5c419-180x53.svg"
              alt="Get it on Google Play"
              loading="lazy"
              className="w-[120px] h-[40px]"
            />
          </button>
        </div>
      </div>
      <img
        src="https://karrotmarket-com-sanity-cdn.krrt.io/production/7e67cd1f378c6e2ab4fe3c782c90b7db97a333bc-1184x1098.png"
        alt=""
        loading="lazy"
        className="w-[560px] h-[560px] "
      ></img>
    </section>
  );
}
