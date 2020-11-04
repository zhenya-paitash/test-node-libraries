navigator.geolocation.getCurrentPosition(res => {
  console.log(res);
  // location
  const {
    latitude,
    longitude,
    accuracy
  } = res.coords;

  // инициализируем карту и установим для нее 
  // выбранные географические координаты и уровень масштабирования
  const map = L.map('map').setView([latitude, longitude], accuracy);
  // добавим слой листов для добавления на нашу карту
  const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
  L.tileLayer(url, { attribution }).addTo(map);

  // иконка
  const icon = L.icon({
    iconUrl: 'iss200.png',
    iconSize: [50, 32],
    iconAnchor: [25, 16],
  });

  // маркер
  const marker = L.marker([0, 0], { icon }).addTo(map);
  marker.setLatLng([latitude, longitude])
  .bindPopup('now you<br>here.')
  .openPopup();

  // area
  const circle = L.circle([latitude, longitude], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.15,
    radius: 50
  }).addTo(map);
  }, 
  err => console.error(err)
);
