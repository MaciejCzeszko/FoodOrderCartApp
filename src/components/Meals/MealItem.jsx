import { MealItemForm } from "./MealItemForm";

export function MealItem({ meal, onAddMealItem }) {
  return (
    <li className="flex justify-between items-center gap-16 mb-6">
      <div className="flex flex-col">
        <span className="font-bold text-lg">{meal.name}</span>
        <span>{meal.desc}</span>
        <span className="font-bold text-lg text-orange-700">
          {meal.price} zł
        </span>
      </div>
      <MealItemForm meal={meal} onAddMealItem={onAddMealItem} />
    </li>
  );
}
