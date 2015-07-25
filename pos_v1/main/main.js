function getCount(inp,tpInp,tp,coInp) {
  inp.forEach(function(val) {
    if(val.indexOf('-') > -1) {
      tpInp.push({barcode: val.slice(0, val.length - 2), count: parseInt(val.slice(val.length - 1, val.length))});
    }
    else {
      tpInp.push({barcode: val.slice(0, val.length), count: 1});
    }
  });
  tpInp.forEach(function(item) {
    tp[item.barcode] = tp[item.barcode] ? tp[item.barcode] + item.count : item.count;
  });
  for (var i in tp) {
    coInp.push({barcode: i, count: tp[i]});
  }
  return coInp;
}

function getItemAllMessage(collectionA,collectionB) {
  collectionB.forEach(function(val) {
    if(collectionA.barcode ===  val.barcode) {
      collectionA["name"] = val.name;
      collectionA["unit"] = val.unit;
      collectionA["price"] = val.price;
      collectionA["subtotal"] = val.price * collectionA.count;
    }
  });
  return collectionA
}

function getPromotion(coInp,proMsg) {
  var promotion_barcode;
  proMsg.forEach(function(val) {
    promotion_barcode = val.barcodes;
  });
  promotion_barcode.forEach(function(valu) {
    if(coInp.barcode === valu) {
      coInp["subtotal"] = coInp.price * (coInp.count - parseInt(coInp.count / 3));
      coInp["savedcount"] = parseInt(coInp.count / 3);
      coInp["savedmoney"] = coInp.price * parseInt(coInp.count / 3);
    }
  });
  return coInp
}

function getPrint(val) {
  return '名称：' + val.name + '，' +
         '数量：' + val.count + val.unit + '，' +
         '单价：' + val.price.toFixed(2) + '(元)' + '，' +
         '小计：' + val.subtotal.toFixed(2) + '(元)' + '\n';
}

function printReceipt(inputs) {
  var allItems = loadAllItems();
  var promotionItemMessage = loadPromotions();
  var result = '***<没钱赚商店>收据***\n';
  var tempInputs = [];
  var temp = {};
  var collectedInputs = [];
  var sum = 0;
  var saved = 0;

  getCount(inputs, tempInputs, temp, collectedInputs);

  collectedInputs.forEach(function (val) {

    getItemAllMessage(val, allItems);

    getPromotion(val,promotionItemMessage);

    result += getPrint(val,promotionItemMessage);

  });

  result += '----------------------\n' +
            '挥泪赠送商品：\n';
  collectedInputs.forEach(function(valu) {
    if('savedcount' in valu) {
      result += '名称：' + valu.name + '，' + '数量：' + valu.savedcount + valu.unit + '\n';
    }
  });
  result += '----------------------\n';

  collectedInputs.forEach(function(value) {
    sum += value.subtotal;
    if('savedmoney' in value) {
      saved += value.savedmoney;
    }
  });
  result += '总计：' + sum.toFixed(2) + '(元)' + '\n'
          + '节省：' + saved.toFixed(2) + '(元)' + '\n'
          + '**********************';
  console.log(result);
}
