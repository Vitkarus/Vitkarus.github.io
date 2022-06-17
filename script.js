var segmentsAmount = 32;
var projectsAmount = 4;
var currentProject = 0;
var pillarState = 'none';

function getCSSvar(css)
{
    var a = getComputedStyle(document.documentElement).getPropertyValue(css);
    return a;
}

function init()
{
    // buildMainPillar();
    // buildSplittedPillar();
    // measureEdgelessCube(0, 0, 0);
    // measurePyramide();
    // trackCT();
    fillBackground();
    createELCs();
    arrangeELCs();
    setTimeout(changeLogo, getCSSvar('--changeLogo-setTimeout'), 'VN');
    switchItems('hide', 'about');
    switchItems('hide', 'links');
    switchItems('hide', 'projects');
    highlightOnScroll();
    setTimeout(removeLimiter, getCSSvar('--removeLimiter-setTimeout'));
    stateMachine('intro');

    
    scrollToProject(0);
} 

function fillBackground()
{
    var segmentCode = document.getElementById('background').innerHTML;
    var step;
    for (step = 0; step < 10000; step++) 
    {
        document.getElementById('background').insertAdjacentHTML('afterbegin', segmentCode); 
    }
}

function removeLimiter()
{
    document.getElementById('about').classList.remove('limiter');
    document.getElementById('projects').classList.remove('limiter');
    document.getElementById('links').classList.remove('limiter');
}

// ===== A D D I T I O N A L = M O R P H S =====

function reshapeSphere(action)
    {
        let tops = document.getElementById('ELCcontainer1').getElementsByClassName("ELC-top");
        let margin = document.getElementById('pillar').getElementsByClassName("ELC-margins");

        if (action == 'expand')
        {
            tops[0].style.transform = 'translateY(-50%) rotateX(60deg) rotateZ(45deg) rotateY(0deg)';
            tops[1].style.transform = 'translateY(-50%) rotateX(60deg) rotateZ(45deg) rotateY(60deg)';
            tops[2].style.transform = 'translateY(-50%) rotateX(60deg) rotateZ(45deg) rotateY(120deg)';
            tops[3].style.transform = 'translateY(-50%) rotateX(60deg) rotateZ(-45deg) rotateY(0deg)';
            tops[4].style.transform = 'translateY(-50%) rotateX(60deg) rotateZ(-45deg) rotateY(60deg)';
            tops[5].style.transform = 'translateY(-50%) rotateX(60deg) rotateZ(-45deg) rotateY(120deg)';
            tops[6].style.transform = 'translateY(-50%) rotateX(60deg) rotateZ(0deg) rotateY(0deg)';
            tops[7].style.transform = 'translateY(-50%) rotateX(60deg) rotateZ(0deg) rotateY(60deg)';
            tops[8].style.transform = 'translateY(-50%) rotateX(60deg) rotateZ(0deg) rotateY(120deg)';

            margin[0].style.height = '240px';
            margin[1].style.height = '220px';
            margin[2].style.height = '0px';
            margin[3].style.height = '0px';
        }
        if (action == 'colapse')
        {
            for (step = 0; step < 9; step++) 
            {
                tops[step].removeAttribute('style');
            }
        }
}

function reshapeWaves(action)
{
    let waves = document.getElementById('waves').getElementsByClassName("links-wave-mask");
    console.log('blahaha');

    if (action == 'expand'){for (var i = 0; i < 5; i++){setTimeout(showWaves, i*getCSSvar('--reshapeWaves-expand-setTimeout'), i);}}
    if (action == 'colapse'){for (var i = 0; i < 5; i++){setTimeout(hideWaves, i*getCSSvar('--reshapeWaves-colapse-setTimeout'), i);}}

    function showWaves(i)
    {
        waves[i].style.opacity = 1;
        waves[i].style.height = (i+1)*600 + "px";
        waves[i].style.width = (i+1)*600 + "px";
        waves[i].style.animationDelay = 0-(i+1)*25000 + "ms";
    }
    function hideWaves(i){waves[i].removeAttribute('style');}
}

