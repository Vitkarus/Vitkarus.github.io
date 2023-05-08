var segmentsAmount = 32;
var projectsAmount = 3;
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
    // introAnim();
    // fillBackground();
    createELCs();
    arrangeELCs();
    setTimeout(changeLogo, getCSSvar('--changeLogo-setTimeout'), 'VN');
    switchItems('hide', 'about');
    switchItems('hide', 'links');
    switchItems('hide', 'projects');
    highlightOnScroll();
    setTimeout(removeLimiter, getCSSvar('--removeLimiter-setTimeout'));
    setTimeout(stateMachine, 0, 'intro');
    // stateMachine('intro');
    
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

    if (action == 'expand')
    {
        for (var i = 0; i < 5; i++)
        {
            setTimeout(showWaves, (i+1)*500, i);
        }
    }
    if (action == 'colapse')
    {
        for (var i = 0; i < 5; i++)
        {
            waves[i].classList.add('links-wave-mask-hidden');
        }
    }
    function showWaves(i){waves[i].classList.remove('links-wave-mask-hidden');}

    // function showWaves(i)
    // {
    //     waves[i].style.opacity = 1;
    //     waves[i].style.height = (i+1)*600 + "px";
    //     waves[i].style.width = (i+1)*600 + "px";
    //     waves[i].style.animationDelay = 0-(i+1)*25000 + "ms";
    // }
    // function hideWaves(i){waves[i].removeAttribute('style');}
}

function menu(action)
{
    let titles = document.getElementsByClassName('ST-textlink-container');
    let frames = document.getElementsByClassName("ST-frame-box");
    var spans = document.getElementById('introText').children;
    var divs = document.getElementById('introSubText').children;

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
        for (var i = 0; i < divs.length; i++) {setTimeout(hideSubIntro, i*getCSSvar('--menu-hide-setTimeout'), i);}
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
    function hideSubIntro(i){divs[i].classList.add('intro-main-text-hidden');}
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

// ===== T O P = B A R =====

function changeTopBar(id)
{
    var topBarItems = document.getElementById('topBar').children;
    if (id == 'menu')
    {
        topBarItems[0].classList.add('top-bar-wrapper-hidden');
        topBarItems[1].classList.add('top-bar-wrapper-hidden');
        topBarItems[2].classList.add('top-bar-wrapper-hidden');
    }
    if (id == 'about')
    {
        topBarItems[0].classList.add('top-bar-wrapper-hidden');
        topBarItems[1].classList.remove('top-bar-wrapper-hidden');
        topBarItems[2].classList.remove('top-bar-wrapper-hidden');
    }
    if (id == 'projects')
    {
        topBarItems[0].classList.remove('top-bar-wrapper-hidden');
        topBarItems[1].classList.add('top-bar-wrapper-hidden');
        topBarItems[2].classList.remove('top-bar-wrapper-hidden');
    }
    if (id == 'links')
    {
        topBarItems[0].classList.remove('top-bar-wrapper-hidden');
        topBarItems[1].classList.remove('top-bar-wrapper-hidden');
        topBarItems[2].classList.add('top-bar-wrapper-hidden');
    }
}

// ===== I N T R O =====

function introAnim()
{
    var childrenAmount = document.getElementById('opening1').childElementCount + document.getElementById('opening2').childElementCount;
    var divs1 = document.getElementById('opening1').children;
    var divs2 = document.getElementById('opening2').children;
    var divs3 = divs1.concat(divs2);
    for (var i = 0; i < childrenAmount; i++) {setTimeout(hide, i * 200, i);}
    function hide(i){divs1[i].classList.add('intro-main-text-hidden');}

    divs1[i].classList.add('intro-main-text-hidden');
        divs2[i].classList.add('intro-main-text-hidden');
}

var introTextsArray = [
    "graphic design is my passion.", 
    // "nice to meet you.",
    "still here? that's cool.",
    "kept you waiting, huh?",
    // "stop right there, criminal scum!",
    "hello there.",
    "bottom text. upper text.",
    // "why can't safari handle my site :/",
    // "there's a lot more to do here.",
    // "why write random stuff on twitter when you can do it on the main of your website?",
    "someday i will definitely add a mini-game to my site, like all cool devs do.",
    // "one of the pillar plates is clickable 👀",
    // "do not repeat my mistakes, use a <b>transform</b> to change the size of the elements.",
    // "any tips to improve my site? send me them via email or telegram!"
]

function changeIntro()
{
    var number = Math.floor(Math.random() * introTextsArray.length);
    var introText = introTextsArray[number];
    if (number == 0){document.documentElement.style.setProperty('--intro-main-text-font', "ComicSans");}
    else {document.documentElement.style.setProperty('--intro-main-text-font', "Square721");};
    // var introWords = introText.split(/(\s+)/);
    var introWords = introText.split(" ");
    var introSymbols = introText.length;
    var textSize = Math.abs(20/introSymbols);
    document.documentElement.style.setProperty('--intro-main-text-size', 140 * textSize + 'px');
    // console.log(introSymbols);
    // console.log(introWords);
    document.getElementById('introSubText').innerHTML = '';
    document.getElementById('introText').innerHTML = '';
    for (var i = 0; i < introWords.length; i++)
    {
        document.getElementById('introText').insertAdjacentHTML('beforeend', '<div>' + introWords[i] + ' ' + '</div>');
    }   
    var introSpans = document.getElementById('introText').children;
    for (var i = 0; i < introWords.length; i++)
    {
        introSpans[i].classList.add('intro-main-text', 'intro-main-text-hidden');
    }  
}



