const swup = new Swup({
    animateHistoryBrowsing: true,
    plugins: [new SwupScrollPlugin({
        scrollFriction: 0.8,
        scrollAcceleration: 0.6,
    })]
});

var parallaxBG = new Parallax(document.getElementById("parallax-bg"), {
    limitX: false,
    limitY: false,
    scalarX: 1.1,
    scalarY: 1.1,
    frictionX: 0.2,
    frictionY: 0.2
});

var doc = document.documentElement,
    isMobile = undefined,
    svgNS = "http://www.w3.org/2000/svg",
    vhtrpColor = {"accueil" : "#4B4B4B", "photographie" : "#f0f0f0", "video" : "#0f0f0f", "contact" : "#212121"};

function checkWinSize() { if(window.innerWidth > 727) { isMobile = false; parallaxBG.scalar(1.1, 1.1); parallaxBG.friction(0.2, 0.2);
    } else { isMobile = true; parallaxBG.scalar(7, 5); parallaxBG.friction(0.1, 0.1); }};
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

    if(pathDir == "accueil" || pathDir == "contact") { parallaxBG.enable(); } else { parallaxBG.disable(); }

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
                                <div class="icon-container">
                                    <svg class="navicons" viewBox="0 0 32 32">
                                        <g>
                                            <g id="sun">
                                                <g>
                                                    <circle class="stroke" stroke-width="2.5" cx="10.7" cy="10.6" r="4.2"/>
                                                    <circle class="fill stroke" stroke-width="2.5" cx="25.6" cy="57" r="4.2"/>
                                                </g>
                                            </g>
                                            <g id="mountain">
                                                <polyline class="to-fill" points="8.3,29.5 19.1,18.8 29.8,29.5 8.3,29.5"/>
                                            </g>
                                            <polygon class="fill" points="7.1,31.7 4.6,29.2 17.8,16 20.3,16 30.6,26.3 28.1,28.7 19.1,19.7"/>

                                            <path id="frame" class="fill" d="M26.8,3L29,5.2v21.5L26.8,29H5.2L3,26.8V5.2L5.2,3H26.8 M28,0H4C2.4,1.6,1.6,2.4,0,4v24c1.6,1.6,2.4,2.4,4,4h24c1.6-1.6,2.4-2.4,4-4V4C30.4,2.4,29.6,1.6,28,0L28,0z"/>
                                        </g>
                                    </svg>
                                </div>
                                <span>PHOTOGRAPHIE</span>
                            </div>
                        </div>
                    </a>
                    <a id="video" class="navlink navlink-p" href="/video/">
                        <div>
                            <div class="nav-sel"></div>
                            <div class="navbtns-content">
                                <div class="icon-container">
                                    <svg class="navicons" viewBox="0 0 32 32">
                                    <g>
                                        <g>
                                            <polygon class="to-fill" points="9.6,8.5 9.6,23.5 22.6,16"/>
                                        </g>
                                        <path class="fill" d="M9.4,26.3l-2.1-1.2V6.9l2.1-1.2l15.7,9.1v2.4L9.4,26.3z M10.1,9.3v13.3L21.7,16L10.1,9.3z"/>

                                        <path id="frame" class="fill" d="M26.8,3L29,5.2v21.5L26.8,29H5.2L3,26.8V5.2L5.2,3H26.8 M28,0H4C2.4,1.6,1.6,2.4,0,4v24c1.6,1.6,2.4,2.4,4,4h24c1.6-1.6,2.4-2.4,4-4V4C30.4,2.4,29.6,1.6,28,0L28,0z"/>
                                    </g>
                                    </svg>
                                </div>
                                <span>VIDÉO</span>
                            </div>
                        </div>
                    </a>
                    <a id="contact" class="navlink navlink-p" href="/contact/">
                        <div>
                            <div class="nav-sel"></div>
                            <div class="navbtns-content">
                                <div class="icon-container">
                                    <svg class="navicons" viewBox="0 0 32 32">
                                    <g>
                                        <rect class="to-fill" x="7.7" y="9.2" width="16.5" height="12.8"/>
                                        <path class="fill" d="M8.2,10.5v11.1h15.5V10.5H8.2z M24.7,8l1.6,2v14H5.8V10l1.6-2H24.7z"/>
                                        <polygon class="fill to-trnsprnt" points="7.3,8 16,14.4 24.7,8 26.3,8 26.3,10 16.8,17 15.2,17 5.8,10 5.8,8"/>

                                        <path id="frame" class="fill" d="M26.8,3L29,5.2v21.5L26.8,29H5.2L3,26.8V5.2L5.2,3H26.8 M28,0H4C2.4,1.6,1.6,2.4,0,4v24c1.6,1.6,2.4,2.4,4,4h24c1.6-1.6,2.4-2.4,4-4V4C30.4,2.4,29.6,1.6,28,0L28,0z"/>
                                    </g>
                                    </svg>
                                </div>
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
        navDiv = document.querySelectorAll("a.navlink > div"),
        nav = document.querySelector("nav"),
        navAC = document.querySelector("#navaccueil-content"),
        navA = document.querySelector(".navlink#accueil"),
        navASep = document.querySelector(".nav-separator"),
        navLBG = document.querySelector("#nav-layerbg");

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
            function pageBGClass(ID) {
                document.querySelector("#page-bg").className = "";
                document.querySelector("#page-bg").classList.add(ID);
            }
            pageBGClass(ID);
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

                    document.querySelector(nlpPath + " .navbtns-content .icon-container").classList.add("nlsvgc-current");
                    addClassAll(nliPath + " g", "nli-current");
                    addClassAll(nliPath + " .to-fill", "nli-current-fill");
                    addClassAll(nliPath + " .to-trnsprnt", "nli-current-trnsprnt");
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
            removeClassAll(nlNotPath + " .navbtns-content .icon-container", "nlsvgc-current");
            removeClassAll(nliNotPath + " g", "nli-current");
            removeClassAll(nliNotPath + " .to-fill", "nli-current-fill");
            removeClassAll(nliNotPath + " .to-trnsprnt", "nli-current-trnsprnt");

            // MOBILE
            if(isMobile == true) { swup.scrollTo(document.body, 0); }

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
            navDiv.forEach(function(ni) { ni.style.margin = null; });
            navIcons.forEach(function(ni) { ni.style.height = null; });
        }
        function mobileTopNav() {
            if(isMobile == true) {
                var topnavH = navPos.offsetHeight - nav.offsetHeight;
                if(window.scrollY > topnavH) { // MOBILE free
                    if(navLBG.style.height != nav.offsetHeight + "px") {
                        navPos.style.top = -topnavH + "px";
                        navDiv.forEach(function(ni) {
                            ni.style.margin = "12.5px clamp(15px, 5vw, 30px) 10px"; });
                        navIcons.forEach(function(ni) {
                            ni.style.height = "clamp(40px, 8vw, 45px)"; });
                        mobileTopNavA_reset();
                        navLBG.style.opacity = "1";
                        navLBG.style.height = nav.offsetHeight + "px";
                    }
                } else { // MOBILE lock
                    var scrollPercent = window.scrollY / topnavH;
                    navA.style.transform = "translateY(-" + (scrollPercent / 0.275) + "vw)";
                    navASep.style.transform = "translateY(-" + (scrollPercent / 0.75) + "vw)";
                    navAC.style.opacity = 1.3 - (scrollPercent * 1.4);
                    navPos.style.top = -window.scrollY + "px";
                    mobileTopNavN_reset();
                    navLBG.style.opacity = "0";
                }
            } else { // PC
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