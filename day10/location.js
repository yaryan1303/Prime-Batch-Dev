console.log("Hi");

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "google-map-places.p.rapidapi.com",
    "x-rapidapi-key": "264d587a07msh508eb9157ba6d19p100900jsnf91120b87286",
  },
};

function fetchData(text) {
  const url = `https://google-map-places.p.rapidapi.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(
    text
  )}&inputtype=textquery&fields=formatted_address,name,geometry&language=en`;

  fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      ShowLocations(data);
    })
    .catch((error) => console.error("Fetch error:", error.message));
}

function fetchDataLocationInfo(location_id) {
  const url = `https://google-map-places.p.rapidapi.com/maps/api/place/details/json?place_id=${location_id}&region=en&fields=all&language=en&reviews_no_translations=true`;

  fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      ShowLocations(data);
    })
    .catch((error) => console.error("Fetch error:", error.message));
}

const ShowLocations = (data) => {
  const { candidates } = data;
  if (!candidates || candidates.length === 0) {
    console.log("No locations found.");
    return;
  }

  candidates.forEach((place) => {
    const p = document.createElement("p");
    p.innerText = `${place.name} - ${place.formatted_address} rhis is the lat ${place.geometry.location.lat}`;
    document.body.appendChild(p);
  });
};

let id = null;

const handleSearch = (e) => {
  if (id) {
    clearTimeout(id);
  }

  id = setTimeout(() => {
    const text = e.target.value;
    if (text.trim()) {
      fetchData(text);
    }
  }, 1000);
};
