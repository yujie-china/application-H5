import { App } from "vue"
import { createPinia } from "pinia"
import persist from "pinia-plugin-persist"

const pinia = createPinia()

pinia.use(persist)

export function setupStore (app: App<Element>) {
    app.use(pinia)
}

export { pinia }