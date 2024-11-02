let totalfan = 4
let unitprice = 25
let onehrbill = totalfan * unitprice
let hours  = parseInt(prompt("enter total hours"))
let perhrbill = onehrbill * hours
if(perhrbill >= 100 && perhrbill < 500){
  let tax = perhrbill * 0.1
  let Bill = perhrbill + tax
  alert("Bill:" + "Rs" + Bill)
}
else if(perhrbill >= 500 && perhrbill < 1000){
  let tax = perhrbill * 0.3
  let bill = perhrbill + tax
  alert("Bill: " + "Rs" + bill)
}
else if(perhrbill >=1000){
  let tax = perhrbill * 0.5
  let bill = perhrbill + tax
  alert("Bill: " + "Rs" + bill)
}
else{
  alert("Invalid Inputs")
}