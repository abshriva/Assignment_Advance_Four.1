// Namespace created for Bike
var BikeNamespace;
(function (BikeNamespace) {
    //Passing interface interface as an argument to the function
    function BikeDetail(BikeObj) {
        //Printing the Details using backtick/backquote and embedded expressions
        console.log("The Bike details are : Model " + BikeObj.model + " , Engine " + BikeObj.engine + " and the CC is " + BikeObj.CC);
    }
    BikeNamespace.BikeDetail = BikeDetail;
    ;
})(BikeNamespace || (BikeNamespace = {}));
