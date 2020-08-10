let mapOptions = {
    center: [55.338908, -273.906841],
    zoom: 10
 }

 let map = new L.map('map', mapOptions);

 let googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

map.addLayer(googleHybrid).on('click', (e) => {
    console.log(e.latlng);
});

let marker = new L.Marker([55.343966, -273.910360]);
marker.bindPopup('This is my new work!').openPopup();
marker.addTo(map);