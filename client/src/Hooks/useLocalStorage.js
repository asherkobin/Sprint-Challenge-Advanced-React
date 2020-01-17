import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : initialValue;
  });
  
  const setValueToLocalStorage = (newValue) => {
    setStoredValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [storedValue, setValueToLocalStorage];
}