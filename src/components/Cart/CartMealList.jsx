import { CartMealItem } from "./CartMealItem";

export function CartMealList({ meals, onMealAmountChange }) {
  return (
    <div className="flex items-center justify-center">
      <ul className="p-8 mt-20 flex flex-col bg-gray-100 rounded-lg">
        {meals.map((meal) => {
          return (
            <CartMealItem
              key={meal.id}
              meal={meal}
              onMealAmountChange={onMealAmountChange}
            />
          );
        })}
      </ul>
    </div>
  );
}
