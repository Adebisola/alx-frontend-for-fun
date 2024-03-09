/*function sayhi() {
    //
}

console.log(this);*/
let nepal = {
    mountains : ["Everest", "FIsh Tail", "Annapurna"],
    printWithDash: function() {
        setTimeout(function(){
            console.log(this.mountains.join("-"));
        }, 3000);
    }
}
// alert(nepal.mountains);
(nepal.printWithDash());