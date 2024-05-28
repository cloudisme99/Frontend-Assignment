// 이미지 로딩
const loadPhotos = document.querySelector('.load-photos');
const btn = document.querySelector('#morePhotos');

let pageToPatch = 1;

btn.addEventListener('click', ()=>{fetchImages(pageToPatch += 1)});

async function fetchImages(page) {

    try{
        const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=3`);
        if(!response.ok) {
            throw new Error('네트워크 응답에 문제가 있습니다.')
        }
        const datas = await response.json();
        console.log(datas);
        makeImageList(datas);

    }catch (error){
        console.error(error);
    }
}

function makeImageList(datas){
    datas.forEach((data) => {
        loadPhotos.insertAdjacentHTML('beforeend',
            `<li class="img-width"><img src="${data.download_url}" alt=""></li>`)
    })
}

// 지도
const mapContainer = document.getElementById('map'),
    mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
    };

const map = new kakao.maps.Map(mapContainer, mapOption);

const markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667);

const marker = new kakao.maps.Marker({
    position: markerPosition
});

marker.setMap(map);