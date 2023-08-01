import { useUserStoreWithOut } from "./modules/user"

export function useStore () {
    const user = useUserStoreWithOut()
    return { user }
}