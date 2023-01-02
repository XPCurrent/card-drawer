let values = ['Ace',2,3,4,5,6,7,8,9,10,'Jack','Queen','King']
let symbols = ['Clovers','Diamonds','Spades','Hearts']

function ResetDeck()
{
    var List = "Cards: "
    for (let i = 0; i < 54; i++)
    {
        
        var randomvalue = values[Math.floor(Math.random() * values.length)];
        var randomsymbol = symbols[Math.floor(Math.random() * symbols.length)];
        const card=randomvalue+" of "+randomsymbol;
        console.log(card);
        var List=List+","+card;
        //below, commented is an attempt to throw away any repeats... from extensive testing it only made the code loop. maybe because of 54 possibilities.
        //if (List.includes(card)){
            //List=List-card;
            //i = i-1;
        //}
    }
    document.getElementById("result").innerHTML=List;
}