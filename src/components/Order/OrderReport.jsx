function DeleteButton({ id, deleteOrder }) {
    return (
        <>
            <button
                className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300"
                onClick={() => {
                    deleteOrder(id);
                }}
            >
                Delete
            </button>
        </>
    );
}

function DeliverButton() {
    return (
        <>
            <button className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300">
                DELIVER
            </button>
        </>
    );
}

function ListElement({ order, handleDeleteOrder }) {
    return (
        <>
            <tr className="border-t border-gray-700">
                <td className="py-3">{order.id}</td>
                <td className="py-3">{order.customer_name}</td>
                <td className="py-3">{order.items}</td>
                <td className="py-3">{order.amount}</td>
                <td className="py-3">
                    <span className="text-red-500">{order.status}</span>
                </td>
                <td className="py-3">
                    <DeleteButton
                        id={order.id}
                        deleteOrder={handleDeleteOrder}
                    />
                    {order.status === "PENDING" && <DeliverButton />}
                </td>
            </tr>
        </>
    );
}

function OrderReport({ orders, handleDeleteOrder }) {
    return (
        <>
            <table className="min-w-full">
                <thead>
                    <tr className="text-left text-sm">
                        <th className="pb-3 font-medium">ID</th>
                        <th className="pb-3 font-medium">Customer Name</th>
                        <th className="pb-3 font-medium">Items</th>
                        <th className="pb-3 font-medium">Amount</th>
                        <th className="pb-3 font-medium">Status</th>
                        <th className="pb-3 font-medium">Action</th>
                    </tr>
                </thead>
                <tbody className="text-sm">
                    {orders.map((order) => {
                        return (
                            <ListElement
                                key={order.id}
                                order={order}
                                handleDeleteOrder={handleDeleteOrder}
                            />
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}
export default OrderReport;
