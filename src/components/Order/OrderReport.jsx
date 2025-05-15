function DeleteButton() {
    return (
        <>
            <button className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">
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

function ListElement({ order }) {
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
                    <DeleteButton />
                    {order.status === "PENDING" && <DeliverButton />}
                </td>
            </tr>
        </>
    );
}

function OrderReport() {
    const orders = [
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
    ];

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
                        return <ListElement key={order.id} order={order} />;
                    })}
                </tbody>
            </table>
        </>
    );
}
export default OrderReport;
