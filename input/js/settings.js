// PV:IFCOND(pv:hasFeature('Temperature'))
var minTemp = -40;
var maxTemp = 60;
var tempScale = 'Â°C';
// PV:ENDCOND
// PV:IFCOND(pv:hasFeature('Heat'))
var tempLimit = 45;
// PV:ENDCOND
//PV:IFCOND(pv:hasFeature('Freezing'))
var tempFreez = -5;
// PV:ENDCOND

// PV:IFCOND(pv:hasFeature('AirPressure'))
var minPres = 910;
var maxPres = 1040;
var presScale = 'hPa';
// PV:ENDCOND

// PV:IFCOND(pv:hasFeature('WindSpeed'))
var minWind = 0;
var maxWind = 130;
var windScale = 'km/h';
// PV:ENDCOND
// PV:IFCOND(pv:hasFeature('Gale'))
var windLimit = 80;
// PV:ENDCOND

// PV:IFCOND(pv:hasFeature('English'))
var mainTitle = 'Weather Station';
var tempTitle = 'Temperature';
var presTitle = 'Air Pressure';
var tempWarning = 'Extrem Heat';
var windTitle = 'Wind Speed';
var windWarning = 'Storm Warning';
// PV:ENDCOND
// PV:IFCOND(pv:hasFeature('German'))
var mainTitle = 'Wetterstation';
var tempTitle = 'Temperatur';
var presTitle = 'Luftdruck';
var tempWarning = 'Extreme Hitze';
var windTitle = 'Windgeschwindigkeit';
var windWarning = 'Sturmwarnung';
// PV:ENDCOND
//PV:IFCOND(pv:hasFeature('Spanish'))
var mainTitle = 'Estacion meteorologica';
var tempTitle = 'Temperatura';
var presTitle = 'Presion del aire';
var tempWarning = 'Calor  Extremo';
var windTitle = 'Velocidad del viento';
var windWarning = 'Posibilidad de tormenta';
// PV:ENDCOND
//PV:IFCOND(pv:hasFeature('French'))
var mainTitle = 'Station météo';
var tempTitle = 'Température';
var presTitle = 'Pression de lair';
var tempWarning = 'Chaleur extrème';
var windTitle = 'Vitesse du vent';
var windWarning = 'Avertissement de tempête';
// PV:ENDCOND
//PV:IFCOND(pv:hasFeature('Italian'))
var mainTitle = 'Stazione metereologica';
var tempTitle = 'Temperatura';
var presTitle = 'Pressione dellaria';
var tempWarning = 'Calore estremo';
var windTitle = 'Velocita del vento';
var windWarning = 'Avviso di tempesta';
// PV:ENDCOND
//PV:IFCOND(pv:hasFeature('Portuguese'))
var mainTitle = 'Wetterstation';
var tempTitle = 'Temperatur';
var presTitle = 'Luftdruck';
var tempWarning = 'Extreme Hitze';
var windTitle = 'Windgeschwindigkeit';
var windWarning = 'Sturmwarnung';
// PV:ENDCOND