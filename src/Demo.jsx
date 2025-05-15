import Navbar from "./components/Navbar";
import OrderSummary from "./components/Order/OrderSummary";
import FilterIcon from "./assets/FilterIcon";
import OrderReport from "./components/Order/OrderReport";
import CreateOrder from "./components/Order/CreateOrder";

export default function Demo() {
    return (
        <>
            <div className="container mx-auto px-4 h-screen flex flex-col">
                {/* Navbar */}
                <Navbar />

                {/* Main Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
                    {/* Create Order Section */}
                    <CreateOrder />

                    {/* Order Summary and Reports Section */}
                    <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
                        {/* Order Summary */}
                        <OrderSummary />

                        {/* Order Reports */}
                        <div>
                            {/* filter */}
                            <div className="flex justify-between">
                                <h2 className="text-xl font-bold mb-4">
                                    Order Reports
                                </h2>
                                <div className="flex gap-4 items-center">
                                    <FilterIcon />

                                    <select className="appearance-none bg-zinc-900 accent-orange-600 border-none outline-none rounded-sm">
                                        <option>All</option>
                                        <option>Pending</option>
                                        <option>Delivered</option>
                                    </select>
                                </div>
                            </div>

                            {/* Order List */}
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
