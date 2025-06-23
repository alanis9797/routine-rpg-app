"use client";

import { useState, useEffect } from "react";

export default function RoutineRPGApp() {
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [gold, setGold] = useState(0);

  useEffect(() => {
    const savedXp = parseInt(localStorage.getItem("xp") || "0");
    const savedLevel = parseInt(localStorage.getItem("level") || "1");
    const savedGold = parseInt(localStorage.getItem("gold") || "0");
    setXp(savedXp);
    setLevel(savedLevel);
    setGold(savedGold);
  }, []);

  useEffect(() => {
    localStorage.setItem("xp", xp.toString());
    localStorage.setItem("level", level.toString());
    localStorage.setItem("gold", gold.toString());
  }, [xp, level, gold]);

  const addProgress = (gainedXp: number, gainedGold: number) => {
    const newXp = xp + gainedXp;
    const newLevel = Math.floor(newXp / 100) + 1;
    setXp(newXp);
    setLevel(newLevel);
    setGold(gold + gainedGold);
  };

  return (
    <main className="p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">과외선생만들기 RPG</h1>
      <img src="/ghibli-teacher.png" alt="캐릭터" className="mx-auto w-40 mb-4" />
      <p>레벨: {level}</p>
      <p>경험치: {xp} XP</p>
      <p>골드: {gold} G</p>

      <div className="grid grid-cols-2 gap-2 mt-6">
        <button className="bg-blue-500 text-white p-2 rounded" onClick={() => addProgress(20, 0)}>재택근무</button>
        <button className="bg-green-500 text-white p-2 rounded" onClick={() => addProgress(30, 0)}>운동</button>
        <button className="bg-purple-500 text-white p-2 rounded" onClick={() => addProgress(50, 0)}>예배</button>
        <button className="bg-yellow-500 text-white p-2 rounded" onClick={() => addProgress(50, 0)}>영어공부 (2시간)</button>
        <button className="bg-red-500 text-white p-2 rounded" onClick={() => addProgress(30, 0)}>에스파뇰</button>
        <button className="bg-pink-500 text-white p-2 rounded" onClick={() => addProgress(30, 0)}>한글학교 준비</button>
        <button className="bg-gray-500 text-white p-2 rounded" onClick={() => addProgress(30, 30)}>하기 싫은 일 하기</button>
      </div>

      <p className="mt-6 text-sm">보상: 골드로 쇼핑 1가지 (금액 제한 없음)</p>
    </main>
  );
}
