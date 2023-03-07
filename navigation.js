// Open/closed state
let navOpen = false;
let searchOpen = false;

// Navigation menu
openNavBtn.onclick = () => {
    if (!navOpen) {

        // Close search menu 
        if (searchOpen) {
            hideSearchMenu()
        }

        // Open Mega menu
        megaMenu.style.display = "flex";
        setTimeout(() => {
            megaMenu.style.opacity = "1";
            megaMenu.style.transform = "translate3d(0px, 0px, 0px)";
            megaMenu.style.transition = "transform 500ms cubic-bezier(0.16, 1, 0.3, 1), opacity 500ms ease";

            openNavBtn.classList.add("toggled");
            document.body.style.overflow = 'hidden';
        }, "100");
        setTimeout(() => {
            link1.style.opacity = "1";
            link1.style.transform = "translate3d(0px, 0px, 0px)";
            link1.style.transition = "transform 2s cubic-bezier(0.16, 1, 0.3, 1), opacity 1s ease";
        }, "600");
        setTimeout(() => {
            link2.style.opacity = "1";
            link2.style.transform = "translate3d(0px, 0px, 0px)";
            link2.style.transition = "transform 2s cubic-bezier(0.16, 1, 0.3, 1), opacity 1s ease";
        }, "800");
        setTimeout(() => {
            link3.style.opacity = "1";
            link3.style.transform = "translate3d(0px, 0px, 0px)";
            link3.style.transition = "transform 2s cubic-bezier(0.16, 1, 0.3, 1), opacity 1s ease";
        }, "1000");
        setTimeout(() => {
            contactDetails.style.opacity = "1";
            contactDetails.style.transform = "translate3d(0px, 0px, 0px)";
            contactDetails.style.transition = "transform 2s cubic-bezier(0.16, 1, 0.3, 1), opacity 1s ease";
        }, "1200");
        setTimeout(() => {
            socialLinks.style.opacity = "1";
            socialLinks.style.transform = "translate3d(0px, 0px, 0px)";
            socialLinks.style.transition = "transform 2s cubic-bezier(0.16, 1, 0.3, 1), opacity 1s ease";
        }, "1400");

        navOpen = true;
    } else {
        // Close Mega menu
        setTimeout(() => {
            socialLinks.style.opacity = "0";
            socialLinks.style.transform = "translate3d(0px, 40px, 0px)";
            socialLinks.style.transition = "transform 2s ease, opacity 1s ease";
        }, "100");
        setTimeout(() => {
            contactDetails.style.opacity = "0";
            contactDetails.style.transform = "translate3d(0px, 40px, 0px)";
            contactDetails.style.transition = "transform 2s ease, opacity 1s ease";
        }, "300");
        setTimeout(() => {
            link3.style.opacity = "0";
            link3.style.transform = "translate3d(0px, 40px, 0px)";
            link3.style.transition = "transform 2s ease, opacity 1s ease";
        }, "500");
        setTimeout(() => {
            link2.style.opacity = "0";
            link2.style.transform = "translate3d(0px, 40px, 0px)";
            link2.style.transition = "transform 2s ease, opacity 1s ease";
        }, "700");
        setTimeout(() => {
            link1.style.opacity = "0";
            link1.style.transform = "translate3d(0px, 40px, 0px)";
            link1.style.transition = "transform 2s ease, opacity 1s ease";
        }, "900");
        setTimeout(() => {
            megaMenu.style.opacity = "0";
            megaMenu.style.transform = "translate3d(0px, 130px, 0px)";
            megaMenu.style.transition = "transform 500ms ease, opacity 500ms ease";
        }, "1100");
        setTimeout(() => {
            megaMenu.style.display = "none"
            openNavBtn.classList.remove("toggled");
            document.body.style.overflow = 'auto';
        }, "1500");

        navOpen = false;
    }
}


