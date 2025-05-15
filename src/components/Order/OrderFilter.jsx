import FilterIcon from "../../assets/FilterIcon";

function OrderFilter({ onFilter }) {
    return (
        <>
            <div className="flex justify-between">
                <h2 className="text-xl font-bold mb-4">Order Reports</h2>
                <div className="flex gap-4 items-center">
                    <FilterIcon />

                    <select
                        className="appearance-none bg-zinc-900 accent-orange-600 border-none outline-none rounded-sm"
                        onChange={(e) => {
                            onFilter(e.target.value);
                        }}
                    >
                        <option>All</option>
                        <option>Pending</option>
                        <option>Delivered</option>
                    </select>
                </div>
            </div>
        </>
    );
}
export default OrderFilter;
