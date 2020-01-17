import { useLocalStorage } from "./useLocalStorage";

export const useSelectedPlayers = (initialValue) => {
  const [selectedPlayers, setSelectedPlayers] = useLocalStorage("SELECTED_PLAYERS", initialValue);

  return [selectedPlayers, setSelectedPlayers];
}