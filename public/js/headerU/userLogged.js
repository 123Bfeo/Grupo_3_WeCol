const profileOptions = document.getElementById("profileOptions");
const profileDetails = document.getElementById("profileDetails");
profileOptions.addEventListener("click", function () {
  profileDetails.classList.toggle("profileDetails_show");
});
