function get_print(val) {
  return '名称：' + val.name + '，' +
         '数量：' + val.count + val.unit + '，' +
         '单价：' + val.price.toFixed(2) + '(元)' + '，' +
         '小计：' + (val.count * val.price).toFixed(2) + '(元)' + '\n';
}

function get_total_price(item) {
  var total_price =0;
  item.forEach(function(val) {
    total_price += val.price * val.count;
  })
  return '----------------------\n' +
         '总计：' + total_price + '.00' + '(元)' + '\n' +
         '**********************';
}

function printReceipt(inputs) {
  var result = '***<没钱赚商店>收据***\n';
  inputs.forEach(function(val) {

    result += get_print(val);

  })

  result += get_total_price (inputs);

  console.log(result);
}
