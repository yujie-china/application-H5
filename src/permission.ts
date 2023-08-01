import router from "@/router"

/**
 * 白名单
 */
const white = ["/login"]

router.beforeEach((to, from, next) => {
    // const token = useUserStore().getToken
    // if (token) {
    //     if (to.path === "/login") {
    //         next({ path: "/home", replace: true })
    //     } else {
    //         next()
    //     }
    // } else {
    //     if (white.includes(to.path)) {
    //         next()
    //     } else {
    //         next({ path: "/login" })
    //     }
    // }
})
