var tab1 = document.getElementById("tab1");
var tab2 = document.getElementById("tab2");
var tab3 = document.getElementById("tab3");

var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");

var tabset_1_pairs = [[tab1, item1],[tab2, item2],[tab3, item3],];
tab1.addEventListener("click", function(){tabClick(tab1, item1, tabset_1_pairs)});
tab2.addEventListener("click", function(){tabClick(tab2, item2, tabset_1_pairs)});
tab3.addEventListener("click", function(){tabClick(tab3, item3, tabset_1_pairs)});

var tab12 = document.getElementById("tab12");
var tab22 = document.getElementById("tab22");
var tab32 = document.getElementById("tab32");

var item12 = document.getElementById("item12");
var item22 = document.getElementById("item22");
var item32 = document.getElementById("item32");

var tabset_2_pairs = [[tab12, item12],[tab22, item22],[tab32, item32]];
tab12.addEventListener("click", function(){tabClick(tab12, item12, tabset_2_pairs)});
tab22.addEventListener("click", function(){tabClick(tab22, item22, tabset_2_pairs)});
tab32.addEventListener("click", function(){tabClick(tab32, item32, tabset_2_pairs)});

function setup(){
	selectTab(tab1, item1);
	deselectTab(tab2, item2);
	deselectTab(tab3, item3);

	selectTab(tab12, item12);
	deselectTab(tab22, item22);
	deselectTab(tab32, item32);
}
setup();

function tabClick(tab, item, pairs){
	console.log("run");
	var pairs = pairs;
	for(var i=0; i<pairs.length; i++){
		console.log("loop");
		var pair = pairs[i];
		if((pair[0] == tab) && (pair[1] == item)){
			selectTab(pair[0], pair[1]);
		}else{
			deselectTab(pair[0], pair[1]);
		}
	}
}

function selectTab(tab, tabContent){
	//console.log("select");
	tabContent.style.visibility="visible";
	tab.style.background="white";
	tab.style.color="black";
}
function deselectTab(tab, tabContent){
	//console.log("deselect");
	tabContent.style.visibility="hidden";
	tab.style.background="black";
	tab.style.color="#DDDDDD";
}

