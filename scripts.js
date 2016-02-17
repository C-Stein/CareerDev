console.log("javascript is present!");

OAuth.initialize('Jm26g27oCrprH3FOLnc8GRyi4gs');

OAuth.popup('github')
  .done(function(result) {
       result.get('/me')
    .done(function (response) {
        //this will display "John Doe" in the console
        console.log(response.name);
    })
    .fail(function (err) {
        console.log("error #1!", err);
    });
})
.fail(function (err) {
    //handle error with err
    console.log("error #2!", err);
});
  
console.log("still running js");
