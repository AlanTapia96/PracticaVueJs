import configServices from "@/api/settings";

const getDog = async breed => {
  const url = `${configServices.apiUrl}${breed}/images/random/1`;
  return fetch(url)
    .then(response => response.json())
    .then(data => data.message);
};

const getAllBreeds = async () => {
  return fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(data => data.message);
};

export { getDog, getAllBreeds };
