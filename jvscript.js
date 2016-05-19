var q = {}; /* q = questionnaire */

q["introduction"]="My name is (tell your name). I am part of a team formed by Samaritan’s purse international relief organisation in partnership with World Food Programme. We are conducting an assessment in the Refugee and Host community of Rwamwanja and Kyaka II refugee settlements in Kamwenge and Kyegegwa District respectively.  The purpose of this assessment is to understand how the farmers handle their crops after harvesting them and how they earn income for their household. The interview will take about 30 minutes.We will not record your name and any information that you provide is confidential. We will analyze your answers together with information provided by others participating in this survey. Therefore, your individual answers cannot be connected with you personally.The findings will guide SP and WFP to improve their support for farmers in the future. Your participation is voluntary, but we hope you will participate since your views are important.Do you have any questions?May I begin the interview now?”(If response is “NO”, go to the next Household)";
q.section = {};

q.section["0"] = {};
q.section["0"]["introduction"]=null;
q.section["0"]["name"] = "preamble";
q.section["0"]["question"]={};

//q.section["0"]["question"]["date"] = (new Date()).toJSON().slice(0, 10);
q.section["0"]["question"]["0.1a"]={};
q.section["0"]["question"]["0.1a"]["tags"]=["date"];
q.section["0"]["question"]["0.1a"]["question"]="Date";
q.section["0"]["question"]["0.1a"]["options"]=null;
q.section["0"]["question"]["0.1a"]["answer"]=(new Date()).toJSON().slice(0, 10);
q.section["0"]["question"]["0.1a"]["other_option"] = null;
q.section["0"]["question"]["0.1a"]["ui_type"] = "none";
q.section["0"]["question"]["0.1a"]["table"] = null;

q.section["0"]["question"]["0.1b"]={};
q.section["0"]["question"]["0.1b"]["tags"]=["interviewer"];
q.section["0"]["question"]["0.1b"]["question"]="Interviewer Name:";
q.section["0"]["question"]["0.1b"]["options"]=null;
q.section["0"]["question"]["0.1b"]["answer"]="john doe";
q.section["0"]["question"]["0.1b"]["other_option"] = null;
q.section["0"]["question"]["0.1b"]["ui_type"] = "none";
q.section["0"]["question"]["0.1b"]["table"] = null;

q.section["0"]["question"]["0.1c"]={};
q.section["0"]["question"]["0.1c"]["tags"]=["interviewer"];
q.section["0"]["question"]["0.1c"]["question"]="geo location:";
q.section["0"]["question"]["0.1c"]["options"]=null;
q.section["0"]["question"]["0.1c"]["answer"]=[];
q.section["0"]["question"]["0.1c"]["other_option"] = null;
q.section["0"]["question"]["0.1c"]["ui_type"] = "none";
q.section["0"]["question"]["0.1c"]["table"] = null;

q.section["0"]["question"]["0.2"]={};
q.section["0"]["question"]["0.2"]["tags"]=["Supervisor"];
q.section["0"]["question"]["0.2"]["question"]="Supervisor Name:";
q.section["0"]["question"]["0.2"]["options"]=null;
q.section["0"]["question"]["0.2"]["answer"]="jane doe";
q.section["0"]["question"]["0.2"]["other_option"] = null;
q.section["0"]["question"]["0.2"]["ui_type"] = "none";
q.section["0"]["question"]["0.2"]["table"] = null;

q.section["0"]["question"]["0.3"]={};
q.section["0"]["question"]["0.3"]["tags"]=["refugee","area"];
q.section["0"]["question"]["0.3"]["question"]="Refugee hosting area:";
q.section["0"]["question"]["0.3"]["options"]={1:"Rwamwanja", 2:"Kyaka II"};
q.section["0"]["question"]["0.3"]["answer"]=1;
q.section["0"]["question"]["0.3"]["other_option"] = null;
q.section["0"]["question"]["0.3"]["ui_type"] = "radio";
q.section["0"]["question"]["0.3"]["table"] = null;

q.section["0"]["question"]["0.4"]={};
q.section["0"]["question"]["0.4"]["tags"]=["refugee","community"];
q.section["0"]["question"]["0.4"]["question"]="Refugee or Host Community:";
q.section["0"]["question"]["0.4"]["options"]={1:"Refugee", 2:"Host Community"};
q.section["0"]["question"]["0.4"]["answer"]=2;
q.section["0"]["question"]["0.4"]["other_option"] = null;
q.section["0"]["question"]["0.4"]["ui_type"] = "radio";
q.section["0"]["question"]["0.4"]["table"] = null;

q.section["0"]["question"]["0.5"]={};
q.section["0"]["question"]["0.5"]["tags"]=["refugee","benefitting"];
q.section["0"]["question"]["0.5"]["question"]="Is the person benefitting from the Livelihood Support project implemented by Samaritan’s Purse?";
q.section["0"]["question"]["0.5"]["options"]={1:"yes", 2:"no"};
q.section["0"]["question"]["0.5"]["answer"]=2;
q.section["0"]["question"]["0.5"]["other_option"] = null;
q.section["0"]["question"]["0.5"]["ui_type"] = "radio";
q.section["0"]["question"]["0.5"]["table"] = null;

