
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





