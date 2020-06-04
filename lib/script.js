let url = "http://hapi.fhir.org/baseR4/Patient?_format=json&_pretty=true";

let staticUrl = url;
$.getJSON(staticUrl, function(data) {
  console.log("This is an example of a static JSON file being served by a web server.")
  console.log(data);
});


let dynamicUrl = url;
data=$.getJSON(dynamicUrl, function(data) {
  console.log("This is an example of a dynamic JSON file being served by a web server.")
  console.log(data);


});


function show_info(){
	$.getJSON(url,
    function (json) {
		var i = document.activeElement.id;
		document.getElementById("info").innerHTML="<div class='panel panel-default'><div class='panel-body'><strong> Entry fullUrl: "+json.entry[0].fullUrl+"</strong></div></div>";
		document.getElementById("info").innerHTML=document.getElementById("info").innerHTML +"    <div class='panel panel-default'><div class='panel-heading'>Info</div><div class='panel-body'><p><strong>Resource:</strong> "
		+json.entry[i].resource.resorceType+"</p>"
		+"<p><strong>ResId:</strong> "
		+json.entry[i].resource.id+"</p>"
		+"<p><strong>Search Mode:</strong> "
		+json.entry[i].search.mode+"</p>";
	});
}

$(document).ready(function () {
	var table = document.getElementById("example").getElementsByTagName('tbody')[0];
	pagine = $('#example').DataTable( {
        "pagingType": "simple_numbers"
    } );
	var info;
    $.getJSON(url,
    function (json) {
		pagine.page(0).draw(false);
		
        for (var i = 0; i < table.rows.length; i++) {

			table.rows[i].cells[0].innerHTML = json.entry[i].fullUrl;
            table.rows[i].cells[1].innerHTML = json.entry[i].resource.resorceType;
            table.rows[i].cells[2].innerHTML = json.entry[i].resource.id;
            table.rows[i].cells[3].innerHTML = json.entry[i].resource.meta.versionId;
			table.rows[i].cells[4].innerHTML = json.entry[i].resource.meta.lastUpdated;
			table.rows[i].cells[5].innerHTML = json.entry[i].resource.meta.source;
			table.rows[i].cells[6].innerHTML = json.entry[i].search.mode;
			
			
			
			//table.rows[i].cells[4].innerHTML = json[i].gender;
			//table.rows[i].cells[5].innerHTML = json[i].diagnosis_code;
			//table.rows[i].cells[6].innerHTML = json[i].diagnosis_description;
			//table.rows[i].cells[7].innerHTML = json[i].diagnosis_description_detailed;
			//table.rows[i].cells[8].innerHTML = json[i].administered_drug_treatment;
						
        }
		
		pagine.page(1).draw(false);
        for (var i = 0; i < table.rows.length; i++) {

			table.rows[i].cells[0].innerHTML = json.entry[i+10].fullUrl;
            table.rows[i].cells[1].innerHTML = json.entry[i+10].resource.resorceType;
            table.rows[i].cells[2].innerHTML = json.entry[i+10].resource.id;
            table.rows[i].cells[3].innerHTML = json.entry[i+10].resource.meta.versionId;
			table.rows[i].cells[4].innerHTML = json.entry[i+10].resource.meta.lastUpdated;
			table.rows[i].cells[5].innerHTML = json.entry[i+10].resource.meta.source;
			table.rows[i].cells[6].innerHTML = json.entry[i+10].search.mode;
			
			//table.rows[i].cells[4].innerHTML = json[i+10].gender;
			//table.rows[i].cells[5].innerHTML = json[i+10].diagnosis_code;
			//table.rows[i].cells[6].innerHTML = json[i+10].diagnosis_description;
			//table.rows[i].cells[7].innerHTML = json[i+10].diagnosis_description_detailed;
			//table.rows[i].cells[8].innerHTML = json[i+10].administered_drug_treatment;
						
        }
		
		pagine.page(0).draw(false);
	
    });
});


var x = document.getElementsByTagName("select").options.length;
  document.getElementById("info").innerHTML = "Found " + x + " options in the list.";




