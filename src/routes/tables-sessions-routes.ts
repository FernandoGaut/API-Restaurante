import { Router } from "express"

import { TablesSessionController } from "@/controllers/tables-sessions-controller"
import { TablesController } from "@/controllers/tables-controller"

const tablesSessionsRoute = Router()
const tablesSessionsController = new TablesSessionController

tablesSessionsRoute.post("/", tablesSessionsController.create)
tablesSessionsRoute.get("/", tablesSessionsController.index)
tablesSessionsRoute.patch("/:id", tablesSessionsController.update)

export {tablesSessionsRoute}