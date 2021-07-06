// function fn1()
// {
//     var str = document.getElementById("text1").value;
//     alert("Value inside the text box is:" +str);
// }
document.getElementById("block").addEventListener("click", something);
let urlList = [];
function myFunction() {
   /*  var tb = document.getElementById('option'), val = tb.value;
    if (val.length) {
        var sel = document.getElementById('sel');
        var opt = document.createElement('option');
        opt.value = val;
        opt.innerHTML = val;
        sel.appendChild(opt);
        tb.value = '';
    }  */  
    let blockedList = document.getElementById('blockedList');
    let kb = document.getElementById('option');
    let url = kb.value;
    kb.value = "";
    kb.placeholder = "Type a website to be blocked..";

    if(url.length){
      if(urlList.includes(url) == false){
        urlList.push(url);

        let website = "<input type ='checkbox' name =" + url + " value =" + url +" onclick(click("+url+"))/><label>"+url+"</label>";

        blockedList.innerHTML += website + "<br>";
      }

    } 
}
function click(url){
    console.log(url)
  }
  

document.getElementById("unblock").addEventListener("click", fn2);

function fn2() {
    $("#dialog-confirm").html("Did you Study hard enough?");
    // Define the Dialog and its properties.
    $("#dialog-confirm").dialog({
        resizable: false,
        modal: true,
        title: "Click Yes to unblock Websites",
        height: 250,
        width: 400,
        buttons: {
            "Yes": function () {
                $(this).dialog('close');
                alert("Yes, I do");
            },
            "No": function () {
                $(this).dialog('close');
                alert("Nope, I don't");
            }
        }
    });
};

function something(){
    console.log("hello")
}