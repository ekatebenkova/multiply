module.exports = function multiply(first, second) {

  // разбиваем числа на 2 массива и переворачиваем их
  // объявляем новый массив stack

  var first_a = first.split('').reverse();
  var second_a = second.split('').reverse();

  var stack = [];

  // перемножаем каждый элемент и записываем в stack
  // если в stack есть запись - плюсуем, если нет, то перезаписываем

  for (var i = 0; i < first_a.length; i++) {
    for (var j = 0; j < second_a.length; j++) {
      var m = first_a[i] * second_a[j];
      stack[i + j] = (stack[i + j]) ? stack[i + j] + m : m;
    }
  }

  // обрабатываем stack
  // в ячейке стека должна остаться одна цифра,
  // а десятки и прочие порядки переносятся на позицию выше в stack

  for (var i = 0; i < stack.length; i++) {
    var num = stack[i] % 10;              // получаем цифру
    var move = Math.floor(stack[i] / 10); // что переносим вверх
    stack[i] = num;                       // оставляем цифру
    // переносим высшие порядки вверх
    if (stack[i + 1])
      stack[i + 1] += move;
    else if (move != 0)
      stack[i + 1] = move;
  }


  return stack.reverse().join('');
}