q.section["1"] = {};
q.section["1"]["introduction"] = "A household is defined as a group of people who routinely eat out of same pot and live on the same compound (or physical location).It is possible that they may live in different structures";
q.section["1"]["name"] = "HOUSEHOLD INFORMATION";
q.section["1"]["question"] = {};

q.section["1"]["question"]["1.1a"] = {};
q.section["1"]["question"]["1.1a"]["tags"]=["household","gender"];
q.section["1"]["question"]["1.1a"]["question"] = "Who is the head of household man or a woman?";
q.section["1"]["question"]["1.1a"]["options"]={1:"male",2:"female"};
q.section["1"]["question"]["1.1a"]["answer"] = 1;
q.section["1"]["question"]["1.1a"]["other_option"] = null;
q.section["1"]["question"]["1.1a"]["ui_type"] = "radio";
q.section["1"]["question"]["1.1a"]["table"] = null;

q.section["1"]["question"]["1.1b"] = {};
q.section["1"]["question"]["1.1b"]["tags"]=["household","education"];
q.section["1"]["question"]["1.1b"]["question"] = "What is the education level of the household head?";
q.section["1"]["question"]["1.1b"]["options"]={1:"none",2:"Attended primary but didnt complete",3:"completed primary",
                                               4:"Attended O level but didnt complete",5:"completed O level",6:"Attended A level secondary but didnt complete",
                                               7:"completed A level secondary",9:"higher than A level secondary"};
q.section["1"]["question"]["1.1b"]["answer"] = 5;
q.section["1"]["question"]["1.1b"]["other_option"] = null;
q.section["1"]["question"]["1.1b"]["ui_type"] = "radio";
q.section["1"]["question"]["1.1b"]["table"] = null;

q.section["1"]["question"]["1.2"] = {};
q.section["1"]["question"]["1.2"]["tags"]=["respondent","gender"];
q.section["1"]["question"]["1.2"]["question"] = "sex of the respondent";
q.section["1"]["question"]["1.2"]["options"]={1:"male",2:"female"};
q.section["1"]["question"]["1.2"]["answer"] = 1;
q.section["1"]["question"]["1.2"]["other_option"] = null;
q.section["1"]["question"]["1.2"]["ui_type"] = "radio";
q.section["1"]["question"]["1.2"]["table"] = null;

q.section["1"]["question"]["1.3"] = {};
q.section["1"]["question"]["1.3"]["tags"] = ["household", "gender"];
q.section["1"]["question"]["1.3"]["question"] = "How many house members fit in the following age-brackets?";
q.section["1"]["question"]["1.3"]["options"] = null;
q.section["1"]["question"]["1.3"]["answer"] = null;
q.section["1"]["question"]["1.3"]["other_option"] = null;
q.section["1"]["question"]["1.3"]["ui_type"] = "table";
q.section["1"]["question"]["1.3"]["table"] = [
					{	"question": "0 – 5 years", 	"answer" : { "male": 5, "female" : 2 } },
					{	"question": "6 - 17 years", "answer" : { "male": 5, "female" : 2 } },
					{	"question": "18-65 years", 	"answer" : { "male": 5, "female" : 2 } },
					{	"question": "65+ years", 	"answer" : { "male": 5, "female" : 2 } }
				];

q.section["2"] = {};
q.section["2"]["introduction"]=null;
q.section["2"]["name"]="AGRICULTURE INFORMATION ";
q.section["2"]["question"] = {};

q.section["2"]["question"]["2.1"]={};
q.section["2"]["question"]["2.1"]["tags"] = ["agriculture", "land"];
q.section["2"]["question"]["2.1"]["question"] = "Do you have access to agricultural land?";
q.section["2"]["question"]["2.1"]["options"] = {0:"no",1:"yes"};
q.section["2"]["question"]["2.1"]["answer"] = 1;
q.section["2"]["question"]["2.1"]["other_option"] = null;
q.section["2"]["question"]["2.1"]["ui_type"] = "radio"
q.section["2"]["question"]["2.1"]["table"] = null;




q.section["2"]["question"]["2.3"]={};
q.section["2"]["question"]["2.3"]["tags"] = ["agriculture", "landscale"];
q.section["2"]["question"]["2.3"]["question"]="How big is this land you have access to?";
q.section["2"]["question"]["2.3"]["options"] = null;
q.section["2"]["question"]["2.3"]["answer"] = 14;
q.section["2"]["question"]["2.3"]["other_option"] = null;
q.section["2"]["question"]["2.3"]["ui_type"] = "text";
q.section["2"]["question"]["2.3"]["table"] = null;

