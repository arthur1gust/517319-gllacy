 // Объявление переменных
 
 var btn = document.querySelector(".contacts-button"); // Кнопка, на которую нажимаем для появления попапа
 var WrapSection = document.querySelector(".modal-feedback-wrap"); // Модальное окно - появляется при нажатии
 var modal = document.querySelector(".modal-feedback");
 var CloseModal = document.querySelector(".modal-close"); // Кнопка, закрывающая модальное окно

 // Переменные, содержащие значения полей формы
 var userName = modal.querySelector("[name = user-name]");
 var userEmail = modal.querySelector("[name = email-form]");
 var userText = modal.querySelector("[name = text-feedback]");
	
 var PopapForm = document.querySelector(".feedback-form"); // Форма попапа

 // Переменные storage 
 var isStorageSupport = true;
 var storageName = "";
 var storageEmail = "";

// Сохраняем введенные нами значения в форме
try {
    storageName = localStorage.getItem("userName");
    storageEmail = localStorage.getItem("userEmail");
} catch (err) {
    isStorageSupport = false;
}
// При нажатии на кнопку появляется форма
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

// При нажатии на крестик форма закрывается
CloseModal.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.remove("modal-feedback-show");
  WrapSection.classList.remove("modal-feedback-wrap-show");
  if (modal.classList.contains("modal-error")) {
    modal.classList.remove("modal-error");
    }
});
// Проверка на заполненость полей формы 
// ! - не
// || - или
PopapForm.addEventListener("submit", function(evt) {
  if (!userName.value || !userEmail.value || !userText.value) {
    evt.preventDefault();
    //alert("Необходимо заполнить все поля формы");
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
