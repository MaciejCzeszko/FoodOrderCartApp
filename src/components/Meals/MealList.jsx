import { MealItem } from "./MealItem";

export function MealList({ meals, onAddMealItem }) {
  return (
    <div className="flex items-center justify-center">
      <ul className="p-8 mt-20 flex flex-col bg-gray-100 rounded-lg">
        {meals.map((meal) => {
          return (
            <MealItem key={meal.id} meal={meal} onAddMealItem={onAddMealItem} />
          );
        })}
      </ul>
    </div>
  );
}
