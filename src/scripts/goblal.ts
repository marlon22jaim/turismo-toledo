

// Obtén los elementos del DOM
const menuButton = document.getElementById(
    "menu-button",
) as HTMLButtonElement | null;
const mobileMenu = document.getElementById(
    "mobile-menu",
) as HTMLElement | null;
const closeMenu = document.getElementById(
    "close-menu",
) as HTMLButtonElement | null;

// Añade los eventos de click si los elementos existen
if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
        if (mobileMenu) {
            mobileMenu.classList.toggle("hidden");
        }
    });
}

if (closeMenu && mobileMenu) {
    closeMenu.addEventListener("click", () => {
        if (mobileMenu) {
            mobileMenu.classList.add("hidden");
        }
    });
}
