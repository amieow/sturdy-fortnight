export const useLocalStorage = <T>(key: string) => {
	const setItem = (value: T) => {
		if (typeof window !== "undefined" && window.localStorage) {
			localStorage.setItem(key, JSON.stringify(value));
		}
	};
	const getItem = (): T | null | undefined => {
		if (typeof window !== "undefined" && window.localStorage) {
			const item = localStorage.getItem(key);
			return item ? JSON.parse(item) : null;
		}
		return undefined;
	};
	const removeItem = () => {
		if (typeof window !== "undefined" && window.localStorage) {
			localStorage.removeItem(key);
		}
	};
	return { setItem, getItem, removeItem };
};
