const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav ul');

toggle.addEventListener('click', () => {
    nav.classList.toggle('show-menu');
});

const menu = [
    {
        id: 1,
        title: "페퍼 치킨 슈니첼",
        category: "sandwich",
        sub: "신제품",
        calories: `472kcal`,
        img: "https://www.subway.co.kr/upload/menu/%ED%8E%98%ED%8D%BC%EC%B9%98%ED%82%A8%EC%8A%88%EB%8B%88%EC%B2%BC_%EC%83%8C%EB%93%9C%EC%9C%84%EC%B9%98_%EC%82%AC%EC%9D%B4%ED%8A%B8%EB%B3%80%EA%B2%BD_20210701033346396.png",
        desc: `써브웨이에서 만나는 슈니첼은!? 두툼한 치킨에 후추가 후추추! 콕콕 박힌 후추가 가득한 슈니첼의 풍미를 입안 가득 느껴보세요!`,
    },
    {
        id: 2,
        title: "페퍼로니 피자 썹",
        category: "sandwich",
        sub: "신제품",
        calories: `436kcal`,
        img: "https://www.subway.co.kr/upload/menu/Pepperoni%20Pizza_size%EB%B3%80%EA%B2%BD_20210628041904220.png",
        desc: `가벼운 가격으로 간편하게 즐기는 썹!`,
    },
    {
        id: 3,
        title: "쉬림프",
        category: "sandwich",
        sub: "프리미엄",
        calories: `229kcal`,
        img: "https://www.subway.co.kr/upload/menu/shrimp_20210315103931131.jpg",
        desc: `탱글한 식감이 그대로 살아있는 통새우가 5마리 들어가 한 입 베어 먹을 때 마다 진짜 새우의 풍미가 가득`,
    },
    {
        id: 4,
        title: "로스트 치킨",
        category: "sandwich",
        sub: "프레쉬&라이트",
        calories: `320kcal`,
        img: "https://www.subway.co.kr/upload/menu/%EB%A1%9C%EC%8A%A4%ED%8A%B8%EC%B9%98%ED%82%A8%EC%83%8C%EB%93%9C%EC%9C%84%EC%B9%98_20210503113731657.png",
        desc: `오븐에 구워 담백한 저칼로리 닭가슴살의 건강한 풍미`,
    },
    {
        id: 5,
        title: "에그마요",
        category: "sandwich",
        sub: "클래식",
        calories: `480kcal`,
        img: "https://www.subway.co.kr/upload/menu/%EC%97%90%EA%B7%B8%EB%A7%88%EC%9A%94_20200707034204773_20210204032015776.jpg",
        desc: `부드러운 달걀과 고소한 마요네즈가 만나 더 부드러운 스테디셀러`,
    },
    {
        id: 6,
        title: "K-바비큐",
        category: "sandwich",
        sub: "프리미엄",
        calories: `372kcal`,
        img: "https://www.subway.co.kr/upload/menu/sandwich_K-BBQ_20200901125954475_20210204032257598.jpg",
        desc: `써브웨이 최초의 코리안 스타일 샌드위치! 마늘, 간장 그리고 은은한 불맛까지!`,
    },
    {
        id: 7,
        title: "로티세리 바비큐 치킨",
        category: "sandwich",
        sub: "프레쉬&라이트",
        calories: `350kcal`,
        img: "https://www.subway.co.kr/upload/menu/item_sandwich_rotisserie_20210312063000816.jpg",
        desc: `촉촉한 바비큐 치킨의 풍미가득. 손으로 찢어 더욱 부드러운 치킨의 혁명`,
    },
    {
        id: 8,
        title: "풀드 포크 바비큐",
        category: "sandwich",
        sub: "프리미엄",
        calories: `327kcal`,
        img: "https://www.subway.co.kr/upload/menu/%ED%92%80%EB%93%9C%ED%8F%AC%ED%81%AC_20200914110036750.jpg",
        desc: `훈연한 미국 스타일의 폴드 포크 바비큐가 가득 들어간 샌드위치`,
    },
    {
        id: 9,
        title: "이탈리안 비엠티",
        category: "sandwich",
        sub: "클래식",
        calories: `410kcal`,
        img: "https://www.subway.co.kr/upload/menu/%EC%9D%B4%ED%83%88%EB%A6%AC%EC%95%88-%EB%B9%84%EC%97%A0%ED%8B%B0_20200707034231821_20210204025202539.jpg",
        desc: `페퍼로니, 살라미 그리고 햄이 만들어내는 최상의 조화! 전세계가 사랑하는 써브웨이의 베스트셀러! Biggest Meatiest Tastiest, it's B.M.T!`,
    },
    {
        id: 10,
        title: "비엘티",
        category: "sandwich",
        sub: "클래식",
        calories: `380kcal`,
        img: "https://www.subway.co.kr/upload/menu/%EB%B9%84%EC%97%98%ED%8B%B0_20200707033847305_20210204025320342.jpg",
        desc: `오리지널 아메리칸 스타일 베이컨의 풍미와 바삭함 그대로~`,
    },
    {
        id: 11,
        title: "미트볼",
        category: "sandwich",
        sub: "클래식",
        calories: `480kcal`,
        img: "https://www.subway.co.kr/upload/menu/%EB%AF%B8%ED%8A%B8%EB%B3%BC%EC%83%8C%EB%93%9C%EC%9C%84%EC%B9%98_20210503114049252.png",
        desc: `이탈리안 스타일 비프 미트볼에 써브웨이만의 풍부한 토마토 향이 살아있는 마리나라소스를 듬뿍`,
    },
    {
        id: 12,
        title: "햄",
        category: "sandwich",
        sub: "클래식",
        calories: `290kcal`,
        img: "https://www.subway.co.kr/upload/menu/%ED%96%84_20200707034527390_20210204024721139.jpg",
        desc: `기본 중에 기본! 풍부한 햄이 만들어내는 입 안 가득 넘치는 맛의 향연`,
    },
    {
        id: 13,
        title: "참치",
        category: "sandwich",
        sub: "클래식",
        calories: `480kcal`,
        img: "https://www.subway.co.kr/upload/menu/%EC%B0%B8%EC%B9%98_20200707034257210_20210204024840656.jpg",
        desc: `남녀노소 누구나 좋아하는 담백한 참치와 고소한 마요네즈의 완벽한 조화`,
    },
    {
        id: 14,
        title: "써브웨이 클럽",
        category: "sandwich",
        sub: "프레쉬&라이트",
        calories: `293kcal`,
        img: "https://www.subway.co.kr/upload/menu/%EC%8D%A8%EB%B8%8C%EC%9B%A8%EC%9D%B4%20%ED%81%B4%EB%9F%BD(%EC%83%8C%EB%93%9C%EC%9C%84%EC%B9%98)_20210503113422349.png",
        desc: `명실공히 시그니처 써브! 터키, 햄, 베이컨의 완벽한 앙상블`,
    },
    {
        id: 15,
        title: "터키",
        category: "sandwich",
        sub: "프레쉬&라이트",
        calories: `280kcal`,
        img: "https://www.subway.co.kr/upload/menu/item_sandwich_turkey_20210312063055119.jpg",
        desc: `280Kcal로 슬림하게 즐기는 오리지날 터키 샌드위치`,
    },
    {
        id: 16,
        title: "베지",
        category: "sandwich",
        sub: "프레쉬&라이트",
        calories: `230kcal`,
        img: "https://www.subway.co.kr/upload/menu/item_sandwich_veggie_20210312063107485.jpg",
        desc: `갓 구운 빵과 신선한 7가지 야채로 즐기는 깔끔한 한끼`,
    },
    {
        id: 17,
        title: "스테이크 $ 치즈",
        category: "sandwich",
        sub: "프리미엄",
        calories: `380kcal`,
        img: "https://www.subway.co.kr/upload/menu/steak_n_cheese_20210315103943888.jpg",
        desc: `육즙이 쫙~풍부한 비프 스테이크의 풍미가 입안 한가득`,
    },
    {
        id: 18,
        title: "터키 베이컨 아보카도",
        category: "sandwich",
        sub: "프리미엄",
        calories: `420kcal`,
        img: "https://www.subway.co.kr/upload/menu/%ED%84%B0%ED%82%A4%20%EB%B2%A0%EC%9D%B4%EC%BB%A8%20%EC%95%84%EB%B3%B4%EC%B9%B4%EB%8F%84_20200914105945007.jpg",
        desc: `담백한 터키와 바삭한 베이컨 환상조합에 부드러운 아보카도는 신의 한수`,
    },
    {
        id: 19,
        title: "스파이시 이탈리안",
        category: "sandwich",
        sub: "프리미엄",
        calories: `480kcal`,
        img: "https://www.subway.co.kr/upload/menu/%EC%8A%A4%ED%8C%8C%EC%9D%B4%EC%8B%9C%20%EC%9D%B4%ED%83%88%EB%A6%AC%EC%95%88_20200914110115080.jpg",
        desc: `살라미, 페퍼로니가 입안 한가득! 쏘 핫한 이탈리아의 맛`,
    },
    {
        id: 20,
        title: "치킨 데리야끼",
        category: "sandwich",
        sub: "프리미엄",
        calories: `370kcal`,
        img: "https://www.subway.co.kr/upload/menu/%EC%B9%98%ED%82%A8-%EB%8D%B0%EB%A6%AC%EC%95%BC%EB%81%BC_20200707034325843_20210204031836906.jpg",
        desc: `담백한 치킨 스트립에 달콤짭쪼름한 써브웨이 특제 데리야끼 소스와의 환상적인 만남`,
    },
];

