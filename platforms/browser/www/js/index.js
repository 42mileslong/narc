
/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    capturePhoto: function(){
      navigator.camera.getPicture(onSuccess, onFail, {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        saveToPhotoAlbum: true,
      });

      function onSuccess(imageURI) {
          var image = document.getElementById('myImage');
          image.src = imageURI;
        }

      function onFail(message) {
          alert('Failed because: ' + message);
      }
    }

     var ws = new WebSocket("ws:\/\/narc-server.herokuapp.com");
      function sendData() {
        var l = document.getElementById("location").value;
        var d = document.getElementById("des").value;
        ws.send(JSON.stringify({location:l, description:d}));
      
        console.log(JSON.stringify({location:l, description:d}));
        console.log("Sent message");
      }

  /* function getCurrentLocation() {
          navigator.geolocation.getCurrentPosition(onSuccess2, onError );
    }

  function onSuccess2(position){
      var longitude = position.coords.longitude;
      var latitude = position.coords.latitude;
    }
    function onError(error){
      alert(error.message)
    }*/



    /*getLocation: func
    tion(){
      var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }*/
};