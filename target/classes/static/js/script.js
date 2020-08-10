// Координаты и увеличения для начальго положе слоя
let mapOptions = {
    center: [55.338908, -273.906841],
    zoom: 10
 }

// Создаем
let map = new L.map('map', mapOptions);

// Указываем источник карт и отображаем слой
let mapDoc = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a rel="nofollow" href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

// Создаем марке, добавляем коментарий и наносим его на слой
let marker = new L.Marker([55.343966, -273.910360]);
marker.bindPopup('This is Arma!').openPopup();
marker.addTo(map);

// Отслеживаем зоом
map.addLayer(mapDoc).on('zoom', (e) => {

    // Проверк работы Zoom
    console.log(map.getZoom())

        // Меняем слои в зависимости от маштаба
        if (map.getZoom() > 15){

            map.removeLayer(mapDoc);
            this.mapDoc = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
            maxZoom: 20,
            minZoom: 16,
            subdomains:['mt0','mt1','mt2','mt3']
            }).addTo(map);
        } else {

            map.removeLayer(mapDoc);
            this.mapDoc = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a rel="nofollow" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 16
            }).addTo(map);
    }
});

// отслеживам нажатие правой кнопки мыши, вызываем модальное окно для создания задач
map.addLayer(mapDoc).on('contextmenu', (e) => {

    // Проверяем координаты
    console.log(e.latlng);

    $("#taskModalBox").modal('show');

    $(() => {
     $('#exampleFormControlInput2').daterangepicker();
    });

});