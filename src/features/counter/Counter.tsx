import React, { useState } from "react";

import { decrement, increment, incrementByAmount } from "./counterSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";

/**
 * A fully‑featured counter page.
 * – Shows the current count from Redux.
 * – Increment / Decrement buttons.
 * – Custom "Add amount" input that dispatches `incrementByAmount`.
 *
 * Tailwind CSS is used for quick styling; adjust classes as you like.
 */
export default function Counter() {
  // 🔍 Read current value from the store
  const count = useAppSelector((state) => state.counter.value);
  // 🚀 Initialize dispatch
  const dispatch = useAppDispatch();

  // 📊 Local UI state for the custom amount field
  const [amount, setAmount] = useState<string>("");

  // 🖱️ Event handlers
  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());
  const handleAddAmount = () => {
    // Convert to number and guard against NaN
    const value = Number(amount) || 0;
    dispatch(incrementByAmount(value));
    setAmount("");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-50 p-8 font-sans">
      <h1 className="text-4xl font-bold">Redux Counter</h1>

      {/* Current count */}
      <div className="text-5xl font-semibold text-blue-700" data-testid="count-value">
        {count}
      </div>

      {/* Increment / Decrement controls */}
      <div className="flex gap-4">
        <button
          className="rounded-lg px-6 py-2 text-lg font-medium text-white shadow-lg transition hover:scale-105 active:scale-95 bg-blue-600"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          className="rounded-lg px-6 py-2 text-lg font-medium text-white shadow-lg transition hover:scale-105 active:scale-95 bg-red-600"
          onClick={handleDecrement}
        >
          -1
        </button>
      </div>

      {/* Add custom amount */}
      <div className="flex items-center gap-3">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          className="w-24 rounded-lg border border-gray-300 p-2 text-center shadow-sm focus:border-blue-500 focus:outline-none"
        />
        <button
          className="rounded-lg bg-green-600 px-4 py-2 font-medium text-white shadow-lg transition hover:scale-105 active:scale-95"
          onClick={handleAddAmount}
        >
          Add amount
        </button>
      </div>
    </main>
  );
}