q.section["2"]["question"]["2.3"]["2.3(a)"]={};
q.section["2"]["question"]["2.3"]["2.3(a)"]["tags"] = ["agriculture", "use of land"];
q.section["2"]["question"]["2.3"]["2.3(a)"]["question"] = "How land and produce are utilized?";
q.section["2"]["question"]["2.3"]["2.3(a)"]["options"] = null;
q.section["2"]["question"]["2.3"]["2.3(a)"]["answer"] = null;
q.section["2"]["question"]["2.3"]["2.3(a)"]["other_option"] = null;
q.section["2"]["question"]["2.3"]["2.3(a)"]["ui_type"] = "table";
q.section["2"]["question"]["2.3"]["2.3(a)"]["table"] = [
			{"question": "maize", 	
			 "answer" :
			  { "Area Cultivated?": 5, "no. of kgs produced" : 2,"no. of kgs sold":3,"no. of kgs eaten":1,"no. of kgs exchanged":4,"no. of kgs spoilt":3 } },
			{"question": "beans", 	
			 "answer" :
			  { "Area Cultivated?": 5, "no. of kgs produced" : 2,"no. of kgs sold":3,"no. of kgs eaten":1,"no. of kgs exchanged":4,"no. of kgs spoilt":3 } },
			{"question": "other", 	
			 "answer" :
			  { "Area Cultivated?": 5, "no. of kgs produced" : 2,"no. of kgs sold":3,"no. of kgs eaten":1,"no. of kgs exchanged":4,"no. of kgs spoilt":3 } },
			{"question": "other", 	
			 "answer" :
			  { "Area Cultivated?": 5, "no. of kgs produced" : 2,"no. of kgs sold":3,"no. of kgs eaten":1,"no. of kgs exchanged":4,"no. of kgs spoilt":3 } }
		];

q.section["2"]["question"]["2.4.1"]={};
q.section["2"]["question"]["2.4.1"]["tags"] = ["agriculture", "harvest"];
q.section["2"]["question"]["2.4.1"]["question"] = "Do you store harvested crops?";
q.section["2"]["question"]["2.4.1"]["options"] = {1:"yes", 2:"no"};
q.section["2"]["question"]["2.4.1"]["answer"] = 1;
q.section["2"]["question"]["2.4.1"]["other_option"] = null;
q.section["2"]["question"]["2.4.1"]["ui_type"] = "radio";
q.section["2"]["question"]["2.4.1"]["table"] = null;

q.section["2"]["question"]["2.4.2"]={};
q.section["2"]["question"]["2.4.2"]["tags"] = ["agriculture", "future consumption"];
q.section["2"]["question"]["2.4.2"]["question"]="How much of your produce is  stored for  future consumption at household level in a season";
q.section["2"]["question"]["2.4.2"]["options"] = {1:"maize",2:"beans"};
q.section["2"]["question"]["2.4.2"]["answer"] = null;
q.section["2"]["question"]["2.4.2"]["other_option"] = null;
q.section["2"]["question"]["2.4.2"]["ui_type"] = "table";
q.section["2"]["question"]["2.4.2"]["table"] = [
					{	"question": "maize", 	"answer" : { "no. of kilos stored for food": 5 } },
					{	"question": "beans", "answer" : { "no. of kilos stored for food": 5 } }
				];

q.section["2"]["question"]["2.5.1"]={};
q.section["2"]["question"]["2.5.1"]["tags"] = ["agriculture", "storage"];
q.section["2"]["question"]["2.5.1"]["question"]="how do you store the crop?";
q.section["2"]["question"]["2.5.1"]["options"] = {1:"Traditional Grain bags",2:"Super Grain Bags (by the project)",
                                                  3:"Traditional granary",4:"Plastic Silo",5: "Metal Silo",6: "Other (specify)"};
q.section["2"]["question"]["2.5.1"]["answer"] = [1,4];
q.section["2"]["question"]["2.5.1"]["other_option"] = null;
q.section["2"]["question"]["2.5.1"]["ui_type"] = "checkbox";
q.section["2"]["question"]["2.5.1"]["table"] = null;

q.section["2"]["question"]["2.5.2"]={};
q.section["2"]["question"]["2.5.2"]["tags"] = ["agriculture", "storage"];
q.section["2"]["question"]["2.5.2"]["question"]="If No to 2.4.1, why not?";
q.section["2"]["question"]["2.5.2"]["options"]={1:"No space",2:"No storage facility in the HH",
                                                3:"Storage facility unusable",4:"Crop in HH gets spoiled quickly"};
q.section["2"]["question"]["2.5.2"]["answer"]=[2,3];
q.section["2"]["question"]["2.5.2"]["other_option"] = null;
q.section["2"]["question"]["2.5.2"]["ui_type"] = "checkbox";
q.section["2"]["question"]["2.5.2"]["table"] = null;

q.section["2"]["question"]["2.5.3"]={};
q.section["2"]["question"]["2.5.3"]["tags"] = ["agriculture", "grains"];
q.section["2"]["question"]["2.5.3"]["question"]="Which of the followings are the causes of losses of grains in your store?";
q.section["2"]["question"]["2.5.3"]["options"]={1:"Rodents",2:"weevils",3:"fungus",4:"molds(moisture)"};
q.section["2"]["question"]["2.5.3"]["answer"]=[1,3];
q.section["2"]["question"]["2.5.3"]["other_option"] = null;
q.section["2"]["question"]["2.5.3"]["ui_type"] = "checkbox";
q.section["2"]["question"]["2.5.3"]["table"] = null;

q.section["2"]["question"]["2.5.4"]={};
q.section["2"]["question"]["2.5.4"]["tags"] = ["agriculture", "constraint"];
q.section["2"]["question"]["2.5.4"]["question"]="What is the biggest constraint to farming you face?";
q.section["2"]["question"]["2.5.4"]["options"]={1:"Insecurity",2:"Lack of adequate storage of harvest / high post harvest losses",
                                                3:"I have been prohibited by a family member",4:"The land is infertile/marginal",5:"Sickness or physical inability",
                                                6:"I did not have adequate seeds and tools",7:"I do not have sufficient family/household labour",
                                                8:"We are not agriculturalists",9:"Land conflicts",10:"Drought/Low rainfall"};
