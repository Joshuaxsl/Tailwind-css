function myFunction(a, b){
    sum = a +b ;
    return sum;
}
 
document.getElementById('section-hero').innerHTML = myFunction(3, 10);

function myBtn(){
    document.getElementById('spanBtn').innerHTML = "Joshua Pogi"
}






function changeBgColor(){
    document.getElementById('section-hero').style.backgroundColor = "red"
}



function numAdd(num1, num2){

}

$("p").hide()


$("#show").click(
    function(){
    $("p").show();
  }
);



$(function(){
    $("#hide").click(function(){
      $("p").hide();
    });
    $("#show").click(function(){
      $("p").show();
    });
  });

  $(function(){
    $("#hide").click(function(){
      $("p").hide();
    });
    $("#show").click(function(){
      $("p").show();
    });
  });

//   $(function(){
//     $("#myBtn1").click(function(){
//         $("#name").hide(1000);
//     });

//     $("#myBtn2").click(function(){
//         $("#name").show(1000);
//     }); 
//   });
  $(function(){
    $("#myBtn1").click(function(){
        $("#name").toggle();
    });
  });

  
 
 
 
 
 
//   $(function(){
//     $("myBtn2").click(function(){
//         $("#name").show(1000);
//     });
//   });