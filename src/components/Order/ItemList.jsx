import hamburgerLogo from "../../assets/hamburger.svg";
import chickenNuggetsLogo from "../../assets/chicken.svg";
import grilledChickenLogo from "../../assets/grill-chicken.svg";
import submarineLogo from "../../assets/submarine.svg";
import frenchFriesLogo from "../../assets/French-Fries.svg";
import pizzaLogo from "../../assets/pizza.svg";
import cheeseBurgerLogo from "../../assets/cheese-burger.svg";
import chickenRollLogo from "../../assets/chicken-roll.svg";
import chocolateShakeLogo from "../../assets/chocolate.svg";
import iceCreamLogo from "../../assets/ice-cream.svg";
import softDrinkLogo from "../../assets/soft-drink.svg";
import PlusIcon from "../../assets/PlusIcon";
import MinusIcon from "../../assets/MinusIcon";

function Item({ name, logo, price, addAmount, deductAmount, selectedItem }) {
    return (
        <>
            <div className="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300">
                <div className="flex items-center">
                    <div className="w-12 h-12   flex items-center justify-center mr-3">
                        <img src={logo} alt={name} className="w-10 h-10" />
                    </div>
                    <div>
                        <h3 className="font-medium">{name}</h3>
                        <p className="text-xs text-gray-400">BDT {price}</p>
                    </div>
                </div>

                <div className="flex justify-center gap-5">
                    {selectedItem[name] > 0 && (
                        <button
                            className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
                            onClick={() => {
                                deductAmount(name, price);
                            }}
                        >
                            <MinusIcon />
                        </button>
                    )}

                    <button
                        className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
                        onClick={() => {
                            addAmount(name, price);
                        }}
                    >
                        <PlusIcon />
                    </button>
                </div>
            </div>
        </>
    );
}

function ItemList({ addAmount, deductAmount, selectedItem }) {
    const items = [
        { name: "Hamburger", logo: hamburgerLogo, price: 180 },
        {
            name: "Chicken Nuggets (6 pcs)",
            logo: chickenNuggetsLogo,
            price: 150
        },
        { name: "Submarine Sandwich", logo: submarineLogo, price: 170 },
        { name: "Pizza Slice", logo: pizzaLogo, price: 150 },
        { name: "French Fries", logo: frenchFriesLogo, price: 135 },
        { name: "Cheese Burger", logo: cheeseBurgerLogo, price: 210 },
        { name: "Grilled Chicken", logo: grilledChickenLogo, price: 375 },
        { name: "Chicken Roll", logo: chickenRollLogo, price: 240 },
        { name: "Soft Drink (500ml)", logo: softDrinkLogo, price: 50 },
        { name: "Chocolate Shake", logo: chocolateShakeLogo, price: 40 },
        { name: "Ice Cream Cup", logo: iceCreamLogo, price: 30 }
    ];

    return (
        <>
            {/* Choose Items */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                    Choose Items
                </label>
                <div className="items-container">
                    {/* Item 1 */}

                    {items.map((item) => {
                        return (
                            <Item
                                key={item.name}
                                name={item.name}
                                logo={item.logo}
                                price={item.price}
                                addAmount={addAmount}
                                deductAmount={deductAmount}
                                selectedItem={selectedItem}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}
export default ItemList;
