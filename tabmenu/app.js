const about = document.querySelector('.about');
const btns = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.content');
const aboutImg = document.querySelector('#about_img');

about.addEventListener('click', e => {
    const id = e.target.dataset.id;
    const index = e.target.dataset.index;
    if(id) {
        btns.forEach(function(btn) {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');
        contents.forEach(function(content) {
            content.classList.remove('active');
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
    if(index) {
        aboutImg.src = `https://www.subway.co.kr/images/utilization/img_sandwich0${index}.png`;
    }
});




