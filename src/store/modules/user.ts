import { defineStore } from "pinia"
import { pinia } from "./index"

export const useUserStore = defineStore("user", {
    state: () => ({
        token: ""
    }),
    getters: {
    },
    actions: {
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: "heyme",
                storage: localStorage
            }
        ]
    },
})

export function useUserStoreWithOut () {
    return useUserStore(pinia)
}