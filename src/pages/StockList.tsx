import { useForm } from "react-hook-form";

const StockList = () => {
    const { register, handleSubmit, watch } = useForm();
    const onSubmit = (data: any) => console.log(data);
    return (
        <>
            <h1 className="text-3xl font-bold underline">Stock List</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                    type="text"
                    {...register("refreshToken")}
                />
                <input
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    type="submit"
                />
            </form>
        </>
    );
};
export default StockList;
