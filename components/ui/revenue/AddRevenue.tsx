import { Box } from "../../misc/Box";
import { InputCustom } from "../form/InputCustom";

export const AddRevenue = () => {
  return (
    <Box>
      <div>
        <h1 className="text-center text-xl font-semibold">Añadir caja</h1>
        <p className="text-center text-sm font-medium text-neutral-500">
          24/11/2024
        </p>
      </div>

      <form className="mt-5 flex flex-col gap-3">
        <div className="flex flex-col">
          <label>Introduce el importe</label>
          <div className="flex items-center rounded border p-1">
            <input
              type="number"
              id="fname"
              name="fname"
              className="flex-1 border-none text-neutral-600 outline-none"
            />
            <span className="ml-2 text-sm text-neutral-500">EUR</span>
          </div>
          <input
            value="Añadir"
            type="submit"
            className="mx-auto mt-2.5 w-fit rounded bg-black px-5 py-1.5 text-sm font-medium text-white"
          ></input>
        </div>
      </form>
    </Box>
  );
};
