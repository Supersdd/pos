function get_same_elements(collection_a,collection_b) {
  collection_b.forEach(function(val) {
    if(val.name === collection_a.name) {
      collection_a["barcode"] = val.barcode;
      collection_a["unit"] = val.unit;
      collection_a["price"] = val.price;
    }
  })
  return collection_a;
}

function printReceipt(inputs) {
  var result = '***<没钱赚商店>收据***\n';
  var temp = {};
  var temp_inputs = [];
  inputs.forEach(function (val) {
    temp[val.name] = temp[val.name] ? temp[val.name] + 1 : 1;
  })
  for (var i in temp) {
    temp_inputs.push({name: i, count: temp[i]});
  }
  temp_inputs.forEach(function(item) {

    get_same_elements(item,inputs);

    result += '名称：' + val.name + '，' +
      '数量：' + val.count + val.unit + '，' +
      '单价：' + val.price + '.00' + '(元)' + '，' +
      '小计：' + val.count * val.price + '.00' + '(元)' + '\n';
  })

  var sum = get_total_price(temp_inputs);

  result += '----------------------\n' +
    '总计：' + sum + '.00' + '(元)' + '\n' +
    '**********************';
  console.log(result);
}

var get_total_price = function(item) {
  var total_price =0;
  item.forEach(function(val) {
    total_price += val.price * val.count;
  })
  return total_price
}












//    }
//  })
//  temp_inputs.forEach(function(val2) {
//    result += print(val2,temp);
//  })
//  console.log(result);
//}
//
//var print = function(collection,object) {
//  for (var item in object) {
//    if(collection.name === item) {
//      var temp1 = '名称：' + collection.name + '，' +
//                  '数量：' + object[item] + collection.unit + '，' +
//                  '单价：' + collection.price + '.00' + '(元)' + '，' +
//                  '小计：' + object[item] * collection.price + '.00' + '(元)' + '\n';
//    }
//  }
//  return temp1;
//}
//
