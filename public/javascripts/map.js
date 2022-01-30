<script>
    let xPos = 37.498362123762;
    let yPos = 127.03451238865;

    let markerXPos = 37.498362123762;
    let markerYPos = 127.03451238865;

    let zoomLevel = 3;
    const mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = { 
            center: new kakao.maps.LatLng(
                xPos, yPos
                ),// 지도의 중심좌표
            level: zoomLevel // 지도의 확대 레벨
        };

    

    let markerPos = new kakao.maps.LatLng(
        markerXPos, markerYPos 
    );

    let marker = new kakao.maps.Marker({
        position : markerPos,
    });

    function posRemote(value) {
        mapContainer.mapOption.center = this.value;
    };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    const map = new kakao.maps.Map(mapContainer, mapOption); 
    marker.setMap(map);

</script>
