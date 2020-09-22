function updateSelectedMenu(){
    if ( document.URL.indexOf('dionatamsouza.github.io/docs/coronavirus/') !== -1 ){
        let node = document.querySelector(' #github-menu-coronavirus ');
        node.classList.add("w3-light-gray");
    } else {
        let node = document.querySelector(' #github-menu-blog ');
        node.classList.add("w3-light-gray");
    }
}

function updateHTML(){
    let nodes = document.querySelectorAll(' #github_page_default_content > * ');
    for (let node of nodes) {
        node.removeAttribute("id"); 
    }
}

function updateTables(){
    let nodes1 = document.querySelectorAll(' #github_page_default_content > table ');
    for (let node of nodes1) {
        node.classList.add("w3-table-all");
        node.classList.add("w3-hoverable");
    }
    let nodes2 = document.querySelectorAll(' #github_page_default_content > table > thead > tr ');
    for (let node of nodes2) {
        node.classList.add("w3-theme-l4");
    }
}

function updateHTags(){
    let nodes1 = document.querySelectorAll(' #github_page_default_content > h1 ');
    for (let node of nodes1) {
        node.classList.add("w3-border-bottom");
        node.classList.add("w3-center");
        node.classList.add("w3-theme-l1");
        node.style=" font-weight: bold; text-shadow:3px 3px 0 #000; ";
    }
    let nodes2 = document.querySelectorAll(' #github_page_default_content > h2 ');
    for (let node of nodes2) {
        node.classList.add("w3-border-bottom");
        node.classList.add("w3-center");
        node.classList.add("w3-theme-l2");
        node.style=" font-weight: bold; text-shadow:2px 2px 0 #000; ";
    }
    let nodes3 = document.querySelectorAll(' #github_page_default_content > h3 ');
    for (let node of nodes3) {
        node.classList.add("w3-border-bottom");
        node.classList.add("w3-center");
        node.classList.add("w3-theme-l4");
        node.style=" font-weight: bold; text-shadow:1px 1px 0 #aaa; ";
    }
    let nodes4 = document.querySelectorAll(' #github_page_default_content > h4 ');
    for (let node of nodes4) {
        node.classList.add("w3-border-bottom");
        node.classList.add("w3-theme-l4");
        node.style=" font-weight: bold; ";
    }
    let nodes5 = document.querySelectorAll(' #github_page_default_content > h5 ');
    for (let node of nodes5) {
        node.classList.add("w3-border-bottom");
        node.classList.add("w3-center");
        node.style=" font-weight: bold; ";
    }
    let nodes6 = document.querySelectorAll(' #github_page_default_content > h6 ');
    for (let node of nodes6) {
        node.classList.add("w3-border-bottom");
        node.style=" font-weight: bold; ";
    }
}

function updateLinks(){
    let nodes = document.querySelectorAll(' #github_page_default_content a[href^="http"] ');
    for (let node of nodes) {
        node.setAttribute("target", "_blank");
    }
}

function updateEmbedYouTube(){
    let nodes = document.querySelectorAll(' #github_page_default_content > iframe[src^="https://www.youtube.com/embed/"] ');
    for (let node of nodes) {
        node.removeAttribute("width");
        node.removeAttribute("height");
        node.removeAttribute("frameborder");
        node.style=" display: table; width: 853px; height:480px; max-width: 100%; margin-left: auto; margin-right:auto; border: 0px; ";
    }
}

function contentLoaded(){
    let primeiroNo = document.querySelector(' #github_page_default_content > * ');
    let titulo;
    if (primeiroNo){
        titulo = primeiroNo.innerText;
        if ( titulo ){
            document.title = titulo + " - Blog do Programador";
        }
    }
    document.getElementById('github_page_default_content').style = "display:block" ;
    document.getElementById('github_page_default_loader').remove();
}

function init(){
    updateSelectedMenu();
    updateHTML();
    updateTables();
    updateHTags();
    updateLinks();
    updateEmbedYouTube();
    contentLoaded();
}

/* Para Menu */
function openNav() {
    let x = document.getElementById("navSmall");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
