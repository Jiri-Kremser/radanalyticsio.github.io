var clippyStart = function() {
  clippy.load('Clippy', function(agent){
    agent.show();
    if (location.href.endsWith('tutorials')) {
      agent.speak('Almost there.');
      agent.play('GetWizardy');
      agent.speak('Go and click on Spring Boot SparkPi tutorial.');
      agent.gestureAt(-1000,0);
    } else if (location.href.endsWith('spring_sparkpi')) {
      agent.speak('Congratulations!');
      agent.play('Congratulate');
      agent.speak('Now, let\'s do some real science!');
      agent.play('GetTechy');
      agent.speak('I will call my friend for help.');
      setTimeout(function(){
        agent.hide();
        clippy.load('Merlin', function(agent2){
          agent2.show();
          agent2.speak('Hello there');
          agent2.play('Announce');
          agent2.speak('PI is 3');
          agent2.play('Congratulate');
        });
      }, 15000);
    } else {
      agent.speak('Hello, I am clippy.');
      agent.play('Greeting');
      agent.speak('Do you want to know the real value of PI?');
      agent.play('Searching');
      agent.speak('Then go to tutorials in the menu on the top of the page.');
      agent.gestureAt(0,-1000);
    }
  });
};
