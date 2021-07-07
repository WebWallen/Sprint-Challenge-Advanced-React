import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue; // converts data into a boolean that can be evaluated true or false
    });

    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value)); // sets key, converted into a string, within the local storage
    };

    return [storedValue, setValue]
}

export default useLocalStorage;