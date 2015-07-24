function get_same_item(collection_a,collection_b) {
  collection_b.forEach(function(val) {
    if(collection_a.barcode ===  val.barcode) {
      collection_a["name"] = val.name;
      collection_a["unit"] = val.unit;
      collection_a["price"] = val.price;
    }
  })
  return collection_a
}

function get_total_price(thing) {
  var total_price = 0;
  thing.forEach(function(val) {
    total_price += val.price * val.count;
  })
  return total_price;
}


function printReceipt(inputs) {
  var allItems = loadAllItems();
  var result = '***<没钱赚商店>收据***\n';
  var temp = {};
  var collected_inputs = [];
  inputs.forEach(function(item) {
    temp[item] = temp[item] ? temp[item] + 1 : 1;
  })
  for (var i in temp) {
    collected_inputs.push({barcode: i, count: temp[i]});
  }
  collected_inputs.forEach(function(val) {

    get_same_item(val,allItems);

    result += '名称：' + val.name + '，' +
      '数量：' + val.count + val.unit + '，' +
      '单价：' + val.price + '.00' + '(元)' + '，' +
      '小计：' + val.count * val.price + '.00' + '(元)' + '\n';
  })

  var sum = get_total_price(collected_inputs);

  result += '----------------------\n' +
    '总计：' + sum + '.00' + '(元)' + '\n' +
    '**********************';
  console.log(result);
}
