// container3
document.addEventListener("DOMContentLoaded", function () {
    const imageUrls = [
        "https://image.univstore.com/20231023_apple_ipad_promotion_faf9f8_web_maintop.png"
    ];

    const container = document.getElementById("ct3");

    imageUrls.map((imageUrl, index) => {
        
        const linkElement = document.createElement("a");
        linkElement.className = "apple-pad";
        linkElement.href = `https://www.univstore.com/event/20230908_apple_ipadairdg`;

        linkElement.style.backgroundImage = `url(${imageUrl})`;

        container.appendChild(linkElement);
    });
});


// container4
const imageList = [
    { title: '오늘의추천', url: 'https://image.univstore.com/20231031_mdspick_75_shortcut.png', href: 'https://www.univstore.com/event/20230602_mdspick_promotion#iPad' },
    { title: '클리어런스', url: 'https://image.univstore.com/20230614_clearance_shortcut.jpg', href: 'https://www.univstore.com/event/20230417_clearance_sale' },
    { title: '헤드폰페스타', url: 'https://image.univstore.com/20230828_headphone_shortcut.jpg', href: 'https://www.univstore.com/event/20230724_uneez_music_festa' },
    { title: '한컴오피스', url: 'https://image.univstore.com/20231016_hancom_shortcut.png', href: 'https://www.univstore.com/brand/hancom' },
    { title: '고기학개론', url: 'https://image.univstore.com/20231106_meat_shortcut.png', href: 'https://www.univstore.com/event/20231030_meat_promotion' },
    { title: '노트북', url: 'https://image.univstore.com/laptop.jpg', href: 'https://www.univstore.com/category/computer?ctg_sub_code=020100' },
    { title: '계절가전', url: 'https://image.univstore.com/20231023_seasonal_ha_shortcut.png', href: 'https://www.univstore.com/event/20231023_winter_elec' },
    { title: '이번주신상', url: 'https://image.univstore.com/20230925_new_item_shortcut.png', href: 'https://www.univstore.com/event/20230313_univ_new_item' },
    { title: '패션&뷰티', url: 'https://image.univstore.com/20230918_fashion_beauty_bts_shortcut.jpg', href: 'https://www.univstore.com/event/20230911_fashion_beauty_bts' },
];

function displayImages() {
    const imageContainer = document.getElementById('imageContainer');

    imageList.map(({ title, url, href }) => {
        const linkElement = document.createElement('a');
        linkElement.href = href;
        linkElement.classList.add('round-button');
        linkElement.style.backgroundImage = `url('${url}')`;

        const textBox = document.createElement('div');
        textBox.classList.add('text-box');

        const textElement = document.createElement('p');
        textElement.innerText = title;

        textBox.appendChild(textElement);
        linkElement.appendChild(textBox);
        imageContainer.appendChild(linkElement);
    });
}
window.onload = displayImages;


//container5
document.addEventListener('DOMContentLoaded', function () {
    const imageUrls = [
        "https://image.univstore.com/20231101_payment_event_mainline.jpg"
    ];

    const container = document.getElementById('ct5');

    imageUrls.map((imageUrl) => {
        const containerElement = document.createElement('a');
        containerElement.classList.add('container5');
        containerElement.href = 'https://www.univstore.com/event/20231101_payment_event';

        const kakaoPayElement = document.createElement('div');
        kakaoPayElement.classList.add('kakao-pay');
        kakaoPayElement.style.backgroundImage = `url(${imageUrl})`;

        containerElement.appendChild(kakaoPayElement);

        container.appendChild(containerElement);
    });
});


