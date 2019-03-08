# createDocumenFriomSpreadsheet
Create Document from template, and fill data with data from spreadsheet

## Create a Google Docs Template
Simply create a Google Doc. If you need to use content from the spreadsheet,use a placeholder. ##Placeholder##.
Eg.:
![screenshot 2019-03-08 at 3 01 54 pm](https://user-images.githubusercontent.com/15387653/54033917-e8ac4200-41b5-11e9-9ee7-04c5ea9cf3b4.png)


## Create a Google spreadsheet and fill it with data
Create a spreadshit and set headers in row 1. Column names should match placeholders from GDoc. Script workks with range from column A to I. If you need more placeholders, change opseg in script
Eg.:
![screenshot 2019-03-08 at 3 22 46 pm](https://user-images.githubusercontent.com/15387653/54034003-1db89480-41b6-11e9-80c3-130e6da6464c.png)

## Add Script
In spreadsheet, select Tools -> Script editor and paste code fom Code.gs and save. Set your templateId in createInvoice method.

# Use it
Reopen your spreadsheet, you should see 'Create Documents' menu. 

![screenshot 2019-03-08 at 3 22 57 pm](https://user-images.githubusercontent.com/15387653/54034022-26a96600-41b6-11e9-9022-98efc72fe5f7.png)

Select one row with data, and select Create Document -> Create Invoice
