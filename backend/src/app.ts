import express, {Application} from 'express'
import morgan from 'morgan'

import IndexRoutes from "./routes/index.routes"
import PizzaRoutes from "./routes/pizzas.routes"
import OrdersRoutes from "./routes/orders.routes";

export class App{
    private app:Application

    constructor(private port?: number | string){
        this.app = express()
        this.settings()
        this.middlewares()
        this.routes()
    }

    settings(){
        this.app.set('port', this.port || process.env.PORT || 3000 )
    }

    middlewares(){
        this.app.use(morgan('dev'))
        this.app.use(express.urlencoded({extended:false}))//para formularios
        this.app.use(express.json())
    }

    routes(){
        this.app.use(IndexRoutes)
        this.app.use('/pizzas', PizzaRoutes)
        this.app.use('/orders', OrdersRoutes)
    }

    async listen (){
        await this.app.listen(this.app.get('port'))
        console.log('Server on port', this.app.get('port'))
    }
}