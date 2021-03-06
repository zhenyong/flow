var d = new Date(0);
var x:string = d.getTime();

var y:number = d;

// valid constructors
new Date();
new Date(1234567890);
new Date('2015/06/18');
new Date(2015, 6);
new Date(2015, 6, 18);
new Date(2015, 6, 18, 11);
new Date(2015, 6, 18, 11, 55);
new Date(2015, 6, 18, 11, 55, 42);
new Date(2015, 6, 18, 11, 55, 42, 999);

// invalid constructors
new Date({});
new Date(2015, '6');
new Date(2015, 6, '18');
new Date(2015, 6, 18, '11');
new Date(2015, 6, 18, 11, '55');
new Date(2015, 6, 18, 11, 55, '42');
new Date(2015, 6, 18, 11, 55, 42, '999');

// invalid constructors that we incorrectly consider valid
new Date('2015', 6);
new Date(2015, 6, 18, 11, 55, 42, 999, 'hahaha');
