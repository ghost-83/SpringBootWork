// Координаты и увеличения для начальго положе слоя
let coordX;
let coordY;
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
    this.coordX = e.latlng.lat;
    this.coordY =e.latlng.lng;

    $("#taskModalBox").modal('show');

    $(() => {
     $('#data').daterangepicker();
    });

});

// Обработка формы новой задачи
$('#save').click(() => {

    let titleTask = $('#titleTask').val();
    let textTask = $('#textTask').val();
    let userTask = $('#userTask').val();
    let statusTask = $('#statusTask').val();
    let dataTask = $('#dataTask').val();
    let object = {
        title: titleTask,
        text: textTask,
//        user: userTask,
        status: statusTask,
        data: dataTask,
        coordX: this.coordX,
        coordY: this.coordY
    }
    let json = JSON.stringify(object);

    $.ajax({
    	url: '/task',         /* Куда пойдет запрос */
    	method: 'POST',             /* Метод передачи (post или get) */
    	dataType: 'application/json',          /* Тип данных в ответе (xml, json, script, html). */
    	data: json,     /* Параметры передаваемые в запросе. */
    	success: function(data){   /* функция которая будет выполнена после успешного запроса.  */
    		console.log(data);            /* В переменной data содержится ответ от index.php. */
    	}
    });

    $(".modal").modal("hide");

});

//fetch('/task', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({text: 'HiHi'})}).then(result => console.log(result))