function get_count(inp,tp,co_inp) {
  inp.forEach(function(item) {
    tp[item] = tp[item] ? tp[item] + 1 : 1;
  })
  for (var i in tp) {
    co_inp.push({barcode: i, count: tp[i]});
  }
  return co_inp;
}

function get_item_all_message(collection_a,collection_b) {
  collection_b.forEach(function(val) {
    if(collection_a.barcode ===  val.barcode) {
      collection_a["name"] = val.name;
      collection_a["unit"] = val.unit;
      collection_a["price"] = val.price;
    }
  })
  return collection_a
}

function get_print(val) {
   return '名称：' + val.name + '，' +
          '数量：' + val.count + val.unit + '，' +
          '单价：' + val.price.toFixed(2) + '(元)' + '，' +
          '小计：' + (val.count * val.price).toFixed(2) + '(元)' + '\n';
}

function get_total_price(thing) {
  var total_price = 0;
  thing.forEach(function(val) {
    total_price += val.price * val.count;
  })
  return '----------------------\n' +
         '总计：' + total_price.toFixed(2) + '(元)' + '\n' +
         '**********************';;
}

function printReceipt(inputs) {
  var allItems = loadAllItems();
  var result = '***<没钱赚商店>收据***\n';
  var temp = {};
  var collected_inputs = [];

  get_count(inputs,temp,collected_inputs);

  collected_inputs.forEach(function(val) {

    get_item_all_message(val,allItems);

    result += get_print(val);
  })

  result += get_total_price(collected_inputs);

  console.log(result);
}
