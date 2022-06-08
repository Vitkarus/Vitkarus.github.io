var segmentsAmount = 32;
var projectsAmount = 4;
var currentProject = 0;
var pillarState = 'none';


function init()
{
    // buildMainPillar();
    // buildSplittedPillar();
    // measureEdgelessCube(0, 0, 0);
    // measurePyramide();
    trackCT();
    // fillBackground();
    createELCs();
    arrangeELCs();
    scrollToProject(0);
} 

function trackCT()
{
    window.addEventListener('mousemove', track);
    function track(CTarea)
    {
        document.getElementById('CT').innerHTML = CTarea.pageX + '  |  ' + CTarea.pageY;
        document.getElementById('CT').style.left = CTarea.pageX + 'px';
        document.getElementById('CT').style.top = CTarea.pageY + 'px';
    }
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

function stateMachine(state)
{
    let margin = document.getElementById('pillar').getElementsByClassName("ELC-margins");

    if (state == 'menu')
    {
        pillarState = 'menu';

        document.documentElement.style.setProperty('--ELC-length-global', "200px");
        document.documentElement.style.setProperty('--ELC-border-radius-global', "35px");
        document.documentElement.style.setProperty('--ELC-height-global', "13px");
        document.documentElement.style.setProperty('--ELC-margins-global', "20px");

        document.documentElement.style.setProperty('--ELC-offset-height-global', "55px");
        document.documentElement.style.setProperty('--ELC-offset-step-global', "2px");
        document.documentElement.style.setProperty('--ELC-offset-width-global', "66%");
        
        document.documentElement.style.setProperty('--ELC-length-step-global', "6px");
        document.documentElement.style.setProperty('--ELC-border-radius-step-global', "1px");
        document.documentElement.style.setProperty('--ELC-height-step-global', "2px");

        margin[0].removeAttribute('style');
        margin[1].removeAttribute('style');
        margin[2].removeAttribute('style');
        margin[3].removeAttribute('style');

        document.getElementById('ELCwrapper1').className = 'ELC-wrapper-1';
        document.getElementById('ELCwrapper0').className = 'ELC-wrapper-0';
        document.getElementById('ELCwrapper-1').className = 'ELC-wrapper-1';

        var temp;
        for (temp = (0); temp > (0 - projectsAmount); temp--) 
        {
            document.getElementById('ELCwrapper' + temp).parentElement.style.marginTop = '0px';
            document.getElementById('ELCwrapper' + temp).parentElement.style.marginBottom = '0px';
        }

        var variable;
        for (variable = (-2); variable > (0 - projectsAmount); variable--) 
        {document.getElementById('ELCwrapper' + variable).className = 'ELC-wrapper-next';}

        setTimeout(menu, 1000, 'show');
        about('hide');
        projects('hide');
        links('hide');
        arrangeELCs();
    }
    if (state == 'about')
    {
        pillarState = 'about';

        document.documentElement.style.setProperty('--ELC-length-global', "100px");
        document.documentElement.style.setProperty('--ELC-border-radius-global', "50px");
        document.documentElement.style.setProperty('--ELC-height-global', "30px");
        document.documentElement.style.setProperty('--ELC-margins-global', "100px");

        document.documentElement.style.setProperty('--ELC-offset-height-global', "50px");
        document.documentElement.style.setProperty('--ELC-offset-step-global', "0px");
        document.documentElement.style.setProperty('--ELC-offset-width-global', "50%");
        
        document.documentElement.style.setProperty('--ELC-length-step-global', "0px");
        document.documentElement.style.setProperty('--ELC-border-radius-step-global', "0px");
        document.documentElement.style.setProperty('--ELC-height-step-global', "0px");

        margin[0].style.height = '150px';
        margin[1].style.height = '150px';
        margin[2].style.height = '0px';
        margin[3].style.height = '0px';

        document.getElementById('ELCwrapper1').classList.add('ELC-wrapper-core');
        document.getElementById('ELCwrapper0').classList.add('ELC-wrapper-next');
        document.getElementById('ELCwrapper-1').classList.add('ELC-wrapper-next');

        centerELCs();
        setTimeout(moveToRight, 0);
        menu('hide');
        about('show');
    }
    if (state == 'projects')
    {
        pillarState = 'projects';

        document.documentElement.style.setProperty('--ELC-length-global', "70px");
        document.documentElement.style.setProperty('--ELC-border-radius-global', "35px");
        document.documentElement.style.setProperty('--ELC-height-global', "42px");
        document.documentElement.style.setProperty('--ELC-margins-global', "100px");

        document.documentElement.style.setProperty('--ELC-offset-height-global', "40px");
        document.documentElement.style.setProperty('--ELC-offset-step-global', "0px");
        document.documentElement.style.setProperty('--ELC-offset-width-global', "50%");
        
        document.documentElement.style.setProperty('--ELC-length-step-global', "0px");
        document.documentElement.style.setProperty('--ELC-border-radius-step-global', "0px");
        document.documentElement.style.setProperty('--ELC-height-step-global', "0px");

        var variable;
        for (variable = (-1); variable > (0 - projectsAmount); variable--) 
        {
            document.getElementById('ELCwrapper' + variable).classList.add('ELC-wrapper-part-other');
            document.getElementById('ELCwrapper' + variable).parentElement.style.marginBottom = '60px';
        }

        document.getElementById('ELCwrapper1').classList.add('ELC-wrapper-next');
        document.getElementById('ELCwrapper0').classList.add('ELC-wrapper-part-selected');
        document.getElementById('ELCwrapper0').parentElement.style.marginTop = '60px';
        document.getElementById('ELCwrapper0').parentElement.style.marginBottom = '60px';
        // document.getElementById('ELCwrapper-1').classList.add('ELC-wrapper-next');

        margin[0].style.height = '0px';
        margin[1].style.height = '0px';
        margin[2].style.height = '0px';
        margin[3].style.height = '0px';

        centerELCs();
        setTimeout(moveToRight, 0);
        menu('hide');
        projects('show');
        scrollToProject(0);
    }
    if (state == 'links')
    {
        pillarState = 'links';

        document.documentElement.style.setProperty('--ELC-length-global', "100px");
        document.documentElement.style.setProperty('--ELC-border-radius-global', "0px");
        document.documentElement.style.setProperty('--ELC-height-global', "40px");
        document.documentElement.style.setProperty('--ELC-margins-global', "100px");

        document.documentElement.style.setProperty('--ELC-offset-height-global', "80px");
        document.documentElement.style.setProperty('--ELC-offset-step-global', "0px");
        document.documentElement.style.setProperty('--ELC-offset-width-global', "50%");
        
        document.documentElement.style.setProperty('--ELC-length-step-global', "-20px");
        document.documentElement.style.setProperty('--ELC-border-radius-step-global', "0px");
        document.documentElement.style.setProperty('--ELC-height-step-global', "0px");

        margin[0].style.height = '0px';
        margin[1].style.height = '0px';
        margin[2].style.height = '200px';
        margin[3].style.height = '200px';

        // document.getElementById('ELCwrapper0').style.setProperty('--ELC-glass-color', 'var(--ELC-glass-color2)');
        document.getElementById('ELCwrapper1').classList.add('ELC-wrapper-next');
        document.getElementById('ELCwrapper0').classList.add('ELC-wrapper-next');
        document.getElementById('ELCwrapper-1').classList.add('ELC-wrapper-link');

        centerELCs();
        setTimeout(moveToRight, 0);
        menu('hide');
        links('show');
    }

    function centerELCs()
    {
        var step;
        for (step = (1 - segmentsAmount); step < (segmentsAmount - 1); step++) {document.getElementById('ELCwrapper' + step).parentElement.style.transform = 'translateX(0px)';}
    }

    function moveToRight(){document.documentElement.style.setProperty('--ELC-offset-width-global', "83%");}
}

function menu(action)
{
    let titles = document.getElementsByClassName("ST-textlink-container");
    if (action == 'show')
    {
        titles[0].removeAttribute('style');
        titles[1].removeAttribute('style');
        titles[2].removeAttribute('style');
    }
    if (action == 'hide')
    {
        titles[0].style.width = '100%';
        titles[1].style.width = '100%';
        titles[2].style.width = '100%';

        titles[0].style.filter = 'blur(100px)';
        titles[1].style.filter = 'blur(100px)';
        titles[2].style.filter = 'blur(100px)';
    }
}
function about(action)
{
    if (action == 'show')
    {
        document.getElementById('about').style.opacity = 1;
        document.getElementById('about').style.pointerEvents = 'all';
    }
    if (action == 'hide')
    {
        document.getElementById('about').style.opacity = 0;
        document.getElementById('about').style.pointerEvents = 'none';
    }  
}
function projects(action)
{
    if (action == 'show')
    {
        document.getElementById('projects').style.opacity = 1;
        document.getElementById('projects').style.pointerEvents = 'all';
    }
    if (action == 'hide')
    {
        document.getElementById('projects').style.opacity = 0;
        document.getElementById('projects').style.pointerEvents = 'none';
    }  
}
function links(action)
{
    if (action == 'show')
    {
        document.getElementById('links').style.opacity = 1;
        document.getElementById('links').style.pointerEvents = 'all';
    }
    if (action == 'hide')
    {
        document.getElementById('links').style.opacity = 0;
        document.getElementById('links').style.pointerEvents = 'none';
    }  
}

function scrollToProject(id)
{
    let project = document.getElementsByClassName("project-cell-container");
    var number = 0 - id;

    // if (id == 1){console.log('zero'); number = 0;}
    // if (id == 0){console.log('one'); number = 1;}
    // if (id < 0){console.log('more'); number = 1 - id;}
    
    
    var offset = project[number].offsetTop - 110;
    project[0].parentElement.scrollTo({top: offset, behavior: 'smooth'});
    console.log(offset);
    
}

function selectProject(id)
{
    if (pillarState == 'projects')
    {
        var variable;
        for (variable = (0); variable > (0 - projectsAmount); variable--) {document.getElementById('ELCwrapper' + variable).classList.remove('ELC-wrapper-part-selected');}
        document.getElementById('ELCwrapper' + id).classList.add('ELC-wrapper-part-selected');
    }
}

// ===== E L C =====
function createELCs()
{
    var segmentCode = document.getElementById('ELCcontainer1').innerHTML;
    var step;
    for (step = 2; step < segmentsAmount; step++) 
    {
        document.getElementById('pillar').insertAdjacentHTML('afterbegin', '<div class="ELC-offset" style="--z:' + step +'; --s:' + Math.abs(step) + '"><div id="ELCwrapper' + step + '" class="ELC-wrapper-next"><div id="ELCcontainer' + step + '" class="ELC-container" onmouseover="startReflectLight(' + step + ')" onmouseout="stopReflectLight(' + step + ')">' + segmentCode + '</div></div></div>'); 
    }
    for (step = -2; step > (0 - segmentsAmount); step--) 
    {
        //document.getElementById('pillar').innerHTML += '<div class="ELC-offset" style="--z:' + step +'"><div id="ELCwrapper' + step + '" class="ELC-wrapper-next"><div id="ELCcontainer' + step + '" class="ELC-container"></div>' + segmentCode + '</div></div></div>'; 
        document.getElementById('pillar').insertAdjacentHTML('beforeend', '<div class="ELC-offset" style="--z:' + step +'; --s:' + Math.abs(step) + '"><div id="ELCwrapper' + step + '" class="ELC-wrapper-next"><div id="ELCcontainer' + step + '" class="ELC-container" onmouseover="startReflectLight(' + step + ')" onmouseout="stopReflectLight(' + step + ')">' + segmentCode + '</div></div></div>'); 
    }
}
function arrangeELCs()
{
    segmentsHalf = Math.trunc(segmentsAmount/2);
    var step;
    var i = 1;
    var j = 50; //96
    for (step = 0; step < (segmentsHalf + 1); step++) 
    {
        document.getElementById('ELCwrapper' + step).parentElement.style.transform = 'translateX(' + step*j + 'px)';
        document.getElementById('ELCwrapper' + (0 - step)).parentElement.style.transform = 'translateX(' + (0 - step*j) + 'px)';
        j = j - 3;
    }
    i = 1;
    j = 50; //93
    for (step = (segmentsAmount - 1); step > (segmentsHalf - 1); step--) 
    {
        document.getElementById('ELCwrapper' + step).parentElement.style.transform = 'translateX(' + i*j + 'px)';
        document.getElementById('ELCwrapper' + (0 - step)).parentElement.style.transform = 'translateX(' + (0 - i*j) + 'px)';
        i++;
        j = j - 3;
    }
}

// ===== Н А К Л О Н = E L C =====
function startTiltELC(id)
{
    // function tiltDelay()
    // {
    //     document.getElementById('ELCcontainer' + id).style.transition = 'none';
    //     document.getElementById('test').innerHTML = 'yo';
    // }
    // setTimeout(tiltDelay, 10000);

    document.getElementById('ELCcontainer' + id).style.transition = 'all 2s';
    document.getElementById('ELCwrapper' + id).addEventListener("mousemove", tilt, false);
    function tilt(ELC)
    {
        
        var frame = ELC.target.getBoundingClientRect();
        var halfHeight = frame.top / 2;
        var halfWidth = frame.left / 2;
        var x = ELC.clientX - frame.left;
        var y = ELC.clientY - frame.top;
        var rotX = (y - halfHeight)/frame.left*100;
        var rotZ = (x - halfWidth)/frame.left*20;
        document.getElementById('ELCcontainer' + id).style.transform = 'rotateZ(' + rotZ + 'deg)';
        // document.getElementById('ELCcontainer' + id).style.transform = 'rotateX(' + rotX + 'deg) rotateZ(' + rotZ + 'deg)';
        // document.getElementById('test').innerHTML = halfHeight + '  |  ' + halfWidth + '  |  ' + rotZ + '  |  ' + rotX;
    }
}
function stopTiltELC(id)
{
    document.getElementById('ELCcontainer' + id).style.transition = 'all 2s';
    document.getElementById('ELCcontainer' + id).style.transform = 'rotateZ(0deg)';
    document.getElementById('ELCwrapper' + id).removeEventListener("mousemove", tilt, false);
}

// ===== П О Д С В Е Т К А = E L C =====
function activateMenu(id, action)
{
    if (action == 'menu')
    {
        switch(id)
        {
            case 'aboutText': document.getElementById('ELCcontainer1').classList.add('ELC-container-hover'); break;
            case 'projectsText': document.getElementById('ELCcontainer0').classList.add('ELC-container-hover'); break;
            case 'linksText': document.getElementById('ELCcontainer-1').classList.add('ELC-container-hover'); break;
        }
    }
    if (action == 'ELC')
    {}
}
function deactivateMenu(id, action)
{
    if (action == 'menu')
    {
        switch(id)
        {
            case 'aboutText': document.getElementById('ELCcontainer1').classList.remove('ELC-container-hover'); break;
            case 'projectsText': document.getElementById('ELCcontainer0').classList.remove('ELC-container-hover'); break;
            case 'linksText': document.getElementById('ELCcontainer-1').classList.remove('ELC-container-hover'); break;
        }
    }
    if (action == 'ELC')
    {}
}
function startReflectLight(id)
{
    let upperSlate = document.getElementById('ELCcontainer' + (id + 1)).getElementsByClassName("ELC-lightning-receiving");
    let bottomSlate = document.getElementById('ELCcontainer' + (id - 1)).getElementsByClassName('ELC-lightning-receiving');

    console.log('lol');
    
    
        upperSlate[1].style.opacity = 0.3;
        upperSlate[2].style.opacity = 0.3;
    
        bottomSlate[0].style.opacity = 0.3;
        bottomSlate[1].style.opacity = 0.3;
        bottomSlate[2].style.opacity = 0.3;

        
    selectProject(id);
    scrollToProject(id);
    // startTiltELC(id);
}
function stopReflectLight(id)
{
    console.log('stop')
    let upperSlate = document.getElementById('ELCcontainer' + (id + 1)).getElementsByClassName("ELC-lightning-receiving");
    let bottomSlate = document.getElementById('ELCcontainer' + (id - 1)).getElementsByClassName('ELC-lightning-receiving');

    
        upperSlate[1].style.opacity = 0;
        upperSlate[2].style.opacity = 0;
    
        bottomSlate[0].style.opacity = 0;
        bottomSlate[1].style.opacity = 0;
        bottomSlate[2].style.opacity = 0;

        // stopTiltELC(id);
}

// ===== S C R A P S =====

function buildMainPillar()
{
    var segmentsAmount = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--main-pillar-segments-amount'));
    var topSegmentCode = document.getElementById('MP-top-segment-sample').innerHTML;
    var bottomSegmentCode = document.getElementById('MP-bottom-segment-sample').innerHTML;
    var step;
    for (step = segmentsAmount; step > 0; step--) 
    {
        document.getElementById('MP-wrapper-top').innerHTML += '<div class="main-pillar-top-layer" style="--j:' + step +'">' + topSegmentCode + '</div>';
        document.getElementById('MP-wrapper-bottom').innerHTML += '<div class="main-pillar-bottom-layer" style="--i:' + step +'">' + bottomSegmentCode + '</div>';
    } 
}

function buildSplittedPillar()
{
    var segmentsAmount = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--main-pillar-segments-amount'));
    var segmentsAmountHalf = (segmentsAmount - 3)/2;
    var topSegmentCode = document.getElementById('menu-top-segment-sample').innerHTML;
    var bottomSegmentCode = document.getElementById('menu-bottom-segment-sample').innerHTML;
    var step;
    for (step = segmentsAmountHalf; step > 0; step--) 
    {
        document.getElementById('menu-wrapper-bottom').innerHTML += '<div class="MP-menu-layer" style="--a:' + step +'">' + bottomSegmentCode + '</div>';
    } 
    for (step = (segmentsAmount + 3); step > (segmentsAmount - segmentsAmountHalf + 3); step--) 
    {
        document.getElementById('menu-wrapper-top').innerHTML += '<div class="MP-menu-layer" style="--a:' + step +'">' + topSegmentCode + '</div>';
    } 
    document.getElementById('links').style.zIndex = segmentsAmountHalf + 3;
    document.getElementById('projects').style.zIndex = segmentsAmountHalf + 4;
    document.getElementById('about').style.zIndex = segmentsAmountHalf + 5;
}

function measureEdgelessCube(edgeLength, borderRadius, instanceNumber)
{
    var ELClength = parseFloat(document.getElementById('debug4').getComputedStyle(document.documentElement).getPropertyValue('--ELC-length'));
    document.getElementById('debug3').innerHTML = 'ELClength';
}

function measurePyramide()
{
    var pyramideSize = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--pyramide-size'));
    var pyramideTop = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--pyramide-size-top'));
    var pyramideHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--pyramide-height'));
    
    document.documentElement.style.setProperty("--pyramide-size-anti", 0 - pyramideSize + 'px');
    
    var pyramideTopMargin = (pyramideSize - pyramideTop)/2;
    
    document.documentElement.style.setProperty("--pyramide-top-margin", pyramideTopMargin + 'px');

    var a, b, c;
    a = pyramideHeight;
    b = pyramideTopMargin;
    c = Math.sqrt(a*a + b*b);

    document.documentElement.style.setProperty("--side-length", c + 'px');
    document.documentElement.style.setProperty("--side-length-anti", 0 - c + 'px');
    document.documentElement.style.setProperty("--side-length-difference", pyramideSize - c + 'px');

    var pyramideAngle = Math.asin(pyramideHeight/c) * 180/Math.PI;

    document.documentElement.style.setProperty("--pyramide-angle-anti", 0 - pyramideAngle + 'deg');
    document.documentElement.style.setProperty("--pyramide-angle-difference-anti", 0 - 180 + pyramideAngle + 'deg');

    document.getElementById('debug').innerHTML = pyramideAngle;
}