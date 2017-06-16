var b,a3=-1,a4=-1;
b=0;
var p=new Array("TYRION LANNISTER","ROBERT BARATHEON","NED STARK","DAENERYS TARGARYEN","JON SNOW","ARYA STARK","JEOFFFRY BARATHEON","KHAL DRAGGO","STANNIS BARATHEON","TYWIN LANNISTER");
var a1=new Array();
var a2= new Array(0,0,0,0,0,0,0,0,0,0);



$(document).ready(
function()
{
   assig();
 ;


})



function assig()
{
    if(a2[0]==0)
    {
    var x=Math.floor(Math.random() * 10);
   $("#p1").append(p[x]);
    a1[0]=x;
}
 if(a2[01]==0)
    {
 var x=Math.floor(Math.random() * 10);
   $("#p2").append(p[x]);
   a1[1]=x;
}
if(a2[02]==0)
    {
 var x=Math.floor(Math.random() * 10);
   $("#p3").append(p[x]);
   a1[2]=x;
}
if(a2[03]==0)
    {
 var x=Math.floor(Math.random() * 10);
   $("#p4").append(p[x]);
   a1[3]=x;
}

    if(a2[04]==0)
    {
 var x=Math.floor(Math.random() * 10);
   $("#p5").append(p[x]);
   a1[4]=x;
}
if(a2[05]==0)
    {
 var x=Math.floor(Math.random() * 10);
   $("#p6").append(p[x]);
   a1[5]=x;
}
if(a2[06]==0)
    {
 var x=Math.floor(Math.random() * 10);
   $("#p7").append(p[x]);
   a1[6]=x;
}
if(a2[07]==0)
    {
 var x=Math.floor(Math.random() * 10);
   $("#p8").append(p[x]);
   a1[7]=x;
}
if(a2[08]==0)
    {
 var x=Math.floor(Math.random() * 10);
   $("#p9").append(p[x]);
   a1[8]=x;
}
if(a2[09]==0)
    {
 var x=Math.floor(Math.random() * 10);
   $("#p10").append(p[x]);
   a1[9]=x;
}
}
function rem()
{
  $("#p1").empty();
  $("#p2").empty();

$("#p3").empty();

$("#p4").empty();

$("#p5").empty();

$("#p6").empty();
$("#p7").empty();
$("#p8").empty();
$("#p9").empty();
$("#p10").empty();
  
}





















function tog()
{
    if(a2[0]==0)
        $("#i1").slideDown();
    if(a2[01]==0)
        $("#i2").slideDown();
if(a2[02]==0)
        $("#i3").slideDown();
if(a2[03]==0)
        $("#i4").slideDown();
if(a2[04]==0)
        $("#i5").slideDown();
if(a2[05]==0)
        $("#i6").slideDown();
if(a2[06]==0)
        $("#i7").slideDown();
if(a2[07]==0)
        $("#i8").slideDown();
if(a2[08]==0)
        $("#i9").slideDown();
if(a2[09]==0)
        $("#i10").slideDown();



}




$('#i1').click(
	function(){
if(b==1)
    {
        $("#i1").slideToggle();
        if(a3==a1[0])
        {
            a2[0]=-1;
            a2[a4]=-1;
            rem();
            assig();
        }

        else
        {
            tog();
             rem();
            assig();
        }
        b++;


    }










if(b==0)
    {
    	$("#i1").slideToggle();
    	b++;
        a3=a1[0];a4=0;

    }
    if(b==2)
        b=0;


})


$('#i2').click(
	function(){

        if(b==1)
    {
        $("#i2").slideToggle();
        if(a3==a1[01])
        {
            a2[01]=-1;
            a2[a4]=-1;
            rem();
            assig();
        }

        else
        {
tog();rem();
            assig();
        }
        b++;


    }



if(b<2)
{
    $("#i2").slideToggle();
    b++;a3=a1[01];a4=01;
}
if(b==2)
        b=0;


})


$('#i3').click(
	function(){

        if(b==1)
    {
        $("#i3").slideToggle();
        if(a3==a1[02])
        {
            a2[02]=-1;
            a2[a4]=-1;
            rem();
            assig();
        }

        else
        {
tog();rem();
            assig();
        }
        b++;


    }
if(b<2)
{
    $("#i3").slideToggle();
    b++;a3=a1[02];a4=02;
}if(b==2)
        b=0;


})


$('#i4').click(
	function(){

        if(b==1)
    {
        $("#i4").slideToggle();
        if(a3==a1[03])
        {
            a2[03]=-1;
            a2[a4]=-1;
            rem();
            assig();
        }

        else
        {
tog();rem();
            assig();
        }
        b++;


    }
if(b<2)
{
    $("#i4").slideToggle();
    b++;a3=a1[03];a4=03;
}if(b==2)
        b=0;

})


$('#i5').click(
	function(){
        if(b==1)
    {
        $("#i5").slideToggle();
        if(a3==a1[04])
        {
            a2[04]=-1;
            a2[a4]=-1;
            rem();
            assig();
        }

        else
        {
tog();rem();
            assig();
        }
        b++;


    }
if(b<2)
{
    $("#i5").slideToggle();
    b++;a3=a1[04];a4=04;
}if(b==2)
        b=0;

})


$('#i6').click(
	function(){
        if(b==1)
    {
        $("#i6").slideToggle();
        if(a3==a1[05])
        {
            a2[05]=-1;
            a2[a4]=-1;
            rem();
            assig();
        }

        else
        {
tog();rem();
            assig();
        }
        b++;


    }
		if(b<2)
{

    $("#i6").slideToggle();
    b++;a3=a1[05];a4=05;
}if(b==2)
        b=0;

})

$('#i7').click(
    function(){
        if(b==1)
    {
        $("#i7").slideToggle();
        if(a3==a1[06])
        {
            a2[06]=-1;
            a2[a4]=-1;
            rem();
            assig();
        }

        else
        {
tog();rem();
            assig();
        }
        b++;


    }
        if(b<2)
{

    $("#i7").slideToggle();
    b++;a3=a1[06];a4=06;
}if(b==2)
        b=0;

})

$('#i8').click(
    function(){
        if(b==1)
    {
        $("#i8").slideToggle();
        if(a3==a1[07])
        {
            a2[07]=-1;
            a2[a4]=-1;
            rem();
            assig();
        }

        else
        {
tog();rem();
            assig();
        }
        b++;


    }
        if(b<2)
{

    $("#i8").slideToggle();
    b++;a3=a1[07];a4=07;
}if(b==2)
        b=0;

})

$('#i9').click(
    function(){
        if(b==1)
    {
        $("#i9").slideToggle();
        if(a3==a1[08])
        {
            a2[08]=-1;
            a2[a4]=-1;
            rem();
            assig();
        }

        else
        {
tog();rem();
            assig();
        }
        b++;


    }
        if(b<2)
{

    $("#i9").slideToggle();
    b++;a3=a1[08];a4=08;
}if(b==2)
        b=0;

})

$('#i10').click(
    function(){
        if(b==1)
    {
        $("#i10").slideToggle();
        if(a3==a1[09])
        {
            a2[09]=-1;
            a2[a4]=-1;
            rem();
            assig();
        }

        else
        {
tog();rem();
            assig();
        }
        b++;


    }
        if(b<2)
{

    $("#i10").slideToggle();
    b++;a3=a1[09];a4=09;
}if(b==2)
        b=0;

})