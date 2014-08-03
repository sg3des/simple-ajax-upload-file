function send(){
	var file = document.getElementById('input_file').files[0];
	var name = file.name;

	var formData = new FormData();
	formData.append("file", file);

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("POST", 'upload.php');
	xmlhttp.send(formData);

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4) {
			if(xmlhttp.status==200){
				document.getElementById('result').innerHTML = xmlhttp.responseText;
			}
		}
	}

}