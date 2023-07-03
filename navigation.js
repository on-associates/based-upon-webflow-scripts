// body overlay
const menuOverlay = document.querySelector('#menuOverlay');

// panels
const navPanel = document.querySelector('#navPanel');
const searchPanel = document.querySelector('#searchPanel');
const contactPanel = document.querySelector('#contactPanel');

// open buttons
const navBtn = document.querySelector('#navBtn');
const searchBtn = document.querySelector('#searchBtn');

// close buttons
const closeMenu = document.querySelector('#closeMenu');
const closeSearch = document.querySelector('#closeSearch');


// Nav Panel links
// first nav
const mNav1 = document.querySelector('#mNav1');
const mNav2 = document.querySelector('#mNav2');
const mNav3 = document.querySelector('#mNav3');
const mNav4 = document.querySelector('#mNav4');

// second nav
const mNavS1 = document.querySelector('#mNavS1');  // link text
const mD1 = document.querySelector('#mD1');  // devider line
const mNavS2 = document.querySelector('#mNavS2');  // link text
const mD2 = document.querySelector('#mD2');  // devider line
const mNavS3 = document.querySelector('#mNavS3');  // link text

// Search Panel links
// first nav
const searchInputField = document.querySelector('#searchInputField');

// second nav
const sNav1 = document.querySelector('#sNav1');  // link text
const sD1 = document.querySelector('#sD1');  // devider line
const sNav2 = document.querySelector('#sNav2');  // link text
const sD2 = document.querySelector('#sD2');  // devider line
const sNav3 = document.querySelector('#sNav3');  // link text
const sD3 = document.querySelector('#sD3');  // devider line
const sNav4 = document.querySelector('#sNav4');  // link text


let navOpen = false;
let searchOpen = false;
let contactOpen = false;


// Open Nav Menu 
const handleOpenMenu = () => {
    if (!navOpen) {
        menuOverlay.style.display = "block";
        setTimeout(() => {
            menuOverlay.style.opacity = "1";
            menuOverlay.style.transform = "translate3d(0, 0vh, 0)";
            menuOverlay.style.transition = "opacity 500ms ease";
            navPanel.style.transform = "translate3d(0%, 0%, 0)";
            navPanel.style.transition = "transform 1000ms cubic-bezier(0.25, 1, 0.5, 1)";
        }, 1);
        // first nav
        setTimeout(() => {
            mNav1.style.opacity = "1";
            mNav1.style.transform = "translate3d(0px, 0, 0)";
            mNav1.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease";
        }, 500);
        setTimeout(() => {
            mNav2.style.opacity = "1";
            mNav2.style.transform = "translate3d(0px, 0, 0)";
            mNav2.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease";
        }, 650);
        setTimeout(() => {
            mNav3.style.opacity = "1";
            mNav3.style.transform = "translate3d(0px, 0, 0)";
            mNav3.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease";
        }, 800);
        setTimeout(() => {
            mNav4.style.opacity = "1";
            mNav4.style.transform = "translate3d(0px, 0, 0)";
            mNav4.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease";
        }, 950);

        // second nav
        setTimeout(() => {
            mNavS1.style.opacity = "1";
            mNavS1.style.transform = "translate3d(0px, 0, 0)";
            mNavS1.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease";
            mD1.style.opacity = "1";
            mD1.style.transform = "translate3d(0px, 0, 0)";
            mD1.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease";
        }, 1100);
        setTimeout(() => {
            mNavS2.style.opacity = "1";
            mNavS2.style.transform = "translate3d(0px, 0, 0)";
            mNavS2.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease";
            mD2.style.opacity = "1";
            mD2.style.transform = "translate3d(0px, 0, 0)";
            mD2.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease";
        }, 1250);
        setTimeout(() => {
            mNavS3.style.opacity = "1";
            mNavS3.style.transform = "translate3d(0px, 0, 0)";
            mNavS3.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease";
        }, 1400);
        
    navOpen = true;
    searchOpen = false;
    }
}

// Close Nav Menu
const handleCloseMenu = () => {
    if (navOpen) {
        menuOverlay.style.opacity = "0";
        menuOverlay.style.transform = "translate3d(0, 50vh, 0)";
        menuOverlay.style.transition = "opacity 500ms ease, transform 1s cubic-bezier(0.76, 0, 0.24, 1)";

        navPanel.style.transform = "translate3d(100%, 0%, 0)";
        navPanel.style.transition = "opacity 500ms ease, transform 1s cubic-bezier(0.76, 0, 0.24, 1)";
        setTimeout(() => {
            menuOverlay.style.display = "none";
        }, 600);

        // first nav
        setTimeout(() => {
            mNav1.style.opacity = "0";
            mNav1.style.transform = "translate3d(50px, 0, 0)";
            mNav1.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease";
        }, 500);
        setTimeout(() => {
            mNav2.style.opacity = "0";
            mNav2.style.transform = "translate3d(50px, 0, 0)";
            mNav2.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease";
        }, 650);
        setTimeout(() => {
            mNav3.style.opacity = "0";
            mNav3.style.transform = "translate3d(50px, 0, 0)";
            mNav3.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease";
        }, 800);
        setTimeout(() => {
            mNav4.style.opacity = "0";
            mNav4.style.transform = "translate3d(50px, 0, 0)";
            mNav4.style.transition = "transform 950ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease";
        }, 950);

        // second nav
        setTimeout(() => {
            mNavS1.style.opacity = "0";
            mNavS1.style.transform = "translate3d(50px, 0, 0)";
            mNavS1.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease";
            mD1.style.opacity = "0";
            mD1.style.transform = "translate3d(50px, 0, 0)";
            mD1.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease";
        }, 1100);
        setTimeout(() => {
            mNavS2.style.opacity = "0";
            mNavS2.style.transform = "translate3d(50px, 0, 0)";
            mNavS2.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease";
            mD2.style.opacity = "0";
            mD2.style.transform = "translate3d(50px, 0, 0)";
            mD2.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease";
        }, 1250);
        setTimeout(() => {
            mNavS3.style.opacity = "0";
            mNavS3.style.transform = "translate3d(50px, 0, 0)";
            mNavS3.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease";
        }, 1400);

    navOpen = false;
    }
}

