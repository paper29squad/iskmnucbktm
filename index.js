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
let application_number = document.getElementsByXPath('//*[@id="content-wrapper"]/div[4]/div/table/tbody/tr/td/table/tbody/tr[1]/td/div/div/text()')[1];
workflow_data.no = application_number.nodeValue.replace('No. ', "").trim();

//表題
workflow_data.title = document.getElementsByXPath('//*[@id="content-wrapper"]/div[4]/div/table/tbody/tr/td/table/tbody/tr[1]/td/div/div/font/b')[0].innerText

//申請者
workflow_data.person = document.getElementsByXPath('//*[@id="content-wrapper"]/div[4]/div/table/tbody/tr/td/table/tbody/tr[2]/td/div/div/table[1]/tbody/tr[1]/td/a')[0].firstChild.nodeValue
//BaseURI
workflow_data.baseuri = document.getElementsByXPath('//*[@id="content-wrapper"]/div[4]/div/table/tbody/tr/td/table/tbody/tr[1]/td/div/div/text()')[0].baseURI

//売上計上有無
workflow_data.sales = document.getElementsByXPath('//*[@id="content-wrapper"]/div[4]/div/table/tbody/tr/td/table/tbody/tr[2]/td/div/div/table[1]/tbody/tr[4]/td/table/tbody/tr/td/text()')[0].textContent.trim()

//請求書発行有無
workflow_data.invoice = document.getElementsByXPath('//*[@id="content-wrapper"]/div[4]/div/table/tbody/tr/td/table/tbody/tr[2]/td/div/div/table[1]/tbody/tr[5]/td/table/tbody/tr/td/text()')[0].textContent.trim()

//売上計上日
workflow_data.salesdate = document.getElementsByXPath('//*[@id="content-wrapper"]/div[4]/div/table/tbody/tr/td/table/tbody/tr[2]/td/div/div/table[1]/tbody/tr[6]/td/table/tbody/tr/td')[0].innerText
//入金予定日
workflow_data.paymentdate = document.getElementsByXPath('//*[@id="content-wrapper"]/div[4]/div/table/tbody/tr/td/table/tbody/tr[2]/td/div/div/table[1]/tbody/tr[7]/td/table/tbody/tr/td')[0].innerText
//相手方会社名
workflow_data.customercompanyname = document.getElementsByXPath('//*[@id="content-wrapper"]/div[4]/div/table/tbody/tr/td/table/tbody/tr[2]/td/div/div/table[1]/tbody/tr[8]/td/table/tbody/tr/td/text()')[2].textContent
workflow_data.customercompanyname = workflow_data.customercompanyname.trim()
//相手方部署名
workflow_data.customerdivisionname = document.getElementsByXPath('//*[@id="content-wrapper"]/div[4]/div/table/tbody/tr/td/table/tbody/tr[2]/td/div/div/table[1]/tbody/tr[9]/td/table/tbody/tr/td')[0].innerText
//相手方役職名
workflow_data.customertitle = document.getElementsByXPath('//*[@id="content-wrapper"]/div[4]/div/table/tbody/tr/td/table/tbody/tr[2]/td/div/div/table[1]/tbody/tr[10]/td/table/tbody/tr/td')[0].firstChild
workflow_data.customertitle = workflow_data.customertitle.textContent.trim()
//相手方担当名（敬称不要）
workflow_data.customerincharge = document.getElementsByXPath('//*[@id="content-wrapper"]/div[4]/div/table/tbody/tr/td/table/tbody/tr[2]/td/div/div/table[1]/tbody/tr[11]/td/table/tbody/tr/td')[0].firstChild
workflow_data.customerincharge = workflow_data.customerincharge.textContent.trim()
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
workflow_data.totalamount = document.getElementsByXPath('//*[@id="content-wrapper"]/div[4]/div/table/tbody/tr/td/table/tbody/tr[2]/td/div/div/table[1]/tbody/tr[17]/td')[0].innerText

//入金口座
workflow_data.paymentaccount = document.getElementsByXPath('//*[@id="content-wrapper"]/div[4]/div/table/tbody/tr/td/table/tbody/tr[2]/td/div/div/table[1]/tbody/tr[18]/td/table/tbody/tr/td')[0].innerText

Object.keys(workflow_data).forEach(key => console.log('key:' + key + ' value:' + workflow_data[key]));

e = document.createElement('textarea');
e.textContent = Object.keys(workflow_data).forEach(key => 'key:' + key + ' value:' + workflow_data[key]);
document.body.appendChild(e);
e.select();
document.execCommand('copy');
e.remove();

console.log('let me know')