// container6
const items = [
    { imageUrl: 'https://image.univstore.com/iPad_Air_5_Wi-Fi_Space_Gray_thumbnail_1a-F5.jpg',  /* 1 */ 
      brand: 'Apple', 
      productName: 'iPad Air 5세대 Wi-Fi 64GB 스페이스 그레이', 
      itemName: 'MM9C3KH/A', price: '929,000원', 
      imglink: 'https://www.univstore.com/item/3371', 
      brandLink: 'https://www.univstore.com/brand/apple',
      saleLink: 'https://www.univstore.com/user/login?redirect=/item/3371'}
      ,
      { imageUrl: 'https://image.univstore.com/SM-X810NZAAKOO_thumbnail-01.jpg',  /* 2 */ 
      brand: '삼성>', 
      productName: '[카카오페이/KB페이 추가할인] 갤럭시 탭 S9+ Wi-Fi 256GB 그라파이트', 
      itemName: 'SM-X810NZAAKOO', price: '1,248,500원', 
      imglink: 'https://www.univstore.com/item/29020', 
      brandLink: 'https://www.univstore.com/brand/samsung',
      saleLink: 'https://www.univstore.com/user/login?redirect=/item/3371'}
      ,
      { imageUrl: 'https://image.univstore.com/SM-T733NZKEKOO-0130_thumbnail-01-F5.jpg',  /* 3 */ 
      brand: '삼성>', 
      productName: '[카카오페이/KB페이 추가할인] 갤럭시 탭 S7 FE Wi-Fi 128GB 블랙', 
      itemName: 'SM-T733NZKEKOO', price: '829,400원', 
      imglink: 'https://www.univstore.com/item/1703', 
      brandLink: 'https://www.univstore.com/brand/samsung',
      saleLink: 'https://www.univstore.com/user/login?redirect=/item/3371'}
      ,
      { imageUrl: 'https://image.univstore.com/MNXD3KHA_thumbnail-v2-F5.jpg',  /* 4 */ 
      brand: 'iPad>', 
      productName: 'iPad Pro 11 4세대 Wi-Fi 128GB 스페이스 그레이', 
      itemName: 'MNXD3KH/A', price: '1,249,000원', 
      imglink: 'https://www.univstore.com/item/8866', 
      brandLink: 'https://www.univstore.com/brand/ipad',
      saleLink: 'https://www.univstore.com/user/login?redirect=/item/3371'}
      ,
      { imageUrl: 'https://image.univstore.com/MTJV3KHA_thumbnail-01.jpg',  /* 5 */ 
      brand: 'Apple>', 
      productName: 'AirPods Pro MagSafe 충전 케이스 모델(2세대, USB-C)', 
      itemName: 'MTJV3KH/A', price: '359,000원', 
      imglink: 'https://www.univstore.com/item/35381', 
      brandLink: 'https://www.univstore.com/brand/apple',
      saleLink: 'https://www.univstore.com/user/login?redirect=/item/3371'}
      ,
      { imageUrl: 'https://image.univstore.com/880066-0100_thumbnail-01.jpg',  /* 6 */ 
      brand: 'BOSE>', 
      productName: '[카카오페이/KB페이 추가할인] QC 울트라 헤드폰 블랙', 
      itemName: '880066-0100', price: '499,000원', 
      imglink: 'https://www.univstore.com/item/35270', 
      brandLink: 'https://www.univstore.com/brand/bose',
      saleLink: 'https://www.univstore.com/user/login?redirect=/item/3371'}
      ,
      { imageUrl: 'https://image.univstore.com/CFI-1218A01_thumbnail-01-F5.jpg',  /* 7 */ 
      brand: 'PlayStation>', 
      productName: '[카카오페이 추가할인] 플레이스테이션5 디스크 에디션', 
      itemName: 'CFI-1218A01', price: '688,000원', 
      imglink: 'https://www.univstore.com/item/9888', 
      brandLink: 'https://www.univstore.com/brand/playstation',
      saleLink: 'https://www.univstore.com/user/login?redirect=/item/3371'}
      ,
      { imageUrl: 'https://image.univstore.com/ASIA-00470_thumbnail-01.jpg',  /* 8 */ 
      brand: 'PlayStation>', 
      productName: '[카카오페이 추가할인] PS5 콜 오브 듀티: 모던 워페어 Ⅲ 번들', 
      itemName: 'ASIA-00470', price: '760,800원', 
      imglink: 'https://www.univstore.com/item/37742', 
      brandLink: 'https://www.univstore.com/brand/playstation',
      saleLink: 'https://www.univstore.com/user/login?redirect=/item/3371'}
      ,
      { imageUrl: 'https://image.univstore.com/WH-1000XM5_Sliver_thumbnail_1-F5.jpg',  /* 9 */ 
      brand: 'SONY>', 
      productName: '[카카오페이/KB페이 추가할인] WH-1000XM5 실버', 
      itemName: 'WH-1000XM5/S', price: '499,000원', 
      imglink: 'https://www.univstore.com/item/3470', 
      brandLink: 'https://www.univstore.com/brand/sony',
      saleLink: 'https://www.univstore.com/user/login?redirect=/item/3371'}
      ,
      { imageUrl: 'https://image.univstore.com/ACCENTUM_thumbnail-01.jpg',  /* 10 */ 
      brand: '젠하이저>', 
      productName: '[카카오페이 추가할인] 엑센텀 ACCENTUM Wireless 무선 헤드폰', 
      itemName: 'ACCENTUM', price: '249,000원', 
      imglink: 'https://www.univstore.com/item/35389', 
      brandLink: 'https://www.univstore.com/brand/sennheiser',
      saleLink: 'https://www.univstore.com/user/login?redirect=/item/3371'}
      ,
      { imageUrl: 'https://image.univstore.com/HSH-LS32BM702UKXKR-thumbnail_01-F5-V2.jpg',  /* 11 */ 
      brand: '삼성>', 
      productName: '[카카오페이/KB페이 추가할인] 스마트 모니터 M7 80cm 블랙', 
      itemName: 'LS32BM702UKXKR', price: '540,000원', 
      imglink: 'https://www.univstore.com/item/5794', 
      brandLink: 'https://www.univstore.com/brand/samsung',
      saleLink: 'https://www.univstore.com/user/login?redirect=/item/3371'}
      ,
      { imageUrl: 'https://image.univstore.com/NT950XFG-KC51S_thumbnail-01-F5-F5.jpg',  /* 12 */ 
      brand: '삼성>', 
      productName: '[KB페이 추가할인] 갤럭시 북2 Pro S.E 39.6cm i5-1340P 16GB 256GB 실버 (Windows 11 Home 포함)', 
      itemName: 'NT950XFG-KC51S', price: '1,990,000원', 
      imglink: 'https://www.univstore.com/item/13901', 
      brandLink: 'https://www.univstore.com/brand/samsung',
      saleLink: 'https://www.univstore.com/user/login?redirect=/item/3371'}
      ,
      { imageUrl: 'https://image.univstore.com/IMT-916_thumbnail-01.jpg',  /* 13 */ 
      brand: '이메텍>', 
      productName: '이탈리아 전기요 (1인용/싱글/여우)', 
      itemName: 'IMT-916', price: '149,000원', 
      imglink: 'https://www.univstore.com/item/35236', 
      brandLink: 'https://www.univstore.com/brand/imetec',
      saleLink: 'https://www.univstore.com/user/login?redirect=/item/3371'}
      ,
      { imageUrl: 'https://image.univstore.com/NT940XFT-AD51E_thumbnail-01-F5.jpg',  /* 14 */ 
      brand: '삼성>', 
      productName: '[카카오페이/KB페이 추가할인] 갤럭시 북3 Pro 35.6cm i5-1340P 16GB 512GB 베이지 (Free-DOS)', 
      itemName: 'NT940XFT-AD51E', price: '1,940,000원', 
      imglink: 'https://www.univstore.com/item/21401', 
      brandLink: 'https://www.univstore.com/brand/samsung',
      saleLink: 'https://www.univstore.com/user/login?redirect=/item/3371'}
      ,
      { imageUrl: 'https://image.univstore.com/NT940XFT-AD51E_thumbnail-01-F5.jpg',  /* 15 */ 
      brand: '삼성>', 
      productName: '[카카오페이/KB페이 추가할인] 갤럭시 북3 Pro 40.6cm i5-1340P 16GB 512GB 베이지 (Free-DOS)', 
      itemName: 'NT960XFT-AD51E', price: '2,200,000원', 
      imglink: 'https://www.univstore.com/item/21402', 
      brandLink: 'https://www.univstore.com/brand/samsung',
      saleLink: 'https://www.univstore.com/user/login?redirect=/item/3371'}
      ,
      { imageUrl: 'https://image.univstore.com/HOFFICE2024-1PC-ESD_thumbnail-01.jpg',  /* 16 */ 
      brand: '한컴오피스>', 
      productName: '[카카오페이/KB페이 추가할인] 스마트 모니터 M7 80cm 블랙', 
      itemName: 'HOFFICE2024-1PC-ESD', price: '99,000원', 
      imglink: 'https://www.univstore.com/item/35495', 
      brandLink: 'https://www.univstore.com/brand/hancom',
      saleLink: 'https://www.univstore.com/user/login?redirect=/item/3371'}
      ,
      { imageUrl: 'https://image.univstore.com/PD19_thumbnail-01.jpg',  /* 17 */ 
      brand: 'Parallels>', 
      productName: 'Parallels Desktop 19 for Mac Education Edition 1년 구독형', 
      itemName: 'ESDPDA1YSUBKR', price: '60,000원', 
      imglink: 'https://www.univstore.com/item/4918', 
      brandLink: 'https://www.univstore.com/brand/parallels',
      saleLink: 'https://www.univstore.com/user/login?redirect=/item/3371'}
      ,
      { imageUrl: 'https://image.univstore.com/MacBook_Air_13_2022_Spacegray_01-F5.jpg',  /* 18 */ 
      brand: 'Mac>', 
      productName: 'MacBook Air 2022년 M2 CPU 8코어 GPU 8코어 8GB 256GB 스페이스 그레이', 
      itemName: 'MLXW3KH/A', price: '1,590,000원', 
      imglink: 'https://www.univstore.com/item/5173', 
      brandLink: 'https://www.univstore.com/brand/Mac',
      saleLink: 'https://www.univstore.com/user/login?redirect=/item/3371'}
      ,
      { imageUrl: 'https://image.univstore.com/MacBook-Air-M2-15-Midnight_thumbnail-01-F5.jpg',  /* 19 */ 
      brand: 'Mac>', 
      productName: 'MacBook Air 15 2023년 M2 CPU 8코어 GPU 10코어 8GB 256GB 미드나이트', 
      itemName: 'MQKW3KH/A', price: '1,890,000원', 
      imglink: 'https://www.univstore.com/item/26359', 
      brandLink: 'https://www.univstore.com/brand/Mac',
      saleLink: 'https://www.univstore.com/user/login?redirect=/item/3371'}
      ,
      { imageUrl: 'https://image.univstore.com/MacBook-Pro-16-SpaceGray_thumbnail-01-F5.jpg',  /* 20 */ 
      brand: 'Mac>', 
      productName: 'MacBook Pro 16 2023년 M2 Pro CPU 12코어 GPU 19코어 16GB 512GB 스페이스 그레이', 
      itemName: 'MNW83KH/A', price: '3,490,000원', 
      imglink: 'https://www.univstore.com/item/16255', 
      brandLink: 'https://www.univstore.com/brand/Mac',
      saleLink: 'https://www.univstore.com/user/login?redirect=/item/3371'}
      ,
      { imageUrl: 'https://image.univstore.com/20190111_MU8F2KHA_thum-F5.jpg',  /* 21 */ 
      brand: 'Apple>', 
      productName: 'Apple Pencil 2세대', 
      itemName: 'MU8F2KH/A', price: '195,000원', 
      imglink: 'https://www.univstore.com/item/490', 
      brandLink: 'https://www.univstore.com/brand/apple',
      saleLink: 'https://www.univstore.com/user/login?redirect=/item/3371'}
      ,
      { imageUrl: 'https://image.univstore.com/86Q74PA_thumbnail-01-1231.jpg',  /* 22 */ 
      brand: '>HP>', 
      productName: '[KB페이 추가할인] 오멘 슬림 게이밍 노트북 16-u0038TX i7-13700HX RTX 4060 32GB 1TB Windows 11 Home 세라믹 화이트', 
      itemName: '86Q74PA', price: '2,399,000원', 
      imglink: 'https://www.univstore.com/item/27292', 
      brandLink: 'https://www.univstore.com/brand/hp',
      saleLink: 'https://www.univstore.com/user/login?redirect=/item/3371'}
      ,
      { imageUrl: 'https://image.univstore.com/840G1PA_thumbnail-01-F5.jpg',  /* 23 */ 
      brand: 'HP>', 
      productName: '[카카오페이/KB페이 추가할인] 파빌리온 에어로 13-be2082AU WQXGA R7-7735U 16GB 512GB Windows 11 Home 세라믹 화이트', 
      itemName: '840G1PA', price: '1,249,000원', 
      imglink: 'https://www.univstore.com/item/23741', 
      brandLink: 'https://www.univstore.com/brand/hp',
      saleLink: 'https://www.univstore.com/user/login?redirect=/item/3371'}
      ,
      { imageUrl: 'https://image.univstore.com/15ZD90RU-GX56K_thumbnail_01-F5.jpg',  /* 24 */ 
      brand: 'LG 노트북>', 
      productName: '[카카오페이/KB페이 추가할인] LG gram 15 39.6cm i5-1335U 16GB 256GB Windows 11 Home 스노우 화이트 (개봉 설치 상품)', 
      itemName: '15ZD90RU-GX56K-22859', price: '1,878,000원', 
      imglink: 'https://www.univstore.com/item/22859', 
      brandLink: 'https://www.univstore.com/brand/LGnotebook',
      saleLink: 'https://www.univstore.com/user/login?redirect=/item/3371'}
];

