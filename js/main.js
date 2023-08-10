window.addEventListener('load', () => {
    // everything here

    const toInsertYear = document.querySelector("#year");
    const year = new Date().getFullYear();

    toInsertYear.textContent = year;

    const checkMedia = () => {
        if(window.innerWidth < 769) {
            const flex = document.querySelectorAll(".flex")[0];
            const classesToRemove = ["flex", "flex-column", "padding-2rem-x-1rem-y"];
            const classesToAdd = ["padding-1rem"];
            flex ? (flex.classList.remove(...classesToRemove), flex.classList.add(...classesToAdd)) : null;
        }
    };
    checkMedia();
    window.addEventListener('resize', checkMedia);
});