// Open Search  
const handleOpenSearch = () => {
    if (!searchOpen) {
        menuOverlay.style.display = "block";
        setTimeout(() => {
            menuOverlay.style.opacity = "1";
            menuOverlay.style.transform = "translate3d(0, 0vh, 0)";
            menuOverlay.style.transition = "opacity 500ms ease";
            searchPanel.style.transform = "translate3d(0%, 0%, 0)";
            searchPanel.style.transition = "transform 1000ms cubic-bezier(0.25, 1, 0.5, 1)";
        }, 1);
        // first nav
        setTimeout(() => {
            searchInputField.style.opacity = "1";
            searchInputField.style.transform = "translate3d(0px, 0, 0)";
            searchInputField.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease";
        }, 500);

        // second nav
        setTimeout(() => {
            sNav1.style.opacity = "1";
            sNav1.style.transform = "translate3d(0px, 0, 0)";
            sNav1.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease";
            sD1.style.opacity = "1";
            sD1.style.transform = "translate3d(0px, 0, 0)";
            sD1.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease";
        }, 650);
        setTimeout(() => {
            sNav2.style.opacity = "1";
            sNav2.style.transform = "translate3d(0px, 0, 0)";
            sNav2.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease";
            sD2.style.opacity = "1";
            sD2.style.transform = "translate3d(0px, 0, 0)";
            sD2.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease";
        }, 800);
        setTimeout(() => {
            sNav3.style.opacity = "1";
            sNav3.style.transform = "translate3d(0px, 0, 0)";
            sNav3.style.transition = "transform 950ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease";
            sD3.style.opacity = "1";
            sD3.style.transform = "translate3d(0px, 0, 0)";
            sD3.style.transition = "transform 950ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease";
        }, 950);
        setTimeout(() => {
            sNav4.style.opacity = "1";
            sNav4.style.transform = "translate3d(0px, 0, 0)";
            sNav4.style.transition = "transform 950ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease";
        }, 1100);
        
    searchOpen = true;
    navOpen = false;
    }
}

// Close Search  
const handleCloseSearch = () => {
    if (searchOpen) {
        menuOverlay.style.opacity = "0";
        menuOverlay.style.transform = "translate3d(0, 50vh, 0)";
        menuOverlay.style.transition = "opacity 500ms ease, transform 1s cubic-bezier(0.76, 0, 0.24, 1)";

        searchPanel.style.transform = "translate3d(100%, 0%, 0)";
        searchPanel.style.transition = "transform 800ms cubic-bezier(0.76, 0, 0.24, 1)";
        setTimeout(() => {
            menuOverlay.style.display = "none";
        }, 600);

        // first nav
        setTimeout(() => {
            searchInputField.style.opacity = "0";
            searchInputField.style.transform = "translate3d(50px, 0, 0)";
            searchInputField.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease";
        }, 500);

        // second nav  -- ODAVDE 
        setTimeout(() => {
            sNav1.style.opacity = "0";
            sNav1.style.transform = "translate3d(50px, 0, 0)";
            sNav1.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease";
            sD1.style.opacity = "0";
            sD1.style.transform = "translate3d(50px, 0, 0)";
            sD1.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease";
        }, 650);
        setTimeout(() => {
            sNav2.style.opacity = "0";
            sNav2.style.transform = "translate3d(50px, 0, 0)";
            sNav2.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease";
            sD2.style.opacity = "0";
            sD2.style.transform = "translate3d(50px, 0, 0)";
            sD2.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease";
        }, 800);
        setTimeout(() => {
            sNav3.style.opacity = "0";
            sNav3.style.transform = "translate3d(50px, 0, 0)";
            sNav3.style.transition = "transform 950ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease";
            sD3.style.opacity = "0";
            sD3.style.transform = "translate3d(50px, 0, 0)";
            sD3.style.transition = "transform 950ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease";
        }, 950);
        setTimeout(() => {
            sNav4.style.opacity = "0";
            sNav4.style.transform = "translate3d(50px, 0, 0)";
            sNav4.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease";
        }, 1100);
    searchOpen = false;
    }
}

// Nav
navBtn.addEventListener("click", handleOpenMenu);
closeMenu.addEventListener("click", handleCloseMenu);

// Search
searchBtn.addEventListener("click", handleOpenSearch);
closeSearch.addEventListener("click", handleCloseSearch);

// Overlay close
menuOverlay.onclick = () => {
    handleCloseMenu();
    handleCloseSearch();
};
