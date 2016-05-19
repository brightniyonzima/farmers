<?php

include 'json_data.php';

$nQuestinnaires = 3;
$questionnaire = get_JSON_object();

for ($i=0; $i < $nQuestinnaires; $i++) { 
    answer_questionnaire($questionnaire);
    save_answers($questionnaire, $i);
}


function save_answers($questionnaire, $i)
{
    //$qn=json_decode($questionnaire);

    //DB::unprepared("insert into answers values ($i, '$qn')");
    $connect = mysql_connect("localhost","root","");
    $query = mysql_query("insert into answers values ($i, '$questionnaire')");

}


function answer_questionnaire( $questionnaire )
{

    foreach ($questionnaire["section"] as $section_number => $section_data) {
        
        foreach ($section_data["question"] as $qn_number => $qn_data) {

            answer_question($questionnaire, $section_number, $qn_number, $qn_data);
        }
    }
}

function answer_question(&$questionnaire, $section_number, $qn_number, $qn_data)
{
        var_dump($section_number);
        var_dump($qn_number);
        var_dump($qn_data["question"]);

        if ($qn_data["ui_type"] == "text") {
        $qn_data["answer"] = answer_text( faker_text() );
        }

        if ($qn_data["ui_type"] == "radio") {
        $qn_data["answer"] = answer_radio( faker_radio($qn_data["options"]) );
        }

        if ($qn_data["ui_type"] == "checkbox") {
        $qn_data["answer"] = answer_checkbox( faker_checkbox($qn_data["options"]) );
        }

        var_dump($qn_data["answer"]);
}

function answer_text( $answer )
{
    return $answer;
}

function answer_radio( $answer )
{
    return $answer;  
}

function answer_checkbox( $answer )
{
    return $answer;
}

function faker_text()
{
    $answer = $faker->text;
    return $answer;
}

function faker_radio( $possible_values )
{
    $answer = $faker->numberBetween($min = 0, $max = 11);
    return $answer;
}

function faker_checkbox( $possible_values )
{
    $max_checks = count($possible_values);
    $how_many_boxes_to_check = $faker->numberBetween($min = 0, $max = $max_checks);
    $answer = array();

    for ($i=0; $i < count($how_many_boxes_to_check) ; $i++) { 
        $value_checked = $faker->numberBetween($min = 0, $max = 11);
        $answer[$i] = $value_checked;
    }
    return $answer;
}

?>






