showTime()
    var gasLevel = 0;
    var brakeLevel = 1;
    var tracCtrl = 1;
    var batCharge = 0;

    function getGas() {
        if (gasLevel == 0) {
            gasLevel = 1;
            document.getElementById('bttn_gas').src = "./assets/images/bttn_gas_1.PNG";
            document.getElementById('gas').src = "./assets/images/gas1.PNG";
        } else {
            gasLevel = 0;
            document.getElementById('bttn_gas').src = "./assets/images/bttn_gas_0.PNG";
            document.getElementById('gas').src = "./assets/images/gas0.PNG";
        }
    }
    
    function setBrake() {
        if (brakeLevel == 1) {
            brakeLevel = 0;
            document.getElementById('bttn_park').src = "./assets/images/bttn_park_0.PNG";
            document.getElementById('brake').src = "./assets/images/p0.PNG";
        } else {
            brakeLevel = 1;
            document.getElementById('bttn_park').src = "./assets/images/bttn_park_1.PNG";
            document.getElementById('brake').src = "./assets/images/p1.PNG";
        }
    }

    function setTrac() {
        if (tracCtrl == 1) {
            tracCtrl = 0;
            document.getElementById('bttn_trac').src = "./assets/images/bttn_trac_0.PNG";
            document.getElementById('trac').src = "./assets/images/trac1.PNG";
        } else {
            tracCtrl = 1;
            document.getElementById('bttn_trac').src = "./assets/images/bttn_trac_1.PNG";
            document.getElementById('trac').src = "./assets/images/trac0.PNG";
        }
    }

    function chargeBattery() {
        if (batCharge == 0) {
            batCharge = 1;
            document.getElementById('bttn_batt').src = "./assets/images/bttn_batt_1.PNG";
            document.getElementById('batt').src = "./assets/images/batt1.PNG";
        } else {
            batCharge = 0;
            document.getElementById('bttn_batt').src = "./assets/images/bttn_batt_0.PNG";
            document.getElementById('batt').src = "./assets/images/batt0.PNG";
        }
    }