const container6 = document.getElementById('itemContainer');

const itemHTML = items.map((item, index) => `
    <div class="it-item">
        <a class="item-picture" href="${item.imglink}" style="background-image: url('${item.imageUrl}')" alt="${item.productName}">
        </a>
        <div class="item-explanation">
            <a class="corp" href="${item.brandLink}">${item.brand}</a>
            <a class="item-corp" href="${item.imglink}">${item.productName}</a>
            <p class="item-name">${item.itemName}</p>
            <p class="item-price">${item.price}</p>
            <a class="item-sale" href="${item.saleLink}">대학생 인증 후 가격 확인</a>
        </div>
    </div>
`).join('');

container6.innerHTML = itemHTML;


// container6_2
const items2 = [
    { imageUrl: 'https://image.univstore.com/EOS_R50_18-45_KIT-BK_thumbnail-01-v2.jpg',  /* 1 */ 
      brand: 'Canon>', 
      productName: '[카카오페이 추가할인] EOS R50 18-45 KIT 미러리스 카메라 블랙 (RF-S 18-45 렌즈포함)', 
      itemName: 'EOS_R50_18-45_KIT-BK', price: '1,199,000원', 
      imglink: 'https://www.univstore.com/item/36093', 
      brandLink: 'https://www.univstore.com/brand/canon',
      saleLink: 'https://www.univstore.com/user/login?redirect=/item/3371'}
      ,
      { imageUrl: 'https://image.univstore.com/EI-T5600BBEGKR_thumbnail-01.jpg',  /* 2 */ 
      brand: '삼성>', 
      productName: '갤럭시 스마트태그2 블랙', 
      itemName: 'SM-X810NZAAKOO', price: '1,248,500원', 
      imglink: 'https://www.univstore.com/item/37134', 
      brandLink: 'https://www.univstore.com/brand/samsung',
      saleLink: 'https://www.univstore.com/user/login?redirect=/item/3371'}
      ,
      { imageUrl: 'https://image.univstore.com/PAN222A001BA1_thumbnail-01.jpg',  /* 3 */ 
      brand: '판도라>', 
      productName: '판도라 로즈골드 빈티지 얼루어 펜던트 엔드 네크리스 로즈골드', 
      itemName: 'PAN222A001BA1', price: '260,000원', 
      imglink: 'https://www.univstore.com/item/35903', 
      brandLink: 'https://www.univstore.com/brand/pandora',
      saleLink: 'https://www.univstore.com/user/login?redirect=/item/3371'}
      ,
      { imageUrl: 'https://image.univstore.com/63020086-02P116-CN_thumbnail-01.jpg',  /* 4 */ 
      brand: '비비안 웨스트우드>', 
      productName: '[카카오페이/KB페이 추가할인] 23FW 비비안웨스트우드 미니 바스 목걸이 실버 크리스탈', 
      itemName: '63020086-02P116-CN', price: '246,800원', 
      imglink: 'https://www.univstore.com/item/36247', 
      brandLink: 'https://www.univstore.com/brand/vivienne-westwood',
      saleLink: 'https://www.univstore.com/user/login?redirect=/item/3371'}
      ,
      { imageUrl: 'https://image.univstore.com/COCSXM61446_thumbnail-01.jpg',  /* 5 */ 
      brand: 'A.P.C>', 
      productName: '[카카오페이/KB페이 추가할인] 23SS 아페쎄 다니엘라 데님 인디고 에코백', 
      itemName: 'COCSXM61446', price: '120,900원', 
      imglink: 'https://www.univstore.com/item/36227', 
      brandLink: 'https://www.univstore.com/brand/apc',
      saleLink: 'https://www.univstore.com/user/login?redirect=/item/3371'}
      ,
      { imageUrl: 'https://image.univstore.com/2302-003-010010325_thumbnail-01.jpg',  /* 6 */ 
      brand: '비스크>', 
      productName: '23FW 비스크 아카디아 숄더백 비비드 그린', 
      itemName: '2302-003-010010325', price: '98,800원', 
      imglink: 'https://www.univstore.com/item/36244', 
      brandLink: 'https://www.univstore.com/brand/hvisk',
      saleLink: 'https://www.univstore.com/user/login?redirect=/item/3371'}
      ,
      { imageUrl: 'https://image.univstore.com/H0207_thumbnail-01.jpg',  /* 7 */ 
      brand: '오아>', 
      productName: '플렌티무드 미니 소형 초음파 무드등 가습기', 
      itemName: 'H0207', price: '54,900원', 
      imglink: 'https://www.univstore.com/item/36408', 
      brandLink: '"https://www.univstore.com/brand/oa',
      saleLink: 'https://www.univstore.com/user/login?redirect=/item/3371'}
      ,
      { imageUrl: 'https://image.univstore.com/DUU23166W2_thumbnail-01.jpg',  /* 8 */ 
      brand: '아이더>', 
      productName: '[카카오페이 추가할인] GRID (그리드) UNI 플리스 자켓 크림', 
      itemName: 'DUU23166W2_90', price: '119,000원', 
      imglink: 'https://www.univstore.com/item/36827', 
      brandLink: 'https://www.univstore.com/brand/eider',
      saleLink: 'https://www.univstore.com/user/login?redirect=/item/3371'}
];

