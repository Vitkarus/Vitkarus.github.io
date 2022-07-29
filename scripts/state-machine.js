// ===== S T A T E = M A C H I N E =====

// === initial ===

function stateMachine(state, place)
{
    let margin = document.getElementById('pillar').getElementsByClassName("ELC-margins");
    let offsets = document.getElementById('pillar').getElementsByClassName("ELC-offset");
    var temp1;
    var variable;

    if (state == 'intro')
    {
        for (temp1 = 0; temp1 < segmentsAmount*2; temp1++) 
        {
            setTimeout(applyMenuVariables, temp1*getCSSvar('--stateMachine-ELC-appear-delay'), temp1);
            // setTimeout(applyMenuVariables, temp1*100 , segmentsAmount - 1 + temp1);
        }

        function applyMenuVariables(id)
        {
            offsets[id].style.setProperty('--temp-ELC-height-scale', "0.3");
            offsets[id].style.setProperty('--temp-ELC-width-scale', "3");
            offsets[id].style.setProperty('--temp-ELC-border-radius', "20");
        }
        setTimeout(menu, getCSSvar('--stateMachine-initial-menu-setTimeout'), 'show');

        addGaps(2, 3, 30);
    }

    cleanChanges();

// === main menu ===

    if (state == 'menu')
    {
        // Transition from center

        if (pillarState == 'projects' || 'links')
        {
            for (var i = 0; i < segmentsAmount; i++) 
            {
                setTimeout(applyMenuVariables, i*getCSSvar('--stateMachine-applyMenuVariables-setTimeout'), segmentsAmount + i);
                setTimeout(applyMenuVariables, i*getCSSvar('--stateMachine-applyMenuVariables-setTimeout'), segmentsAmount - i);
            }
        }
        else // Transition from edges
        {
            for (var i = 0; i < segmentsAmount; i++) 
            {
                setTimeout(applyMenuVariables, i*getCSSvar('--stateMachine-applyMenuVariables-setTimeout'), 0 + i);
                setTimeout(applyMenuVariables, i*getCSSvar('--stateMachine-applyMenuVariables-setTimeout'), segmentsAmount * 2 - 1 - i);
            }
        }

        pillarState = 'menu';

        // Applying variables to ELCs, can be used with delay
        
        function applyMenuVariables(id)
        {
            offsets[id].style.setProperty('--temp-ELC-height-scale', "0.3");
            offsets[id].style.setProperty('--temp-ELC-width-scale', "3");
            offsets[id].style.setProperty('--temp-ELC-border-radius', "20");
    
            offsets[id].style.setProperty('--ELC-offset-height-global', "-55px");
            offsets[id].style.setProperty('--ELC-offset-step-global', "0.02");
            offsets[id].style.setProperty('--ELC-offset-width-global', "66%");
            
            offsets[id].style.setProperty('--temp-ELC-height-scale-step', "0.1");
            offsets[id].style.setProperty('--temp-ELC-width-scale-step', "-0.03");
            offsets[id].style.setProperty('--temp-ELC-border-radius-step', "0.1");
    
            offsets[id].style.setProperty('--temp-ELC-top-shadow-scale', "1");
            offsets[id].style.setProperty('--temp-ELC-top-shadow-X', "-10%");
            offsets[id].style.setProperty('--temp-ELC-top-shadow-Y', "-30%");
        }

        // Applying classes to main ELCs

        document.getElementById('ELCwrapper1').className = 'ELC-wrapper-1';
        document.getElementById('ELCwrapper0').className = 'ELC-wrapper-0';
        document.getElementById('ELCwrapper-1').className = 'ELC-wrapper-1';

        // Abjusting pillar vertically

        document.documentElement.style.setProperty('--ELC-transformY-global', "150px");

        // Functions

        if (place == 'topBar')
        {
            changeTopBar('menu');
        }
        else
        {
            setTimeout(menu, getCSSvar('--stateMachine-showmenu-setTimeout'), 'show');

            setTimeout(changeLogo, getCSSvar('--stateMachine-changeLogo-setTimeout'), 'VN');
            changeTopBar('menu');
            changeIntro();

            arrangeELCs();
            addGaps(2, 3, 30);
        }
        // setTimeout(deactivateMenu, getCSSvar('--stateMachine-mainmenu-deactivateMenu-setTimeout'), 'aboutText', 'menu');
        // document.documentElement.style.setProperty('--ELC-transformY-global-for-content', "0vh");
    }

// === about ===

    if (state == 'about')
    {   
         // Transition from center

         if (pillarState == 'menu' || 'projects' || 'links')
         {
             for (var i = 0; i < segmentsAmount; i++) 
             {
                 setTimeout(applyAboutVariables, i*getCSSvar('--stateMachine-applyMenuVariables-setTimeout'), segmentsAmount + i);
                 setTimeout(applyAboutVariables, i*getCSSvar('--stateMachine-applyMenuVariables-setTimeout'), segmentsAmount - i);
             }
         }
        else
         {
             for (var i = 0; i < segmentsAmount; i++) 
             {
                 setTimeout(applyAboutVariables, i*getCSSvar('--stateMachine-applyMenuVariables-setTimeout'), 0 + i);
                 setTimeout(applyAboutVariables, i*getCSSvar('--stateMachine-applyMenuVariables-setTimeout'), segmentsAmount * 2 - i);
             }
         }

         pillarState = 'about';

        // Applying variables to ELCs, can be used with delay   

        // for (temp1 = segmentsAmount*2; temp1 > -1; temp1--) 
        // {
        //     setTimeout(applyAboutVariables, temp1*getCSSvar('--stateMachine-applyMenuVariables-setTimeout'), temp1);
        //     setTimeout(applyAboutVariables, temp1*getCSSvar('--stateMachine-applyMenuVariables-setTimeout'), segmentsAmount * 2 - temp1);
        // }

        function applyAboutVariables(id)
        {
            offsets[id].style.setProperty('--temp-ELC-height-scale', "0.2");
            offsets[id].style.setProperty('--temp-ELC-width-scale', "8");
            offsets[id].style.setProperty('--temp-ELC-border-radius', "0");
    
            offsets[id].style.setProperty('--ELC-offset-height-global', "-13px");
            offsets[id].style.setProperty('--ELC-offset-step-global', "0");
            offsets[id].style.setProperty('--ELC-offset-width-global', "66%");
            
            offsets[id].style.setProperty('--temp-ELC-height-scale-step', "0");
            offsets[id].style.setProperty('--temp-ELC-width-scale-step', "-0.0325");
            offsets[id].style.setProperty('--temp-ELC-border-radius-step', "0");
    
            offsets[id].style.setProperty('--temp-ELC-top-shadow-scale', "1.5");
            offsets[id].style.setProperty('--temp-ELC-top-shadow-X', "0%");
            offsets[id].style.setProperty('--temp-ELC-top-shadow-Y', "0%");
        }

        // Applying classes to main ELCs

        document.getElementById('ELCwrapper1').classList.add('ELC-wrapper-next');
        document.getElementById('ELCwrapper0').classList.add('ELC-wrapper-core');
        document.getElementById('ELCwrapper-1').classList.add('ELC-wrapper-next');

        // Abjusting pillar vertically

        document.documentElement.style.setProperty('--ELC-transformY-global', "0");

        // Functions

        // setTimeout(reshapeSphere, getCSSvar('--stateMachine-about-reshapeSphere-setTimeout'), 'expand');

        menu('hide');
        
        setTimeout(switchItems, getCSSvar('--stateMachine-switchItems-show-setTimeout'), 'show', 'about');

        setTimeout(changeLogo, getCSSvar('--stateMachine-changeLogoToCross-setTimeout'), 'cross');
        if (place == 'topBar'){changeTopBar('about');}
        else{setTimeout(changeTopBar, getCSSvar('--changeTopBar-from-menu-setTimeout'), 'about');}
    
        centerELCs();

        setTimeout(addGaps, 0, 0, 0, 0);

        setTimeout(addGaps, segmentsAmount * 1.5 * getCSSvar('--stateMachine-applyMenuVariables-setTimeout'), 1, 1, 50);

        setTimeout(highlightPyramid, segmentsAmount * 1.5 * getCSSvar('--stateMachine-applyMenuVariables-setTimeout'), 'on');
        // setTimeout(activateMenu, 0, 'aboutText', 'menu');
    }

// === projects ===

    if (state == 'projects')
    {
        // Transition from center

        if (pillarState == 'menu' || 'links')
        {
            for (var i = 0; i < segmentsAmount; i++) 
            {
                setTimeout(applyProjectsVariables, i*getCSSvar('--stateMachine-applyMenuVariables-setTimeout'), segmentsAmount + i);
                setTimeout(applyProjectsVariables, i*getCSSvar('--stateMachine-applyMenuVariables-setTimeout'), segmentsAmount - i);
            }
        }
        else // Transition from edges
        {
            for (var i = 0; i < segmentsAmount; i++) 
            {
                setTimeout(applyProjectsVariables, i*getCSSvar('--stateMachine-applyMenuVariables-setTimeout'), 0 + i);
                setTimeout(applyProjectsVariables, i*getCSSvar('--stateMachine-applyMenuVariables-setTimeout'), segmentsAmount * 2 - i);
            }
        }

        pillarState = 'projects';

        // Applying variables to ELCs, can be used with delay

        function applyProjectsVariables(id)
        {
            offsets[id].style.setProperty('--temp-ELC-height-scale', "1");
            offsets[id].style.setProperty('--temp-ELC-width-scale', "1");
            offsets[id].style.setProperty('--temp-ELC-border-radius', "50");
    
            offsets[id].style.setProperty('--ELC-offset-height-global', "-60px");
            offsets[id].style.setProperty('--ELC-offset-step-global', "0");
            offsets[id].style.setProperty('--ELC-offset-width-global', "80%");
            
            offsets[id].style.setProperty('--temp-ELC-height-scale-step', "0");
            offsets[id].style.setProperty('--temp-ELC-width-scale-step', "0");
            offsets[id].style.setProperty('--temp-ELC-border-radius-step', "0");
    
            offsets[id].style.setProperty('--temp-ELC-top-shadow-scale', "1.5");
            offsets[id].style.setProperty('--temp-ELC-top-shadow-X', "0%");
            offsets[id].style.setProperty('--temp-ELC-top-shadow-Y', "0%");
        }

        // Applying classes to main ELCs

        for (variable = (-1); variable > (0 - projectsAmount); variable--) 
        {
            document.getElementById('ELCwrapper' + variable).classList.add('ELC-wrapper-part-other');
            // document.getElementById('ELCwrapper' + variable).parentElement.style.marginBottom = '48px';
        }

        document.getElementById('ELCwrapper1').classList.add('ELC-wrapper-next');
        document.getElementById('ELCwrapper0').classList.add('ELC-wrapper-part-selected');
        // document.getElementById('ELCwrapper0').parentElement.style.marginTop = '48px';
        // document.getElementById('ELCwrapper0').parentElement.style.marginBottom = '48px';

        // Abjusting pillar vertically

        document.documentElement.style.setProperty('--ELC-transformY-global', -20 * projectsAmount + "px");

        // Functions

        scrollToProject(0);
        
        menu('hide');
        
        setTimeout(switchItems, getCSSvar('--stateMachine-switchItems-show-setTimeout'), 'show', 'projects');
        
        setTimeout(changeLogo, getCSSvar('--stateMachine-changeLogoToCross-setTimeout'), 'cross');
        if (place == 'topBar'){changeTopBar('projects');}
        else{setTimeout(changeTopBar, getCSSvar('--changeTopBar-from-menu-setTimeout'), 'projects');}

        centerELCs();

        addGaps(1, projectsAmount, 50);
    }

// === links ===

    if (state == 'links')
    {
        // Transition from center

        if (pillarState == 'menu' || 'projects')
        {
            for (var i = 0; i < segmentsAmount; i++) 
            {
                console.log(i);
                setTimeout(applyLinksVariables, i*getCSSvar('--stateMachine-applyMenuVariables-setTimeout'), segmentsAmount + i);
                setTimeout(applyLinksVariables, i*getCSSvar('--stateMachine-applyMenuVariables-setTimeout'), segmentsAmount - i);
            }
        }
        else // Transition from edges
        {
            for (var i = 0; i < segmentsAmount; i++) 
            {
                console.log(0-i);
                setTimeout(applyLinksVariables, i*getCSSvar('--stateMachine-applyMenuVariables-setTimeout'), 0 + i);
                setTimeout(applyLinksVariables, i*getCSSvar('--stateMachine-applyMenuVariables-setTimeout'), segmentsAmount * 2 - i);
            }
        }

        pillarState = 'links';

        // Applying variables to ELCs, can be used with delay

        function applyLinksVariables(id)
        {
            offsets[id].style.setProperty('--temp-ELC-height-scale', "0.3");
            offsets[id].style.setProperty('--temp-ELC-width-scale', "3.5");
            offsets[id].style.setProperty('--temp-ELC-border-radius', "15");
    
            offsets[id].style.setProperty('--ELC-offset-height-global', "-65px");
            offsets[id].style.setProperty('--ELC-offset-step-global', "0.02");
            offsets[id].style.setProperty('--ELC-offset-width-global', "66%");
            
            offsets[id].style.setProperty('--temp-ELC-height-scale-step', "0.1");
            offsets[id].style.setProperty('--temp-ELC-width-scale-step', "-0.04");
            offsets[id].style.setProperty('--temp-ELC-border-radius-step', "0.1");
    
            offsets[id].style.setProperty('--temp-ELC-top-shadow-scale', "1");
            offsets[id].style.setProperty('--temp-ELC-top-shadow-X', "-30%");
            offsets[id].style.setProperty('--temp-ELC-top-shadow-Y', "0%");
        }

        // Applying classes to main ELCs

        document.getElementById('ELCwrapper1').classList.add('ELC-wrapper-next');
        document.getElementById('ELCwrapper0').classList.add('ELC-wrapper-link');
        document.getElementById('ELCwrapper-1').classList.add('ELC-wrapper-next');

        // Abjusting pillar vertically

        document.documentElement.style.setProperty('--ELC-transformY-global', "0");

        // reshapeWaves('expand');
        
        menu('hide');

        reshapeWaves('expand');
        
        setTimeout(switchItems, getCSSvar('--stateMachine-switchItems-show-setTimeout'), 'show', 'links');

        setTimeout(changeLogo, getCSSvar('--stateMachine-changeLogoToCross-setTimeout'), 'cross');
        if (place == 'topBar'){changeTopBar('links');}
        else{setTimeout(changeTopBar, getCSSvar('--changeTopBar-from-menu-setTimeout'), 'links');}

        centerELCs();

        addGaps(0, 1, 0);
        // document.getElementById('ELCwrapper0').style.setProperty('--ELC-glass-color', 'var(--ELC-glass-color2)');
    }
}

