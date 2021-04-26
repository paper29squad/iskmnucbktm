document.getElementsByXPath = function(expression, parentElement) {
    var r = []
    var x = document.evaluate(expression, parentElement || document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)
    for (var i = 0, l = x.snapshotLength; i < l; i++) {
        r.push(x.snapshotItem(i))
    }
    return r
}

//サイボウズワークフロー番号
let number = document.getElementsByXPath('//*[@id="content-wrapper"]/div[4]/div/table/tbody/tr/td/table/tbody/tr[1]/td/div/div/text()')[1]
number.nodeValue.replace('No. ', "").trim()
