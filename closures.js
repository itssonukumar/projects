//closure:functions along with lexical enivirnoment termed as closures;

// function x(){
//     var a=3;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();



// function x(){
//     var a=3;
//     function y(){
//         console.log(a);
//     }
//     a=100;//output will get is 100 only because y referce to a variable and so it try to find value of a i.e a=100
//     return y;// wecan also return y .y literally the function 
// }
//  var z=x();//put into this variable;
//  console.log(z);//
//  z();







 
function z(){
    var b=900;
    function x(){
        var a=3;
        function y(){
            console.log(a,b);
        }
        y();
    }
    x();
}
z();