type Props = {
  time: string;
  startTime?: string;
  status: string;
  level: number; // 1-5
};

const MAX_LEVEL = 5;

function TimeSlot({ time, startTime, status, level }: Props) {
  // バリデーション: levelを1-5の範囲に制限
  const validLevel = Math.max(1, Math.min(MAX_LEVEL, level));

  return (
    <div className="flex items-center gap-2 text-[14px]">
      <div className="w-24 text-[#9A9A9A]">
        <div>{time}</div>
        {startTime && <div className="text-[12px]">{startTime}</div>}
      </div>
      <div
        className="flex gap-1 flex-1"
        role="meter"
        aria-label={`混雑レベル: ${validLevel}/${MAX_LEVEL}`}
        aria-valuenow={validLevel}
        aria-valuemin={1}
        aria-valuemax={MAX_LEVEL}
      >
        {[...Array(MAX_LEVEL)].map((_, i) => (
          <div
            key={i}
            className={`h-7 flex-1 rounded ${
              i < validLevel ? "bg-[#4FA3A5]" : "bg-[#2A2A2A]"
            }`}
          />
        ))}
      </div>
      <div className="w-16 text-right text-[#9A9A9A]">{status}</div>
    </div>
  );
}

export default TimeSlot;
