
module.exports = {
	
getGameResult:function getGameResult(callback) {
	var i=1;
	var j=1000;
	var series=[];
	while(i<1000000){
		series.push(startMarcoPolo(i,j));
		i=j+1;
		j=j+1000
	}
	
	callback(series);
}	
	
}

var startMarcoPolo = function startMarcoPolo(a,b) {
	var series = [];
	
		var line_string = "";
		for(var j=a; j<=b; j++) {
			
			if(j%4 === 0 && j%7 === 0) {
				line_string+="marcopolo,";
			} else if (j%4 === 0) {
				line_string+="marco,";
			} else if(j%7 === 0) {
				line_string+="polo,";
			} else {
				line_string+=(j + ",");
			}	
			
		}
		return {"line":line_string}
	
}



