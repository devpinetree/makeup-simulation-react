import React, { useEffect } from 'react';

function StreamingPage(props) {
  // useEffect(() => {
  //   // 카테고리 조회 api
  //   axios
  //     .get(
  //       'https://v1p7aqa6ul.execute-api.ap-northeast-2.amazonaws.com/prod/cosmetic/category'
  //     )
  //     .then(function (response) {
  //       // response
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       // 오류발생시 실행
  //     })
  //     .then(function () {
  //       // 항상 실행
  //     });
  // }, []);

  useEffect(() => {
    var video = document.querySelector('video');
    var photo = document.getElementById('photo');
    var photoContext = photo.getContext('2d');

    var snapBtn = document.getElementById('snap');

    var photoContextW;
    var photoContextH;

    // Attach event handlers
    snapBtn.addEventListener('click', snapPhoto);

    // Create a random room if not already present in the URL.
    var room = window.location.hash.substring(1);
    if (!room) {
      room = window.location.hash = randomToken();
    }

    /****************************************************************************
     * User media (webcam)
     ****************************************************************************/

    grabWebCamVideo();

    function grabWebCamVideo() {
      console.log('Getting user media (video) ...');
      navigator.mediaDevices
        .getUserMedia({
          audio: false,
          video: true,
        })
        .then(gotStream)
        .catch(function (e) {
          alert('getUserMedia() error: ' + e.name);
        });
    }

    function gotStream(stream) {
      console.log('getUserMedia video stream URL:', stream);
      window.stream = stream; // stream available to console
      video.srcObject = stream;
      video.onloadedmetadata = function () {
        // photo.width = photoContextW = video.videoWidth;
        // photo.height = photoContextH = video.videoHeight;
        photo.width = photoContextW = 288;
        photo.height = photoContextH = 180;

        console.log(
          'gotStream with width and height:',
          photoContextW,
          photoContextH
        );
      };
      show(snapBtn);
    }

    /****************************************************************************
     * Aux functions, mostly UI-related
     ****************************************************************************/

    function snapPhoto() {
      photoContext.drawImage(video, 0, 0, photo.width, photo.height);
      show(photo, snapBtn);
    }

    function show() {
      Array.prototype.forEach.call(arguments, function (elem) {
        elem.style.display = null;
      });
    }

    function randomToken() {
      return Math.floor((1 + Math.random()) * 1e16)
        .toString(16)
        .substring(1);
    }
  }, []);

  return (
    <div>
      StreamingPage
      <div id="videoCanvas">
        <video id="camera" autoPlay playsInline height="480" width="688" />
      </div>
      <canvas id="photo"></canvas>
      <div id="buttons">
        <button id="snap">Snap</button>
      </div>
      <div id="incoming">
        <h2>Incoming photos</h2>
      </div>
      <script src="js/main.js"></script>
    </div>
  );
}

export default StreamingPage;
