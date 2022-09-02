(function(){
    'use strict';
    console.log("reading js");

    const myform = document.querySelector('#myform');
    const madlib = document.querySelector('#madlib');
    const message = document.getElementById("message");
    const overlay = document.getElementById("overlay");


    myform.addEventListener('submit', function(event){
        event.preventDefault();
        const name1 = document.querySelector('#name1').value;
        const name2 = document.querySelector('#name2').value;
        const pluralnoun = document.querySelector('#pluralnoun').value;
        const verb = document.querySelector('#verb').value;
        const food = document.querySelector('#food').value;
        const bodypart = document.querySelector('#bodypart').value;
        const song = document.querySelector('#song').value;
        const datingapp = document.querySelector('#datingapp').value;

        document.getElementById('overlay').className = 'show';


        const myText = `For their first date, <strong>${name1}</strong> went to go pick up <strong>${name2}</strong> at her house. On the way there, he decided to pick up some <strong>${pluralnoun}</strong> to surprise her. She wore a cute outfit and was <strong>${verb}</strong> at the sight of the flowers. They drove to an amazing restaurant famous for their <strong>${food}</strong>. During the entire meal, <strong>${name1}</strong> couldn’t keep his <strong>${bodypart}</strong> off of <strong>${name2}</strong>. After a fun night, he was sad to have to bring her home. On the drive home, they were jamming out to <q><strong>${song}</strong>.</q> When they got to her house, she looked at him and said “Thanks for such a fun night!” <strong>${name1}</strong> smiled and thought maybe <strong>${datingapp}</strong> isn’t so bad.`;
        
    
        message.innerHTML = myText;

        //this clears the form after pressing submit
        document.querySelector('#name1').value = '';
        document.querySelector('#name2').value = '';
        document.querySelector('#pluralnoun').value = '';
        document.querySelector('#verb').value = '';
        document.querySelector('#food').value = '';
        document.querySelector('#bodypart').value = '';
        document.querySelector('#song').value = '';
        document.querySelector('#datingapp').value = '';

        
    });

    //closes overlay when user clicks x button
    document.querySelector('.close').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay').className = 'hidden';

    });
        
}());