const container6_2 = document.getElementById('itemContainer2');

const itemHTML2 = items2.map((item, index) => `
    <div class="it-item">
        <a class="item-picture" href="${item.imglink}" style="background-image: url('${item.imageUrl}')" alt="${item.productName}">
        </a>
        <div class="item-explanation">
            <a class="corp" href="${item.brandLink}">${item.brand}</a>
            <a class="item-corp" href="${item.imglink}">${item.productName}</a>
            <p class="item-name">${item.itemName}</p>
            <p class="item-price">${item.price}</p>
            <a class="item-sale" href="${item.saleLink}">대학생 인증 후 가격 확인</a>
        </div>
    </div>
`).join('');

container6_2.innerHTML = itemHTML2;


// container8
document.addEventListener('DOMContentLoaded', function () {
    const imageUrls = [
        "https://image.univstore.com/20231101_class101_web_maincarousel.png"
    ];

    const container = document.getElementById('ct8');

    imageUrls.map((imageUrl) => {
        const containerElement = document.createElement('div');
        containerElement.classList.add('container8');

        const classBoxElement = document.createElement('a');
        classBoxElement.classList.add('ct8-classbox');
        classBoxElement.href = 'https://www.univstore.com/event/20230801_class101_launching';

        const class101Element = document.createElement('div');
        class101Element.classList.add('class101');
        class101Element.style.backgroundImage = `url(${imageUrl})`;

        classBoxElement.appendChild(class101Element);
        containerElement.appendChild(classBoxElement);

        container.appendChild(containerElement);
    });
});


