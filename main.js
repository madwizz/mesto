(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var t=function(){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._form=n,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._buttonElement=n.querySelector(this._submitButtonSelector),this._toggleButtonState()}var n,o;return n=t,(o=[{key:"_showInputError",value:function(e){this._errorElement=this._form.querySelector("#".concat(e.id,"-error")),e.classList.add(this._inputErrorClass),this._errorElement.textContent=e.validationMessage,this._errorElement.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){this._errorElement=this._form.querySelector("#".concat(e.id,"-error")),e.classList.remove(this._inputErrorClass),this._errorElement.textContent="",this._errorElement.classList.remove(this._errorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_toggleButtonState",value:function(){this._form.checkValidity()?(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled")):(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled","true"))}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&e(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var o=function(){function e(t,n,o,r,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._photo=t.link,this._handleImageClick=n,this._cardSelector=o,this._likes=t.likes,this._cardId=t.cardId,this._userId=t.userId,this._ownerId=t.ownerId,this._handleCardRemove=r,this._handleLikeAdd=i,this._handleLikeRemove=a}var t,o;return t=e,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.cloneNode(!0).children[0]}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._photoElement=this._element.querySelector(".place__photo"),this._photoElement.src=this._photo,this._photoElement.alt=this._name,this._element.querySelector(".place__name").textContent=this._name,this._likeButton=this._element.querySelector(".place__like-button"),this._deleteButton=this._element.querySelector(".place__delete-button"),this._likesCount=this._element.querySelector(".place__likes-count"),this._likesCount.textContent="".concat(this._likes.length),this._handleLikeStatus(),this._handleDeleteButtonStatus(),this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._deleteButton&&this._deleteButton.addEventListener("click",(function(){e._handleCardRemove()})),this._likeButton.addEventListener("click",(function(){e._likeButton.classList.contains("place__like-button_active")?e._handleLikeRemove():e._handleLikeAdd()})),this._photoElement.addEventListener("click",(function(){e._handleImageClick(e._name,e._photo)}))}},{key:"handleLikeAdd",value:function(){this._likeButton.classList.add("place__like-button_active")}},{key:"handleLikeRemove",value:function(){this._likeButton.classList.remove("place__like-button_active")}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"handleLikesCount",value:function(e){this._likesCount.textContent="".concat(e.likes.length)}},{key:"_handleLikeStatus",value:function(){var e=this;this._likes.forEach((function(t){t._id===e._userId?e.handleLikeAdd():e.handleLikeRemove()}))}},{key:"_handleDeleteButtonStatus",value:function(){this._userId!==this._ownerId&&(this._deleteButton.remove(),this._deleteButton=null)}}])&&n(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}(),r={formSelector:".popup__form",inputSelector:".popup__info",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__info_invalid",errorClass:"popup__error-message_active"};function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var a=function(){function e(t,n){var o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var s=function(){function e(t){var n=t.profileNameSelector,o=t.profileTitleSelector,r=t.profileAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(n),this._profileTitle=document.querySelector(o),this._profileAvatar=document.querySelector(r)}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,about:this._profileTitle.textContent,avatar:this._profileAvatar.src}}},{key:"setUserInfo",value:function(e){e.name&&(this._profileName.textContent=e.name),e.about&&(this._profileTitle.textContent=e.about)}},{key:"setUserAvatar",value:function(e){e.avatar&&(this._profileAvatar.src=e.avatar)}}],n&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){t.target.classList.contains("popup_opened")&&e.close(),t.target.classList.contains("popup__close-button-image")&&e.close(),t.target.classList.contains("popup__close-button-avatar")&&e.close(),t.target.classList.contains("popup__close-button-delete")&&e.close()}))}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=_(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},h.apply(this,arguments)}function _(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function y(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(o);if(r){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submitHandler=t,n._popupForm=n._popup.querySelector(".popup__form"),n._inputList=n._popupForm.querySelectorAll(".popup__info"),n._submitButton=n._popupForm.querySelector(".popup__submit-button"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputValues={},this._inputList.forEach((function(t){e._inputValues[t.id]=t.value})),this._inputValues}},{key:"setEventListeners",value:function(){var e=this;h(v(a.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(t){t.preventDefault();var n=e._getInputValues();e._submitHandler({name:n["place-name"],link:n["place-link"]}),e.close()}))}},{key:"close",value:function(){h(v(a.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"renderLoading",value:function(e){this._submitButton.textContent=e?"Сохранение...":this._submitButton.value}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function k(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=w(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},g.apply(this,arguments)}function w(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function S(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(o);if(r){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popup.querySelector(".popup__photo-image"),t._name=t._popup.querySelector(".popup__photo-name"),t}return t=a,(n=[{key:"open",value:function(e,t){g(L(a.prototype),"open",this).call(this),this._image.src=t,this._name.textContent=e,this._image.alt=e}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function C(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var j=function(){function e(t){var n=t.host,o=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._host=n,this._headers=o}var t,n;return t=e,(n=[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){return this._cards=fetch("".concat(this._host,"/cards"),{headers:this._headers}).then(this._handleResponse),this._cards}},{key:"getUserInfo",value:function(){return this._userInfo=fetch("".concat(this._host,"/users/me"),{headers:this._headers}).then(this._handleResponse),this._userInfo}},{key:"setUserInfo",value:function(e){return this._setUserInfo=fetch("".concat(this._host,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e["profile-name"],about:e["profile-title"]})}).then(this._handleResponse),this._setUserInfo}},{key:"setAvatar",value:function(e){return this._avatar=fetch("".concat(this._host,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._handleResponse),this._avatar}},{key:"addLike",value:function(e){return this._like=fetch("".concat(this._host,"/cards/").concat(e._id,"/likes"),{method:"PUT",headers:this._headers}).then(this._handleResponse),this._like}},{key:"removeLike",value:function(e){return this._removeLike=fetch("".concat(this._host,"/cards/").concat(e._id,"/likes"),{method:"DELETE",headers:this._headers}).then(this._handleResponse),this._removeLike}},{key:"newCard",value:function(e){return this._newCard=fetch("".concat(this._host,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(this._handleResponse),this._newCard}},{key:"removeCard",value:function(e){return this._removeCard=fetch("".concat(this._host,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._handleResponse),this._removeCard}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function I(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=q(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},R.apply(this,arguments)}function q(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=A(e)););return e}function B(e,t){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},B(e,t)}function T(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&B(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(o);if(r){var n=A(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._form=n._popup.querySelector(".popup__form"),n._submitHandler=t,n}return t=a,(n=[{key:"open",value:function(e){this._card=e,R(A(a.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;R(A(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitHandler(e._card)}))}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l),V=(document.querySelectorAll(".place__delete-button"),document.querySelector(".popup__close-button_avatar"),document.querySelector(".popup__form_avatar"),document.querySelector(".profile__avatar-button")),U=(document.querySelector(".popup__close-button_avatar"),document.querySelector(".popup__form_avatar")),D=document.querySelector(".profile__edit-button"),N=document.querySelector(".popup__close-button_edit"),H=document.querySelector(".popup__info_input_profile-name"),F=document.querySelector(".popup__info_input_profile-title"),J=document.querySelector(".popup__form_edit"),z=".popup_add",M=document.querySelector(".profile__add-button"),G=document.querySelector(".popup__form_add"),K=(document.querySelector(".popup__info_input_place-name"),document.querySelector(".popup__info_input_place-link"),document.querySelector(".popup__close-button_add"),document.querySelector(".popup__close-button_photo"),document.querySelector(".popup__photo-name"),document.querySelectorAll(".popup"),new j({host:"https://mesto.nomoreparties.co/v1/cohort-47",headers:{authorization:"e64a8138-ccc5-4160-a623-3eaa2a1e9520","content-type":"application/json"}}));function Q(e,t){ne.open(e,t)}var W=function(e){var t=new o({name:e.name,link:e.link,likes:e.likes,userId:ie,ownerId:e.owner._id,cardId:e._id},Q,"#place",(function(){return ae.open(t)}),(function(){return K.addLike(e).then((function(e){t.handleLikesCount(e),t.addLike()})).catch((function(e){return console.log(e)}))}),(function(){return K.removeLike(e).then((function(e){t.handleLikesCount(e),t.removeLike()})).catch((function(e){return console.log(e)}))}));return t.generateCard()},X=new a({renderer:function(e){var t=W(e);X.addItem(t)}},".places"),Y=new s({profileNameSelector:".profile__name",profileTitleSelector:".profile__title",profileAvatarSelector:".profile__avatar"});M.addEventListener("click",(function(){ee.open(),te.resetValidation()})),D.addEventListener("click",(function(){var e=Y.getUserInfo();H.value=e.name,F.value=e.about,Z.open()})),N.addEventListener("click",(function(){J.reset(),$.resetValidation()})),V.addEventListener("click",(function(){oe.open(),re.resetValidation()}));var Z=new m(".popup_edit",(function(e){return Z.renderLoading(!0),K.setUserInfo(e).then((function(e){Y.setUserInfo(e),Z.close()})).catch((function(e){return console.log(e)}))}));Z.setEventListeners();var $=new t(r,J);$.enableValidation();var ee=new m(z,(function(e){return ee.renderLoading(!0),K.newCard(e).then((function(e){var t=W(e);X.addItem(t),z.close()})).catch((function(e){console.log(e)}))}));ee.setEventListeners();var te=new t(r,G);te.enableValidation();var ne=new O(".popup_photo");ne.setEventListeners();var oe=new m(".popup_avatar",(function(e){return oe.renderLoading(!0),K.setAvatar(e).then((function(e){Y.setUserAvatar(e),oe.close()})).catch((function(e){console.log(e)}))}));oe.setEventListeners();var re=new t(r,U);re.enableValidation();var ie,ae=new x(".popup_delete",(function(e){return K.removeCard(e._cardId).then((function(){e.deleteCard(),ae.close()})).catch((function(e){return console.log(e)}))}));ae.setEventListeners(),Promise.all([K.getInitialCards(),K.getUserInfo()]).then((function(e){ie=e[1]._id,X.renderItems(e[0]),Y.setUserInfo(e[1])})).catch((function(e){console.log(e)}))})();