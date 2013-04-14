function showimg(a){
	$('#imgs').removeClass("hide");
	console.log(a.getAttribute("index"));


	[].forEach.call(filelist,function(f,index){
			console.log(a.getAttribute("index"));
			if(index == a.getAttribute("index")){
				var reader = new FileReader();
				reader.onload = function(e) {

					var html = "File name : " + f.name + "<br><img src=\""
							+ e.target.result + "\"><br>";
					document.getElementById("imgs").innerHTML += html;
				};
				reader.readAsDataURL(f);
			}
	});
}