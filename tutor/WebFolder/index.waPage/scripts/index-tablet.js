
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var image16 = {};	// @image
	var select2 = {};	// @select
	var select6 = {};	// @select
	var select8 = {};	// @select
	var select7 = {};	// @select
	var wakendoCalendar2 = {};	// @WakendoCalendar
	var image5 = {};	// @image
// @endregion// @endlock

// eventHandlers// @lock

	image16.click = function image16_click (event)// @startlock
	{// @endlock
		alert("Please mail the original Police Check document to 162 Fallingbrook Rd., unit 1, Toronto ON M1N 1N3. Once we have received and verified this document and references, you will be approved to provide tutoring services.")

	};// @lock

	select2.change = function select2_change (event)// @startlock
	{// @endlock
		$$('wakendoCalendar2').show();
		$$('richText7').show();
	};// @lock

	select6.change = function select6_change (event)// @startlock
	{// @endlock
		$$('wakendoCalendar2').show();
		$$('richText7').show();
	};// @lock

	select8.change = function select8_change (event)// @startlock
	{// @endlock
		$$('dataGrid2').show();
		$$('richText8').show();
		$$('richText9').show();
		$$('richText10').show();
		$$('richText11').show();
	};// @lock

	select7.change = function select7_change (event)// @startlock
	{// @endlock
		$$('select8').show();
	};// @lock

	wakendoCalendar2.change = function wakendoCalendar2_change (event)// @startlock
	{// @endlock
		$$('select7').show();
	};// @lock

	image5.click = function image5_click (event)// @startlock
	{// @endlock
		alert("Please mail the original documents to 162 Fallingbrook Rd., unit 1, Toronto ON M1N 1N3. Once we have received and verified this document and references, you will be approved to provide tutoring services.")

	};// @lock

// @region eventManager// @startlock
	WAF.addListener("image16", "click", image16.click, "WAF");
	WAF.addListener("select2", "change", select2.change, "WAF");
	WAF.addListener("select6", "change", select6.change, "WAF");
	WAF.addListener("select8", "change", select8.change, "WAF");
	WAF.addListener("select7", "change", select7.change, "WAF");
	WAF.addListener("wakendoCalendar2", "change", wakendoCalendar2.change, "WAF");
	WAF.addListener("image5", "click", image5.click, "WAF");
// @endregion
};// @endlock
