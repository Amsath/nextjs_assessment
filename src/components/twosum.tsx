'use client'

import { useState } from "react";

interface TwoSumInputProps {
    numbers: number[];
    target: number;
};

const calculateTwoSum = (numbers: number[], target: number): number[] => {
    let left = 0, right = numbers.length - 1;
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) return [left + 1, right + 1];
        else if (sum < target) left++;
        else right--;
    }
    return [];
};

const Twosum = (props: TwoSumInputProps) => {
    const { numbers, target } = props;
    const [twosum, setTwosum] = useState<number[]>([]);
    const handleTwoSumCalc = () => {
        setTwosum(calculateTwoSum(numbers, target));
    };

    return (
        <div className="flex flex-col mx-auto mt-auto gap-4 justify-center items-center w-[600px] min-h-screen">
            <button onClick={handleTwoSumCalc} className="bg-blue-500 text-white px-4 py-2">
                Calculate Twosum
            </button>
            Result: {twosum}
        </div>
    );
};

export default Twosum;