q.section["2"]["question"]["2.5.4"]["answer"]=3;
q.section["2"]["question"]["2.5.4"]["other_option"] = null;
q.section["2"]["question"]["2.5.4"]["ui_type"] = "radio";
q.section["2"]["question"]["2.5.4"]["table"] = null;

q.section["2"]["question"]["2.5.5"]={};
q.section["2"]["question"]["2.5.5"]["tags"] = ["agriculture", "storage equipments"];
q.section["2"]["question"]["2.5.5"]["question"]="Have you accessed any information about Improved storage equipments";
q.section["2"]["question"]["2.5.5"]["options"]={1:"yes",2:"no"};
q.section["2"]["question"]["2.5.5"]["answer"]=1;
q.section["2"]["question"]["2.5.5"]["other_option"] = null;
q.section["2"]["question"]["2.5.5"]["ui_type"] = "radio";
q.section["2"]["question"]["2.5.5"]["table"] = null;

q.section["2"]["question"]["2.5.6"]={};
q.section["2"]["question"]["2.5.6"]["tags"] = ["agriculture", "source of information"];
q.section["2"]["question"]["2.5.6"]["question"]="If Yes, what was the source of this information?";
q.section["2"]["question"]["2.5.6"]["options"]={1:"WFP",2:"NGO",3:"Government",4:"Other farmer/neighbour",5:"Farmer group"};
q.section["2"]["question"]["2.5.6"]["answer"]=3;
q.section["2"]["question"]["2.5.6"]["other_option"] = null;
q.section["2"]["question"]["2.5.6"]["ui_type"] = "checkbox";
q.section["2"]["question"]["2.5.6"]["table"] = null;

q.section["2"]["question"]["2.6"]={};
q.section["2"]["question"]["2.6"]["tags"] = ["agriculture", "farmer association"];
q.section["2"]["question"]["2.6"]["question"]="Are you a member of any farmer association or group?";
q.section["2"]["question"]["2.6"]["options"]={1:"yes",2:"No"};
q.section["2"]["question"]["2.6"]["answer"]=2;
q.section["2"]["question"]["2.6"]["other_option"] = null;
q.section["2"]["question"]["2.6"]["ui_type"] = "radio";
q.section["2"]["question"]["2.6"]["table"] = null;

q.section["3"] = {};
q.section["3"]["introduction"]=null;
q.section["3"]["name"]="GENDER IN THE VALUE CHAIN ";
q.section["3"]["question"] = {};

q.section["3"]["question"]["3.1"]={};
q.section["3"]["question"]["3.1"]["tags"] = ["value chain", "gender"];
q.section["3"]["question"]["3.1"]["question"]="Who does what on the produce in terms ";
q.section["3"]["question"]["3.1"]["options"]=null;
q.section["3"]["question"]["3.1"]["answer"]=null;
q.section["3"]["question"]["3.1"]["other_option"] = null;
q.section["3"]["question"]["3.1"]["ui_type"] = "table";
q.section["3"]["question"]["3.1"]["table"] = [// value of this field is always null, unless ui_type (on line above) is "table"
					{	"question": "land preparation",  "answer" : { "male": 0, "female" : 0 ,"children":1} },
					{	"question": "planting", "answer" : { "male": 0, "female" : 0 ,"children": 1} },
					{	"question": "weeding", 	"answer" : { "male": 0, "female" : 0 ,"children": 1} },
					{	"question": "thinning", "answer" : { "male": 0, "female" : 0 ,"children": 1} },
					{	"question": "pest and disease control", "answer" : { "male": 0, "female" : 0 ,"children": 1} },
					{	"question": "harvesting", "answer" : { "male": 0, "female" : 0 ,"children": 1} },
					{	"question": "drying", "answer" : { "male": 0, "female" : 0 ,"children": 1} },
					{	"question": "sorting", "answer" : { "male": 0, "female" : 0 ,"children": 1} },
					{	"question": "storage", "answer" : { "male": 0, "female" : 0 ,"children": 1} },
					{	"question": "selling", "answer" : { "male": 0, "female" : 0 ,"children": 1} }
				];

q.section["3"]["question"]["3.2"]={};
q.section["3"]["question"]["3.2"]["tags"] = ["value chain", "decision making"];
q.section["3"]["question"]["3.2"]["question"]="Who makes decisions on what to do with harvested crops";
q.section["3"]["question"]["3.2"]["options"]={1:"male",2:"female"};
q.section["3"]["question"]["3.2"]["answer"]=null;
q.section["3"]["question"]["3.2"]["other_option"] = null;
q.section["3"]["question"]["3.2"]["ui_type"] = "radio";
q.section["3"]["question"]["3.2"]["table"] = null;

q.section["4"] = {};
q.section["4"]["introduction"]=null;
q.section["4"]["name"]="HARVESTING AND DRYING OF MAIZE ";
q.section["4"]["question"] = {};

