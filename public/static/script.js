console.log("script running")
// Burger menus
document.addEventListener('DOMContentLoaded', function() {


    // Latest news section starts here

    const modal = document.getElementById("exampleModalWeb3");
    const openModalButton = document.getElementById("openModalButton");
    const closeModalButton = document.getElementById("closeModalButton");

    openModalButton.addEventListener("click", () => {
      modal.classList.remove("opacity-0", "pointer-events-none");
      modal.classList.add("opacity-100");
    });

    closeModalButton.addEventListener("click", () => {
      modal.classList.add("opacity-0", "pointer-events-none");
      modal.classList.remove("opacity-100");
    });

    // Latest news section ends here

    // --- Mobile Dropdown Toggle ---
    const mobileDropdownButton = document.getElementById('mobile-dropdown-button');
    const mobileDropdownMenu = document.getElementById('mobile-dropdown-menu');
    const mobileDropdownArrow = document.getElementById('nav-drop-down-svg');

    mobileDropdownButton.addEventListener('click', (event) => {
        event.stopPropagation();
        mobileDropdownMenu.classList.toggle('hidden');
        mobileDropdownArrow.classList.toggle('rotate-180');
    });


    // open
    // const burger = document.getElementById('hamburger-button');
    // const closeButton = document.getElementById('close-button')
    
    // burger.addEventListener('click', function() {
    //     console.log("burger just got clicked")

    //     const sidebarContainer = document.querySelector('.sidebar-container')
    //     sidebarContainer.style.display = 'flex'
    // });

    // closeButton.addEventListener('click', function() {
    //     console.log("close button clicked")

    //     const sidebarContainer = document.querySelector('.sidebar-container')
    //     sidebarContainer.style.display = 'none'
    // })


    // Leaflet Map 

    // var map = L.map('map').setView([51.505, -0.09], 13);

    // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     maxZoom: 19,
    //     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    // }).addTo(map);

    const containers = document.querySelectorAll("[data-indicator]");

    containers.forEach((container) => {
    const items = container.querySelectorAll(container.dataset.indicatorItem);
    const overlay = container.querySelector(container.dataset.indicator);
    indicator({ items, container, overlay });
    });

    function indicator({ items, container, overlay }) {
    let containerStyle = getComputedStyle(container);
    let containerPosition = containerStyle.getPropertyValue("position");
    let { y: containerY } = container.getBoundingClientRect();

    items.forEach((item) => {
        const { x, y, width, height } = item.getBoundingClientRect();
        let itemStyle = getComputedStyle(item);

        // Item position
        item.style.position = "relative";
        item.style.zIndex = "2";

        // Overlay
        item.onclick = () => {
        const top = y - (containerPosition == "static" ? 0 : containerY);

        overlay.style.position = "absolute";
        item.style.zIndex = "1";

        overlay.style.width = `${width}px`;
        overlay.style.height = `${height}px`;
        overlay.style.top = `${top}px`;
        overlay.style.left = `${x}px`;
        overlay.style.borderRadius = itemStyle.borderRadius;
        };
    });
}

});