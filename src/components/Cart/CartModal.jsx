import { createPortal } from "react-dom";
import { CartMealList } from "./CartMealList";

export function CartModal({ onCloseCart, meals, onMealAmountChange }) {
  const addedMeals = meals.filter((meal) => meal.amount > 0);

  return (
    <>
      {createPortal(
        <div className="fixed inset-0 flex items-center justify-center z-1">
          <div className="bg-white rounded-lg shadow-lg p-8 relative">
            {addedMeals.length > 0 ? (
              <CartMealList
                meals={addedMeals}
                onMealAmountChange={onMealAmountChange}
              />
            ) : (
              <h3>There is nothing in the Cart...</h3>
            )}
            <div className="flex justify-between">
              {addedMeals.length > 0 && (
                <button
                  className="font-bold bg-orange-600 w-20 py-2 rounded-3xl hover:bg-orange-800 transition ease-out"
                  onClick={onCloseCart}
                >
                  Order
                </button>
              )}
              <button
                className="font-bold bg-orange-600 w-20 py-2 rounded-3xl hover:bg-orange-800 transition ease-out"
                onClick={onCloseCart}
              >
                Close
              </button>
            </div>
            <button
              className="absolute top-2 right-2 font-bold "
              onClick={onCloseCart}
            >
              X
            </button>
          </div>
        </div>,
        document.getElementById("modal")
      )}
    </>
  );
}
