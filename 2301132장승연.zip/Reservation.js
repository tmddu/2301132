function initMap() {
    // 서울특별시 좌표
    var seoul = { lat: 37.5665, lng: 126.9780 };
  
    // 지도 생성
    var map = new google.maps.Map(document.getElementById('map'), {
      center: seoul,
      zoom: 12
    });
    
    // 마커 추가
    var marker = new google.maps.Marker({
      position: seoul,
      map: map,
      title: '서울특별시'
    });
  }