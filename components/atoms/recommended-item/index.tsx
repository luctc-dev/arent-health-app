type Props = {
  title: string;
  subTitle: string;
};

const RecommendedItem = ({ title, subTitle }: Props) => {
  return (
    <div className="px-2 py-6 bg-dark-300 text-center">
      <h3 className="uppercase font-Inter text-[22px] leading-[27px] tracking-[0.11px] font-normal text-primary-300">
        {title}
        <span className="block mx-auto mt-[10px] w-14 h-0.5 bg-light"></span>
      </h3>
      <h3 className="text-[18px] leading-[26px] mt-2 font-light text-light">{subTitle}</h3>
    </div>
  );
};

export default RecommendedItem;
