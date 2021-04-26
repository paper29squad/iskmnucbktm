document.getElementsByXPath = function(expression, parentElement) {
    var r = []
    var x = document.evaluate(expression, parentElement || document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)
    for (var i = 0, l = x.snapshotLength; i < l; i++) {
        r.push(x.snapshotItem(i))
    }
    return r
}

workflow_data = {}

//サイボウズワークフロー番号
let number = document.getElementsByXPath('//*[@id="content-wrapper"]/div[4]/div/table/tbody/tr/td/table/tbody/tr[1]/td/div/div/text()')[1];
workflow_data.number = number.nodeValue.replace('No. ', "").trim();

//表題
workflow_data.title = document.getElementsByXPath('//*[@id="content-wrapper"]/div[4]/div/table/tbody/tr/td/table/tbody/tr[1]/td/div/div/font/b')[0].innerText

//申請者
workflow_data.person = document.getElementsByXPath('//*[@id="content-wrapper"]/div[4]/div/table/tbody/tr/td/table/tbody/tr[2]/td/div/div/table[1]/tbody/tr[1]/td/a')[0].firstChild
//BaseURI
workflow_data.base-uri = document.getElementsByXPath('//*[@id="content-wrapper"]/div[4]/div/table/tbody/tr/td/table/tbody/tr[1]/td/div/div/text()')[0].baseURI

//売上計上有無
let sales = document.getElementsByXPath('//*[@id="content-wrapper"]/div[4]/div/table/tbody/tr/td/table/tbody/tr[2]/td/div/div/table[1]/tbody/tr[4]/td/table/tbody/tr/td/text()')[0]
workflow_data.sales = uriage.trim()
//請求書発行有無
workflow_data.invoice = document.getElementsByXPath('//*[@id="content-wrapper"]/div[4]/div/table/tbody/tr/td/table/tbody/tr[2]/td/div/div/table[1]/tbody/tr[5]/td/table/tbody/tr/td/text()')[0]

//売上計上日
workflow_data.sales-date = document.getElementsByXPath('//*[@id="content-wrapper"]/div[4]/div/table/tbody/tr/td/table/tbody/tr[2]/td/div/div/table[1]/tbody/tr[6]/td/table/tbody/tr/td')[0].innerText
//入金予定日
workflow_data.payment-date = document.getElementsByXPath('//*[@id="content-wrapper"]/div[4]/div/table/tbody/tr/td/table/tbody/tr[2]/td/div/div/table[1]/tbody/tr[7]/td/table/tbody/tr/td')[0].innerText
//相手方会社名
workflow_data.customer-company-name = document.getElementsByXPath('//*[@id="content-wrapper"]/div[4]/div/table/tbody/tr/td/table/tbody/tr[2]/td/div/div/table[1]/tbody/tr[8]/td/table/tbody/tr/td/text()')[2]
//相手方部署名
workflow_data.customer-division-name = document.getElementsByXPath('//*[@id="content-wrapper"]/div[4]/div/table/tbody/tr/td/table/tbody/tr[2]/td/div/div/table[1]/tbody/tr[9]/td/table/tbody/tr/td')[0].innerText
//相手方役職名
workflow_data.customer-title = document.getElementsByXPath('//*[@id="content-wrapper"]/div[4]/div/table/tbody/tr/td/table/tbody/tr[2]/td/div/div/table[1]/tbody/tr[11]/td/table/tbody/tr/td')[0].firstChild.nodevalue
//相手方担当名（敬称不要）
workflow_data.customer-in-charge = document.getElementsByXPath('//*[@id="content-wrapper"]/div[4]/div/table/tbody/tr/td/table/tbody/tr[2]/td/div/div/table[1]/tbody/tr[11]/td/table/tbody/tr/td')[0].firstChild.nodevalue
//品名1：売上（税込）
workflow_data.sales1 = document.getElementsByXPath('//*[@id="content-wrapper"]/div[4]/div/table/tbody/tr/td/table/tbody/tr[2]/td/div/div/table[1]/tbody/tr[12]/td/table/tbody/tr/td')[0].innerText
//品名2：売上（税込）
workflow_data.sales2 = document.getElementsByXPath('//*[@id="content-wrapper"]/div[4]/div/table/tbody/tr/td/table/tbody/tr[2]/td/div/div/table[1]/tbody/tr[13]/td/table/tbody/tr/td')[0].innerText

//品名3：売上（税込）
workflow_data.sales3 = document.getElementsByXPath('//*[@id="content-wrapper"]/div[4]/div/table/tbody/tr/td/table/tbody/tr[2]/td/div/div/table[1]/tbody/tr[14]/td/table/tbody/tr/td')[0].innerText

//品名4：売上（税込）
workflow_data.sales4 = document.getElementsByXPath('//*[@id="content-wrapper"]/div[4]/div/table/tbody/tr/td/table/tbody/tr[2]/td/div/div/table[1]/tbody/tr[15]/td/table/tbody/tr/td')[0].innerText

//品名5：売上（税込）
workflow_data.sales5 = document.getElementsByXPath('//*[@id="content-wrapper"]/div[4]/div/table/tbody/tr/td/table/tbody/tr[2]/td/div/div/table[1]/tbody/tr[16]/td/table/tbody/tr/td')[0].innerText

//売上合計（税込）
workflow_data.total-amount = document.getElementsByXPath('//*[@id="content-wrapper"]/div[4]/div/table/tbody/tr/td/table/tbody/tr[2]/td/div/div/table[1]/tbody/tr[17]/td')[0].innerText

//入金口座
workflow_data.payment-account = document.getElementsByXPath('//*[@id="content-wrapper"]/div[4]/div/table/tbody/tr/td/table/tbody/tr[2]/td/div/div/table[1]/tbody/tr[18]/td/table/tbody/tr/td')[0].innerText

Object.keys(workflow).forEach(key => console.log('key:' + key + ' value:' + workflow[key]));
