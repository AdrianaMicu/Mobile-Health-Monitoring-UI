function Hello($scope, $http) {
    $http.get('http://localhost:8090/step1CallsController/healths?type=chartHeart').
        success(function(dataHR) {
            
            $http.get('http://localhost:8090/step1CallsController/healths?type=chartSteps').
            	success(function(dataSteps) {
            
            var chartData = generateData(dataHR, dataSteps);
            
            var chart = AmCharts.makeChart("chartdiv", {
    			"type": "serial",
    			"theme": "none",
    			"pathToImages": "http://www.amcharts.com/lib/3/images/",
    			"legend": {
        			"useGraphSettings": true
    			},
    			"dataProvider": chartData,
    			"valueAxes": [{
       				"id":"v1",
        			"axisColor": "#FF6600",
        			"axisThickness": 2,
        			"gridAlpha": 0,
        			"axisAlpha": 1,
        			"position": "right"
    			}, {
        			"id":"v2",
        			"axisColor": "#FCD202",
        			"axisThickness": 2,
        			"gridAlpha": 0,
        			"axisAlpha": 1,
    				"position": "left"
    			}],
    			"graphs": [
    			{
        			"valueAxis": "v2",
        			"lineColor": "#FCD202",
        			"bullet": "square",
       				"bulletBorderThickness": 1,
        			"hideBulletsCount": 30,
        			"title": "heartrate",
        			"valueField": "heartrate",
        			"lineThickness": 2,
					"fillAlphas": 0
    			},
    			{
        			"valueAxis": "v1",
        			"lineColor": "#FF0000",
        			"bullet": "square",
       				"bulletBorderThickness": 1,
        			"hideBulletsCount": 30,
        			"title": "stepcount",
        			"valueField": "stepcount",
        			"lineThickness": 2,
					"fillAlphas": 0
    			}],
    			"chartScrollbar": {},
   				"chartCursor": {
        			"cursorPosition": "mouse"
    			},
    			"categoryField": "datetime",
    			"categoryAxis": {
        			"parseDates": true,
        			"axisColor": "#DADADA",
        			"minPeriod":"ss",
        			"equalSpacing": true
    			}
			});
			
			$http.get('http://localhost:8090/step1CallsController/healthc?type=totalTime').
            	success(function(dataTotalTime) {
   	
            	//console.log(dataTotalTime);
            	document.getElementById("totalTime").textContent = dataTotalTime;

            	});
            	
            $http.get('http://localhost:8090/step1CallsController/healthc?type=totalRestingTime').
            	success(function(dataTotalRestingTime) {

            	document.getElementById("totalRestingTime").textContent = dataTotalRestingTime; 	
            	
            	});
            	
            $http.get('http://localhost:8090/step1CallsController/healthc?type=meanRestingHR').
            	success(function(dataMeanRestingHR) {

            	document.getElementById("meanRestingHR").textContent = parseFloat(dataMeanRestingHR).toFixed(2); 	
            	
            	});
			
			$http.get('http://localhost:8090/step1CallsController/healthc?type=periodsNumber&intensity=stress').
            	success(function(dataStressPeriodsNumber) {

            	document.getElementById("stressPeriodsNumber").textContent = dataStressPeriodsNumber; 	
            	
            	});
            	
            $http.get('http://localhost:8090/step1CallsController/healthc?type=periodsTime&intensity=stress').
            	success(function(dataStressPeriodsTime) {

            	document.getElementById("stressPeriodsTime").textContent = dataStressPeriodsTime; 	
            	
            	});
            	
            $http.get('http://localhost:8090/step1CallsController/healthc?type=intensity&intensity=stress').
            	success(function(dataStressPeriodsMeanHR) {

            	document.getElementById("stressPeriodsMeanHR").textContent = dataStressPeriodsMeanHR; 	
            	
            	});
            	
            $http.get('http://localhost:8090/step1CallsController/healthc?type=totalMovingTime').
            	success(function(dataTotalMovingTime) {

            	document.getElementById("totalMovingTime").textContent = dataTotalMovingTime; 	
            	
            	});
            	
            $http.get('http://localhost:8090/step1CallsController/healthc?type=meanTrainingHR').
            	success(function(dataMeanTrainingHR) {

            	document.getElementById("meanMovingHR").textContent = parseFloat(dataMeanTrainingHR).toFixed(2); 	
            	
            	});
            	
            $http.get('http://localhost:8090/step1CallsController/healthc?type=periodsNumber&intensity=vlow').
            	success(function(dataVLowPeriodsNumber) {

            	document.getElementById("vlowPeriodsNumber").textContent = dataVLowPeriodsNumber; 	
            	
            	});
            	
            $http.get('http://localhost:8090/step1CallsController/healthc?type=periodsTime&intensity=vlow').
            	success(function(dataVLowPeriodsTime) {

            	document.getElementById("vlowPeriodsTime").textContent = dataVLowPeriodsTime; 	
            	
            	});
            	
            $http.get('http://localhost:8090/step1CallsController/healthc?type=intensity&intensity=vlow').
            	success(function(dataVLowPeriodsMeanHR) {

            	document.getElementById("vlowPeriodsMeanHR").textContent = dataVLowPeriodsMeanHR; 	
            	
            	});
			
			$http.get('http://localhost:8090/step1CallsController/healthc?type=periodsNumber&intensity=low').
            	success(function(dataLowPeriodsNumber) {

            	document.getElementById("lowPeriodsNumber").textContent = dataLowPeriodsNumber; 	
            	
            	});
            	
            $http.get('http://localhost:8090/step1CallsController/healthc?type=periodsTime&intensity=low').
            	success(function(dataLowPeriodsTime) {

            	document.getElementById("lowPeriodsTime").textContent = dataLowPeriodsTime; 	
            	
            	});
            	
            $http.get('http://localhost:8090/step1CallsController/healthc?type=intensity&intensity=low').
            	success(function(dataLowPeriodsMeanHR) {

            	document.getElementById("lowPeriodsMeanHR").textContent = dataLowPeriodsMeanHR; 	
            	
            	});
            	
            $http.get('http://localhost:8090/step1CallsController/healthc?type=periodsNumber&intensity=medium').
            	success(function(dataMedPeriodsNumber) {

            	document.getElementById("medPeriodsNumber").textContent = dataMedPeriodsNumber; 	
            	
            	});
            	
            $http.get('http://localhost:8090/step1CallsController/healthc?type=periodsTime&intensity=medium').
            	success(function(dataMedPeriodsTime) {

            	document.getElementById("medPeriodsTime").textContent = dataMedPeriodsTime; 	
            	
            	});
            	
            $http.get('http://localhost:8090/step1CallsController/healthc?type=intensity&intensity=medium').
            	success(function(dataMedPeriodsMeanHR) {

            	document.getElementById("medPeriodsMeanHR").textContent = dataMedPeriodsMeanHR; 	
            	
            	});
            	
            $http.get('http://localhost:8090/step1CallsController/healthc?type=periodsNumber&intensity=high').
            	success(function(dataHighPeriodsNumber) {

            	document.getElementById("highPeriodsNumber").textContent = dataHighPeriodsNumber; 	
            	
            	});
            	
            $http.get('http://localhost:8090/step1CallsController/healthc?type=periodsTime&intensity=high').
            	success(function(dataHighPeriodsTime) {

            	document.getElementById("highPeriodsTime").textContent = dataHighPeriodsTime; 	
            	
            	});
            	
            $http.get('http://localhost:8090/step1CallsController/healthc?type=intensity&intensity=high').
            	success(function(dataHighPeriodsMeanHR) {

            	document.getElementById("highPeriodsMeanHR").textContent = dataHighPeriodsMeanHR; 	
            	
            	});
			
			$http.get('http://localhost:8090/step1CallsController/healthc?type=periodsNumber&intensity=vhigh').
            	success(function(dataVHighPeriodsNumber) {

            	document.getElementById("vhighPeriodsNumber").textContent = dataVHighPeriodsNumber; 	
            	
            	});
            	
            $http.get('http://localhost:8090/step1CallsController/healthc?type=periodsTime&intensity=vhigh').
            	success(function(dataVHighPeriodsTime) {

            	document.getElementById("vhighPeriodsTime").textContent = dataVHighPeriodsTime; 	
            	
            	});
            	
            $http.get('http://localhost:8090/step1CallsController/healthc?type=intensity&intensity=vhigh').
            	success(function(dataVHighPeriodsMeanHR) {

            	document.getElementById("vhighPeriodsMeanHR").textContent = dataVHighPeriodsMeanHR; 	
            	
            	});
            	
            	
            	
            	$http.get('http://localhost:8090/step1CallsController/healthc?type=fitnessLevel').
            	success(function(datafitnessLevel) {

            	document.getElementById("fitnessLevel").textContent = datafitnessLevel; 	
            	
            	});
            	$http.get('http://localhost:8090/step1CallsController/healthc?type=vlowoptim').
            	success(function(datavlowoptim) {

            	document.getElementById("vlowoptim").textContent = datavlowoptim; 	
            	
            	});
            	$http.get('http://localhost:8090/step1CallsController/healthc?type=lowoptim').
            	success(function(datalowoptim) {

            	document.getElementById("lowoptim").textContent = datalowoptim; 	
            	
            	});
            	$http.get('http://localhost:8090/step1CallsController/healthc?type=medoptim').
            	success(function(datamedoptim) {

            	document.getElementById("medoptim").textContent = datamedoptim; 	
            	
            	});
            	$http.get('http://localhost:8090/step1CallsController/healthc?type=highoptim').
            	success(function(datahighoptim) {

            	document.getElementById("highoptim").textContent = datahighoptim; 	
            	
            	});
            	$http.get('http://localhost:8090/step1CallsController/healthc?type=vhighoptim').
            	success(function(datavhighoptim) {

            	document.getElementById("vhighoptim").textContent = datavhighoptim; 	
            	
            	});
            	
			});
		});
}

function generateData(dataHR, dataSteps) {
	var chartData = [];
	var dateString = dataHR[0].timestamp;

	for(var i in dataHR)
	{
		var dateString = dataHR[i].timestamp;
		//console.log(dateString);
		var newDate = new Date(dateString.substring(0,4),dateString.substring(5,7),dateString.substring(8,10),dateString.substring(11,13),dateString.substring(14,16),dateString.substring(17,19));
	
		chartData.push({
            datetime: newDate,
            heartrate: parseFloat(dataHR[i].value).toFixed(2),
            stepcount: parseFloat(dataSteps[i].value).toFixed(2)
        });
	}
	
	return chartData;
}