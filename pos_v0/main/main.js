function printReceipt(inputs) {
  var result = '***<没钱赚商店>收据***\n';
  var sum = 0;
  inputs.forEach(function(val) {
    result += '名称：' + val.name + '，' +
              '数量：' + val.count + val.unit + '，' +
              '单价：' + val.price + '.00' + '(元)' + '，' +
              '小计：' + val.count * val.price + '.00' + '(元)' + '\n';
  })
  inputs.forEach(function(val) {
    sum += val.count * val.price;
  })
  result += '----------------------\n' +
            '总计：' + sum + '.00' + '(元)' + '\n' +
            '**********************';
  console.log(result);
}
