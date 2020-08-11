// var a={
// 	name:"arul",
// 	class:"A",
// 	dept:function(year){
// 		console.log(a.branch+year);
// 		var sem=function(papers){
// 			return papers/year;
// 		};
// 		return sem;
// 	},
// 	branch:"ECE"
// };

// var test=a.dept(3);
// console.log(test(9));

// var b=a;
// b.Dept=function(calendarYear){
// 	this.name="guru";
// 	console.log(calendarYear);
// 	var Year;
// 	Year=calendarYear;
// 	console.log(this.name+Year);
// }
// b.Dept(2019);

function ConsrtuctorFunc(attr){
	this.attri=attr;
	this.a=function(){
		console.log(this.attri*5);
	}
	// this.a();
}

var x=new ConsrtuctorFunc(5);
x.a();

