import Icons from "./Icons";

type Props = {
  icon: string;
  text: string;
};

function PredictionItem({ icon, text }: Props) {
  return (
    // TODO: 後にアイコン追加
    <div className="flex items-center gap-2 text-[14px] text-[#EDEDED]">
      <Icons iconName="moon" color={"#4FA3A5"} />
      <span>{text}</span>
    </div>
  );
}

export default PredictionItem;
