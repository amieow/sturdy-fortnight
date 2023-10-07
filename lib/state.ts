import { create } from "zustand";
import { userSchemaType } from "./validation";
import { getCookie } from "./cookie";
import { isValiduser } from "./utils";

interface BoundStore extends userSchemaType {
	setEmail: (email: string) => void;
	setPassword: (password: string) => void;
	getAllKue: () => void;
	isLogin: () => boolean;
}

export const useBoundStore = create<BoundStore>()((set, get) => ({
	email: "",
	password: "",
	getAllKue: () => {
		const email = getCookie("email");
		const password = getCookie("password");
		set({ email, password });
	},
	setEmail: (email: string) => set((current) => ({ ...current, email: email })),
	isLogin: () => {
		const userData = { email: get().email, password: get().password };
		return isValiduser(userData);
	},
	setPassword: (password: string) =>
		set((current) => ({ ...current, password: password })),
}));
