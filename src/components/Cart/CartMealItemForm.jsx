import { useRef } from "react";

export function CartMealItemForm({ meal, onMealAmountChange }) {
  const input = useRef("");

  return (
    <form className="flex flex-col items-end gap-1">
      <div>
        <span>Amount:</span>
        <input
          ref={input}
          type="number"
          min={0}
          value={meal.amount}
          onChange={() => onMealAmountChange(meal.id, +input.current.value)}
          className="w-8 ml-2"
        />
      </div>
    </form>
  );
}
