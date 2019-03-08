function onOpen() {
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .createMenu('Create Documents')
      .addItem('Create Invoice', 'createInvoice')
      .addItem('Create Workorder', 'createWorkorder')
      .addToUi();
}

function createInvoice() {
  createDocument("10l3CVICmDVEJ01MkNhKyL9C2SWcpfVNB5_x7wRKE8Wk", "Invoice")
}

function createWorkorder() {
  createDocument("10l3CVICmDVEJ01MkNhKyL9C2SWcpfVNB5_x7wRKE8Wk", "Workorder")
}

function createDocument(templateId, title) {
  var ui = SpreadsheetApp.getUi(); // Same variations.
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var headers = sheet.getRange('A1:I1').getValues()
  var row = sheet.getActiveCell().getRow()
  var rowData = sheet.getRange('A'+row+':I'+row).getValues()
  
  var date = new Date();
  
  //Make a copy of the template file
  var documentId = DriveApp.getFileById(templateId).makeCopy().getId();
  
  //Rename the copied file
  DriveApp.getFileById(documentId).setName(title + "_" + date);
  
  //Get the document body as a variable
  var body = DocumentApp.openById(documentId).getBody();
  
  for(var i = 0; i < headers[0].length; i++){
    //ui.alert("Values: " + rowData[0][i])
    body.replaceText('##'+headers[0][i]+'##', rowData[0][i])
  }
  
  var html = HtmlService.createHtmlOutput("<h3>Open Document</h3><a href='https://docs.google.com/document/d/" + documentId + "/edit' target='_blank'>"+ title + "_" + date + "</a>");
  ui.showModalDialog(html, 'Document created') 
}
