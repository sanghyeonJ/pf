document.addEventListener("touchstart", function() {}, true); // 모바일 hover 적용

// 스크롤 애니메이션
function scollAni(){
    let content = document.querySelectorAll('.ani');
    for(let i = 0; i < content.length; i++){
        if(window.scrollY >= content[i].offsetTop - window.innerHeight + content[i].offsetHeight + 20 &&
            window.scrollY <= content[i].offsetTop + content[i].offsetHeight){
                content[i].classList.add('on')
            } else{
                content[i].classList.remove('on')
            }
    }
}
scollAni()

window.addEventListener('scroll',scollAni)

