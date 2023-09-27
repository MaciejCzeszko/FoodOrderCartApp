import { CartMealItemForm } from "./CartMealItemForm";

export function CartMealItem({ meal, onMealAmountChange }) {
  return (
    <li className="flex justify-between items-center gap-16 mb-6">
      <div className="flex flex-col">
        <span className="font-bold text-lg">{meal.name}</span>
        <span className="font-bold text-lg text-orange-700">
          {(meal.price * meal.amount).toFixed(2)} zł
        </span>
      </div>
      <CartMealItemForm meal={meal} onMealAmountChange={onMealAmountChange} />
    </li>
  );
}
