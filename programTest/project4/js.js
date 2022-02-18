let request = new XMLHttpRequest();
request.open('GET','https://movie.douban.com/j/search_tags?type=movie&source=&qq-pf-to=pcqq.temporaryc2c',true);
request.send();
request.onload = function(){
	let json = request.responseText;
	let obj = JSON.parse(json);
	let t=document.getElementById("tab1");
	for(let i =0; i< obj.tags.length;i++){
		t.innerHTML+=`<a id="tabb${i}" class="btn tabb" onclick="clearpage();tabba(this,${i});" href="#" role="button">${obj.tags[i]}</a>`;
	}
	tabba(document.getElementById("tabb0"),0);
}
window.onresize=function resize(){
	let img1=document.getElementsByClassName("boximg");
	let w=img1[0].width;
	for(let ii=0;ii<img1.length;ii++){
		img1[ii].height=w*(4/3);
	}
	let box1=document.getElementsByClassName("box");
	let w1 = window.getComputedStyle(box1[0],null).width;
	w1=w1.replace("px",""); 
	for(let jj=0;jj<box1.length;jj++){
		box1[jj].style.height=`${w1*(52/37)}px`;
	}
}

let page=1;
let tab=document.getElementById("tabb0");
let tabi=0;
function tabba(a,i){
    request.open('GET',`https://movie.douban.com/j/search_subjects?type=movie&tag=${a.innerHTML}&sort=recommend&page_limit=24&page_start=${(page-1)*24}`,true);
    request.send();
    request.onload = function(){
		let json = request.responseText;
		let obj = JSON.parse(json);
		let b=document.getElementById("mv");
		b.innerHTML="";
		for(let j =0; j< obj.subjects.length;j++){
			b.innerHTML+=`
			<div class="col-lg-2 col-mg-2 col-sm-4 col-xg-6 box" Style="height: 260px;">
				<div class="boxin" onclick="mva(${obj.subjects[j].id})">
					<img class="boximg" src="${obj.subjects[j].cover}" width="100%" height="200px">
					<br><div class="boxp">${obj.subjects[j].title}<span>&nbsp${obj.subjects[j].rate}</span></div>
				</div>
			</div>`;
		}
		let img1=document.getElementsByClassName("boximg");
		let w=img1[0].width;
		for(let ii=0;ii<img1.length;ii++){
			img1[ii].height=w*(4/3);
		}
		let box1=document.getElementsByClassName("box");
		let w1 = window.getComputedStyle(box1[0],null).width;
		w1=w1.replace("px",""); 
		for(let jj=0;jj<box1.length;jj++){
			box1[jj].style.height=`${w1*(52/37)}px`;
		}
	}
	tab=a;
	tabi=i;
}
	

function mva(id){
	window.open(`https://movie.douban.com/subject/${id}/`);
}
function uppage(){
	if(page>1){
		page--;
	}
	onloadpage();
	tabba(tab,tabi);
}
function downpage(){
	page++;
	onloadpage();
	tabba(tab,tabi);
}
function onloadpage(){
	document.getElementById("pages").innerHTML=`&nbsp&nbsp&nbsp&nbsp第${page}页&nbsp&nbsp&nbsp&nbsp`;
}
function clearpage(){
	page=1;
	onloadpage();
}