q.section["4"]["question"]["4.1"]={};
q.section["4"]["question"]["4.1"]["tags"] = ["harvesting", "preparations"];
q.section["4"]["question"]["4.1"]["question"]="What preparations do you make when planning to harvest your produce? ";
q.section["4"]["question"]["4.1"]["options"]=null;
q.section["4"]["question"]["4.1"]["answer"]=null;
q.section["4"]["question"]["4.1"]["other_option"] = null;
q.section["4"]["question"]["4.1"]["ui_type"] = "text";
q.section["4"]["question"]["4.1"]["table"] = null;

q.section["4"]["question"]["4.2"]={};
q.section["4"]["question"]["4.2"]["tags"] = ["harvesting", "transport"];
q.section["4"]["question"]["4.2"]["question"]="How do you transport you produce from the field?";
q.section["4"]["question"]["4.2"]["options"]={1:"on head",2:"on wheelbarrow",3:"bicycle",4:"motor cycle",5:"vehicle"};
q.section["4"]["question"]["4.2"]["answer"]=4;
q.section["4"]["question"]["4.2"]["other_option"] = null;
q.section["4"]["question"]["4.2"]["ui_type"] = "checkbox";
q.section["4"]["question"]["4.2"]["table"] = null;

q.section["4"]["question"]["4.3"]={};
q.section["4"]["question"]["4.3"]["tags"] = ["harvesting", "drying"];
q.section["4"]["question"]["4.3"]["question"]="Which methods do you use to dry your maize?";
q.section["4"]["question"]["4.3"]["options"]={1:"On bear ground",2:"On Tarpaulin",3:"On the mat",4:"On concrete /cement",5:"On the wire rack",6:"Wooden drying rack"};
q.section["4"]["question"]["4.3"]["answer"]=4;
q.section["4"]["question"]["4.3"]["other_option"] = null;
q.section["4"]["question"]["4.3"]["ui_type"] = "checkbox";
q.section["4"]["question"]["4.3"]["table"] = null;

q.section["4"]["question"]["4.4"]={};
q.section["4"]["question"]["4.4"]["tags"] = ["harvesting", "place"];
q.section["4"]["question"]["4.4"]["question"]="Where do  you place your produce when harvesting?";
q.section["4"]["question"]["4.4"]["options"]={1:"on bear ground",2:"Tarpaulin ",3:"On the mat",4:"In the bag "};
q.section["4"]["question"]["4.4"]["answer"]=4;
q.section["4"]["question"]["4.4"]["other_option"] = null;
q.section["4"]["question"]["4.4"]["ui_type"] = "checkbox";
q.section["4"]["question"]["4.4"]["table"] = null;

q.section["4"]["question"]["4.5"]={};
q.section["4"]["question"]["4.5"]["tags"] = ["harvesting", "separation"];
q.section["4"]["question"]["4.5"]["question"]="How do you separate or remove the maize grain from the cob";
q.section["4"]["question"]["4.5"]["options"]={1:"Use of hands",2:"Beating ",3:"Maize threshing machine",4:"Small hand machine",5:"Other(specify)"};
q.section["4"]["question"]["4.5"]["answer"]=4;
q.section["4"]["question"]["4.5"]["other_option"] = null;
q.section["4"]["question"]["4.5"]["ui_type"] = "checkbox";
q.section["4"]["question"]["4.5"]["table"] = null;

q.section["5"] = {};
q.section["5"]["introduction"]=null;
q.section["5"]["name"]="HOUSEHOLD INCOME & DEBT";
q.section["5"]["question"] = {};

q.section["5"]["question"]["5.1"]={};
q.section["5"]["question"]["5.1"]["tags"] = ["household income", "earning"];
q.section["5"]["question"]["5.1"]["question"]="How many household members earn an income?";
q.section["5"]["question"]["5.1"]["options"] = null;
q.section["5"]["question"]["5.1"]["answer"] = null;
q.section["5"]["question"]["5.1"]["other_option"] = null;
q.section["5"]["question"]["5.1"]["ui_type"] = "table";
q.section["5"]["question"]["5.1"]["table"] = [
					{	"question": "currently", 	"answer" : 2},
					{	"question": "6 months ago", "answer" : 4}
				];

q.section["5"]["question"]["5.2"]={};
q.section["5"]["question"]["5.2"]["tags"] = ["household income", "activities"];
q.section["5"]["question"]["5.2"]["question"]="What are your household’s main income generation activities in the past 30 days? (Rank up to 3 income activities)  (use activity codes)";
q.section["5"]["question"]["5.2"]["options"] = {1:"Food crop production/sales", 2:"Cash crop production/sale (e.g. coffee",3:"Sale of animals or animal products",
	                                            4:"Livestock production (Animal Husbandry)",5: "Agricultural wage labor",6:"Non-agricultural wage labor",
	                                            7:"Small business/self-employed",8:"Petty trade (firewood sales, etc.)",9:"Pension, allowances",10:"Salary/wages",
	                                            11:"Fishing",12:"Handicrafts",13:"Gifts/begging",14:"Borrowing",15:"Food assistance",16:"Skilled Trade",
	                                            17:"Sale of food assistance",18:"Government allowance",19:"Remittances",20:"Boda-boda riding",21:"Other"
	                                        };
q.section["5"]["question"]["5.2"]["answer"] = null;
q.section["5"]["question"]["5.2"]["other_option"] = null;
q.section["5"]["question"]["5.2"]["ui_type"] = "table";
q.section["5"]["question"]["5.2"]["table"] = [
					{	"question": "main",  "answer" : 2},
					{	"question": "second", "answer" : 4},
					{	"question": "third", "answer" : 4}
				];

