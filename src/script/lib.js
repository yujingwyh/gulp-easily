var lib = lib || {};

/**
 * 通过id名称获得该元素
 * @param  {string}   idName     id名称
 * @return {object}              element
 */
lib.getEle = function (idName) {
  return document.getElementById(idName)
};
