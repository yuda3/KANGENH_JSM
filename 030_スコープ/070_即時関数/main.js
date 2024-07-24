function a(){
    console.log('called');
}
a();

(a)();

let c = function(d){
    console.log('called');
    let privateVal = 0;
    let publicVal = 10;

    function privateFn(){
        console.log('private id called');
    }
    function publicFn(){
        console.log('public id called');
    }
    return {
      publicVal,
      publicFn
    };
}();

c.publicFn();
console.log(c.publicVal);

// let b = function(){
//     console.log('called');
//
// }();