<?php
move_uploaded_file($_FILES['file']['tmp_name'],'upload/'.$_FILES["file"]["name"]);

$uploadDir = array_diff(scandir('upload'), array('..', '.'));
foreach ($uploadDir as $file) {
	echo "<div>$file - ".date("F d Y H:i:s.", filectime("upload/$file"))."</div>";
}