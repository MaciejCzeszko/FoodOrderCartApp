import { useEffect, useState } from "react";
import { MealList } from "./components/Meals/MealList";
import { Navbar } from "./components/Navbar";
import { DUMMY_MEALS } from "./dummy-meals";
import { CartModal } from "./components/Cart/CartModal";

function App() {
  const [meals, setMeals] = useState(
    DUMMY_MEALS.map((meal) => {
      return { ...meal, amount: 0 };
    })
  );
  const [cartIsOpen, setCartIsOpen] = useState(false);

  useEffect(() => {
    console.log(meals);
  }, [meals]);

  function handleOpenCart() {
    setCartIsOpen((prev) => !prev);
  }

  function handleAddMealItem(id, input) {
    setMeals((prevMeals) => {
      return meals.map((meal) => {
        const mealAmount = meal.amount;
        if (meal.id === id) {
          return { ...meal, amount: mealAmount + input };
        }
        return meal;
      });
    });
  }

  function handleMealAmountChange(id, input) {
    setMeals((prevMeals) => {
      return meals.map((meal) => {
        if (meal.id === id) {
          return { ...meal, amount: input };
        }
        return meal;
      });
    });
  }

  return (
    <>
      <main className="bg-gray-200 h-screen">
        <Navbar onOpenCart={handleOpenCart} meals={meals} />
        <MealList meals={meals} onAddMealItem={handleAddMealItem} />
      </main>
      {cartIsOpen && (
        <CartModal
          onCloseCart={handleOpenCart}
          onMealAmountChange={handleMealAmountChange}
          meals={meals}
        />
      )}
    </>
  );
}

export default App;
