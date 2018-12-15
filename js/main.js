 var button = document.querySelector(".contacts-button"); // Кнопка, на которую нажимаем для появления попапа
 var wrap = document.querySelector(".modal-feedback-wrap"); // Модальное окно - появляется при нажатии
 var close = document.querySelector(".modal-close"); // Кнопка, закрывающая модальное окно

	
	
	
button.addEventListener("click", function(evt) {
  evt.preventDefault();
  wrap.classList.add("modal-feedback-wrap-show");
  
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  wrap.classList.remove("modal-feedback-wrap-show");
  if (modal.classList.contains("modal-error")) {
    modal.classList.remove("modal-error");
    }
});



