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
    fillBackground();
    createELCs();
    arrangeELCs();
    switchItems('hide', 'about');
    switchItems('hide', 'links');
    switchItems('hide', 'projects');
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
    let offsets = document.getElementById('pillar').getElementsByClassName("ELC-offset");
    var temp1;
    var variable;

    if (state == 'menu')
    {
        pillarState = 'menu';

        for (temp1 = 0; temp1 < segmentsAmount*2; temp1++) 
        {
            setTimeout(applyMenuVariables, temp1*0 , temp1);
            setTimeout(applyMenuVariables, temp1*0 , segmentsAmount - 1 + temp1);
        }

        function applyMenuVariables(id)
        {
            offsets[id].style.setProperty('--ELC-length-global', "200px");
            offsets[id].style.setProperty('--ELC-border-radius-global', "35px");
            offsets[id].style.setProperty('--ELC-height-global', "13px");
            offsets[id].style.setProperty('--ELC-margins-global', "20px");
    
            offsets[id].style.setProperty('--ELC-offset-height-global', "55px");
            offsets[id].style.setProperty('--ELC-offset-step-global', "2px");
            offsets[id].style.setProperty('--ELC-offset-width-global', "66%");
            
            offsets[id].style.setProperty('--ELC-length-step-global', "6px");
            offsets[id].style.setProperty('--ELC-border-radius-step-global', "1px");
            offsets[id].style.setProperty('--ELC-height-step-global', "2px");

            document.documentElement.style.setProperty('--ELC-transformY-global', "20vh");
    
            offsets[id].style.setProperty('--ELC-shadow-NW-indent', "0px");
            offsets[id].style.setProperty('--ELC-shadow-SE-indent', "20px");
            offsets[id].style.setProperty('--ELC-shadow-NE-indent', "0px");
            offsets[id].style.setProperty('--ELC-shadow-SW-indent', "45px");
        }
        
        margin[0].removeAttribute('style');
        margin[1].removeAttribute('style');
        margin[2].removeAttribute('style');
        margin[3].removeAttribute('style');

        setTimeout(deactivateMenu, 1000, 'aboutText', 'menu');

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
        reshapeSphere('colapse');
        setTimeout(switchItems, 0, 'hide', 'about');
        setTimeout(switchItems, 0, 'hide', 'links');
        setTimeout(switchItems, 0, 'hide', 'projects');
        arrangeELCs();
    }
    if (state == 'about')
    {
        pillarState = 'about';

        for (temp1 = segmentsAmount*2; temp1 > -1; temp1--) 
        {
            
            setTimeout(applyAboutVariables, temp1*0 , temp1);
            setTimeout(applyAboutVariables, temp1*0 , segmentsAmount * 2 - temp1);
        }

        function applyAboutVariables(id)
        {
            offsets[id].style.setProperty('--ELC-length-global', "300px");
            offsets[id].style.setProperty('--ELC-border-radius-global', "0px"); // 0px
            offsets[id].style.setProperty('--ELC-height-global', "7px");  // 15px
            offsets[id].style.setProperty('--ELC-margins-global', "100px");
    
            offsets[id].style.setProperty('--ELC-offset-height-global', "7px"); // 30px
            offsets[id].style.setProperty('--ELC-offset-step-global', "0px");
            offsets[id].style.setProperty('--ELC-offset-width-global', "75%");
            
            offsets[id].style.setProperty('--ELC-length-step-global', "10px");
            offsets[id].style.setProperty('--ELC-border-radius-step-global', "0px");
            offsets[id].style.setProperty('--ELC-height-step-global', "0px");

            document.documentElement.style.setProperty('--ELC-transformY-global', "-2vh");
    
            offsets[id].style.setProperty('--ELC-shadow-NW-indent', "0px");
            offsets[id].style.setProperty('--ELC-shadow-SE-indent', "0px");
            offsets[id].style.setProperty('--ELC-shadow-NE-indent', "0px");
            offsets[id].style.setProperty('--ELC-shadow-SW-indent', "0px");
        }

        // setTimeout(activateMenu, 0, 'aboutText', 'menu');

        document.getElementById('ELCwrapper1').classList.add('ELC-wrapper-core');
        document.getElementById('ELCwrapper0').classList.add('ELC-wrapper-next');
        document.getElementById('ELCwrapper-1').classList.add('ELC-wrapper-next');

        centerELCs();
        setTimeout(reshapeSphere, 1500, 'expand');
        menu('hide');
        setTimeout(switchItems, 3000, 'show', 'about');
    }
    if (state == 'projects')
    {
        pillarState = 'projects';

        for (temp1 = segmentsAmount*2; temp1 > -1; temp1--) 
        {
            setTimeout(applyProjectsVariables, temp1*0 , temp1);
            setTimeout(applyProjectsVariables, temp1*0 , segmentsAmount * 2 - temp1);
        }

        function applyProjectsVariables(id)
        {
            offsets[id].style.setProperty('--ELC-length-global', "70px");
            offsets[id].style.setProperty('--ELC-border-radius-global', "35px");
            offsets[id].style.setProperty('--ELC-height-global', "42px");
            offsets[id].style.setProperty('--ELC-margins-global', "100px");
    
            offsets[id].style.setProperty('--ELC-offset-height-global', "40px");
            offsets[id].style.setProperty('--ELC-offset-step-global', "0px");
            offsets[id].style.setProperty('--ELC-offset-width-global', "87%");
            
            offsets[id].style.setProperty('--ELC-length-step-global', "0px");
            offsets[id].style.setProperty('--ELC-border-radius-step-global', "0px");
            offsets[id].style.setProperty('--ELC-height-step-global', "0px");

            document.documentElement.style.setProperty('--ELC-transformY-global', "-4vh");
    
            offsets[id].style.setProperty('--ELC-shadow-NW-indent', "0px");
            offsets[id].style.setProperty('--ELC-shadow-SE-indent', "0px");
            offsets[id].style.setProperty('--ELC-shadow-NE-indent', "0px");
            offsets[id].style.setProperty('--ELC-shadow-SW-indent', "0px");
        }

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
        // moveToRight();
        menu('hide');
        setTimeout(switchItems, 0, 'show', 'projects');
        scrollToProject(0);
    }
    if (state == 'links')
    {
        pillarState = 'links';

        for (temp1 = segmentsAmount*2; temp1 > -1; temp1--) 
        {
            setTimeout(applyLinksVariables, temp1*0 , temp1);
            setTimeout(applyLinksVariables, temp1*0 , segmentsAmount * 2 - temp1);
        }

        function applyLinksVariables(id)
        {
            offsets[id].style.setProperty('--ELC-length-global', "200px");
            offsets[id].style.setProperty('--ELC-border-radius-global', "35px");
            offsets[id].style.setProperty('--ELC-height-global', "13px");
            offsets[id].style.setProperty('--ELC-margins-global', "20px");
    
            offsets[id].style.setProperty('--ELC-offset-height-global', "55px");
            offsets[id].style.setProperty('--ELC-offset-step-global', "2px");
            offsets[id].style.setProperty('--ELC-offset-width-global', "75%");
            
            offsets[id].style.setProperty('--ELC-length-step-global', "6px");
            offsets[id].style.setProperty('--ELC-border-radius-step-global', "1px");
            offsets[id].style.setProperty('--ELC-height-step-global', "2px");

            document.documentElement.style.setProperty('--ELC-transformY-global', "-2vh");
    
            offsets[id].style.setProperty('--ELC-shadow-NW-indent', "0px");
            offsets[id].style.setProperty('--ELC-shadow-SE-indent', "20px");
            offsets[id].style.setProperty('--ELC-shadow-NE-indent', "0px");
            offsets[id].style.setProperty('--ELC-shadow-SW-indent', "45px");
        }

        margin[0].style.height = '0px';
        margin[1].style.height = '0px';
        margin[2].style.height = '0px';
        margin[3].style.height = '0px';

        // document.getElementById('ELCwrapper0').style.setProperty('--ELC-glass-color', 'var(--ELC-glass-color2)');
        document.getElementById('ELCwrapper1').classList.add('ELC-wrapper-next');
        document.getElementById('ELCwrapper0').classList.add('ELC-wrapper-next');
        document.getElementById('ELCwrapper-1').classList.add('ELC-wrapper-link');

        centerELCs();
        // setTimeout(moveToRight, 0);
        // moveToRight();
        menu('hide');
        switchItems('show', 'links');
    }

    function centerELCs()
    {
        var step;
        for (step = (1 - segmentsAmount); step < (segmentsAmount - 1); step++) {document.getElementById('ELCwrapper' + step).parentElement.style.transform = 'translateX(0px)';}
    }
    function moveToRight(){document.documentElement.style.setProperty('--ELC-offset-width-global', "83%");}
}

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

