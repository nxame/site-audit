'use strict';

var report = axs.Audit.run();

var _axsReportsTemplate = '<div class="cj-report"><h2>Page Health Report</h2><div class="cj-report-contents"><ul class="list-group"></ul></div></div>',
	_axsReportItems = '',
	_devStdReportItems = '',
	_statIcon = 'NA',
	$body = $('body');

$body.append(_axsReportsTemplate);

report.forEach(function(obj, index){

	if (obj.result === "PASS") {
		_statIcon = '<span class="cj-success">&check;</span>';
		prepReportItems(obj);
	}

	if(obj.result === "FAIL") {
		_statIcon = '<span class="cj-error">&times;</span>';
		prepReportItems(obj);
	}

	if(obj.result === "NA") {
		_statIcon = "NA";
	}

});

function prepReportItems (obj) {
	_axsReportItems += '<li class="list-group-item">' + _statIcon + ' ' + obj.rule.name.unCamelCase() + '</li>';	
}
$('.list-group').append(_axsReportItems);