function animType(func, type)
    {
        if (type == 'center')
        {
            for (var i = 0; i < segmentsAmount; i++) 
            {
                setTimeout(func, i*getCSSvar('--stateMachine-applyMenuVariables-setTimeout'), segmentsAmount + i);
                setTimeout(func, i*getCSSvar('--stateMachine-applyMenuVariables-setTimeout'), segmentsAmount - i);
            }
        }
        if (type == 'edge')
        {
            for (var i = 0; i < segmentsAmount; i++) 
            {
                setTimeout(func, i*getCSSvar('--stateMachine-applyMenuVariables-setTimeout'), 0 + i);
                setTimeout(func, i*getCSSvar('--stateMachine-applyMenuVariables-setTimeout'), segmentsAmount * 2 - i);
            }
        }
    }

function addGaps(initial, number, gap)
{
    let offsets = document.getElementById('pillar').getElementsByClassName("ELC-offset");

    for (var i = 0; i < number; i++)
    {
        offsets[segmentsAmount - initial + i].style.setProperty('--ELC-margins-global', gap * i + "px");
        // offsets[segmentsAmount - initial + i].style.setProperty('--ELC-margins-global', gap * i + "px");
        // offsets[segmentsAmount - initial - i].style.setProperty('--ELC-margins-global', 0 - gap * i + "px");
    }
    for (var j = 0; j < (segmentsAmount - initial); j++)
    {
        offsets[j].style.setProperty('--ELC-margins-global', 0 - gap + "px");
    }
    for (var l = (segmentsAmount - initial + number); l < segmentsAmount * 2; l++)
    {
        offsets[l].style.setProperty('--ELC-margins-global', gap * number + "px");
    }
    
}

