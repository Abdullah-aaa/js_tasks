const friut = new Map();

friut.set('apple', 500);
friut.set('mango',200);
friut.set('banana',100);

let test =0 ;
for(let x of friut.values())
    {
        test += x;  
    }

    document.write(test);
    console.log(test);
    console.log(friut.get(100));