//container9
document.addEventListener('DOMContentLoaded', function () {
    const companies = [
        { href: 'https://www.univstore.com/brand/apple', imageUrl: 'https://image.univstore.com/apple_1102.png' },
        { href: 'https://www.univstore.com/brand/samsung', imageUrl: 'https://image.univstore.com/samsung_1102.png' },
        { href: 'https://www.univstore.com/brand/lg', imageUrl: 'https://image.univstore.com/lg_1102.png' },
        { href: 'https://www.univstore.com/brand/sony', imageUrl: 'https://image.univstore.com/sony_1102.png' },
        { href: 'https://www.univstore.com/brand/bose', imageUrl: 'https://image.univstore.com/brandlogo-bose-20230425.png' },
        { href: 'https://www.univstore.com/brand/playstation', imageUrl: 'https://image.univstore.com/brandlogo_playstation_221219.png' },
        { href: 'https://www.univstore.com/brand/hancom', imageUrl: 'https://image.univstore.com/brandlogo_hancom_230209.png' },
        { href: 'https://www.univstore.com/brand/logitech', imageUrl: 'https://image.univstore.com/logitech_1102.png' },
        { href: 'https://www.univstore.com/brand/hp', imageUrl: 'https://image.univstore.com/brandlogo-hp-20231111.png' },
        { href: 'https://www.univstore.com/brand/canon', imageUrl: 'https://image.univstore.com/brandlogo_canon_20231113_000000.png' },
        { href: 'https://www.univstore.com/brand/keychron', imageUrl: 'https://image.univstore.com/brandlogo_keychron_20231114.png' },
        { href: 'https://www.univstore.com/brand/wacom', imageUrl: 'https://image.univstore.com/wacom_1102.png' },
    ];

    const container = document.getElementById('ct9');
    
    const companyHTML = companies.map(company => `
        <a class="company" href="${company.href}" style="background-image: url('${company.imageUrl}')"></a>
    `).join('');

    container.innerHTML = companyHTML;
});