function highlightPyramid(state)
{
    if(state == 'on'){document.getElementById('core').classList.remove('about-glow-container-hidden');}
    if(state == 'off'){document.getElementById('core').classList.add('about-glow-container-hidden');}
}

function centerELCs()
{
    var step;
    for (step = (1 - segmentsAmount); step < (segmentsAmount); step++) {document.getElementById('ELCwrapper' + step).parentElement.style.setProperty('--ELC-offset-X-global', "0px");}
}

function cleanChanges()
{
    // Applying classes to main ELCs

    document.getElementById('ELCwrapper1').className = 'ELC-wrapper-1';
    document.getElementById('ELCwrapper0').className = 'ELC-wrapper-0';
    document.getElementById('ELCwrapper-1').className = 'ELC-wrapper-1';
    
    // Functions

    reshapeWaves('colapse');
        
    setTimeout(switchItems, 0, 'hide', 'about');
    setTimeout(switchItems, 0, 'hide', 'links');
    setTimeout(switchItems, 0, 'hide', 'projects');

    highlightPyramid('off');

    // Cancelling Projects styles

    for (var i = (0); i > (0 - projectsAmount); i--) 
    {
        document.getElementById('ELCwrapper' + i).parentElement.style.marginTop = '0px';
        document.getElementById('ELCwrapper' + i).parentElement.style.marginBottom = '0px';
    }
    for (var i = (-2); i > (0 - projectsAmount); i--) 
    {document.getElementById('ELCwrapper' + i).className = 'ELC-wrapper-next';}
}