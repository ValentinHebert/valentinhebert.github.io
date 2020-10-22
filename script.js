const swup = new Swup({
    animateHistoryBrowsing: true,
    plugins: [new SwupScrollPlugin({
        scrollFriction: 0.8,
        scrollAcceleration: 0.65,
    })]
});

var doc = document.documentElement,
    isMobile = undefined,
    svgNS = "http://www.w3.org/2000/svg",
    vhtrpColor = {"accueil" : "#232323", "photographie" : "#f0f0f0", "video" : "#0f0f0f", "contact" : "#4B4B4B"};


function checkWinSize() { if(window.innerWidth > 727) { isMobile = false } else { isMobile = true }};
checkWinSize(); window.addEventListener("resize", checkWinSize);

function addClassAll(path, c) {
    var elems = document.querySelectorAll(path);
    if(elems) { elems.forEach(function(el) { el.classList.add(c); }); }
}
function removeClassAll(path, c) {
    var elems = document.querySelectorAll(path);
    if(elems) { elems.forEach(function(el) { el.classList.remove(c); }); }
}

function init() {
    var navPos = document.querySelector("#nav-pos");

    function getPageID() {
        pathDir = ((window.location.pathname).replace(/\/[^/]*$/, '')).replace(/^\//, '');
        if(window.location.pathname == "/") { pathDir = "accueil"; }
        return pathDir;
    }
    getPageID();

    if (navPos.hasChildNodes() == false) { // NAVIGATION
        navPos.innerHTML = `
            <div>
                <div id="navaccueil-content">
                    <a id="accueil" class="navlink" href="/">
                        <div>
                            <div id="wn-v" class="nav-name">VALENTIN</div>
                            <div id="wn-h" class="nav-name">HÉBERT</div>
                        </div>
                    </a>
                    <div class="nav-separator"></div>
                </div>
                <nav>
                    <a id="photographie" class="navlink navlink-p" href="/photographie/">
                        <div>
                            <div class="nav-sel"></div>
                            <div class="navbtns-content">
                                <svg class="navicons" viewBox="0 0 32 32">
                                    <g>
                                        <circle class="to-fill" cx="10.3" cy="10.1" r="4.2"/>
                                        <circle class="stroke" stroke-width="2.5" cx="10.3" cy="10.1" r="4.2"/>
                                        <polygon class="to-fill" points="29.1,29.1 16,16 2.9,29.1"/>
                                        <polyline class="stroke" stroke-width="3" stroke-linejoin="bevel" points="2.9,29.1 16,16 29.1,29.1"/>

                                        <path class="fill" d="M28,32H4l-4-4V4l4-4h24l4,4v24L28,32z M6.1,29.1l19.7,0l3.3-3.3l0-19.7l-3.3-3.3l-19.7,0L2.9,6.1l0,19.7L6.1,29.1z"/>
                                    </g>
                                </svg>
                                <span>PHOTOGRAPHIE</span>
                            </div>
                        </div>
                    </a>
                    <a id="video" class="navlink navlink-p" href="/video/">
                        <div>
                            <div class="nav-sel"></div>
                            <div class="navbtns-content">
                                <svg class="navicons" viewBox="0 0 32 32">
                                <g>
                                    <polygon class="to-fill" points="25.2,16 8.7,6.5 8.7,25.5"/>
                                    <polygon class="stroke" stroke-width="3" stroke-linejoin="bevel" points="25.2,16 8.7,6.5 8.7,25.5"/>

                                    <path class="fill" d="M28,32H4l-4-4V4l4-4h24l4,4v24L28,32z M6.1,29.1l19.7,0l3.3-3.3l0-19.7l-3.3-3.3l-19.7,0L2.9,6.1l0,19.7L6.1,29.1z"/>
                                </g>
                                </svg>
                                <span>VIDÉO</span>
                            </div>
                        </div>
                    </a>
                    <a id="contact" class="navlink navlink-p" href="/contact/">
                        <div>
                            <div class="nav-sel"></div>
                            <div class="navbtns-content">
                                <svg class="navicons" viewBox="0 0 32 32">
                                <g>
                                    <rect class="to-fill" x="6.7" y="9" width="18.6" height="14.1"/>
                                    <polyline class="stroke to-trnsprnt" stroke-width="2.5" stroke-linejoin="bevel" points="6.7,10 16,16 25.3,10"/>
                                    <rect class="stroke" stroke-width="2.5" x="6.7" y="9" width="18.6" height="14.1"/>

                                    <path class="fill" d="M28,32H4l-4-4V4l4-4h24l4,4v24L28,32z M6.1,29.1l19.7,0l3.3-3.3l0-19.7l-3.3-3.3l-19.7,0L2.9,6.1l0,19.7L6.1,29.1z"/>
                                </g>
                                </svg>
                                <span>CONTACT</span>
                            </div>
                        </div>
                    </a>
                </nav>
                <div id="nav-social">
                    <a id="ws-ig" href="https://www.instagram.com/valentinpointhache/">
                        <svg viewBox="0 0 512 512">
                            <path d="M256,49.5c67.3,0,75.2,0.3,101.8,1.5c35.6,2.1,56.5,8.6,75.7,27.5c8.4,8.1,14.8,18,18.8,29c3.5,8.9,7.6,22.2,8.7,46.8c2,20.9,2,182.7,0,203.6c-2.9,67.7-35.6,100.4-103.3,103.3c-20.9,2-182.7,2-203.6,0c-35.7-2.1-56.5-8.6-75.7-27.5c-18.9-19.3-25.4-40.1-27.5-75.7c-1.2-26.6-1.5-34.5-1.5-101.8s0.3-75.2,1.5-101.8c2.1-35.6,8.6-56.5,27.5-75.7c19.3-18.9,40.1-25.4,75.7-27.5C180.8,49.7,188.7,49.5,256,49.5 M256,4.1c-94.8,2-156.9-8.9-209.6,42.3C-4.8,98.9,6.1,161.2,4.1,256c2,94.8-8.9,157,42.3,209.6C59,478.5,74.2,488.4,91,494.7c16,6.2,34.3,10.5,61.2,11.7c21.2,2.1,186.5,2.1,207.7,0c88.5-2,144.5-58,146.5-146.5c2.1-21.3,2.1-186.4,0-207.7c-2.7-45.8-12.1-76.1-40.8-105.8C413-4.8,350.9,6.1,256,4.1L256,4.1L256,4.1z"/>
                            <path d="M256,126.635A129.365,129.365,0,1,0,385.365,256,129.365,129.365,0,0,0,256,126.635Zm0,213.338A83.973,83.973,0,1,1,339.974,256,83.974,83.974,0,0,1,256,339.973Z"/>
                            <circle cx="390.476" cy="121.524" r="30.23"/>
                        </svg>
                    </a>
                </div>
            </div>
        `;

        navIcons = document.querySelectorAll(".navlink .navbtns-content svg.navicons"),
        navAC = document.querySelector("#navaccueil-content"),
        navA = document.querySelector(".navlink#accueil"),
        navASep = document.querySelector(".nav-separator");

        function contentMarginLeftCheck() {
            if(isMobile == false) {
                document.querySelector("#content-container").style.marginLeft = navPos.offsetWidth + "px";
            } else {
                document.querySelector("#content-container").style.marginTop = navPos.offsetHeight + "px";
            }
            mobileTopNav();
        };
        contentMarginLeftCheck(); window.addEventListener("resize", contentMarginLeftCheck);

        function applyBGColor(ID) {
            document.body.style.backgroundColor = vhtrpColor[ID];
            document.querySelector("#container").style.backgroundColor = vhtrpColor[ID];
        }
        function applyPageTheme(ID) {
            function navCurrentStyle(nlID) {
                var nl = document.querySelector(".navlink#" + nlID),
                    nlPath = ".navlink#" + nlID,
                    nlpPath = ".navlink-p#" + nlID,
                    nliPath = nlpPath + " .navbtns-content svg.navicons";

                if(nl.classList.contains("navlink-p")) { // NORMAL
                    document.querySelector(nlpPath + " .nav-sel").classList.add("nlsel-current");
                    nl.classList.add("nl-current");

                    addClassAll(nliPath + " .to-fill", "nli-current-fill");
                    addClassAll(nliPath + " .stroke.to-trnsprnt", "nli-current-trnsprnt");
                    document.querySelector(nliPath + " g").classList.add("nli-current");
                } else { // ACCUEIL
                    document.querySelector(nlPath + " .nav-separator").classList.add("nl-current");
                }
            }
            if(ID == "accueil") { toAccueil = true; } else { toAccueil = false; navCurrentStyle(ID); }
            if(ID == "photographie") { document.documentElement.classList.add("photographie");
            } else {
                document.documentElement.classList.remove("photographie");
            }
        }
        applyBGColor(pathDir);
        applyPageTheme(pathDir);
        doc.style.setProperty('--bgpage', vhtrpColor[pathDir]);

        function pagetrBull(event, histbr, nl) {
            if(histbr == true) { event = getPageID(); }
            if(nl == null) { nl = document.querySelector(".navlink#" + event); }

            var pageW = document.documentElement.clientWidth,
                pageH = document.documentElement.clientHeight,
                nlID = nl.id,
                nlNotPath = ".navlink-p:not(#" + nlID + ")",
                nliNotPath = nlNotPath + " .navbtns-content svg.navicons";

            applyPageTheme(nlID);
            doc.style.setProperty('--bgpage', vhtrpColor[nlID]);

            removeClassAll(nlNotPath, "nl-current");
            removeClassAll(nlNotPath + " .nav-sel", "nlsel-current");
            removeClassAll(nliNotPath + " g", "nli-current");
            removeClassAll(nliNotPath + " .to-fill", "nli-current-fill");
            removeClassAll(nliNotPath + " .stroke.to-trnsprnt", "nli-current-trnsprnt");

            // MOBILE
            if(isMobile == true) {
                navPos.style.backgroundColor = null;
                swup.scrollTo(document.body, 0);
            }

            // VHTRP
            var newVHTRC = document.createElementNS(svgNS, "svg"),
                newVHTRCc = document.createElementNS(svgNS, "circle");
            newVHTRC.classList.add("vhtrp-circle"); newVHTRC.id = nlID;
            newVHTRC.setAttribute("viewBox", "0 0 " + (pageW / 100) + " " + (pageH / 100)); 
            newVHTRC.style.fill = vhtrpColor[nlID];
            newVHTRC.appendChild(newVHTRCc);
            document.querySelector("#vhtrp").appendChild(newVHTRC);

            if(histbr == false) { // normal
                if(nl.mouseIsOver == true) {
                    var curX = event.clientX,
                        curY = event.clientY,
                        VHTRcPosX = (curX / 100),
                        VHTRcPosY = (curY / 100),
                        nlTLenW = pageW - curX,
                        nlTLenH = pageH - (pageH - curY);
                    if(curX > (pageW / 2)) { nlTLenW = pageW - (pageW - curX); }
                    if(curY < (pageH / 2)) { nlTLenH = pageH - curY; }
                }
            } else { // history browsing
                var nltxt = nl;
                if(nl.classList.contains("navlink-p")) { nltxt = document.querySelector(".navlink#" + event + " .navbtns-content"); }
                var nlposX = nltxt.getBoundingClientRect().left + (nltxt.offsetWidth / 2),
                    nlposY = nltxt.getBoundingClientRect().top + (nltxt.offsetHeight / 2),
                    VHTRcPosX = (Math.round(nltxt.getBoundingClientRect().left + (nltxt.offsetWidth / 2)) / 100),
                    VHTRcPosY = (Math.round(nltxt.getBoundingClientRect().top + (nltxt.offsetHeight / 2)) / 100),
                    nlTLenW = pageW - (nltxt.getBoundingClientRect().left + (nltxt.offsetWidth / 2)),
                    nlTLenH = pageH - (pageH - nlposY);
                if(nlposX > (pageW / 2)) { nlTLenW = pageW - (pageW - nlposX); }
                if(nlposY < (pageH / 2)) { nlTLenH = pageH - (nltxt.getBoundingClientRect().top + (nltxt.offsetHeight / 2)); }
            }
            nlCR = (Math.round(((nlTLenW)**2 + (nlTLenH)**2)**(1/2)) / 100) + 0.1;

            newVHTRCc.setAttribute("cx", VHTRcPosX)
            newVHTRCc.setAttribute("cy", VHTRcPosY)
            setTimeout(function () {
                newVHTRCc.style.transition = "r 900ms cubic-bezier(0.5, 0.7, 0, 1)";
                newVHTRCc.setAttribute("r", nlCR)
            }, 10);
            setTimeout(function () {
                if(toAccueil == true) { document.querySelector("#page-bg").classList.add("accueil");
                } else { document.querySelector("#page-bg").classList.remove("accueil"); }
                applyBGColor(nlID);
                newVHTRC.style.transition = "opacity 600ms ease";
                newVHTRC.style.opacity = "0";
                setTimeout(function () {
                    newVHTRC.remove();
                }, 600);
            }, 900);
        }
        document.querySelectorAll(".navlink").forEach(function(nl) {
            nl.mouseIsOver = false;
            nl.onmouseover = function() { this.mouseIsOver = true; };
            nl.onmouseout = function() { this.mouseIsOver = false; };

            nl.addEventListener("click", function(event) { pagetrBull(event, false, nl); });
        });
        swup.on("popState", function() { pagetrBull(null, true, null); });
        
        function mobileTopNavA_reset() {
            navA.style.transform = null;
            navASep.style.transform = null;
            navAC.style.opacity = null;
        }
        function mobileTopNavN_reset() {
            navPos.style.backgroundColor = null;
            navIcons.forEach(function(ni) {
                ni.style.height = null;
                ni.style.margin = null;
            });
        }
        function mobileTopNav() {
            if(isMobile == true) {
                var topnavH = navPos.offsetHeight - document.querySelector("nav").offsetHeight;
                if(window.scrollY > topnavH) {
                    navPos.style.top = -topnavH + "px";
                    navPos.style.backgroundColor = "var(--bgpage)";
                    navIcons.forEach(function(ni) {
                        ni.style.height = "clamp(40px, 8vw, 45px)";
                        ni.style.margin = "12.5px clamp(15px, 5vw, 30px) 10px";
                    });
                    mobileTopNavA_reset();
                } else {
                    var scrollPercent = window.scrollY / topnavH;
                    navA.style.transform = "translateY(-" + (scrollPercent / 0.275) + "vw)";
                    navASep.style.transform = "translateY(-" + (scrollPercent / 0.75) + "vw)";
                    navAC.style.opacity = 1.2 - scrollPercent;
                    navPos.style.top = -window.scrollY + "px";
                    mobileTopNavN_reset();
                }
            } else {
                navA.style.transform = null;
                navPos.style.top = null;
                mobileTopNavA_reset();
                mobileTopNavN_reset();
            }
        }
        mobileTopNav(); window.addEventListener("scroll", mobileTopNav);
    }
}
init();
swup.on("contentReplaced", init);