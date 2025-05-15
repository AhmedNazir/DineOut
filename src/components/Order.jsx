import SampleOrders from "../data";
import Navbar from "../components/Navbar";
import OrderSummary from "../components/Order/OrderSummary";
import OrderReport from "../components/Order/OrderReport";
import CreateOrder from "../components/Order/CreateOrder";
import OrderFilter from "./Order/OrderFilter";
import { useState } from "react";

export default function Order() {
    const [totalOrders, setTotalOrders] = useState(SampleOrders);
    const [filterOrders, setFilterOrders] = useState(totalOrders);
    const [filterKey, setFilterKey] = useState("All");
    const [customerName, setCustomerName] = useState("");
    let [NewID, setNewID] = useState(101);
    let [totalAmount, setTotalAmount] = useState(0);
    let [totalItems, setTotalItems] = useState(0);
    let [selectedItem, setSelectedItem] = useState({});

    function getFilterList(key = filterKey, data = totalOrders) {
        let filterList = data;

        if (key == "Pending")
            filterList = data.filter((order) => order.status === "PENDING");

        if (key == "Delivered")
            filterList = data.filter((order) => order.status === "DELIVERED");

        setFilterOrders(filterList);
        setFilterKey(key);
    }

    function deleteOrder(id) {
        const newTotalOrders = totalOrders.filter((item) => item.id != id);
        setTotalOrders(newTotalOrders);
        setFilterOrders(newTotalOrders);
        getFilterList(filterKey, newTotalOrders);
    }

    function updateStatus(id) {
        const newOders = [...totalOrders];
        let index = newOders.findIndex((i) => i.id === id);
        newOders[index].status = "DELIVERED";

        setTotalOrders(newOders);
        setFilterOrders(newOders);
        getFilterList(filterKey, newOders);
    }

    function updateCutomerName(data) {
        setCustomerName(data);
    }

    function createNewOrder(customerName, amount, items = 0) {
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
        setFilterOrders([newOrder, ...totalOrders]);
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
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

                    <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
                        <OrderSummary orders={totalOrders} />

                        <div>
                            <OrderFilter onFilter={getFilterList} />

                            <div className="bg-cardbg rounded-lg p-4">
                                <div className="reports-container">
                                    <OrderReport
                                        orders={filterOrders}
                                        handleDeleteOrder={deleteOrder}
                                        handleUpdateStatus={updateStatus}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
