import SampleOrders from "../data";
import Navbar from "../components/Navbar";
import OrderSummary from "../components/Order/OrderSummary";
import OrderReport from "../components/Order/OrderReport";
import CreateOrder from "../components/Order/CreateOrder";
import OrderFilter from "./Order/OrderFilter";
import { useState } from "react";

export default function Order() {
    const [totalOrders, setTotalOrders] = useState(SampleOrders);
    const [filterKey, setFilterKey] = useState("All");
    const [customerName, setCustomerName] = useState("");
    let [NewID, setNewID] = useState(31);
    let [totalAmount, setTotalAmount] = useState(0);
    let [totalItems, setTotalItems] = useState(0);
    let [selectedItem, setSelectedItem] = useState({});

    function updateFilterKey(key = filterKey) {
        setFilterKey(key);
    }

    function deleteOrder(id) {
        const newTotalOrders = totalOrders.filter((item) => item.id != id);
        setTotalOrders(newTotalOrders);
    }

    function updateStatus(id) {
        const newOders = [...totalOrders];
        let index = newOders.findIndex((i) => i.id === id);
        newOders[index].status = "DELIVERED";

        setTotalOrders(newOders);
    }

    function updateCutomerName(data) {
        setCustomerName(data);
    }

    function createNewOrder(customerName, amount, items) {
        if (customerName.length <= 0 || items <= 0 || amount <= 0) return;

        const newOrder = {
            id: NewID,
            customer_name: customerName,
            items,
            amount,
            status: "PENDING"
        };

        setNewID(++NewID);
        setTotalOrders([newOrder, ...totalOrders]);
        setCustomerName("");
        setTotalAmount(0);
        setTotalItems(0);
        setSelectedItem({});
    }

    function addAmount(name, price, item = 1) {
        setTotalAmount(totalAmount + price);
        setTotalItems(totalItems + 1);
        setSelectedItem({
            ...selectedItem,
            [name]: (isNaN(selectedItem[name]) ? 0 : selectedItem[name]) + item
        });
    }

    function deductAmount(name, price, item = 1) {
        if (
            selectedItem[name] &&
            !isNaN(selectedItem[name]) &&
            selectedItem[name] > 0
        ) {
            setSelectedItem({
                ...selectedItem,
                [name]: selectedItem[name] - item
            });
            setTotalAmount(totalAmount - price);
            setTotalItems(totalItems - item);
        }
    }

    return (
        <>
            <div className="container mx-auto px-4 h-screen flex flex-col text-white">
                <Navbar />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 flex-grow">
                    {/* CreateOrder Section */}
                    <CreateOrder
                        customerName={customerName}
                        totalAmount={totalAmount}
                        totalItems={totalItems}
                        updateCutomerName={updateCutomerName}
                        createNewOrder={createNewOrder}
                        addAmount={addAmount}
                        deductAmount={deductAmount}
                        selectedItem={selectedItem}
                    />

                    {/* Order Summary and Report Section */}
                    <div className="md:col-span-2 flex flex-col h-[calc(100vh_-_130px)]">
                        {/* Order Summary */}
                        <div className="bg-cardbg rounded-lg p-4 mb-4 overflow-auto max-h-[40vh] md:max-h-full">
                            <OrderSummary orders={totalOrders} />
                        </div>

                        {/* Order Filter and Report */}
                        <div className="bg-cardbg rounded-lg p-4 flex flex-col gap-4 overflow-auto max-h-[50vh] md:max-h-full">
                            <OrderFilter updateFilterKey={updateFilterKey} />

                            <div className="reports-container">
                                <OrderReport
                                    totalOrders={totalOrders}
                                    handleDeleteOrder={deleteOrder}
                                    handleUpdateStatus={updateStatus}
                                    filterKey={filterKey}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
