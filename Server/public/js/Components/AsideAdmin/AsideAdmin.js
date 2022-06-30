const AsideAdmin = document.getElementById('AsideAdmin');
const AsideAdminContainerImageIcon = document.getElementById('AsideAdminContainerImageIcon');

AsideAdmin.addEventListener('mouseover', () => {
	AsideAdmin.classList.add('AsideAdminActive');
	AsideAdminContainerImageIcon.classList.add('AsideAdminContainerImageIconHidde');
})

AsideAdmin.addEventListener('mouseleave', () => {
	AsideAdmin.classList.remove('AsideAdminActive');
	AsideAdminContainerImageIcon.classList.remove('AsideAdminContainerImageIconHidde');
})
