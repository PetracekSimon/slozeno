let firstTitle = document.querySelector('#firstTitle');
let secondTitle = document.querySelector('#secondTitle');

window.addEventListener('scroll', handleTextParallax);

function handleTextParallax() {
    firstTitle.style = `left: ${0.1 * window.scrollY - 80}%;`;
    secondTitle.style = `right: ${0.1 * window.scrollY - 80}%;`;
}

let points = document.querySelectorAll('.point-wrapper');
points.forEach((point) => {
    point.addEventListener('mouseenter', () => mouseenterStore(point.children[0]));
    point.addEventListener('mouseleave', () => mouseleaveStore(point.children[0]));
});

function mouseenterStore(point) {
    let translate = point.getAttribute('transform');
    point.style.transform = `translate(${getOnlyDigits(translate.split(' ')[0]) - 2}px, ${getOnlyDigits(translate.split(' ')[1]) - 2}px) scale(1.2)`;
    document.querySelector(`.store-tile[data-id='${point.id.split('_')[1]}']`).classList.add('active');
}

function mouseleaveStore(point) {
    point.style.transform = _formatTraslate(point.getAttribute('transform'));
    document.querySelector(`.store-tile[data-id='${point.id.split('_')[1]}']`).classList.remove('active');
}

function _formatTraslate(translate) {
    let cssTranslate = translate.split(' ')[0] + 'px, ' + translate.split(' ')[1].replace(')', 'px)');
    return cssTranslate;
}

function getOnlyDigits(str) {
    return Number(str.replace(/\D/g, ''));
}

let moreAbout = document.querySelector('.link-wrapper span');
let aboutCloseBtn = document.querySelector('#aboutCloseBtn');
let closeAboutPage = document.querySelector('#closeAboutPage');
let aboutSection = document.querySelector('.about-page');
moreAbout.addEventListener('click', () => {
    aboutSection.style.top = '0';
    document.body.style.overflowY = 'hidden';
});
aboutCloseBtn.addEventListener('click', () => {
    aboutSection.style.top = '100%';
    document.body.style.overflowY = 'auto';
});
closeAboutPage.addEventListener('click', () => {
    aboutSection.style.top = '100%';
    document.body.style.overflowY = 'auto';
});

let effectTitles = document.querySelectorAll('.effect-title > div');

effectTitles.forEach((title) => {
    title.addEventListener('click', () => {
        document.querySelector('.effect-title > div.active').classList.remove('active');
        document.querySelector('#effect .right-side .content.active').classList.remove('active');
        title.classList.add('active');
        document.querySelector(`#effect .right-side .content.content-${title.dataset.contentId}`).classList.add('active');
    });
});

setTimeout(() => {
    const bagdes = document.querySelectorAll('.item-image-badge');
    const elementArr = document.querySelectorAll('#productPhoto');
    let powderDetailWindow = document.querySelector('#powderDetailWindow');
    let powderDetailWindowContent = document.querySelectorAll('#powderDetailWindow .content');
    let powderDetailWindowTransparentLeft = document.querySelector('#powderDetailWindowTransparentLeft');
    let closeDetailBtns = document.querySelectorAll('#powderDetailWindow .close-detail-btn');
    let moved = false;
    const checkMove = (e) => {
        if (e.movementX || e.movementY) {
            moved = true;
        }
    };
    bagdes.forEach((badge) => {
        badge.addEventListener('mousedown', () => {
            badge.addEventListener('mousemove', checkMove);
        });
        badge.addEventListener('mouseup', () => {
            badge.removeEventListener('mousemove', checkMove);
            if (!moved) {
                console.log(badge.dataset);
                openProductDetail(badge.dataset.name);
            } else {
                moved = false;
            }
        });
    });
    elementArr.forEach((element) => {
        element.addEventListener('mousedown', () => {
            element.addEventListener('mousemove', checkMove);
        });
        element.addEventListener('mouseup', () => {
            element.removeEventListener('mousemove', checkMove);
            if (!moved) {
                openProductDetail(element.dataset.name);
            } else {
                moved = false;
            }
        });
    });
    powderDetailWindowTransparentLeft.addEventListener('click', () => {
        powderDetailWindow.classList.remove('open');
        powderDetailWindowTransparentLeft.classList.remove('open');
    });
    closeDetailBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            powderDetailWindow.classList.remove('open');
            powderDetailWindowTransparentLeft.classList.remove('open');
        });
    });
    function openProductDetail(name) {
        document.querySelector('#powder').scrollIntoView();
        powderDetailWindow.classList.add('open');
        powderDetailWindowTransparentLeft.classList.add('open');
        powderDetailWindowContent.forEach((content) => {
            if (content.classList.contains(name)) {
                content.classList.add('display');
            } else {
                content.classList.remove('display');
            }
        });
    }
}, 30);

let capsuleVideo = document.querySelector('#capsuleVideo');
let capsuleDetailWindowTransparentLeft = document.querySelector('#capsuleDetailWindowTransparentLeft');
let capsuleDetailWindow = document.querySelector('#capsuleDetailWindow');
let capsuleDetailWindowContent = document.querySelector('#capsuleDetailWindow .content');
let closeCapsuleBtn = document.querySelector('#capsuleDetailWindow .close-detail-btn');

capsuleDetailWindowTransparentLeft.addEventListener('click', () => {
    capsuleDetailWindowTransparentLeft.classList.remove("open");
    capsuleDetailWindow.classList.remove("open");
});

closeCapsuleBtn.addEventListener('click', () => {
    capsuleDetailWindowTransparentLeft.classList.remove("open");
    capsuleDetailWindow.classList.remove("open");
});
capsuleVideo.addEventListener('click', () => {
    document.querySelector('#capsule').scrollIntoView();
    capsuleDetailWindowTransparentLeft.classList.add('open');
    capsuleDetailWindow.classList.add('open');
});