//comtainer10
const image = [
    { imageUrl: 'https://www.univstore.com/image/ic-money.png', 
      title1: '대학생 혜택을 위한 저렴한 가격', 
      title2: '다양한 유명 브랜드의 인기 상품을<br/>합리적인 가격으로 만나보세요.' },
    { imageUrl: 'https://www.univstore.com/image/ic-payment.png', 
      title1: '안전한 이니시스 결제 시스템 이용', 
      title2: '국내 1위 PG사인 이니시스의<br/>결제 시스템을 사용하고 있습니다.' }
  ];
  
  const ct10 = document.getElementById('ct10');
  
  image.map(imageData => {
    const imageBox = document.createElement('div');
    imageBox.classList.add('ct10-explanbox');
  
    const imageElement = document.createElement('div');
    imageElement.classList.add('ct10-expicutre');
    imageElement.style.backgroundImage = `url('${imageData.imageUrl}')`;
  
    const title1Element = document.createElement('div');
    title1Element.classList.add('ct10-extitle1');
    title1Element.textContent = imageData.title1;
  
    const title2Element = document.createElement('div');
    title2Element.classList.add('ct10-extitle2');
    title2Element.innerHTML = imageData.title2;  // 중간에 <br/>를 적용하기 위해서 textContent이 아니라 innerHTML를 사용

    imageBox.appendChild(imageElement);
    imageBox.appendChild(title1Element);
    imageBox.appendChild(title2Element);
  
    ct10.appendChild(imageBox);
  });