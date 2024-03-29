// contact button
const contactBtn = document.querySelector('#contactButton');

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
const closeContact = document.querySelector('#closeContact');


// Navigation Panel links
// top links
const mNav1 = document.querySelector('#mNav1');
const mNav2 = document.querySelector('#mNav2');
const mNav3 = document.querySelector('#mNav3');
const mNav4 = document.querySelector('#mNav4');

// bottom links
const mNavS1 = document.querySelector('#mNavS1');  // link text
const mD1 = document.querySelector('#mD1');  // devider line
const mNavS2 = document.querySelector('#mNavS2');  // link text
const mD2 = document.querySelector('#mD2');  // devider line
const mNavS3 = document.querySelector('#mNavS3');  // link text



// Search Panel Links
// search field
const searchInputField = document.querySelector('#searchInputField');

// bottom links
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

// open navigation 
const handleOpenMenu = () => {
    if (!navOpen) {
        menuOverlay.style.display = "block";
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            menuOverlay.style.opacity = "1";
            menuOverlay.style.transform = "translate3d(0, 0vh, 0)";
            menuOverlay.style.transition = "opacity 500ms ease";
            navPanel.style.transform = "translate3d(0%, 0%, 0)";
            navPanel.style.transition = "transform 1s cubic-bezier(0.25, 1, 0.5, 1)";
        }, 1);
        // top links
        setTimeout(() => {
            mNav1.style.opacity = "1";
            mNav1.style.transform = "translate3d(0px, 0, 0)";
            mNav1.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease, color 350ms ease";
        }, 500);
        setTimeout(() => {
            mNav2.style.opacity = "1";
            mNav2.style.transform = "translate3d(0px, 0, 0)";
            mNav2.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease, color 350ms ease";
        }, 650);
        setTimeout(() => {
            mNav3.style.opacity = "1";
            mNav3.style.transform = "translate3d(0px, 0, 0)";
            mNav3.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease, color 350ms ease";
        }, 800);
        setTimeout(() => {
            mNav4.style.opacity = "1";
            mNav4.style.transform = "translate3d(0px, 0, 0)";
            mNav4.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease, color 350ms ease";
        }, 950);

        // bottom links
        setTimeout(() => {
            mNavS1.style.opacity = "1";
            mNavS1.style.transform = "translate3d(0px, 0, 0)";
            mNavS1.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease, color 350ms ease";
            mD1.style.opacity = "1";
            mD1.style.transform = "translate3d(0px, 0, 0)";
            mD1.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease, color 350ms ease";
        }, 1100);
        setTimeout(() => {
            mNavS2.style.opacity = "1";
            mNavS2.style.transform = "translate3d(0px, 0, 0)";
            mNavS2.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease, color 350ms ease";
            mD2.style.opacity = "1";
            mD2.style.transform = "translate3d(0px, 0, 0)";
            mD2.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease, color 350ms ease";

            // close button
            closeMenu.style.opacity = "1";
            closeMenu.style.pointerEvents = "all";
            closeMenu.style.transition = "opacity 500ms ease";
        }, 1250);
        setTimeout(() => {
            mNavS3.style.opacity = "1";
            mNavS3.style.transform = "translate3d(0px, 0, 0)";
            mNavS3.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease, color 350ms ease";

            // menuOverlay
            menuOverlay.style.pointerEvents = "all"
        }, 1400);
        
    navOpen = true;
    searchOpen = false;
    }
}
// close navigation 
const handleCloseMenu = () => {
    if (navOpen) {
        menuOverlay.style.opacity = "0";
        menuOverlay.style.transition = "opacity 400ms ease";
        menuOverlay.style.pointerEvents = "none"

        navPanel.style.transform = "translate3d(100%, 0%, 0)";
        navPanel.style.transition = "transform 800ms cubic-bezier(0.76, 0, 0.24, 1)";
        document.body.style.overflow = 'auto';

        setTimeout(() => {
            // close button
            closeMenu.style.opacity = "0";
            closeMenu.style.pointerEvents = "none";
            closeMenu.style.transition = "opacity 200ms ease";
            // reset nav links to default values
            mNav1.style.opacity = "0";
            mNav1.style.transform = "translate3d(50px, 0, 0)";
            mNav1.style.transition = "transform 300ms cubic-bezier(0.25, 1, 0.5, 1), opacity 300ms ease";
            mNav2.style.opacity = "0";
            mNav2.style.transform = "translate3d(50px, 0, 0)";
            mNav2.style.transition = "transform 300ms cubic-bezier(0.25, 1, 0.5, 1), opacity 300ms ease";
            mNav3.style.opacity = "0";
            mNav3.style.transform = "translate3d(50px, 0, 0)";
            mNav3.style.transition = "transform 300ms cubic-bezier(0.25, 1, 0.5, 1), opacity 300ms ease";
            mNav4.style.opacity = "0";
            mNav4.style.transform = "translate3d(50px, 0, 0)";
            mNav4.style.transition = "transform 300ms cubic-bezier(0.25, 1, 0.5, 1), opacity 300ms ease";
            mNavS1.style.opacity = "0";
            mNavS1.style.transform = "translate3d(50px, 0, 0)";
            mNavS1.style.transition = "transform 300ms cubic-bezier(0.25, 1, 0.5, 1), opacity 300ms ease";
            mD1.style.opacity = "0";
            mD1.style.transform = "translate3d(50px, 0, 0)";
            mD1.style.transition = "transform 300ms cubic-bezier(0.25, 1, 0.5, 1), opacity 300ms ease";
            mNavS2.style.opacity = "0";
            mNavS2.style.transform = "translate3d(50px, 0, 0)";
            mNavS2.style.transition = "transform 300ms cubic-bezier(0.25, 1, 0.5, 1), opacity 300ms ease";
            mD2.style.opacity = "0";
            mD2.style.transform = "translate3d(50px, 0, 0)";
            mD2.style.transition = "transform 300ms cubic-bezier(0.25, 1, 0.5, 1), opacity 300ms ease";
            mNavS3.style.opacity = "0";
            mNavS3.style.transform = "translate3d(50px, 0, 0)";
            mNavS3.style.transition = "transform 300ms cubic-bezier(0.25, 1, 0.5, 1), opacity 300ms ease";
        }, 300);
        setTimeout(() => {
            menuOverlay.style.display = "none";
        }, 400);
    navOpen = false;
    }
}

