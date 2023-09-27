import { useRef } from "react";

export function MealItemForm({ meal, onAddMealItem }) {
  const input = useRef("");

  function handleFormSubmit(e) {
    e.preventDefault();
    const inputAmount = +input.current.value;
    if (inputAmount === 0) return;

    onAddMealItem(meal.id, inputAmount);
  }

  return (
    <form
      className="flex flex-col items-end gap-1"
      onSubmit={(e) => handleFormSubmit(e)}
    >
      <div>
        <span>Amount:</span>
        <input
          ref={input}
          type="number"
          min={0}
          defaultValue={meal.amount > 0 ? meal.amount : 0}
          className="w-8 ml-2"
        />
      </div>
      <button
        type="submit"
        className=" font-bold bg-orange-600 w-20 rounded-3xl hover:bg-orange-800 transition ease-out"
      >
        +Add
      </button>
    </form>
  );
}
