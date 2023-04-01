function tryLaunch() {
    var blnLaunch = 1;
    var errorMsg;

    if (gasLevel == 0) {
        blnLaunch = 0;
        errorMsg = "Oops! You have no Gas.";
    };
    if (brakeLevel == 1) {
        blnLaunch = 0;
        errorMsg = "Oops! You're in Park.";
    };
    if (tracCtrl == 1) {
        blnLaunch = 0;
        errorMsg = "Oops! Traction Control is on.";
    };
    if (batCharge == 0) {
        blnLaunch = 0;
        errorMsg = "Oops! You have no Battery Charge.";
    };
    if (intMode < 3) {
        blnLaunch = 0;
        errorMsg = "Oops! You're on the wrong Gear!";
    };
    if (blnLaunch == 0) {
        document.getElementById('launch').src = './assets/images/lca0.png';
        document.getElementById('msg').innerHTML = errorMsg;
        new Audio('./assets/media/sputter.mp3').play();
    } else {
        document.getElementById('launch').src = './assets/images/lca1.PNG';
        document.getElementById('msg').innerHTML = '';
        new Audio('./assets/media/launch.mp3').play();
    }
}