q.section["5"]["question"]["5.3a"]={};
q.section["5"]["question"]["5.3a"]["tags"] = ["household income", "non crop income"];
q.section["5"]["question"]["5.3a"]["question"]="What is the approximate amount of total non crop income for this household for the last month? UGX";
q.section["5"]["question"]["5.3a"]["options"] = null;
q.section["5"]["question"]["5.3a"]["answer"] = 3000;
q.section["5"]["question"]["5.3a"]["other_option"] = null;
q.section["5"]["question"]["5.3a"]["ui_type"] = "text";
q.section["5"]["question"]["5.3a"]["table"] =null;

q.section["5"]["question"]["5.3b"]={};
q.section["5"]["question"]["5.3b"]["tags"] = ["household income", "crop income"];
q.section["5"]["question"]["5.3b"]["question"]="What is the approximate amount of total crop income for this household for the last season? UGX";
q.section["5"]["question"]["5.3b"]["options"] = null;
q.section["5"]["question"]["5.3b"]["answer"] = 3000;
q.section["5"]["question"]["5.3b"]["other_option"] = null;
q.section["5"]["question"]["5.3b"]["ui_type"] = "text";
q.section["5"]["question"]["5.3b"]["table"] =null;


q.section["5"]["question"]["5.4"]={};
q.section["5"]["question"]["5.4"]["tags"] = ["household income", "debt"];
q.section["5"]["question"]["5.4"]["question"]="Do you have any debt or credit to repay at the moment?";
q.section["5"]["question"]["5.4"]["options"] = {1:"yes",0:"no"};
q.section["5"]["question"]["5.4"]["answer"] = 1;
q.section["5"]["question"]["5.4"]["other_option"] = null;
q.section["5"]["question"]["5.4"]["ui_type"] = "radio";
q.section["5"]["question"]["5.4"]["table"] =null;

q.section["5"]["question"]["5.5"]={};
q.section["5"]["question"]["5.5"]["tags"] = ["household income", "debt reason"];
q.section["5"]["question"]["5.5"]["question"]="What was the main reason for new debts or credit?";
q.section["5"]["question"]["5.5"]["options"] = {1:"To buy food",2:"To cover health expenses",3:"To pay school education costs",
                                                4:"To buy agricultural inputs (seed, tools...)",5:"To buy animal feed, fodder, veterinary",
                                                6:"To buy or rent animals"
                                               };
q.section["5"]["question"]["5.5"]["answer"] = 1;
q.section["5"]["question"]["5.5"]["other_option"] = null;
q.section["5"]["question"]["5.5"]["ui_type"] = "radio";
q.section["5"]["question"]["5.5"]["table"] =null;

q.section["5"]["question"]["5.6"]={};
q.section["5"]["question"]["5.6"]["tags"] = ["household income", "total debt"];
q.section["5"]["question"]["5.6"]["question"]="What is the approximate amount of your total debt at the moment, in UGX";
q.section["5"]["question"]["5.6"]["options"] = null;
q.section["5"]["question"]["5.6"]["answer"] = 10000;
q.section["5"]["question"]["5.6"]["other_option"] = null;
q.section["5"]["question"]["5.6"]["ui_type"] = "text";
q.section["5"]["question"]["5.6"]["table"] =null;

q.section["6"] = {};
q.section["6"]["introduction"]="Read:I would now like to ask you a few questions about food consumption in your household";
q.section["6"]["name"]="FOOD SOURCES AND CONSUMPTION";
q.section["6"]["question"] = {};
q.section["6"]["question"]["6.0"]={};
q.section["6"]["question"]["6.0"]["tags"] = ["food sources", "consumption"];
q.section["6"]["question"]["6.0"]["question"]="Could you please tell me how many days in the past one week (seven days) your household has eaten the following foods  (write 0 for items not eaten over the last 7 days) ASK LINE BY LINE FOR EACH ITEM ";
q.section["6"]["question"]["6.0"]["options"] = null;
q.section["6"]["question"]["6.0"]["answer"] = null;
q.section["6"]["question"]["6.0"]["other_option"] = null;
q.section["6"]["question"]["6.0"]["ui_type"] = "table";
q.section["6"]["question"]["6.0"]["table"] = [
					{	"question": "Cereals and grain", 	"answer" : { "number of days eaten in last 7days": 5 } },
					{	"question": "Roots and tubers", 	"answer" : { "number of days eaten in last 7days": 5 } },
					{	"question": "Legumes/Nuts", 	"answer" : { "number of days eaten in last 7days": 5 } },
					{	"question": "Vegetables (orange, green and others)", 	"answer" : { "number of days eaten in last 7days": 5 } },
					{	"question": "Fruits", 	"answer" : { "number of days eaten in last 7days": 5 } },
					{	"question": "Meat", 	"answer" : { "number of days eaten in last 7days": 5 } },
					{	"question": "Fish / Shellfish", 	"answer" : { "number of days eaten in last 7days": 5 } },
					{	"question": "Eggs", 	"answer" : { "number of days eaten in last 7days": 5 } },
					{	"question": "Milk and other dairy products", 	"answer" : { "number of days eaten in last 7days": 5 } },
					{	"question": "Oil / fat / butter", 	"answer" : { "number of days eaten in last 7days": 5 } },
					{	"question": "Sugar, or sweet", 	"answer" : { "number of days eaten in last 7days": 5 } },
					{	"question": "Condiments / Spices", 	"answer" : { "number of days eaten in last 7days": 5 } }
				];

