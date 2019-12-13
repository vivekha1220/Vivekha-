var featureLoading = document.getElementById("featureLoading");
var featureSubmitBtn = document.getElementById("featureSubmitBtn");
var featureFrm = document.getElementById("featurefrm");

featureSubmitBtn.addEventListener("click", function(){
    featureLoading.classList.remove("human-hidden");
    featureFrm.classList.add("human-hidden");

});