// open search  
const handleOpenSearch = () => {
    if (!searchOpen) {
        menuOverlay.style.display = "block";
        document.body.style.overflow = 'hidden';

        setTimeout(() => {
            menuOverlay.style.opacity = "1";
            menuOverlay.style.transform = "translate3d(0, 0vh, 0)";
            menuOverlay.style.transition = "opacity 500ms ease";
            searchPanel.style.transform = "translate3d(0%, 0%, 0)";
            searchPanel.style.transition = "transform 1000ms cubic-bezier(0.25, 1, 0.5, 1)";
        }, 1);
        // search field
        setTimeout(() => {
            searchInputField.style.opacity = "1";
            searchInputField.style.transform = "translate3d(0px, 0, 0)";
            searchInputField.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease, color 350ms ease";
        }, 500);

        // bottom links
        setTimeout(() => {
            sNav1.style.opacity = "1";
            sNav1.style.transform = "translate3d(0px, 0, 0)";
            sNav1.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease, color 350ms ease";
            sD1.style.opacity = "1";
            sD1.style.transform = "translate3d(0px, 0, 0)";
            sD1.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease, color 350ms ease";
        }, 650);
        setTimeout(() => {
            sNav2.style.opacity = "1";
            sNav2.style.transform = "translate3d(0px, 0, 0)";
            sNav2.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease, color 350ms ease";
            sD2.style.opacity = "1";
            sD2.style.transform = "translate3d(0px, 0, 0)";
            sD2.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease, color 350ms ease";
        }, 800);
        setTimeout(() => {
            sNav3.style.opacity = "1";
            sNav3.style.transform = "translate3d(0px, 0, 0)";
            sNav3.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease, color 350ms ease";
            sD3.style.opacity = "1";
            sD3.style.transform = "translate3d(0px, 0, 0)";
            sD3.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease, color 350ms ease";


            // close button
            closeSearch.style.opacity = "1";
            closeSearch.style.pointerEvents = "all";
            closeSearch.style.transition = "opacity 500ms ease";
        }, 950);
        setTimeout(() => {
            sNav4.style.opacity = "1";
            sNav4.style.transform = "translate3d(0px, 0, 0)";
            sNav4.style.transition = "transform 1250ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease, color 350ms ease";

            // menuOverlay
            menuOverlay.style.pointerEvents = "all"
        }, 1100);
        
    searchOpen = true;
    navOpen = false;
    }
}
// close search  
const handleCloseSearch = () => {
    if (searchOpen) {
        menuOverlay.style.opacity = "0";
        menuOverlay.style.transition = "opacity 400ms ease";
        menuOverlay.style.pointerEvents = "none"

        searchPanel.style.transform = "translate3d(100%, 0%, 0)";
        searchPanel.style.transition = "transform 800ms cubic-bezier(0.76, 0, 0.24, 1)";
        document.body.style.overflow = 'auto';


        setTimeout(() => {
            searchInputField.style.opacity = "0";
            searchInputField.style.transform = "translate3d(50px, 0, 0)";
            searchInputField.style.transition = "transform 300ms cubic-bezier(0.25, 1, 0.5, 1), opacity 300ms ease";

            // close button
            closeSearch.style.opacity = "0";
            closeSearch.style.pointerEvents = "all";
            closeSearch.style.transition = "opacity 200ms ease";
            // reset links to default values
            sNav1.style.opacity = "0";
            sNav1.style.transform = "translate3d(50px, 0, 0)";
            sNav1.style.transition = "transform 300ms cubic-bezier(0.25, 1, 0.5, 1), opacity 300ms ease";
            sD1.style.opacity = "0";
            sD1.style.transform = "translate3d(50px, 0, 0)";
            sD1.style.transition = "transform 300ms cubic-bezier(0.25, 1, 0.5, 1), opacity 300ms ease";
            sNav2.style.opacity = "0";
            sNav2.style.transform = "translate3d(50px, 0, 0)";
            sNav2.style.transition = "transform 300ms cubic-bezier(0.25, 1, 0.5, 1), opacity 300ms ease";
            sD2.style.opacity = "0";
            sD2.style.transform = "translate3d(50px, 0, 0)";
            sD2.style.transition = "transform 300ms cubic-bezier(0.25, 1, 0.5, 1), opacity 300ms ease";
            sNav3.style.opacity = "0";
            sNav3.style.transform = "translate3d(50px, 0, 0)";
            sNav3.style.transition = "transform 300ms cubic-bezier(0.25, 1, 0.5, 1), opacity 300ms ease";
            sD3.style.opacity = "0";
            sD3.style.transform = "translate3d(50px, 0, 0)";
            sD3.style.transition = "transform 300ms cubic-bezier(0.25, 1, 0.5, 1), opacity 300ms ease";
            sNav4.style.opacity = "0";
            sNav4.style.transform = "translate3d(50px, 0, 0)";
            sNav4.style.transition = "transform 300ms cubic-bezier(0.25, 1, 0.5, 1), opacity 300ms ease";
        }, 300);
        setTimeout(() => {
            menuOverlay.style.display = "none";
        }, 400);
    searchOpen = false;
    }
}

