import {Router} from "express"

import { productsRoutes } from "./products-routes"
import { tablesRoutes } from "./tables-routes"
import { tablesSessionsRoute } from "./tables-sessions-routes"
import { ordersRoutes } from "./orders-routes"

const routes = Router()

routes.use("/products", productsRoutes)
routes.use("/tables", tablesRoutes)
routes.use("/tables-sessions", tablesSessionsRoute)
routes.use("/tables-sessions", tablesSessionsRoute)
routes.use("/orders", ordersRoutes)


export {routes}