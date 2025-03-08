/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/***/ ((module) => {

// meta
const metaData = {
 default: {
    title:'GRASS FIELD',
    description: 'GRASSFIELDへようこそ！エコツアーを通じて自然の美しさを体験し、持続可能な環境保護を促進します。私たちのツアーで新しい冒険を見つけましょう！',
    type: 'website',
    ogUrl: 'https://grassfield-website.netlify.app/',
    ogImage: 'https://grassfield-website.netlify.app/img/OGP.png',
 },
 business: {
   title:'GRASS FIELD 事業内容ページ',
    description: 'GRASSFIELDのエコツアーサービスをご紹介します。自然観察、ハイキング、ワークショップなど、多彩なプログラムを通じて、環境への理解を深める体験を提供します。',
    type: 'website',
    ogUrl: 'https://grassfield-website.netlify.app/',
    ogImage: 'https://grassfield-website.netlify.app/img/OGP.png',
 } ,
 contact:{
   title:'GRASS FIELD お問い合わせページ',
    description: 'GRASSFIELDへのお問い合わせはこちらから。エコツアーに関する質問やご予約についてお気軽にご連絡ください。私たちがサポートいたします',
    type: 'website',
    ogUrl: 'https://grassfield-website.netlify.app/',
    ogImage: 'https://grassfield-website.netlify.app/img/OGP.png',
 }
}
// nav
const navData = [
    {
     title: 'HOME',
     link: 'index.html',
    },
    {
     title: '事業内容',
     link: 'business.html',
    },
    {
     title: '商品紹介',
     link: '',
    },
    {
     title: '会社概要',
     link: '',
    },
    {
     title: '採用情報',
     link: '',
    },
    {
     title: 'お問い合わせ',
     link: 'contact.html',
    },
]

const footerData = [
   {
      title: 'サイトポリシー',
      link: '',
   },
   {
      title: 'プライバシーポリシー',
      link: '',
   },
   {
      title: 'サイトマップ',
      link: '',
   },
]

module.exports = { metaData, navData, footerData };


/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ (() => {

const MenuBtn = document.getElementById('menu-btn')

MenuBtn.addEventListener('click',()=>{
    const Expanded = MenuBtn.getAttribute('aria-expanded');
    const Nav = document.getElementById('nav')

  if(Expanded === 'false'){
    MenuBtn.setAttribute('aria-expanded', 'true');
    Nav.setAttribute('aria-hidden', 'false');
   }else{
    MenuBtn.setAttribute('aria-expanded', 'false');
    Nav.setAttribute('aria-hidden', 'true');
   }

})

/***/ }),

/***/ "./src/js/validation.js":
/*!******************************!*\
  !*** ./src/js/validation.js ***!
  \******************************/
/***/ (() => {


// checkbox
const checkBoxInput = document.querySelector('.p-form__acceptArea-check input[type="checkbox"]');
const checkBoxSpan = document.querySelector('.p-form__checkBox');

checkBoxInput.addEventListener('change', () => {
    if (checkBoxInput.checked) {
        checkBoxSpan.classList.add('checked');
    } else {
        checkBoxSpan.classList.remove('checked');
    }

    checkBoxSpan.setAttribute("aria-checked", checkBoxInput.checked);
});

// validation
const Form = document.getElementById('js-form');
const SelectWrap = document.querySelector('.p-form__selectWrap')
const fields = [
    {element: document.getElementById('select'), errorMessage:"お問合せ種類を選択してください。"},
    {element: document.getElementById('comment'), errorMessage:"お問い合わせ内容を入力してください。"},
    {element: document.getElementById('first-name'), errorMessage:"姓を入力してください。"},
    {element: document.getElementById('last-name'), errorMessage:"名を入力してください。"},
    {element: document.getElementById('kana-first-name'), errorMessage:"フリガナの姓を入力してください。"},
    {element: document.getElementById('kana-last-name'), errorMessage:"フリガナの名を入力してください。"},
    {element: document.getElementById('email'), errorMessage:"メールアドレスを入力してください。"},
    {element: document.getElementById('tel'), errorMessage:"電話番号を入力してください。"},
];
console.log(Form);

Form.addEventListener('submit', (e) => { // イベントオブジェクト 'e' を渡す
 e.preventDefault();

fields.forEach((field) => {
    const inputElement = field.element;
    const errorElement = inputElement.nextElementSibling;

    if (inputElement.value.trim() === '') {
        errorElement.textContent = field.errorMessage;
        errorElement.classList.add('c-error');
        SelectWrap.classList.add('error');
        inputElement.classList.add('error');
        formIsValid = false;
    } else {
        errorElement.textContent = '';
        errorElement.classList.remove('c-error');
      }
  });

  if (formIsValid) {
    console.log('フォームは有効です。送信します。');
    // フォームが有効な場合の送信処理をここに追加
   } else {
    console.error('フォームにエラーがあります。');
   }
});







/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/js/menu.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_menu_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _validation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation.js */ "./src/js/validation.js");
/* harmony import */ var _validation_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_validation_js__WEBPACK_IMPORTED_MODULE_2__);
// scssファイル


// jsファイル
const { metaData, navData, footerData } = __webpack_require__(/*! ./data.js */ "./src/js/data.js");




})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map