import React, { useState, useEffect } from "react";
import { Card } from "./components/ui/card";
import { Button } from "./components/ui/card";
import { Progress } from "./components/ui/card";
import { Input } from "./components/ui/card";

export default function RentRhythmApp() {
  const [rentAmount, setRentAmount] = useState(1200);
  const [amountSaved, setAmountSaved] = useState(0);
  const [bufferFund, setBufferFund] = useState(100);
  const [rewardVisible, setRewardVisible] = useState(false);

  const percentage = Math.min((amountSaved / rentAmount) * 100, 100);

  const handleTopUp = () => {
    setAmountSaved((prev) => prev + 100);
  };

  useEffect(() => {
    if (amountSaved >= rentAmount + bufferFund) {
      setRewardVisible(true);
    }
  }, [amountSaved, rentAmount, bufferFund]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardContent className="space-y-6">
          <h1 className="text-2xl font-bold text-center">🏠 Rent Rhythm</h1>
          <Progress value={percentage} />
          <div className="text-center">
            <p>Saved: ${amountSaved}</p>
            <p>Target: ${rentAmount} + ${bufferFund} buffer</p>
          </div>
          <Button onClick={handleTopUp}>Top up $100</Button>
          <Input
            type="number"
            value={rentAmount}
            onChange={(e) => setRentAmount(Number(e.target.value))}
            placeholder="Set Rent Amount"
          />
          <Input
            type="number"
            value={bufferFund}
            onChange={(e) => setBufferFund(Number(e.target.value))}
            placeholder="Set Buffer Amount"
          />
          {rewardVisible && (
            <div className="text-green-600 font-semibold text-center">
              🎉 You’ve saved enough for rent + buffer!
            </div>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
