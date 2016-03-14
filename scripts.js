OAuth.initialize('5oulLt6uDhIImPaRvfaq80gzwGo');

document.getElementById('button').addEventListener("click", function() {
  OAuth.popup('github')
    .done(function(result) {
      console.log("it worked");
      console.log("result", result);
    })
    .fail(function (err) {
        console.log("error #2!", err);
    });
    
});

