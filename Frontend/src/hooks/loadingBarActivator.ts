import { useLoadingBar } from "naive-ui"
export const loadingBarActivator = () => {
    const loading = useLoadingBar()
    loading.start()
    return true
}