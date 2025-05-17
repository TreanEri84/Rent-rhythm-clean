import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";

export default function RentRhythmApp() {
  const [rentAmount, setRentAmount] = useState(1200);
  const [amountSaved, setAmountSaved] = useState(0);
  const [bufferFund, setBufferFund] = useState(100);
  const [rewardVisible, setRewardVisible] = useState(false);

  const percentage = Math.min((amountSaved / rentAmount) * 100, 100);

  const handleTopUp = () => {
    const topUp = parseFloat(prompt("How much to add to rent savings?"));
    if (!isNaN(topUp)) {
      setAmountSaved(amountSaved + topUp);
    }
  };

  useEffect(() => {
    if (amountSaved >= rentAmount) {
      setRewardVisible(true);
    }
  }, [amountSaved, rentAmount]);

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex flex-col items-center gap-6">
      <h1 className="text-3xl font-bold text-center">Rent Rhythm</h1>
      <Card className="w-full max-w-md">
        <CardContent className="p-4 flex flex-col gap-4">
          <div>
            <label>Monthly Rent Amount ($)</label>
            <Input
              type="number"
              value={rentAmount}
              onChange={(e) => setRentAmount(parseFloat(e.target.value))}
            />
          </div>
          <Progress value={percentage} />
          <div className="text-center text-sm text-gray-600">
            ${amountSaved.toFixed(2)} saved of ${rentAmount.toFixed(2)}
          </div>
          <Button onClick={handleTopUp}>Top Up Rent</Button>
        </CardContent>
      </Card>

      {rewardVisible && (
        <div className="bg-green-100 p-4 rounded-xl shadow text-green-800">
          🎉 Rent is fully saved! Time to celebrate!
        </div>
      )}
    </div>
  );
}
