
// Namespace created for Bike
namespace BikeNamespace
{
    export interface  Bike
    {
        //properties of Bike interface
        model: string;
        engine: string;
        CC: number;  
    }
    //Passing interface interface as an argument to the function
    export function BikeDetail(BikeObj: Bike)
    {
        //Printing the Details using backtick/backquote and embedded expressions
        console.log(`The Bike details are : Model ${BikeObj.model} , Engine ${BikeObj.engine} and the CC is ${BikeObj.CC}`);
    };

}