const menu = document.getElementById("menu");
const menuNav = document.getElementById("menuNav");

const openMenu = () => {
  menu.classList.add("show");
  menu.classList.remove("hide");
};

const closeMenu = () => {
  menu.classList.remove("show");
  menu.classList.add("hide");
};
const openMenuNav = () => {
  menuNav.classList.add("show");
  menuNav.classList.remove("hide1");
};

const closeMenuNav = () => {
  menuNav.classList.remove("show");
  menuNav.classList.add("hide1");
};