function menu(action)
{
    let titles = document.getElementsByClassName("ST-textlink-container");
    let frames = document.getElementsByClassName("ST-frame-box");
    if (action == 'show')
    {
        titles[0].removeAttribute('style');
        titles[1].removeAttribute('style');
        titles[2].removeAttribute('style');

        frames[0].removeAttribute('style');
        frames[1].removeAttribute('style');
        frames[2].removeAttribute('style');
        frames[3].removeAttribute('style');
        frames[4].removeAttribute('style');
        frames[5].removeAttribute('style');
    }
    if (action == 'hide')
    {
        document.getElementById('intro').classList.add('intro-container-hidden');

        titles[0].style.width = '300%';
        titles[1].style.width = '300%';
        titles[2].style.width = '300%';

        titles[0].style.filter = 'blur(100px)';
        titles[1].style.filter = 'blur(100px)';
        titles[2].style.filter = 'blur(100px)';

        frames[0].style.opacity = 0;
        frames[1].style.opacity = 0;
        frames[2].style.opacity = 0;
        frames[3].style.opacity = 0;
        frames[4].style.opacity = 0;
        frames[5].style.opacity = 0;

        frames[0].style.filter = 'blur(10px)';
        frames[1].style.filter = 'blur(10px)';
        frames[2].style.filter = 'blur(10px)';
        frames[3].style.filter = 'blur(10px)';
        frames[4].style.filter = 'blur(10px)';
        frames[5].style.filter = 'blur(10px)';
    }
}
function switchItems(action, type)
{
    let items;
    if (type == 'about'){items = document.getElementById('about').children;}
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
        if(action == 'show'){setTimeout(showItem, i*100, i);}
        if(action == 'hide'){setTimeout(hideItem, i*100, i);}
    }
    function showItem(i){items[i].classList.remove('menus-hidden-item');}
    function hideItem(i){items[i].classList.add('menus-hidden-item');}
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
    for (step = 0; step < 9; step++) 
    {
        document.getElementById('ELCcontainer1').insertAdjacentHTML('afterbegin','<div class="ELC-top"></div>');
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