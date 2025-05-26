// pages/calculator.tsx

'use client'

import Link from "next/link";
import { useState } from "react";

const Calculator = () => {
    const [num1, setNum1] = useState<number>(0);
    const [num2, setNum2] = useState<number>(0);
    const [total, setTotal] = useState<number | null>(null);

    const calculateSum = () => setTotal(num1 + num2);

    return (
        <div className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-6 space-y-4 flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">Calculator</h1>
            <div className="flex flex-col gap-3 w-[300px] items-center space-y-4">
                <input
                    type="number"
                    onChange={(e) => setNum1(+e.target.value)}
                    className="border p-2"
                    placeholder="Enter first number"
                />
                <input
                    type="number"
                    onChange={(e) => setNum2(+e.target.value)}
                    className="border p-2"
                    placeholder="Enter second number"
                />
                <button onClick={calculateSum} className="bg-blue-500 text-white px-4 py-2">
                    Calculate
                </button>
                {total !== null && <p className="text-lg">Total: {total}</p>}
            </div>
        </div>
    );
}

export default Calculator; 