q.section["7"] = {};
q.section["7"]["introduction"]="Livelihood Coping Strategies Index:During the last 30 days, did anyone in your household have to engage in any of the following activities because there was not enough food or money to buy food";
q.section["7"]["name"]="COPING STRATEGY INDEX";
q.section["7"]["question"] = {};

q.section["7"]["question"]["7.1"]={};
q.section["7"]["question"]["7.1"]["tags"] = ["food sources", "stress"];
q.section["7"]["question"]["7.1"]["question"]="Sold more animals (non-productive) than usual)";
q.section["7"]["question"]["7.1"]["options"] = {1:"No, I did not face shortage of food",
                                                2:"No, I already sold those assets or have engaged in this activity and cannot continue to do so",
                                                3:"Yes", 
                                                4:"N/A"
                                               };
q.section["7"]["question"]["7.1"]["answer"] = 2;
q.section["7"]["question"]["7.1"]["other_option"] = null;
q.section["7"]["question"]["7.1"]["ui_type"] = "checkbox";
q.section["7"]["question"]["7.1"]["table"] =null;

q.section["7"]["question"]["7.2"]={};
q.section["7"]["question"]["7.2"]["tags"] = ["food sources", "stress"];
q.section["7"]["question"]["7.2"]["question"]="Sold more animals (non-productive) than usual";
q.section["7"]["question"]["7.2"]["options"] = {1:"No, I did not face shortage of food",
                                                2:"No, I already sold those assets or have engaged in this activity and cannot continue to do so",
                                                3:"Yes",4:"N/A"
                                               };
q.section["7"]["question"]["7.2"]["answer"] = 2;
q.section["7"]["question"]["7.2"]["other_option"] = null;
q.section["7"]["question"]["7.2"]["ui_type"] = "checkbox";
q.section["7"]["question"]["7.2"]["table"] =null;

q.section["7"]["question"]["7.3"]={};
q.section["7"]["question"]["7.3"]["tags"] = ["food sources", "stress"];
q.section["7"]["question"]["7.3"]["question"]="Sold household goods (radio, furniture, refrigerator, television, jewelry etc)";
q.section["7"]["question"]["7.3"]["options"] = {1:"No, I did not face shortage of food",
                                                2:"No, I already sold those assets or have engaged in this activity and cannot continue to do so",
                                                3:"Yes",4:"N/A"
                                               };
q.section["7"]["question"]["7.3"]["answer"] = 2;
q.section["7"]["question"]["7.3"]["other_option"] = null;
q.section["7"]["question"]["7.3"]["ui_type"] = "checkbox";
q.section["7"]["question"]["7.3"]["table"] =null;

q.section["7"]["question"]["7.3"]={};
q.section["7"]["question"]["7.3"]["tags"] = ["food sources", "stress"];
q.section["7"]["question"]["7.3"]["question"]="Spent savings";
q.section["7"]["question"]["7.3"]["options"] = {1:"No, I did not face shortage of food",
                                                2:"No, I already sold those assets or have engaged in this activity and cannot continue to do so",
                                                3:"Yes",4:"N/A"
                                               };
q.section["7"]["question"]["7.3"]["answer"] = 2;
q.section["7"]["question"]["7.3"]["other_option"] = null;
q.section["7"]["question"]["7.3"]["ui_type"] = "checkbox";
q.section["7"]["question"]["7.3"]["table"] =null;

q.section["7"]["question"]["7.4"]={};
q.section["7"]["question"]["7.4"]["tags"] = ["food sources", "stress"];
q.section["7"]["question"]["7.4"]["question"]="Borrowed money";
q.section["7"]["question"]["7.4"]["options"] = {1:"No, I did not face shortage of food",
                                                2:"No, I already sold those assets or have engaged in this activity and cannot continue to do so",
                                                3:"Yes",4:"N/A"
                                               };
q.section["7"]["question"]["7.4"]["answer"] = 2;
q.section["7"]["question"]["7.4"]["other_option"] = null;
q.section["7"]["question"]["7.4"]["ui_type"] = "checkbox";
q.section["7"]["question"]["7.4"]["table"] =null;

q.section["7"]["question"]["7.5"]={};
q.section["7"]["question"]["7.5"]["tags"] = ["food sources", "emergencies"];
q.section["7"]["question"]["7.5"]["question"]="Sold productive assets or means of transport (sewing machine, wheelbarrow, bicycle, car, goats, cows, etc..)";
q.section["7"]["question"]["7.5"]["options"] = {1:"No, I did not face shortage of food",
                                                2:"No, I already sold those assets or have engaged in this activity and cannot continue to do so",
                                                3:"Yes",4:"N/A"
                                               };
q.section["7"]["question"]["7.5"]["answer"] = 2;
q.section["7"]["question"]["7.5"]["other_option"] = null;
q.section["7"]["question"]["7.5"]["ui_type"] = "checkbox";
q.section["7"]["question"]["7.5"]["table"] =null;