// Search menu
openSearchBtn.onclick = () => {
    if (!searchOpen) {
        // Close Mega menu 
        if (navOpen) {
            hideMegahMenu()
        }

        // Open Search menu
        searchMenu.style.display = "flex";
        setTimeout(() => {
            searchMenu.style.opacity = "1";
            searchMenu.style.transform = "translate3d(0px, 0px, 0px)";
            searchMenu.style.transition = "transform 500ms cubic-bezier(0.16, 1, 0.3, 1), opacity 500ms ease";

            openSearchBtn.classList.add("toggled");
            document.body.style.overflow = 'hidden';
        }, "100");
        setTimeout(() => {
            formSearch.style.opacity = "1";
            formSearch.style.transform = "translate3d(0px, 0px, 0px)";
            formSearch.style.transition = "transform 2s cubic-bezier(0.16, 1, 0.3, 1), opacity 1s ease";
        }, "600");
        setTimeout(() => {
            formTags.style.opacity = "1";
            formTags.style.transform = "translate3d(0px, 0px, 0px)";
            formTags.style.transition = "transform 2s cubic-bezier(0.16, 1, 0.3, 1), opacity 1s ease";
        }, "800");

        searchOpen = true;
    } else {
        // Close Search menu
        setTimeout(() => {
            formTags.style.opacity = "0";
            formTags.style.transform = "translate3d(0px, 40px, 0px)";
            formTags.style.transition = "transform 2s ease, opacity 1s ease";
        }, "100");
        setTimeout(() => {
            formSearch.style.opacity = "0";
            formSearch.style.transform = "translate3d(0px, 40px, 0px)";
            formSearch.style.transition = "transform 2s ease, opacity 1s ease";
        }, "300");
        setTimeout(() => {
            searchMenu.style.opacity = "0";
            searchMenu.style.transform = "translate3d(0px, 130px, 0px)";
            searchMenu.style.transition = "transform 500ms ease, opacity 500ms ease";
        }, "500");
        setTimeout(() => {
            searchMenu.style.display = "none"
            openSearchBtn.classList.remove("toggled");
            document.body.style.overflow = 'auto';
        }, "1000");

        searchOpen = false;
    }
}


function hideMegahMenu() {
    setTimeout(() => {
        socialLinks.style.opacity = "0";
        socialLinks.style.transform = "translate3d(0px, 40px, 0px)";
        socialLinks.style.transition = "transform 2s ease, opacity 1s ease";
    }, "100");
    setTimeout(() => {
        contactDetails.style.opacity = "0";
        contactDetails.style.transform = "translate3d(0px, 40px, 0px)";
        contactDetails.style.transition = "transform 2s ease, opacity 1s ease";
    }, "300");
    setTimeout(() => {
        link3.style.opacity = "0";
        link3.style.transform = "translate3d(0px, 40px, 0px)";
        link3.style.transition = "transform 2s ease, opacity 1s ease";
    }, "500");
    setTimeout(() => {
        link2.style.opacity = "0";
        link2.style.transform = "translate3d(0px, 40px, 0px)";
        link2.style.transition = "transform 2s ease, opacity 1s ease";
    }, "700");
    setTimeout(() => {
        link1.style.opacity = "0";
        link1.style.transform = "translate3d(0px, 40px, 0px)";
        link1.style.transition = "transform 2s ease, opacity 1s ease";
    }, "900");
    setTimeout(() => {
        megaMenu.style.opacity = "0";
        megaMenu.style.transform = "translate3d(0px, 130px, 0px)";
        megaMenu.style.transition = "transform 500ms ease, opacity 500ms ease";
    }, "1100");
    setTimeout(() => {
        megaMenu.style.display = "none"
        openNavBtn.classList.remove("toggled");
    }, "1500");
    navOpen = false;
}


function hideSearchMenu() {
    setTimeout(() => {
        formTags.style.opacity = "0";
        formTags.style.transform = "translate3d(0px, 40px, 0px)";
        formTags.style.transition = "transform 2s ease, opacity 1s ease";
    }, 100);
    setTimeout(() => {
        formSearch.style.opacity = "0";
        formSearch.style.transform = "translate3d(0px, 40px, 0px)";
        formSearch.style.transition = "transform 2s ease, opacity 1s ease";
    }, 300);
    setTimeout(() => {
        searchMenu.style.opacity = "0";
        searchMenu.style.transform = "translate3d(0px, 130px, 0px)";
        searchMenu.style.transition = "transform 500ms ease, opacity 500ms ease";
    }, 500);
    setTimeout(() => {
        searchMenu.style.display = "none";
        openSearchBtn.classList.remove("toggled");
    }, 1000);
    searchOpen = false;
}