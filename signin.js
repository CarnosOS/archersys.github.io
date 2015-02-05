SC.initialize({
  client_id: '51e0f4f6b3689c444bea03f1b15de262',
    redirect_uri: 'http://soundcloud.com'
});

// permalink to a track
SC.connect(function() {
  SC.get('/me', function(me) { 
    alert('Hello, ' + me.username + ".Welcome to Soundboard"); 
  });
});
