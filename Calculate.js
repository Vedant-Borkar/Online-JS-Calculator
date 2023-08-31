function Addition()
{
  var txt1=document.getElementById("txt1").value;
  var txt2=document.getElementById("txt2").value;
  var ans=parseInt(txt1)+parseInt(txt2);

  document.getElementById("Answer").value= ans;
}
function Subtraction()
{
  var txt1=document.getElementById("txt1").value;
  var txt2=document.getElementById("txt2").value;
  var ans=parseInt(txt1)-parseInt(txt2);

  document.getElementById("Answer").value= ans;
}
function Multiplication()
{
  var txt1=document.getElementById("txt1").value;
  var txt2=document.getElementById("txt2").value;
  var ans=parseInt(txt1)*(parseInt(txt2));

  document.getElementById("Answer").value= ans;
}
function Division()
{
  var txt1=document.getElementById("txt1").value;
  var txt2=document.getElementById("txt2").value;
  var ans=parseInt(txt1)/(parseInt(txt2));

  document.getElementById("Answer").value= ans; 
}