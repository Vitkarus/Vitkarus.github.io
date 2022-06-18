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
            setTimeout(applyMenuVariables, temp1*getCSSvar('--stateMachine-ELC-appear-delay') , temp1);
            // setTimeout(applyMenuVariables, temp1*100 , segmentsAmount - 1 + temp1);
        }

        function applyMenuVariables(id)
        {
            offsets[id].style.setProperty('--ELC-length-global', "200px");
            offsets[id].style.setProperty('--ELC-border-radius-global', "35px");
            offsets[id].style.setProperty('--ELC-height-global', "13px");
        }
        setTimeout(menu, getCSSvar('--stateMachine-initial-menu-setTimeout'), 'show');
    }

// === main menu ===

    if (state == 'menu')
    {
        pillarState = 'menu';

        // Applying variables to ELCs, can be used with delay

        for (temp1 = 0; temp1 < segmentsAmount*2; temp1++) 
        {
            setTimeout(applyMenuVariables, temp1*getCSSvar('--stateMachine-mainmenu-applyMenuVariables-setTimeout') , temp1);
            setTimeout(applyMenuVariables, temp1*getCSSvar('--stateMachine-mainmenu-applyMenuVariables-setTimeout') , segmentsAmount - 1 + temp1);
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
    
            offsets[id].style.setProperty('--ELC-shadow-NW-indent', "0px");
            offsets[id].style.setProperty('--ELC-shadow-SE-indent', "20px");
            offsets[id].style.setProperty('--ELC-shadow-NE-indent', "0px");
            offsets[id].style.setProperty('--ELC-shadow-SW-indent', "45px");
        }

        // Applying classes to main ELCs

        document.getElementById('ELCwrapper1').className = 'ELC-wrapper-1';
        document.getElementById('ELCwrapper0').className = 'ELC-wrapper-0';
        document.getElementById('ELCwrapper-1').className = 'ELC-wrapper-1';

        // Margins between main ELCs
        
        margin[0].removeAttribute('style');
        margin[1].removeAttribute('style');
        margin[2].removeAttribute('style');
        margin[3].removeAttribute('style');

        // Abjusting pillar vertically

        document.documentElement.style.setProperty('--ELC-transformY-global', "20vh");

        // Cancelling Projects styles

        for (var i = (0); i > (0 - projectsAmount); i--) 
        {
            document.getElementById('ELCwrapper' + i).parentElement.style.marginTop = '0px';
            document.getElementById('ELCwrapper' + i).parentElement.style.marginBottom = '0px';
        }
        for (var i = (-2); i > (0 - projectsAmount); i--) 
        {document.getElementById('ELCwrapper' + i).className = 'ELC-wrapper-next';}

        // Functions

        reshapeSphere('colapse');
        reshapeWaves('colapse');
        
        setTimeout(switchItems, 0, 'hide', 'about');
        setTimeout(switchItems, 0, 'hide', 'links');
        setTimeout(switchItems, 0, 'hide', 'projects');

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
        }

        // setTimeout(deactivateMenu, getCSSvar('--stateMachine-mainmenu-deactivateMenu-setTimeout'), 'aboutText', 'menu');
        // document.documentElement.style.setProperty('--ELC-transformY-global-for-content', "0vh");
    }

// === about ===

    if (state == 'about')
    {
        pillarState = 'about';

        // Applying variables to ELCs, can be used with delay   

        for (temp1 = segmentsAmount*2; temp1 > -1; temp1--) 
        {
            setTimeout(applyAboutVariables, temp1*getCSSvar('--stateMachine-applyMenuVariables-setTimeout'), temp1);
            setTimeout(applyAboutVariables, temp1*getCSSvar('--stateMachine-applyMenuVariables-setTimeout'), segmentsAmount * 2 - temp1);
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
    
            offsets[id].style.setProperty('--ELC-shadow-NW-indent', "0px");
            offsets[id].style.setProperty('--ELC-shadow-SE-indent', "0px");
            offsets[id].style.setProperty('--ELC-shadow-NE-indent', "0px");
            offsets[id].style.setProperty('--ELC-shadow-SW-indent', "0px");
        }

        // Applying classes to main ELCs

        document.getElementById('ELCwrapper1').classList.add('ELC-wrapper-core');
        document.getElementById('ELCwrapper0').classList.add('ELC-wrapper-next');
        document.getElementById('ELCwrapper-1').classList.add('ELC-wrapper-next');

        // Abjusting pillar vertically

        document.documentElement.style.setProperty('--ELC-transformY-global', "-2vh");

        // Functions

        setTimeout(reshapeSphere, getCSSvar('--stateMachine-about-reshapeSphere-setTimeout'), 'expand');

        menu('hide');
        
        setTimeout(switchItems, getCSSvar('--stateMachine-switchItems-show-setTimeout'), 'show', 'about');

        setTimeout(changeLogo, getCSSvar('--stateMachine-changeLogoToCross-setTimeout'), 'cross');
        if (place == 'topBar'){changeTopBar('about');}
        else{setTimeout(changeTopBar, getCSSvar('--changeTopBar-from-menu-setTimeout'), 'about');}
    
        centerELCs();
        // setTimeout(activateMenu, 0, 'aboutText', 'menu');
    }