q.section["7"]["question"]["7.6"]={};
q.section["7"]["question"]["7.6"]["tags"] = ["food sources", "emergencies"];
q.section["7"]["question"]["7.6"]["question"]="Reduced essential non-food expenditures such as education, health, etc…";
q.section["7"]["question"]["7.6"]["options"] = {1:"No, I did not face shortage of food",
                                                2:"No, I already sold those assets or have engaged in this activity and cannot continue to do so",
                                                3:"Yes",4:"N/A"
                                               };
q.section["7"]["question"]["7.6"]["answer"] = 2;
q.section["7"]["question"]["7.6"]["other_option"] = null;
q.section["7"]["question"]["7.6"]["ui_type"] = "checkbox";
q.section["7"]["question"]["7.6"]["table"] =null;

q.section["7"]["question"]["7.7"]={};
q.section["7"]["question"]["7.7"]["tags"] = ["food sources", "emergencies"];
q.section["7"]["question"]["7.7"]["question"]="Consume seed stock held for next season";
q.section["7"]["question"]["7.7"]["options"] = {1:"No, I did not face shortage of food",
                                                2:"No, I already sold those assets or have engaged in this activity and cannot continue to do so",
                                                3:"Yes",4:"N/A"
                                               };
q.section["7"]["question"]["7.7"]["answer"] = 2;
q.section["7"]["question"]["7.7"]["other_option"] = null;
q.section["7"]["question"]["7.7"]["ui_type"] = "checkbox";
q.section["7"]["question"]["7.7"]["table"] =null;

q.section["7"]["question"]["7.8"]={};
q.section["7"]["question"]["7.8"]["tags"] = ["food sources", "crisis"];
q.section["7"]["question"]["7.8"]["question"]="Sold house or land";
q.section["7"]["question"]["7.8"]["options"] = {1:"No, I did not face shortage of food",
                                                2:"No, I already sold those assets or have engaged in this activity and cannot continue to do so",
                                                3:"Yes",4:"N/A"
                                               };
q.section["7"]["question"]["7.8"]["answer"] = 2;
q.section["7"]["question"]["7.8"]["other_option"] = null;
q.section["7"]["question"]["7.8"]["ui_type"] = "checkbox";
q.section["7"]["question"]["7.8"]["table"] =null;

q.section["7"]["question"]["7.9"]={};
q.section["7"]["question"]["7.9"]["tags"] = ["food sources", "crisis"];
q.section["7"]["question"]["7.9"]["question"]="Illegal income activities (theft, smuggling, prostitution)";
q.section["7"]["question"]["7.9"]["options"] = {1:"No, I did not face shortage of food",
                                                2:"No, I already sold those assets or have engaged in this activity and cannot continue to do so",
                                                3:"Yes",4:"N/A"
                                               };
q.section["7"]["question"]["7.9"]["answer"] = 2;
q.section["7"]["question"]["7.9"]["other_option"] = null;
q.section["7"]["question"]["7.9"]["ui_type"] = "checkbox";
q.section["7"]["question"]["7.9"]["table"] =null;

q.section["7"]["question"]["7.10"]={};
q.section["7"]["question"]["7.10"]["tags"] = ["food sources", "crisis"];
q.section["7"]["question"]["7.10"]["question"]="Begged";
q.section["7"]["question"]["7.10"]["options"] = {1:"No, I did not face shortage of food",
                                                2:"No, I already sold those assets or have engaged in this activity and cannot continue to do so",
                                                3:"Yes",4:"N/A"
                                               };
q.section["7"]["question"]["7.10"]["answer"] = 2;
q.section["7"]["question"]["7.10"]["other_option"] = null;
q.section["7"]["question"]["7.10"]["ui_type"] = "checkbox";
q.section["7"]["question"]["7.10"]["table"] =null;

q.section["7"]["question"]["7.10"]={};
q.section["7"]["question"]["7.10"]["tags"] = ["food sources", "consumption"];
q.section["7"]["question"]["7.10"]["question"]="Begged";
q.section["7"]["question"]["7.10"]["options"] = {1:"No, I did not face shortage of food",
                                                 2:"No, I already sold those assets or have engaged in this activity and cannot continue to do so",
                                                 3:"Yes",4:"N/A" };
q.section["7"]["question"]["7.10"]["answer"] = 2;
q.section["7"]["question"]["7.10"]["other_option"] = null;
q.section["7"]["question"]["7.10"]["ui_type"] = "checkbox";
q.section["7"]["question"]["7.10"]["table"] =null;

q.section["8"] = {};
q.section["8"]["introduction"]=null;
q.section["8"]["name"]=null;
q.section["8"]["question"] = {};
q.section["8"]["question"]["8.0"]={};
q.section["8"]["question"]["8.0"]["tags"] = ["comment", "comment"];
q.section["8"]["question"]["8.0"]["question"] = "Do you have any, comment, suggestion, or recommendation about this survey?";
q.section["8"]["question"]["8.0"]["options"] = null;
q.section["8"]["question"]["8.0"]["answer"] = null;
q.section["8"]["question"]["8.0"]["other_option"] = null;
q.section["8"]["question"]["8.0"]["ui_type"] = "text";
q.section["8"]["question"]["8.0"]["table"] =null;

var json_string = JSON.stringify(q, null, 4);

//window.location.href = "http://localhost:8080/farmers/index.php?x=" + json_string;
//$(document).ready(function(){})