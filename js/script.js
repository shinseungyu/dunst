document.addEventListener(`DOMContentLoaded`, function () { 

    // 반응형 사이즈에 따라 스와이퍼 초기화 또는 제거
    // 스와이퍼를 제거할때 그냥 반응형 사이즈만 설정하고 제거할 경우 스와이퍼 변수는 여전히 객체라는 존재로 남게된다

    // 스와이퍼 변수 선언
    let swiper = undefined;

    function initSwiper() {
        //윈도우 너비값을 변수에 저장
        const windowWidth = window.innerWidth;

        if (windowWidth >= 960 && swiper == undefined) {
            // swiper
            swiper = new Swiper(".mySwiper", {
                loop: true,
                effect: "fade",
                speed: 1500,
                autoplay: {
                delay: 1500,  
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
        } else if(windowWidth < 960 && swiper != undefined) {
            swiper.destroy();
            swiper = undefined;
        }
    }

    // 함수 전역 호출
    initSwiper();

    // 윈도우가 리사이즈 될때 스와이퍼 자동 반응 설정
    window.addEventListener(`resize`, () => { 
        initSwiper();
    });

    // submenu
    const menuBtn = document.querySelector(`.menu_btn`);
    const menuBarBox = document.querySelector(`.menu_bar_box`);

    menuBtn.addEventListener(`click`, function () { 
        this.classList.toggle(`active`);

        const menuHas = menuBtn.classList.contains(`active`);


        if (menuHas === true) {
            menuBarBox.classList.add(`active`);  
        } else {
            menuBarBox.classList.remove(`active`);  
        }

    });

    // scroll

    window.addEventListener(`scroll`, () => {
        const scrollYoffset = window.scrollY;
        console.log(scrollYoffset);

        const headerSection = document.querySelectorAll(`.header_area, .header_logo, .menu_btn`);

        for (const hs of headerSection){
            if (scrollYoffset >= 200) {
                hs.classList.add(`on`);
            } else {
                hs.classList.remove(`on`);
            }
        }
    });

});