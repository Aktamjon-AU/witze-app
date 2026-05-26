const Local_Story_Key = "jokes";

export function getSavedJokes() {
  return JSON.parse(localStorage.getItem(Local_Story_Key)) || [];
}

export function saveJoke(joke) {
  const savedJokes = getSavedJokes();

  if (savedJokes.find((savedJoke) => savedJoke === joke)) {
    alert("Witz wurde bereits gespeichert!");
    return;
  }

  const newSavedJokes = [joke, ...savedJokes];
  localStorage.setItem(Local_Story_Key, JSON.stringify(newSavedJokes));
}

export function removeJoke(index) {
  const newSavedJokes = getSavedJokes();
  newSavedJokes.splice(index, 1);

  localStorage.setItem(Local_Story_Key, JSON.stringify(newSavedJokes));
}
