import ItemList from "./ItemList";

function CreateOrder({
    customerName,
    totalAmount,
    totalItems,
    updateCutomerName,
    createNewOrder,
    addAmount,
    deductAmount
}) {
    return (
        <>
            <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
                <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
                <p className="text-gray-400 text-sm mb-4">
                    Accurately fulfill customer orders based on a precise
                    understanding of their requirements.
                </p>

                {/* Customer Name Input */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">
                        Customer Name
                    </label>
                    <input
                        type="text"
                        name="customer_name"
                        className="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                        value={customerName}
                        onChange={(e) => {
                            updateCutomerName(e.target.value);
                        }}
                    />
                </div>

                {/* Choose Items */}
                <ItemList addAmount={addAmount} deductAmount={deductAmount} />

                {/* Place Order Button */}
                <button
                    className={`w-full text-white font-medium py-3 rounded-full transition-all duration-300 transform hover:-translate-y-1 
                        ${
                            !customerName || totalAmount <= 0 || totalItems <= 0
                                ? "bg-gray-600 cursor-not-allowed"
                                : "bg-orange-600 hover:bg-orange-800 hover:shadow-lg"
                        }
                    `}
                    disabled={
                        !customerName || totalAmount <= 0 || totalItems <= 0
                    }
                    onClick={() =>
                        createNewOrder(customerName, totalAmount, totalItems)
                    }
                >
                    Place Order (BDT {totalAmount})
                </button>
            </div>
        </>
    );
}
export default CreateOrder;
