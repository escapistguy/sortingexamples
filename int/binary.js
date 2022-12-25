var UInt4 = function (value) {
	return (value & 0xF);
};

var Int4 = function (value) {
	var ref = UInt4(value);
	return (ref > 0x7) ? ref - 0x10 : ref;
};

var UInt8 = function (value) {
	return (value & 0xFF);
};

var Int8 = function (value) {
	var ref = UInt8(value);
	return (ref > 0x7F) ? ref - 0x100 : ref;
};

var UInt16 = function (value) {
	return (value & 0xFFFF);
};

var Int16 = function (value) {
	var ref = UInt16(value);
	return (ref > 0x7FFF) ? ref - 0x10000 : ref;
};

console.log ("\n4-bit");
var value = 8;
console.log ("value:\t\t" + value);
console.log ("unsigned:\t" + UInt4(value));
console.log ("signed:\t\t" + Int4(value));

console.log ("\n8-bit");
var value = 128;
console.log ("value:\t\t" + value);
console.log ("unsigned:\t" + UInt8(value));
console.log ("signed:\t\t" + Int8(value));

console.log ("\n16-bit");
var value = 32798;
console.log ("value:\t\t" + value);
console.log ("unsigned:\t" + UInt16(value));
console.log ("signed:\t\t" + Int16(value));