<?php


function swap(&$x, &$y){

	$tmp = $x;
    $x = $y;
	$y = $tmp;
}

$x  = 3;
$y = 25;


	echo "BEFORE...<br>";
	echo "x = $x<br>";
	echo "y = $y<br>";

swap($x, $y);


	echo "<br><br><br>after swapping...<br>";
	echo "x = $x<br>";
	echo "y = $y<br>";
