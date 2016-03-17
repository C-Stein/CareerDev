OAuth.initialize('5oulLt6uDhIImPaRvfaq80gzwGo');
var gitList;
var allowedOrgs = ["nss-day-cohort-12", "nss-daycohort11"];
var allowed;

document.getElementById('button').addEventListener("click", function() {
  OAuth.popup('github')
    .done(function(result) {
      console.log("result", result);
      result.me().done(function(me) {
        isNSS(me, result).then(
          function(outcome){
            allowed = outcome;
            console.log("allowed", allowed);
          },
          function(outcome){
            console.log("promise didn't work");
          }) 
      }).fail(function(err) {
        console.log("Error! ", err);
      });
    })
    .fail(function (err) {
        console.log("error!", err);
    });  
});

function isNSS(me, result) {
  return new Promise(function(resolve, reject) {  
    var userGithubName = me.alias;
    gitList = result.get('/users/'+ userGithubName + '/orgs'); 
    gitList.then(function(array) {
      for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < allowedOrgs.length; j++) {
          if(allowedOrgs[j] === array[i].login){
            allowed = true;
            resolve(allowed);
            return;
          } // closes "if" statement
        } // closes inner "for" loop
      } // closes outer "for" loop
      allowed = false;
      resolve(allowed); 
    }) // closes gitList.then anon function
  });       
}; // closes isNSS function

