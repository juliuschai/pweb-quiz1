var ulElm = $('#quotesUl');
var curLiElm = null;

const quotes = [
    '"The best way to not feel hopeless is to get up and do something. Don\'t wait for good things to happen to you. If you go out and make some good things happen, you will fill the world with hope, you will fill yourself with hope." - Barack Obama', 
    '"The capacity to surmount failure without being discouraged is the chief asset of every person who attains outstanding success in any calling." - Outwitting the Devil',
    '"When the individual does not use the brain for the expression of positive, creative thoughts, nature fills the vacuum by forcing the brain to act upon negative thoughts." - Outwitting the Devil',
    '"Before success comes in any man\'s life, he is sure to meet with much temporary defeat, and, perhaps, some failure. When defeat overtakes a man, the easiest and most logical thing to do is to quit. That is exactly what the majority of men do. More than five hundred of the most successful men this country has ever known told the author their greatest success came just one step beyond the point at which defeat had overtaken them." - Think and Grow Rich',
    '"The way of success is the way of continuous pursuit of knowledge." - Think and Grow Rich',
    '"Life Long Learner" - Personal favorite',
    '"If you can\'t fly then run, if you can\'t run then walk, if you can\'t walk then crawl, but whatever you do you have to keep moving forward." - Martin Luther King'
];
var curQuote = '';

function clickListener() {
    // If quote is not empty
    
    if (curQuote.length) {
        // append to textarea
        if (!curLiElm) {
            curLiElm = $('<li></li>');
            ulElm.append(curLiElm);
        }
        curLiElm.text(curLiElm.text() + curQuote[0] + ' ');
        curQuote.splice(0, 1);
    } else {
        if (!quotes.length) return;
        curLiElm = null;
        // Get a new quote (pick and remove a random elm from quotes array)
        let [quoteText] = quotes.splice(Math.floor(Math.random()*quotes.length), 1);
        curQuote = quoteText.split(' ');
    }
}
