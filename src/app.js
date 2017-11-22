import './css/styles.scss';

var theMain = function(){
    console.log("theMain is executed");
    
    var theButton = document.querySelector('.gen');
    theButton.addEventListener('click', generateExcuse);
}


var generateExcuse = function(){
    console.log("the excuse is generated");
    var first = [ 'The' ];
    var nouns = ['baby' , 'president' ,'mailman' ,'koolaid' , 'rock'];
    var verbs = ['swung' , 'spit' , 'threw' ];
    var object = ['a bottle' , 'a cinder block' ,'a baseball bat']
    var locations = ['on national tv ', ' at my family' ,'in my face '];
    var space = ' ';
    
    var w = Math.floor(Math.random() * first.length ); 
    var x = Math.floor(Math.random() * nouns.length );
    var y = Math.floor(Math.random() * verbs.length  );
    var i = Math.floor(Math.random() * object.length );
    var z = Math.floor(Math.random() * locations.length ); 
    
    var excuse = first[w] + space + nouns[x] + space + verbs[y] + space + object[i] + space + locations[z]
    
    document.querySelector('#excuse').innerHTML = excuse; 
    
}
window.onload = theMain;





