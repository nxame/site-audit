/**
 * Turns someCrazyName into Some Crazy Name
 * Decent job of acroynyms:
 * ABCAcryonym => ABC Acryoynm
 * xmlHTTPRequest => Xml HTTP Request
 */
String.prototype.unCamelCase = function(){
	return this
		// insert a space between lower & upper
		.replace(/([a-z])([A-Z])/g, '$1 $2')
		// space before last upper in a sequence followed by lower
		.replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
		// uppercase the first character
		.replace(/^./, function(str){ return str.toUpperCase(); })
}

// Or, one liner.
// String.prototype.unCamelCase=function(){return this.replace(/([a-z])([A-Z])/g,'$1 $2').replace(/\b([A-Z]+)([A-Z])([a-z])/,'$1 $2$3').replace(/^./,function(s){return s.toUpperCase();})}