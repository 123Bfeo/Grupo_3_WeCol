const profileOptions = document.getElementById("profileOptions");
const profileDetails = document.getElementById("profileDetails");
const submenuItem_icon = document.getElementById('submenuItem_icon');


profileOptions.addEventListener("click", function () {
  profileDetails.classList.toggle("profileDetails_show");
  submenuItem_icon.classList.toggle('rotate');
});