// open contact panel
const handleContactOpen = () => {
    contactPanel.style.display = "block";

    setTimeout(() => {
        contactPanel.style.opacity = "1";
        contactPanel.style.transition = "opacity 450ms ease";
    }, 1);
}

// close contact panel
const handleContactClose = () => {
    contactPanel.style.opacity = "0";
    contactPanel.style.transition = "opacity 400ms ease";

    setTimeout(() => {
        contactPanel.style.display = "none";
    }, 400);
}


// navigation panel
navBtn.addEventListener("click", handleOpenMenu);
closeMenu.addEventListener("click", handleCloseMenu);

// search panel
searchBtn.addEventListener("click", handleOpenSearch);
closeSearch.addEventListener("click", handleCloseSearch);

// contact panel
mNav4.addEventListener("click", handleContactOpen);
closeContact.addEventListener("click", handleContactClose);

// on click body overlay close all panels
menuOverlay.onclick = () => {
    handleCloseMenu();
    handleCloseSearch();
    handleContactClose();
};

// open CTA module contact panel
const contactButtonsOpen = () => {
    handleContactOpen();
    menuOverlay.style.display = "block";
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        menuOverlay.style.opacity = "1";
        menuOverlay.style.transform = "translate3d(0, 0vh, 0)";
        menuOverlay.style.transition = "opacity 500ms ease";
        menuOverlay.style.pointerEvents = "all"
    }, 100);
};

// close CTA module contact panel
const closeCTAModuleContact = () => {
    handleCloseMenu();
    handleCloseSearch();
    handleContactClose();
    menuOverlay.style.opacity = "0";
    menuOverlay.style.transition = "opacity 400ms ease";
    menuOverlay.style.pointerEvents = "none"
    setTimeout(() => {
        menuOverlay.style.display = "none";
    }, 400);
    document.body.style.overflow = 'auto';
};
closeContact.addEventListener("click", closeCTAModuleContact);

// check if the element is on the page
document.addEventListener("DOMContentLoaded", function() {
    if (contactBtn) {
        contactBtn.addEventListener("click", contactButtonsOpen);
    }
});

// on click body overlay close CTA module contact panel
menuOverlay.onclick = closeCTAModuleContact;