const sectionCenter = document.querySelector('.section-center');
const subBtnContainer = document.querySelector('.sub-btn-container');
const menu_Item = document.querySelectorAll('.menu-item');

window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu);
    displayMenuButtons();
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map((item) => {
        return `<article class="menu-item">
                <img src=${item.img} alt=${item.title} class="photo">
                <div class="item-info">
                    <div class="item-title">
                        <h4>${item.title}</h4>
                        <h4 class="calories">${item.calories}</h4>
                    </div>
                    <p class="item-text">
                        ${item.desc}
                    </p>
                </div>
                </article>`;
    });

    displayMenu = displayMenu.join("");
    console.log(displayMenu);

    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
    const subCategories = menu.reduce(
        function(values, item) {
            if(!values.includes(item.sub)) {
                values.push(item.sub);
            }
            return values;
        },
        ["All"]
    );
    const subCategoryBtns = subCategories.map(function(sub) {
        return  `<button type="button" class="sub-btn" data-id=${sub}>
        ${sub}
        </button>`;
    })
    .join("");

    subBtnContainer.innerHTML = subCategoryBtns;

    const subBtns = subBtnContainer.querySelectorAll('.sub-btn');
    console.log(subBtns);

    subBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            //console.log(e.currentTarget.dataset);
    
            const sub = e.currentTarget.dataset.id; // click된 filter-btn의 data-id의 값을 sub에 저장함
            const menuCategory = menu.filter(function(menuItem) {
                if(menuItem.sub === sub) { // click된 filter-btn의 data-id의 값과 menu 중 하나인 menuItem의 sub의 값이 같다면 그 menuItem을 반환함 
                    return menuItem;                // 만약 data-id의 값이 lunch인 filter-btn을 click 했다면 menu 배열 중 "lunch"를 sub의 값으로 가진 menuItem을 반환함
                }
            });
            if(sub === "All") {
                displayMenuItems(menu); // sub가, 즉 data-id의 값이 "all"과 같다면 displayMenuItems() 함수의 인자에 menu를 넣어 메뉴 모두를 표시하도록 함
            } else {
                displayMenuItems(menuCategory); // sub가, 즉 data-id의 값이 "all"이 아닌 "breakfast"나 "lunch", "shakes"라면 
            }                                   // displayMenuItems() 함수의 인자로 menuCategory를 넣어 해당 data-id의 값, 즉 sub에 해당하는 menuItem만 표시하도록 함
        
            const id = e.currentTarget.dataset.id;
            if(id) {
                subBtns.forEach(function(b) {
                    b.classList.remove('current');
                });
                e.target.classList.add('current');
                menu_Item.forEach(function(c) {
                    c.classList.remove('current');
                });
                const element = document.getElementById(id);
                element.classList.add('current');
            }
        });
    });
}

