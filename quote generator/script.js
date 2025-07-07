let qoute = document.getElementById('qoute');
let btn = document.getElementById('btn');


let quotes = [
    '"A rose by any other name would smell as sweet.	William Shakespeare"',
    '"All that glitters is not gold.	William Shakespeare"',
    '"All the worlds a stage, and all the men and women merely players.	William Shakespeare"',
    '"Ask not what your country can do for you; ask what you can do for your country.	John Kenned"',
    '"and it shall be given you; seek, and you shall find. the Bible"',
    '"Eighty percent of success is showing up.	Woody Allen"',
    '"Elementary, my dear Watson.	Sherlock Holmes "',
    '"For those to whom much is given, much is required.	the Bible"', 
   '"Frankly my dear I dont give a damn.Rhett Butler"',
];
    
    btn.addEventListener('click',function(){
       let random = quotes[Math.floor(Math.random() * quotes.length)];
       qoute.innerHTML = random;
    });