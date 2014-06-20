// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

    this.on('add', function(){
      if(this.length === 1){
        this.playFirst();
      }
    },this);

    //This is the way to pass the test ,why, I have no idea
    this.on('ended', function(){
      this.at(0).dequeue();
    });

    this.on('dequeue', function(){
      this.remove(this.at(0));
      if(this.length){
        this.playFirst();
      }
    },this);


  },

  playFirst: function(){
    this.at(0).play();
  }

});
