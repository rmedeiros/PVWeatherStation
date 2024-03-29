// PV:IFCOND(pv:hasFeature('AirPressure'))
function applyPressure() {
	var measureText = document.getElementById("p_measure");
	var pointer = document.getElementById("p_point");

	applyTachoValue(minPres, maxPres, measureText, pointer);
	return false;
}
// PV:ENDCOND

// PV:IFCOND(pv:hasFeature('AirPressure') and pv:hasFeature('Temperature') and pv:hasFeature('WindSpeed'))
function activateMainSensors() {

	var main_sensors = document.getElementById("main_sensors_list");

	activateSensors(main_sensors);
	// PV:IFCOND(pv:hasFeature('Precipitation'))
	activatePrecipitation();
	// PV:ENDCOND

	return false;
}
// PV:ENDCOND

// PV:IFCOND(pv:hasFeature('WindSpeed') and pv:hasFeature('Temperature')and pv:hasFeature('AirPressure') )
var windMeasure = 0;
function applySensors() {
	var measureText = document.getElementById("w_measure");
	windMeasure = measureText.value;
    measureText = document.getElementById("t_measure");
	tempMeasure = measureText.value;
    measureText = document.getElementById("a_measure");
	airMeasure = measureText.value;
	var pointer = document.getElementById("w_point");
	
	applyTachoValue(minWind, maxWind, measureText, airMeasure, tempMeasure, pointer);
	setWarnings();
	return false;
}
// PV:ENDCOND

// PV:IFCOND(pv:hasFeature('WindSpeed') or pv:hasFeature('AirPressure') or pv:hasFeature('Temperature'))
function applyTachoValue(min, max, measureText, pointer) {
	var divisor = Math.round((max - min) / 13);
	var c = Math.round(divisor / 4);
    
	if (measureText && pointer && c>4) {
		var measure = measureText.value;
		var intValue = checkMeasure(min, max, measure);
		if (isNaN(intValue)) {
			return false;
		}

		intValue -= min;
		if (intValue % divisor < c) {
			intValue -= intValue % divisor;
		} else {
			intValue += divisor - intValue % divisor;
		}
		updateMeseure(intValue);
		intValue /= divisor;
		pointer.style.background = "url('images/n_" + intValue + ".png')";
	}
	return false;
}
// PV:ENDCOND

// PV:IFCOND(pv:hasFeature('Temperature'))
var tempMeasure = 0;
function applyTemperature() {
	var min = minTemp;
	var max = maxTemp;

	var pxRange = 170;

	var measureText = document.getElementById("t_measure");
	var pointer = document.getElementById("t_point");

	if (measureText && pointer) {
		tempMeasure = measureText.value;
		var intValue = checkMeasure(min, max, tempMeasure);
		if (isNaN(intValue)) {
			return false;
		}
		intValue = (intValue - min) * (pxRange / (max - min));

		pointer.style.height = (177 - intValue) + "px";
	}
	setWarnings();
	return false;
}
// PV:ENDCOND

function checkMeasure(min, max, measure) {
	if (measure == "" || measure == null) {
		return NaN;
	}
	if (isNaN(parseInt(measure)) || parseInt(measure) < min
			|| parseInt(measure) > max) {
		alert("Bitte eine Zahl zwischen " + min + " und " + max + " eingeben!");
		return NaN;
	}
	return parseInt(measure);
}

function setWarnings() {
	warningText = '';
	
	// PV:IFCOND(pv:hasFeature('Freezing') and pv:hasFeature('Heat') and pv:hasFeature('Gale'))
	setAllWarnings();
	// PV:ENDCOND
	// PV:IFCOND(pv:hasFeature('Freezing'))
	if (isNaN(tempFreez) == false && tempMeasure < tempFreez) {
		warningText += freezWarning;
	}
	// PV:ENDCOND
	// PV:IFCOND(pv:hasFeature('Heat'))
	if (isNaN(tempLimit) == false && tempMeasure > tempLimit) {
		warningText += tempWarning;
	}
	// PV:ENDCOND

	// PV:IFCOND(pv:hasFeature('Gale'))
	if (isNaN(windLimit) == false && windMeasure > windLimit) {
		warningText += (warningText == '') ? '' : ', ';
		warningText += windWarning;
	}
	// PV:ENDCOND

	var element = document.getElementById('warning');
	if (warningText != '') {

		// PV:IFCOND(pv:hasFeature('German'))
		warningText = 'Achtung: ' + warningText;
		// PV:ENDCOND

		// PV:IFCOND(pv:hasFeature('English'))
		if (warningText != '') {
			warningText = 'Attention: ' + warningText;
		}
		// PV:ENDCOND

		setElementText(element, warningText);
	} else {
		setElementText(element, '');
	}
}