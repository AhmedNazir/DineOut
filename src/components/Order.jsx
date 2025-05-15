import Navbar from "../components/Navbar";
import OrderSummary from "../components/Order/OrderSummary";
import OrderReport from "../components/Order/OrderReport";
import CreateOrder from "../components/Order/CreateOrder";
import OrderFilter from "./Order/OrderFilter";
import { useState } from "react";

export default function Order() {
    const [totalOrders, setTotalOrders] = useState([
        {
            id: 21,
            customer_name: "Sumit",
            items: 4,
            amount: 100,
            status: "PENDING"
        },
        {
            id: 22,
            customer_name: "Anika",
            items: 2,
            amount: 250,
            status: "PENDING"
        },
        {
            id: 23,
            customer_name: "Ravi",
            items: 1,
            amount: 75,
            status: "DELIVERED"
        },
        {
            id: 24,
            customer_name: "Neha",
            items: 3,
            amount: 180,
            status: "PENDING"
        },
        {
            id: 25,
            customer_name: "Ali",
            items: 5,
            amount: 320,
            status: "PENDING"
        },
        {
            id: 26,
            customer_name: "Pooja",
            items: 2,
            amount: 150,
            status: "DELIVERED"
        },
        {
            id: 27,
            customer_name: "Zara",
            items: 6,
            amount: 500,
            status: "PENDING"
        },
        {
            id: 28,
            customer_name: "Kabir",
            items: 1,
            amount: 60,
            status: "PENDING"
        },
        {
            id: 29,
            customer_name: "Tina",
            items: 4,
            amount: 210,
            status: "PENDING"
        },
        {
            id: 30,
            customer_name: "Rahul",
            items: 3,
            amount: 190,
            status: "DELIVERED"
        }
    ]);
    const [filterOrders, setFilterOrders] = useState(totalOrders);

    function getFilterList(key) {
        let filterList = totalOrders;
        if (key == "Pending")
            filterList = totalOrders.filter(
                (order) => order.status === "PENDING"
            );

        if (key == "Delivered")
            filterList = totalOrders.filter(
                (order) => order.status === "DELIVERED"
            );

        setFilterOrders(filterList);
    }

    function deleteOrder(id) {
        const newTotalOrders = totalOrders.filter((item) => item.id != id);
        setTotalOrders(newTotalOrders);
        setFilterOrders(newTotalOrders);
    }
    return (
        <>
            <div className="container mx-auto px-4 h-screen flex flex-col text-white">
                <Navbar />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
                    <CreateOrder />

                    <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
                        <OrderSummary orders={totalOrders} />

                        <div>
                            <OrderFilter onFilter={getFilterList} />

                            <div className="bg-cardbg rounded-lg p-4">
                                <div className="reports-container">
                                    <OrderReport
                                        orders={filterOrders}
                                        handleDeleteOrder={deleteOrder}
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
