function get_count(inp,tp,tp_inp) {
  inp.forEach(function (val) {
    tp[val.name] = tp[val.name] ? tp[val.name] + 1 : 1;
  })
  for (var i in tp) {
    tp_inp.push({name: i, count: tp[i]});
  }
}

function get_item_all_message(collection_a,collection_b) {
  collection_b.forEach(function(val) {
    if(val.name === collection_a.name) {
      collection_a["barcode"] = val.barcode;
      collection_a["unit"] = val.unit;
      collection_a["price"] = val.price;
    }
  })
  return collection_a;
}

function get_print(item) {
  return '名称：' + item.name + '，' +
         '数量：' + item.count + item.unit + '，' +
         '单价：' + item.price.toFixed(2) + '(元)' + '，' +
         '小计：' + (item.count * item.price).toFixed(2) + '(元)' + '\n';
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
  var temp = {};
  var temp_inputs = [];

  get_count(inputs,temp,temp_inputs);

  temp_inputs.forEach(function(item) {

    get_item_all_message(item,inputs);

    result += get_print(item);
  })

  result += get_total_price(temp_inputs);

  console.log(result);
}

