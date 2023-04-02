/*jshint esversion: 6 */


fetch('https://opentdb.com/api.php?amount=10&category=15&type=multiple')
.then(response => {
    return response.json();
})
.then( data => {
    console.log(data);
})
.catch((error) =>{
    console.error('Error:', error);
});