function menu(action)
{
    let titles = document.getElementsByClassName('ST-textlink-container');
    let frames = document.getElementsByClassName("ST-frame-box");
    var spans = document.getElementById('introText').children;

    if (action == 'show')
    {
        // document.getElementById('intro').classList.remove('intro-container-hidden');
        for (var i = 0; i < 3; i++) {setTimeout(showMenu, i*getCSSvar('--menu-show-setTimeout'), i);}
        for (var i = 0; i < spans.length; i++) {setTimeout(showIntro, i*getCSSvar('--menu-show-setTimeout'), i);}
    }
    if (action == 'hide')
    {
        // document.getElementById('intro').classList.add('intro-container-hidden');
        for (var i = 0; i < 3; i++) {setTimeout(hideMenu, i*getCSSvar('--menu-hide-setTimeout'), i);}
        for (var i = 0; i < spans.length; i++) {setTimeout(hideIntro, i*getCSSvar('--menu-hide-setTimeout'), i);}
    }
    function showMenu(i)
    {
        titles[i].classList.remove('ST-hidden');
        frames[i].classList.remove('ST-hidden');
    }
    function hideMenu(i)
    {
        titles[i].classList.add('ST-hidden');
        frames[i].classList.add('ST-hidden');
    }
    function showIntro(i){spans[i].classList.remove('intro-main-text-hidden');}
    function hideIntro(i){spans[i].classList.add('intro-main-text-hidden');}
}

// === появление и исчезновение элементов подкатегорий ===

function switchItems(action, type)
{
    let items;
    if (type == 'about')
    {
        items = document.getElementById('about').children;
        if (action == 'show'){document.getElementById('about').style.pointerEvents = 'all'}
        if (action == 'hide'){document.getElementById('about').style.pointerEvents = 'none'}
    }
    if (type == 'projects')
    {
        items = document.getElementById('projects-scroll-area').children;
        if (action == 'show'){document.getElementById('projects').style.pointerEvents = 'all'}
        if (action == 'hide'){document.getElementById('projects').style.pointerEvents = 'none'}
    }
    if (type == 'links')
    {
        items = document.getElementById('links-scroll-area').children;
        if (action == 'show'){document.getElementById('links').style.pointerEvents = 'all'}
        if (action == 'hide'){document.getElementById('links').style.pointerEvents = 'none'}
    }
    for (var i = 0; i < 20; i++) 
    {
        if(action == 'show'){setTimeout(showItem, i*getCSSvar('--switchItems-show-setTimeout'), i);}
        if(action == 'hide'){setTimeout(hideItem, i*getCSSvar('--switchItems-hide-setTimeout'), i);}
    }
    function showItem(i){items[i].classList.remove('menus-hidden-item');}
    function hideItem(i){items[i].classList.add('menus-hidden-item');}
}


// ===== L O G O =====

function changeLogo(action)
{
    if (action == 'cross')
    {
        document.getElementById('logo').classList.add('logo-cross');
        document.getElementById('logo').parentElement.style.pointerEvents = 'all';
    }
    if (action == 'VN')
    {
        document.getElementById('logo').classList.remove('logo-hidden', 'logo-cross');
        document.getElementById('logo').parentElement.style.pointerEvents = 'none';
    }
}

// ===== I N T R O =====

var introTextsArray = [
    "nice to meet you.",
    "still here? that's cool.",
    "kept you waiting, huh?",
    "stop right there, criminal scum!",
    "hello there.",
    "bottom text. upper text.",
    "why can't safari handle my site :/",
    "graphic design is my passion.",
    "there's a lot more to do here."
]

function changeIntro()
{
    var introText = introTextsArray[Math.floor(Math.random() * introTextsArray.length)];
    // var introWords = introText.split(/(\s+)/);
    var introWords = introText.split(" ");
    var introSymbols = introText.length;
    var textSize = Math.abs(17/introSymbols);
    document.documentElement.style.setProperty('--intro-main-text-size', 18 * textSize + 'vh');
    // console.log(introSymbols);
    // console.log(introWords);
    document.getElementById('introText').innerHTML = '';
    for (var i = 0; i < introWords.length; i++)
    {
        document.getElementById('introText').insertAdjacentHTML('beforeend', '<span>' + introWords[i] + ' ' + '</span>');
    }   
    var introSpans = document.getElementById('introText').children;
    for (var i = 0; i < introWords.length; i++)
    {
        introSpans[i].classList.add('intro-main-text', 'intro-main-text-hidden');
    }  
}



