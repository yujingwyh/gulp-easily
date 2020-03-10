(function () {
  const $common = document.getElementById('common');

  setTimeout(function () {
    $common.innerText = '这是在common.js中插入的文本';
  },5000);
}());
