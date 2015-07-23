function printReceipt(inputs) {
  var result = '***<没钱赚商店>收据***\n';
  var temp = {};
  var temp_inputs = [];
  var sum = 0;
  inputs.forEach(function (val) {
    temp[val.name] = temp[val.name] ? temp[val.name] + 1 : 1;
  })
  inputs.forEach(function (val) {
    if (temp_inputs.indexOf(val) ==! -1) {
      temp_inputs.push(val);
    }
  })
  result += print(temp_inputs,temp);
  console.log(result);
}

var print = function(collection,object,result) {
  for (var item in object) {
    if(collection.name === item) {
      var temp1   = '名称：' + collection.name + '，' +
        '数量：' + object[item] + collection.unit + '，' +
        '单价：' + collection.price + '.00' + '(元)' + '，' +
        '小计：' + object[item] * collection.price + '.00' + '(元)' + '\n';
    }
  }
  return temp1;
}

