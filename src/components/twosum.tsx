// import Link from "next/link";
// import Twosum from "../../components/twosum"

// const page = () => {
//     const numbers = [0, 1, 2, 2, 3, 5];
//     const target = 4;
//     return (
//         <div className="min-h-screen flex flex-col">
//             <nav className="bg-gray-800 text-white px-6 py-4 shadow-md">
//                 <Link href="/" className="text-white hover:underline">
//                     ← Go back to homepage
//                 </Link>
//             </nav>

//             <main className="flex-1 flex items-center justify-center">
//                 <div className="text-center">
//                     <h1 className="text-3xl font-bold"><Twosum numbers={numbers} target={target} ></Twosum></h1>
//                 </div>
//             </main>
//         </div>
//     );
// };

// export default page;

'use client';

import React, { useState } from 'react';

const Twosum = () => {
  const [inputArray, setInputArray] = useState('');
  const [target, setTarget] = useState('');
  const [result, setResult] = useState<number[] | null>(null);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    try {
      const numbers = inputArray
        .split(',')
        .map((n) => parseInt(n.trim(), 10))
        .filter((n) => !isNaN(n));

      const t = parseInt(target, 10);

      if (isNaN(t)) throw new Error('Invalid target number');
      if (numbers.length < 2) throw new Error('Array must contain at least two numbers');

      const sortedNumbers = [...numbers].sort((a, b) => a - b); // sort numerically
      const res = twoSum(sortedNumbers, t);

      setResult(res);
      setError('');
    } catch (err: any) {
      setResult(null);
      setError(err.message || 'Error occurred');
    }
  };

  const twoSum = (numbers: number[], target: number): number[] => {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
      const sum = numbers[left] + numbers[right];
      if (sum === target) {
        return [left + 1, right + 1]; // 1-indexed
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }

    throw new Error('No solution found');
  };

  return (
    <main className="min-h-screen p-6 bg-gray-50 text-gray-800">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-6 space-y-4">
        <h1 className="text-2xl font-bold">Two Sum II - Sorted Array</h1>

        <div className="space-y-2">
          <label className="block">Sorted Array (comma separated)</label>
          <input
            type="text"
            value={inputArray}
            onChange={(e) => setInputArray(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="e.g. 2,7,11,15"
          />
        </div>

        <div className="space-y-2">
          <label className="block">Target Number</label>
          <input
            type="text"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="e.g. 9"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Find Indices
        </button>

        {error && <div className="text-red-500">{error}</div>}

        {result && (
          <div className="text-green-600">
            <strong>Result:</strong> {result.join(', ')}
          </div>
        )}
      </div>
    </main>
  );
}

export default Twosum;
