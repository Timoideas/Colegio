
// <style type = "text / css">
// .time {border-width: 0px; }
// </style>
// <script type = "text / javascript">
var set = 0;
ver = parseInt (navigator.appVersion);
ie4 = (ver> 3 && navigator.appName! = "Netscape")? 1: 0;
function play ()
{
if (ie4)
document.all ['BGSOUND_ID']. src = 'sound1.wav';
}
función setv ()
{
var hr2
= document.getElementById ('hora2'). valor;
var min2
= document.getElementById ('min2'). valor;
var sec2
= document.getElementById ('sec2'). value;
si (hr2 <10)
hr2 = '0' + hr2;
si (min2 <10) min2 = '0' + min2;
si (sec2 <10) sec2 = '0' + sec2;
document.getElementById ('d2'). valor = hr2 + '*' + min2 + '*' + sec2;
conjunto = 1;
document.getElementById ('msg'). innerHTML = 'La alarma está activada';
}
function dis ()
{
var dat = new Date ();
var hr = dat.getHours ();
var min = dat.getMinutes ();
var sec = dat.getSeconds ();
si (hr <10) hr = '0' + hr;
si (min <10) min = '0' + min;
si (seg <10)
seg = '0' + seg;
document.getElementById ('hora'). value = hr;
document.getElementById ('min'). value = min;
document.getElementById ('sec'). value = sec;
var dat2v = document.getElementById ('d2'). value;
var dats = hr + '*' + min + '*' + seg;
if (dat2v == dats && set)
{play (); alert ("¡Despierta, hombre!");
set = 0;
document.getElementById ('msg'). innerHTML = 'La alarma está APAGADA';
}
setTimeout ("dis ()", 500);
}
función prtsel (x)
{
for (var i = 0; i <x; i ++) document.write ("<option value =" + i + ">" + i + "</option>");
}
// </script>
// <! - Script de hscripts.com ->