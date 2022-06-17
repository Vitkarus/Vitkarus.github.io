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