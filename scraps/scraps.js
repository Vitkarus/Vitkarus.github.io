// ===== S C R A P S =====
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