const ProfileAction = document.getElementById('ProfileAction');
const ProfileAction_Body = document.getElementById('ProfileAction_Body');
const ProfileActionArrowIcon = document.getElementById('ProfileActionArrowIcon');


ProfileAction.addEventListener('mouseover', () => {
	ProfileAction_Body.classList.add('ProfileAction_BodyActive');
	ProfileActionArrowIcon.classList.add('ProfileActionArrowIconRotate')
})

ProfileAction_Body.addEventListener('mouseleave', () => {
	ProfileAction_Body.classList.remove('ProfileAction_BodyActive');
	ProfileActionArrowIcon.classList.remove('ProfileActionArrowIconRotate')
})
