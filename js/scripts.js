ymaps.ready(init);

var placemarks = [
{
    latitude: 59.940000,
    longitude: 30.322149,
}
],
geoObjects= [];

function init() {
    var map = new ymaps.Map("map", {
        center: [59.938870, 30.329463],
        zoom: 16,
        controls: ["zoomControl"],
        behaviors: ["drag"]
    });
    
    for (var i = 0; i < placemarks.length; i++) {
        geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
        {
        },
        {
            iconLayout: "default#image",
            iconImageHref: "./img/pin.png",
            iconImageSize: [214, 141],
            iconImageOffset: [0, 0]
        });
    }
    var clusterer = new ymaps.Clusterer({
        clusterIcons: [
        {
        }
        ],
        clusterIconContentLayout: null
    });
    map.geoObjects.add(clusterer);
    clusterer.add(geoObjects);
}

var btn = document.querySelector(".contacts-button");
var WrapSection = document.querySelector(".modal-feedback-wrap");
var modal = document.querySelector(".modal-feedback");
var CloseModal = document.querySelector(".modal-close");
var userName = modal.querySelector("[name = user-name]");
var userEmail = modal.querySelector("[name = email-form]");
var userText = modal.querySelector("[name = text-feedback]");
var PopapForm = document.querySelector(".feedback-form");
var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
    storageName = localStorage.getItem("userName");
    storageEmail = localStorage.getItem("userEmail");
} catch (err) {
    isStorageSupport = false;
}

btn.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.add("modal-feedback-show");
    WrapSection.classList.add("modal-feedback-wrap-show");
    if (storageName && storageEmail) {
        userName.value = storageName;
        userEmail.value = storageEmail;
        userText.focus();
    } else {
        userName.focus();
    }
});
CloseModal.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.remove("modal-feedback-show");
    WrapSection.classList.remove("modal-feedback-wrap-show");
    if (modal.classList.contains("modal-error")) {
        modal.classList.remove("modal-error");
    }
});
PopapForm.addEventListener("submit", function(evt) {
    if (!userName.value || !userEmail.value || !userText.value) {
        evt.preventDefault();
        modal.classList.remove("modal-error");
        modal.offsetWidth = modal.offsetWidth; 
        modal.classList.add("modal-error");
    }
    else {
        if (isStorageSupport) {
            localStorage.setItem("userName", userName.value);
        }
        if (isStorageSupport) {
            localStorage.setItem("userEmail", userEmail.value);
        }
    }
});