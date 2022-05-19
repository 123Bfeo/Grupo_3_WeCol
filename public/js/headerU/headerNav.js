const submenuItem = document.getElementById('submenuItem');
const submenu = document.getElementById('submenu');
const submenuItem_icon = document.getElementById('submenuItem_icon');

submenuItem.addEventListener('click', () => {
	submenu.classList.toggle('show');
	submenuItem_icon.classList.toggle('rotate');
});

submenu.addEventListener('mouseleave', () => {
	submenu.classList.toggle('show');
	submenuItem_icon.classList.toggle('rotate');
});
