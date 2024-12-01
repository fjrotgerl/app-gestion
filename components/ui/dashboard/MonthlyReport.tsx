import Link from "next/link";
import { Box } from "../../misc/Box";

export const MonthlyReport = () => {
  return (
    <Box>
      <Link href="/ingresos">
        <div className="flex">
          <div className="w-6/12">
            <h1 className="text-xl font-medium">
              Total <span className="text-neutral-500">diciembre</span>
            </h1>

            <span className="text-3xl font-semibold">453€</span>
          </div>

          <div className="m-auto w-6/12">
            <p className="text-center">Grafico</p>
          </div>
        </div>

        <p className="pt-2 text-sm leading-4 text-neutral-500">
          Los ingresos han aumentado un{" "}
          <span className="font-semibold text-green-600">23%</span> respecto al
          mes anterior.
        </p>
      </Link>
    </Box>
  );
};
