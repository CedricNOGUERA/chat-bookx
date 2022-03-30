import create from 'zustand'
import { persist } from "zustand/middleware"

type State = {
    auth: boolean,

}

export const appStore = create((
    (set) => ({
    auth: true,
    getStorage: () => sessionStorage,
})))