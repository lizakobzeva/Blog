import { lazy } from "react";

const CoffeePageAsync = lazy(() => import("./CoffeePage"));
export default CoffeePageAsync;
