// ===== С Е Л Е К Т О Р = С Т О Л Б А =====

function highlightOnScroll()
{
    var scrolled;
    var totalScroll = document.getElementById('projects-scroll-area').scrollHeight;
    var scrollPerProject = totalScroll/projectsAmount;

    document.getElementById('projects-scroll-area').addEventListener('scroll', function() 
    {
        scrolled = document.getElementById('projects-scroll-area').scrollTop;
        selectProject(0 - Math.round(scrolled/scrollPerProject));
      });
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
}

function selectProject(id)
{
    if (pillarState == 'projects')
    {
        var variable;
        for (variable = (0); variable > (0 - projectsAmount); variable--) 
        {document.getElementById('ELCwrapper' + variable).classList.remove('ELC-wrapper-part-selected');}
        document.getElementById('ELCwrapper' + id).classList.add('ELC-wrapper-part-selected');
    }
}