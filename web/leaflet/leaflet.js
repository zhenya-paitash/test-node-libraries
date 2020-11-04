navigator.geolocation.getCurrentPosition(res => {
    // location
    const {
      latitude,
      longitude,
      accuracy
    } = res.coords;
      // lat = res.coords.latitude,
      // lon = res.coords.longitude,
      // zoom = res.coords.accuracy;

    // инициализируем карту и установим для нее 
    // выбранные географические координаты и уровень масштабирования
    const map = L.map('map').setView([latitude, longitude], accuracy);
    // const map = L.map('map').setView([lat, lon], zoom);

    // добавим слой листов для добавления на нашу карту
    const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    L.tileLayer(url, {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  },
  error => console.error(error)
);