// === projects ===

    if (state == 'projects')
    {
        pillarState = 'projects';

        // Applying variables to ELCs, can be used with delay

        for (temp1 = segmentsAmount*2; temp1 > -1; temp1--) 
        {
            setTimeout(applyProjectsVariables, temp1*getCSSvar('--stateMachine-applyMenuVariables-setTimeout'), temp1);
            setTimeout(applyProjectsVariables, temp1*getCSSvar('--stateMachine-applyMenuVariables-setTimeout'), segmentsAmount * 2 - temp1);
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
    
            offsets[id].style.setProperty('--ELC-shadow-NW-indent', "0px");
            offsets[id].style.setProperty('--ELC-shadow-SE-indent', "0px");
            offsets[id].style.setProperty('--ELC-shadow-NE-indent', "0px");
            offsets[id].style.setProperty('--ELC-shadow-SW-indent', "0px");
        }

        // Applying classes to main ELCs

        for (variable = (-1); variable > (0 - projectsAmount); variable--) 
        {
            document.getElementById('ELCwrapper' + variable).classList.add('ELC-wrapper-part-other');
            document.getElementById('ELCwrapper' + variable).parentElement.style.marginBottom = '60px';
        }

        document.getElementById('ELCwrapper1').classList.add('ELC-wrapper-next');
        document.getElementById('ELCwrapper0').classList.add('ELC-wrapper-part-selected');
        document.getElementById('ELCwrapper0').parentElement.style.marginTop = '60px';
        document.getElementById('ELCwrapper0').parentElement.style.marginBottom = '60px';

        // Margins between main ELCs

        margin[0].style.height = '0px';
        margin[1].style.height = '0px';
        margin[2].style.height = '0px';
        margin[3].style.height = '0px';

        // Abjusting pillar vertically

        document.documentElement.style.setProperty('--ELC-transformY-global', "-4vh");

        // Functions

        scrollToProject(0);
        
        menu('hide');
        
        setTimeout(switchItems, getCSSvar('--stateMachine-switchItems-show-setTimeout'), 'show', 'projects');
        
        setTimeout(changeLogo, getCSSvar('--stateMachine-changeLogoToCross-setTimeout'), 'cross');
        if (place == 'topBar'){changeTopBar('projects');}
        else{setTimeout(changeTopBar, getCSSvar('--changeTopBar-from-menu-setTimeout'), 'projects');}

        centerELCs();
    }

// === links ===

    if (state == 'links')
    {
        pillarState = 'links';

        // Applying variables to ELCs, can be used with delay

        for (temp1 = segmentsAmount*2; temp1 > -1; temp1--) 
        {
            setTimeout(applyLinksVariables, temp1*getCSSvar('--stateMachine-applyMenuVariables-setTimeout'), temp1);
            setTimeout(applyLinksVariables, temp1*getCSSvar('--stateMachine-applyMenuVariables-setTimeout'), segmentsAmount * 2 - temp1);
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
    
            offsets[id].style.setProperty('--ELC-shadow-NW-indent', "0px");
            offsets[id].style.setProperty('--ELC-shadow-SE-indent', "20px");
            offsets[id].style.setProperty('--ELC-shadow-NE-indent', "0px");
            offsets[id].style.setProperty('--ELC-shadow-SW-indent', "45px");
        }

        // Applying classes to main ELCs

        document.getElementById('ELCwrapper1').classList.add('ELC-wrapper-next');
        document.getElementById('ELCwrapper0').classList.add('ELC-wrapper-next');
        document.getElementById('ELCwrapper-1').classList.add('ELC-wrapper-link');

        // Margins between main ELCs

        margin[0].style.height = '0px';
        margin[1].style.height = '0px';
        margin[2].style.height = '0px';
        margin[3].style.height = '0px';

        // Abjusting pillar vertically

        document.documentElement.style.setProperty('--ELC-transformY-global', "-2vh");

        reshapeWaves('expand');
        
        menu('hide');
        
        setTimeout(switchItems, getCSSvar('--stateMachine-switchItems-show-setTimeout'), 'show', 'links');

        setTimeout(changeLogo, getCSSvar('--stateMachine-changeLogoToCross-setTimeout'), 'cross');
        if (place == 'topBar'){changeTopBar('links');}
        else{setTimeout(changeTopBar, getCSSvar('--changeTopBar-from-menu-setTimeout'), 'links');}

        centerELCs();

        // document.getElementById('ELCwrapper0').style.setProperty('--ELC-glass-color', 'var(--ELC-glass-color2)');
    }
}

function centerELCs()
{
    var step;
    for (step = (1 - segmentsAmount); step < (segmentsAmount - 1); step++) {document.getElementById('ELCwrapper' + step).parentElement.style.transform = 'translateX(0px)';}
}