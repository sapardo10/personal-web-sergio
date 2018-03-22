
	var language='es';

	function getLanguage() {
	(localStorage.getItem('language') == null) ? setLanguage('en') : false;
	$.ajax({
		url:  '/language/' +  localStorage.getItem('language') + '.json',
		dataType: 'json',
		async: false,
		dataType: 'json',
		success: function (lang) {
			 language = lang
		 }
	 });
	}

	function setLanguage(lang) {
	localStorage.setItem('language', lang);
	}

	$(document).ready(function(){
	$('#h1-summary').text(language.titleSummary);
	console.log(language.titleSummary);
	});
