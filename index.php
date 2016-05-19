<html>
<head></head>
<?php

include 'json_data.php';

$r = 1;// radio id
$c = 1;// checkbox id
function make_section($section)
{
    echo "<b>SECTION: ".$section."</b><br>";
    echo "<br>";
}
function make_question($qn_number,  $qn)
{
	echo "<b>Question " . $qn_number . ":</b><br>\n";
	echo "\n\t\t" . $qn["question"];
	echo "<br>&nbsp;<br>\n";

	if($qn["ui_type"] == "radio"){
		make_radio($qn["options"]);
	}

    if ($qn["ui_type"] == "checkbox") {
        make_checkbox($qn["options"]);
    }

    if ($qn["ui_type"] == "text") {
        make_text($qn["question"]);
    }

}

 function make_radio($possible_values)
{
	$html_output = "";

    static $r = 0;  
    static $n = 0;

    $n++;


	foreach ($possible_values as $value => $visible_text) {
        $r++;
		echo "\n\t\t<label for='radio_$r'><input type='radio' name='r_$n' value='$value' id='radio_$r'> $visible_text</label><br>";
        // echo "<br>&nbsp;";
	}

	return $html_output;	
}

function make_checkbox($possible_values)
{
    foreach ($possible_values as $value => $visible_text) {
        echo "\n\t\t<input type='checkbox' value='$value'> $visible_text<br>";
        // echo "<br>&nbsp;";
    }
}
function make_text($answer)
{
   echo "\n\t\t<input type='text' name='$answer'> <br>";
   echo "<br>&nbsp;";
}


$json_object=get_JSON_object();

//var_dump($json_object["section"]["0"]);

/*
for ($i=0; $i < count($json_object["section"]) ; $i++) { 

    foreach ($json_object["section"][$i]["question"] as $qn_number => $qn_data) {
        make_question($qn_number, $qn_data);
    }
}*/
//make_question($json_object["section"]["1"]["question"]["1.1a"]) ;
/*
for ($i=0; $i < count($json_object) ; $i++) { 

    $section = $json_object["section"][$i];
    var_dump($section);
}
*/
foreach ($json_object["section"] as $section_no => $value) {

    make_section($section_no);

    foreach ($json_object["section"][$section_no]["question"] as $qn_number => $qn_data) {
        echo "\n<div>\n".
                    "\t<div class='header'>&nbsp;</div>\n" .
                    "\t<div class='content'>\n\t\t";

        make_question($qn_number, $qn_data);

        echo "      \n\t</div>";
        echo "\n\t<div class='footer'></div>";
        echo "\n</div>\n";
        }
}

?>
<input type="submit" value="send">
<input type="reset" value="cancel">
</form>
</html>
