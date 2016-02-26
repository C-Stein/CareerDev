console.log("javascript is present!");

OAuth.initialize('Jm26g27oCrprH3FOLnc8GRyi4gs');

document.getElementById('button').addEventListener("click", function() {
    OAuth.popup('google')
      .done(function(result) {
            console.log("it worked");
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
});
console.log("still running js");

// OAuth.popup('github').done(function(github) {
//     github.me().done(function(me) {
//         console.log('Your name is ' + me.name)
//     })
// }).fail(function (err) {
//     //handle error with err
//     console.log("error the other one!", err);
// });
