import Navbar from "../components/Navbar";
import OrderSummary from "../components/Order/OrderSummary";
import OrderReport from "../components/Order/OrderReport";
import CreateOrder from "../components/Order/CreateOrder";
import OrderFilter from "./Order/OrderFilter";

export default function Order() {
    return (
        <>
            <div className="container mx-auto px-4 h-screen flex flex-col text-white">
                <Navbar />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
                    <CreateOrder />

                    <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
                        <OrderSummary />

                        <div>
                            <OrderFilter />

                            <div className="bg-cardbg rounded-lg p-4">
                                <div className="reports-container">
                                    <OrderReport />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
