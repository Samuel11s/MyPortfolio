// Script sbit.js avec le librairie Jquery
// Script après le chargement du document
$(document).ready( function (){
    $('#btnlarge, #btnsmall').click( function(){
        $('#DropdownView').slideToggle();
    })
    $('#btnTh').click(function(){
        $('body').toggleClass("sbit-theme-l1");
        $('.sbit-theme-').toggleClass("sbit-theme-l3");
        $('.sbit-theme-').toggleClass("sbit-theme-0");
        $('#btnTh').text(" Mode sombre").css("display", "contents");
        $('#btnTh').slideUp().slideDown()
        if (('body').className()) {
            
        } else {
            
        }
    })
})

function opentab(evt, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" sbit-select-menu", ""); 
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " sbit-select-menu";
  }
// var DropdownView = document.getElementById("#DropdownView");
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == DropdownView) {
//         document.getElementById("#DropdownView").hide();
//     }
//     // else{
//     //     document.getElementById("#DropdownView").hide();
//     // }
// }