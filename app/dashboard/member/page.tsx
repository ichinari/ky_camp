"use client";
import Button from "@/app/components/Button";
import Card from "@/app/components/Card";
import Icons from "@/app/components/Icons";
import PredictionItem from "@/app/components/PredictionItem";
import TimeSlot from "@/app/components/TimeSlot";
import { useState } from "react";

function MemberDashBoard() {
  // 0-100の値で静かさレベルを管理（例：60 = 60%）
  const [quietnessLevel, setQuietnessLevel] = useState(60);

  const handleRequest = () => {
    console.log("要望を送る");
    // TODO: 要望送信処理を実装
  };

  return (
    <>
      <div className="min-h-screen bg-[#111111] p-4 w-full flex flex-col gap-y-5">
        {/* Header */}
        <div className="mb-4">
          <h1 className="text-[#EDEDED] text-[18px] font-medium">
            キャンプ場名
          </h1>
          <p className="text-[#9A9A9A] text-[12px] mt-1">最終更新 18:24</p>
        </div>

        {/* 静かさカード */}
        <Card>
          <div className="flex items-center gap-2 mb-3">
            <Icons iconName="moon" color={"#5fb3b5"} />
            <span className="text-[#EDEDED] text-[16px] font-medium">
              今夜の静かさ
            </span>
          </div>
          <div className="relative mb-2">
            <div className="h-2 bg-[#2A2A2A] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#4FA3A5] to-[#5fb3b5] rounded-full transition-all duration-300"
                style={{ width: `${quietnessLevel}%` }}
              ></div>
            </div>
            <div
              className="absolute -top-1 transform -translate-x-1/2 transition-all duration-300"
              style={{ left: `${quietnessLevel}%` }}
            >
              <div className="w-4 h-4 bg-[#4FA3A5] rounded-full border-2 border-[#111111]"></div>
            </div>
          </div>

          <div className="flex justify-between text-[12px] text-[#9A9A9A]">
            <span>静寂</span>
            <span>通常</span>
            <span>にぎやか</span>
          </div>
        </Card>

        {/* 時間帯別カード*/}
        <Card>
          <div className="text-[#EDEDED] text-[16px] font-medium mb-3">
            時間帯別
          </div>

          <div className="space-y-2">
            <TimeSlot
              time="朝"
              startTime="06:00-09:00"
              status="中ぐらい"
              level={3}
            />
            <TimeSlot
              time="昼"
              startTime="09:00-15:00"
              status="中ぐらい"
              level={3}
            />
            <TimeSlot
              time="夕"
              startTime="15:00-18:00"
              status="中ぐらい"
              level={3}
            />
            <TimeSlot
              time="夜"
              startTime="18:00-24:00"
              status="中ぐらい"
              level={3}
            />
          </div>
        </Card>

        {/* 混雑・音予測カード*/}
        <Card>
          <div className="text-[#EDEDED] text-[16px] font-medium mb-3">
            混雑音予測
          </div>
          <div>
            <PredictionItem icon="" text="話し客が多少あり" />
          </div>
        </Card>

        {/* 混雑・音予測カード*/}
        <Card>
          <div className="text-[#EDEDED] text-[16px] font-medium mb-3">
            注意事項
          </div>
          <ul className="space-y-2 text-[14px] font-medium mb-3 list-disc list-inside marker:text-[#4FA3A5] text-[#EDEDED]">
            <li>ここに注意事項が入ります</li>
          </ul>
        </Card>

        {/* 焚き火時間カード */}
        <Card className="text-center">
          <p className="text-[#9A9A9A] text-[12px] text-center mt-3">
            焚き火時間
          </p>
          <p className="text-[#4FA3A5] text-[32px] font-medium">22時まで可能</p>
        </Card>

        <Button
          optionClassName="max-w-96 mx-auto"
          isActive={true}
          onClick={handleRequest}
        >
          <Icons iconName="send" />
          要望を送る
        </Button>

        <p className="text-[#9A9A9A] text-[12px] text-center">
          匿名で運営に届きます
        </p>
      </div>
    </>
  );
}

export default MemberDashBoard;
