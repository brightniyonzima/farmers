<?php

function get_JSON_object(){

	$jsn_string = '{
	    "introduction": "My name is (tell your name). I am part of a team formed by Samaritan’s purse international relief organisation in partnership with World Food Programme. We are conducting an assessment in the Refugee and Host community of Rwamwanja and Kyaka II refugee settlements in Kamwenge and Kyegegwa District respectively.  The purpose of this assessment is to understand how the farmers handle their crops after harvesting them and how they earn income for their household. The interview will take about 30 minutes.We will not record your name and any information that you provide is confidential. We will analyze your answers together with information provided by others participating in this survey. Therefore, your individual answers cannot be connected with you personally.The findings will guide SP and WFP to improve their support for farmers in the future. Your participation is voluntary, but we hope you will participate since your views are important.Do you have any questions?May I begin the interview now?”(If response is “NO”, go to the next Household)",
	    "section": {
	        "0": {
	            "introduction": null,
	            "name": "preamble",
	            "question": {
	                "0.1a": {
	                    "tags": [
	                        "date"
	                    ],
	                    "question": "Date",
	                    "options": null,
	                    "answer": "2016-05-16",
	                    "other_option": null,
	                    "ui_type": "date",
	                    "table": null
	                },
	                "0.1b": {
	                    "tags": [
	                        "interviewer"
	                    ],
	                    "question": "Interviewer Name:",
	                    "options": null,
	                    "answer": "john doe",
	                    "other_option": null,
	                    "ui_type": "none",
	                    "table": null
	                },
	                "0.2": {
	                    "tags": [
	                        "Supervisor"
	                    ],
	                    "question": "Supervisor Name:",
	                    "options": null,
	                    "answer": "jane doe",
	                    "other_option": null,
	                    "ui_type": "none",
	                    "table": null
	                },
	                "0.3": {
	                    "tags": [
	                        "refugee",
	                        "area"
	                    ],
	                    "question": "Refugee hosting area:",
	                    "options": {
	                        "1": "Rwamwanja",
	                        "2": "Kyaka II"
	                    },
	                    "answer": 1,
	                    "other_option": null,
	                    "ui_type": "radio",
	                    "table": null
	                },
	                "0.4": {
	                    "tags": [
	                        "refugee",
	                        "community"
	                    ],
	                    "question": "Refugee or Host Community:",
	                    "options": {
	                        "1": "Refugee",
	                        "2": "Host Community"
	                    },
	                    "answer": 2,
	                    "other_option": null,
	                    "ui_type": "radio",
	                    "table": null
	                },
	                "0.5": {
	                    "tags": [
	                        "refugee",
	                        "benefitting"
	                    ],
	                    "question": "Is the person benefitting from the Livelihood Support project implemented by Samaritan’s Purse?",
	                    "options": {
	                        "1": "yes",
	                        "2": "no"
	                    },
	                    "answer": 2,
	                    "other_option": null,
	                    "ui_type": "radio",
	                    "table": null
	                }
	            }
	        },
	        "1": {
	            "introduction": "A household is defined as a group of people who routinely eat out of same pot and live on the same compound (or physical location).It is possible that they may live in different structures",
	            "name": "HOUSEHOLD INFORMATION",
	            "question": {
	                "1.1a": {
	                    "tags": [
	                        "household",
	                        "gender"
	                    ],
	                    "question": "Who is the head of household man or a woman?",
	                    "options": {
	                        "1": "male",
	                        "2": "female"
	                    },
	                    "answer": 1,
	                    "other_option": null,
	                    "ui_type": "radio",
	                    "table": null
	                },
	                "1.1b": {
	                    "tags": [
	                        "household",
	                        "education"
	                    ],
	                    "question": "What is the education level of the household head?",
	                    "options": {
	                        "1": "none",
	                        "2": "Attended primary but didnt complete",
	                        "3": "completed primary",
	                        "4": "Attended O level but didnt complete",
	                        "5": "completed O level",
	                        "6": "Attended A level secondary but didnt complete",
	                        "7": "completed A level secondary",
	                        "9": "higher than A level secondary"
	                    },
	                    "answer": 5,
	                    "other_option": null,
	                    "ui_type": "radio",
	                    "table": null
	                },
	                "1.2": {
	                    "tags": [
	                        "respondent",
	                        "gender"
	                    ],
	                    "question": "sex of the respondent",
	                    "options": {
	                        "1": "male",
	                        "2": "female"
	                    },
	                    "answer": 1,
	                    "other_option": null,
	                    "ui_type": "radio",
	                    "table": null
	                },
	                "1.3": {
	                    "tags": [
	                        "household",
	                        "gender"
	                    ],
	                    "question": "How many house members fit in the following age-brackets?",
	                    "options": null,
	                    "answer": null,
	                    "other_option": null,
	                    "ui_type": "table",
	                    "table": [
	                        {
	                            "question": "0 – 5 years",
	                            "answer": {
	                                "male": 5,
	                                "female": 2
	                            }
	                        },
	                        {
	                            "question": "6 - 17 years",
	                            "answer": {
	                                "male": 5,
	                                "female": 2
	                            }
	                        },
	                        {
	                            "question": "18-65 years",
	                            "answer": {
	                                "male": 5,
	                                "female": 2
	                            }
	                        },
	                        {
	                            "question": "65+ years",
	                            "answer": {
	                                "male": 5,
	                                "female": 2
	                            }
	                        }
	                    ]
	                }
	            }
	        },
	        "2": {
	            "introduction": null,
	            "name": "AGRICULTURE INFORMATION ",
	            "question": {
	                "2.1": {
	                    "tags": [
	                        "agriculture",
	                        "land"
	                    ],
	                    "question": "Do you have access to agricultural land?",
	                    "options": {
	                        "0": "no",
	                        "1": "yes"
	                    },
	                    "answer": 1,
	                    "other_option": null,
	                    "ui_type": "radio",
	                    "table": null
	                },
	                "2.3": {
	                    "tags": [
	                        "agriculture",
	                        "landscale"
	                    ],
	                    "question": "How big is this land you have access to? [in Acres]",
	                    "options": null,
	                    "answer": 14,
	                    "other_option": null,
	                    "ui_type": "text",
	                    "table": null,
	                    "2.3(a)": {
	                        "tags": [
	                            "agriculture",
	                            "use of land"
	                        ],
	                        "question": "How land and produce are utilized?",
	                        "options": null,
	                        "answer": null,
	                        "other_option": null,
	                        "ui_type": "table",
	                        "table": [
	                            {
	                                "question": "maize",
	                                "answer": {
	                                    "Area Cultivated?": 5,
	                                    "no. of kgs produced": 2,
	                                    "no. of kgs sold": 3,
	                                    "no. of kgs eaten": 1,
	                                    "no. of kgs exchanged": 4,
	                                    "no. of kgs spoilt": 3
	                                }
	                            },
	                            {
	                                "question": "beans",
	                                "answer": {
	                                    "Area Cultivated?": 5,
	                                    "no. of kgs produced": 2,
	                                    "no. of kgs sold": 3,
	                                    "no. of kgs eaten": 1,
	                                    "no. of kgs exchanged": 4,
	                                    "no. of kgs spoilt": 3
	                                }
	                            },
	                            {
	                                "question": "other",
	                                "answer": {
	                                    "Area Cultivated?": 5,
	                                    "no. of kgs produced": 2,
	                                    "no. of kgs sold": 3,
	                                    "no. of kgs eaten": 1,
	                                    "no. of kgs exchanged": 4,
	                                    "no. of kgs spoilt": 3
	                                }
	                            },
	                            {
	                                "question": "other",
	                                "answer": {
	                                    "Area Cultivated?": 5,
	                                    "no. of kgs produced": 2,
	                                    "no. of kgs sold": 3,
	                                    "no. of kgs eaten": 1,
	                                    "no. of kgs exchanged": 4,
	                                    "no. of kgs spoilt": 3
	                                }
	                            }
	                        ]
	                    }
	                },
	                "2.4.1": {
	                    "tags": [
	                        "agriculture",
	                        "harvest"
	                    ],
	                    "question": "Do you store harvested crops?",
	                    "options": {
	                        "1": "yes",
	                        "2": "no"
	                    },
	                    "answer": 1,
	                    "other_option": null,
	                    "ui_type": "radio",
	                    "table": null
	                },
	                "2.4.2": {
	                    "tags": [
	                        "agriculture",
	                        "future consumption"
	                    ],
	                    "question": "How much of your produce is  stored for  future consumption at household level in a season",
	                    "options": {
	                        "1": "maize",
	                        "2": "beans"
	                    },
	                    "answer": null,
	                    "other_option": null,
	                    "ui_type": "table",
	                    "table": [
	                        {
	                            "question": "maize",
	                            "answer": {
	                                "no. of kilos stored for food": 5
	                            }
	                        },
	                        {
	                            "question": "beans",
	                            "answer": {
	                                "no. of kilos stored for food": 5
	                            }
	                        }
	                    ]
	                },
	                "2.5.1": {
	                    "tags": [
	                        "agriculture",
	                        "storage"
	                    ],
	                    "question": "how do you store the crop?",
	                    "options": {
	                        "1": "Traditional Grain bags",
	                        "2": "Super Grain Bags (by the project)",
	                        "3": "Traditional granary",
	                        "4": "Plastic Silo",
	                        "5": "Metal Silo",
	                        "6": "Other (specify)"
	                    },
	                    "answer": [
	                        1,
	                        4
	                    ],
	                    "other_option": null,
	                    "ui_type": "checkbox",
	                    "table": null
	                },
	                "2.5.2": {
	                    "tags": [
	                        "agriculture",
	                        "storage"
	                    ],
	                    "question": "If No to 2.4.1, why not?",
	                    "options": {
	                        "1": "No space",
	                        "2": "No storage facility in the HH",
	                        "3": "Storage facility unusable",
	                        "4": "Crop in HH gets spoiled quickly"
	                    },
	                    "answer": [
	                        2,
	                        3
	                    ],
	                    "other_option": null,
	                    "ui_type": "checkbox",
	                    "table": null
	                },
	                "2.5.3": {
	                    "tags": [
	                        "agriculture",
	                        "grains"
	                    ],
	                    "question": "Which of the followings are the causes of losses of grains in your store?",
	                    "options": {
	                        "1": "Rodents",
	                        "2": "weevils",
	                        "3": "fungus",
	                        "4": "molds(moisture)"
	                    },
	                    "answer": [
	                        1,
	                        3
	                    ],
	                    "other_option": null,
	                    "ui_type": "checkbox",
	                    "table": null
	                },
	                "2.5.4": {
	                    "tags": [
	                        "agriculture",
	                        "constraint"
	                    ],
	                    "question": "What is the biggest constraint to farming you face?",
	                    "options": {
	                        "1": "Insecurity",
	                        "2": "Lack of adequate storage of harvest / high post harvest losses",
	                        "3": "I have been prohibited by a family member",
	                        "4": "The land is infertile/marginal",
	                        "5": "Sickness or physical inability",
	                        "6": "I did not have adequate seeds and tools",
	                        "7": "I do not have sufficient family/household labour",
	                        "8": "We are not agriculturalists",
	                        "9": "Land conflicts",
	                        "10": "Drought/Low rainfall"
	                    },
	                    "answer": 3,
	                    "other_option": null,
	                    "ui_type": "radio",
	                    "table": null
	                },
	                "2.5.5": {
	                    "tags": [
	                        "agriculture",
	                        "storage equipments"
	                    ],
	                    "question": "Have you accessed any information about Improved storage equipments",
	                    "options": {
	                        "1": "yes",
	                        "2": "no"
	                    },
	                    "answer": 1,
	                    "other_option": null,
	                    "ui_type": "radio",
	                    "table": null
	                },
	                "2.5.6": {
	                    "tags": [
	                        "agriculture",
	                        "source of information"
	                    ],
	                    "question": "If Yes, what was the source of this information?",
	                    "options": {
	                        "1": "WFP",
	                        "2": "NGO",
	                        "3": "Government",
	                        "4": "Other farmer/neighbour",
	                        "5": "Farmer group"
	                    },
	                    "answer": 3,
	                    "other_option": null,
	                    "ui_type": "checkbox",
	                    "table": null
	                },
	                "2.6": {
	                    "tags": [
	                        "agriculture",
	                        "farmer association"
	                    ],
	                    "question": "Are you a member of any farmer association or group?",
	                    "options": {
	                        "1": "yes",
	                        "2": "No"
	                    },
	                    "answer": 2,
	                    "other_option": null,
	                    "ui_type": "radio",
	                    "table": null
	                }
	            }
	        },
	        "3": {
	            "introduction": null,
	            "name": "GENDER IN THE VALUE CHAIN ",
	            "question": {
	                "3.1": {
	                    "tags": [
	                        "value chain",
	                        "gender"
	                    ],
	                    "question": "Who does what on the produce in terms ",
	                    "options": null,
	                    "answer": null,
	                    "other_option": null,
	                    "ui_type": "table",
	                    "table": [
	                        {
	                            "question": "land preparation",
	                            "answer": {
	                                "male": 0,
	                                "female": 0,
	                                "children": 1
	                            }
	                        },
	                        {
	                            "question": "planting",
	                            "answer": {
	                                "male": 0,
	                                "female": 0,
	                                "children": 1
	                            }
	                        },
	                        {
	                            "question": "weeding",
	                            "answer": {
	                                "male": 0,
	                                "female": 0,
	                                "children": 1
	                            }
	                        },
	                        {
	                            "question": "thinning",
	                            "answer": {
	                                "male": 0,
	                                "female": 0,
	                                "children": 1
	                            }
	                        },
	                        {
	                            "question": "pest and disease control",
	                            "answer": {
	                                "male": 0,
	                                "female": 0,
	                                "children": 1
	                            }
	                        },
	                        {
	                            "question": "harvesting",
	                            "answer": {
	                                "male": 0,
	                                "female": 0,
	                                "children": 1
	                            }
	                        },
	                        {
	                            "question": "drying",
	                            "answer": {
	                                "male": 0,
	                                "female": 0,
	                                "children": 1
	                            }
	                        },
	                        {
	                            "question": "sorting",
	                            "answer": {
	                                "male": 0,
	                                "female": 0,
	                                "children": 1
	                            }
	                        },
	                        {
	                            "question": "storage",
	                            "answer": {
	                                "male": 0,
	                                "female": 0,
	                                "children": 1
	                            }
	                        },
	                        {
	                            "question": "selling",
	                            "answer": {
	                                "male": 0,
	                                "female": 0,
	                                "children": 1
	                            }
	                        }
	                    ]
	                },
	                "3.2": {
	                    "tags": [
	                        "value chain",
	                        "decision making"
	                    ],
	                    "question": "Who makes decisions on what to do with harvested crops",
	                    "options": {
	                        "1": "male",
	                        "2": "female"
	                    },
	                    "answer": null,
	                    "other_option": null,
	                    "ui_type": "radio",
	                    "table": null
	                }
	            }
	        },
	        "4": {
	            "introduction": null,
	            "name": "HARVESTING AND DRYING OF MAIZE ",
	            "question": {
	                "4.1": {
	                    "tags": [
	                        "harvesting",
	                        "preparations"
	                    ],
	                    "question": "What preparations do you make when planning to harvest your produce? ",
	                    "options": null,
	                    "answer": null,
	                    "other_option": null,
	                    "ui_type": "text",
	                    "table": null
	                },
	                "4.2": {
	                    "tags": [
	                        "harvesting",
	                        "transport"
	                    ],
	                    "question": "How do you transport you produce from the field?",
	                    "options": {
	                        "1": "on head",
	                        "2": "on wheelbarrow",
	                        "3": "bicycle",
	                        "4": "motor cycle",
	                        "5": "vehicle"
	                    },
	                    "answer": 4,
	                    "other_option": null,
	                    "ui_type": "checkbox",
	                    "table": null
	                },
	                "4.3": {
	                    "tags": [
	                        "harvesting",
	                        "drying"
	                    ],
	                    "question": "Which methods do you use to dry your maize?",
	                    "options": {
	                        "1": "On bear ground",
	                        "2": "On Tarpaulin",
	                        "3": "On the mat",
	                        "4": "On concrete /cement",
	                        "5": "On the wire rack",
	                        "6": "Wooden drying rack"
	                    },
	                    "answer": 4,
	                    "other_option": null,
	                    "ui_type": "checkbox",
	                    "table": null
	                },
	                "4.4": {
	                    "tags": [
	                        "harvesting",
	                        "place"
	                    ],
	                    "question": "Where do  you place your produce when harvesting?",
	                    "options": {
	                        "1": "on bear ground",
	                        "2": "Tarpaulin ",
	                        "3": "On the mat",
	                        "4": "In the bag "
	                    },
	                    "answer": 4,
	                    "other_option": null,
	                    "ui_type": "checkbox",
	                    "table": null
	                },
	                "4.5": {
	                    "tags": [
	                        "harvesting",
	                        "separation"
	                    ],
	                    "question": "How do you separate or remove the maize grain from the cob",
	                    "options": {
	                        "1": "Use of hands",
	                        "2": "Beating ",
	                        "3": "Maize threshing machine",
	                        "4": "Small hand machine",
	                        "5": "Other(specify)"
	                    },
	                    "answer": 4,
	                    "other_option": null,
	                    "ui_type": "checkbox",
	                    "table": null
	                }
	            }
	        },
	        "5": {
	            "introduction": null,
	            "name": "HOUSEHOLD INCOME & DEBT",
	            "question": {
	                "5.1": {
	                    "tags": [
	                        "household income",
	                        "earning"
	                    ],
	                    "question": "How many household members earn an income?",
	                    "options": null,
	                    "answer": null,
	                    "other_option": null,
	                    "ui_type": "table",
	                    "table": [
	                        {
	                            "question": "currently",
	                            "answer": 2
	                        },
	                        {
	                            "question": "6 months ago",
	                            "answer": 4
	                        }
	                    ]
	                },
	                "5.2": {
	                    "tags": [
	                        "household income",
	                        "activities"
	                    ],
	                    "question": "What are your household’s main income generation activities in the past 30 days? <br>\n(Rank up to 3 income activities)  (use activity codes)",
	                    "options": {
	                        "1": "Food crop production/sales",
	                        "2": "Cash crop production/sale (e.g. coffee",
	                        "3": "Sale of animals or animal products",
	                        "4": "Livestock production (Animal Husbandry)",
	                        "5": "Agricultural wage labor",
	                        "6": "Non-agricultural wage labor",
	                        "7": "Small business/self-employed",
	                        "8": "Petty trade (firewood sales, etc.)",
	                        "9": "Pension, allowances",
	                        "10": "Salary/wages",
	                        "11": "Fishing",
	                        "12": "Handicrafts",
	                        "13": "Gifts/begging",
	                        "14": "Borrowing",
	                        "15": "Food assistance",
	                        "16": "Skilled Trade",
	                        "17": "Sale of food assistance",
	                        "18": "Government allowance",
	                        "19": "Remittances",
	                        "20": "Boda-boda riding",
	                        "21": "Other"
	                    },
	                    "answer": null,
	                    "other_option": null,
	                    "ui_type": "table",
	                    "table": [
	                        {
	                            "question": "main",
	                            "answer": 2
	                        },
	                        {
	                            "question": "second",
	                            "answer": 4
	                        },
	                        {
	                            "question": "third",
	                            "answer": 4
	                        }
	                    ]
	                },
	                "5.3a": {
	                        "tags": [
	                            "household income",
	                            "non crop income"
	                        ],
	                        "question": "What is the approximate amount of total non crop income for this household for the last month? UGX",
	                        "options": null,
	                        "answer": 3000,
	                        "other_option": null,
	                        "ui_type": "text",
	                        "table": null
	                },
	                "5.3b": {
	                        "tags": [
	                            "household income",
	                            "crop income"
	                        ],
	                        "question": "What is the approximate amount of total crop income for this household for the last season? UGX",
	                        "options": null,
	                        "answer": 3000,
	                        "other_option": null,
	                        "ui_type": "text",
	                        "table": null
	                },
	                "5.4": {
	                    "tags": [
	                        "household income",
	                        "debt"
	                    ],
	                    "question": "Do you have any debt or credit to repay at the moment?",
	                    "options": {
	                        "0": "no",
	                        "1": "yes"
	                    },
	                    "answer": 1,
	                    "other_option": null,
	                    "ui_type": "radio",
	                    "table": null
	                },
	                "5.5": {
	                    "tags": [
	                        "household income",
	                        "debt reason"
	                    ],
	                    "question": "What was the main reason for new debts or credit?",
	                    "options": {
	                        "1": "To buy food",
	                        "2": "To cover health expenses",
	                        "3": "To pay school education costs",
	                        "4": "To buy agricultural inputs (seed, tools...)",
	                        "5": "To buy animal feed, fodder, veterinary",
	                        "6": "To buy or rent animals"
	                    },
	                    "answer": 1,
	                    "other_option": null,
	                    "ui_type": "radio",
	                    "table": null
	                },
	                "5.6": {
	                    "tags": [
	                        "household income",
	                        "total debt"
	                    ],
	                    "question": "What is the approximate amount of your total debt at the moment, in UGX",
	                    "options": null,
	                    "answer": 10000,
	                    "other_option": null,
	                    "ui_type": "text",
	                    "table": null
	                }
	            }
	        },
	        "6": {
	            "introduction": "Read:I would now like to ask you a few questions about food consumption in your household",
	            "name": "FOOD SOURCES AND CONSUMPTION",
	            "question": {
	                "6.0": {
	                    "tags": [
	                        "food sources",
	                        "consumption"
	                    ],
	                    "question": "Could you please tell me how many days in the past one week (seven days) your household has eaten the following foods  <br>\n(write 0 for items not eaten over the last 7 days) ASK LINE BY LINE FOR EACH ITEM ",
	                    "options": null,
	                    "answer": null,
	                    "other_option": null,
	                    "ui_type": "table",
	                    "table": [
	                        {
	                            "question": "Cereals and grain",
	                            "answer": {
	                                "number of days eaten in last 7days": 5
	                            }
	                        },
	                        {
	                            "question": "Roots and tubers",
	                            "answer": {
	                                "number of days eaten in last 7days": 5
	                            }
	                        },
	                        {
	                            "question": "Legumes/Nuts",
	                            "answer": {
	                                "number of days eaten in last 7days": 5
	                            }
	                        },
	                        {
	                            "question": "Vegetables (orange, green and others)",
	                            "answer": {
	                                "number of days eaten in last 7days": 5
	                            }
	                        },
	                        {
	                            "question": "Fruits",
	                            "answer": {
	                                "number of days eaten in last 7days": 5
	                            }
	                        },
	                        {
	                            "question": "Meat",
	                            "answer": {
	                                "number of days eaten in last 7days": 5
	                            }
	                        },
	                        {
	                            "question": "Fish / Shellfish",
	                            "answer": {
	                                "number of days eaten in last 7days": 5
	                            }
	                        },
	                        {
	                            "question": "Eggs",
	                            "answer": {
	                                "number of days eaten in last 7days": 5
	                            }
	                        },
	                        {
	                            "question": "Milk and other dairy products",
	                            "answer": {
	                                "number of days eaten in last 7days": 5
	                            }
	                        },
	                        {
	                            "question": "Oil / fat / butter",
	                            "answer": {
	                                "number of days eaten in last 7days": 5
	                            }
	                        },
	                        {
	                            "question": "Sugar, or sweet",
	                            "answer": {
	                                "number of days eaten in last 7days": 5
	                            }
	                        },
	                        {
	                            "question": "Condiments / Spices",
	                            "answer": {
	                                "number of days eaten in last 7days": 5
	                            }
	                        }
	                    ]
	                }
	            }
	        },
	        "7": {
	            "introduction": "Livelihood Coping Strategies Index:During the last 30 days, did anyone in your household have to engage in any of the following activities because there was not enough food or money to buy food",
	            "name": "COPING STRATEGY INDEX",
	            "question": {
	                "7.1": {
	                    "tags": [
	                        "food sources",
	                        "stress"
	                    ],
	                    "question": "Sold more animals (non-productive) than usual)",
	                    "options": {
	                        "1": "No, I did not face shortage of food",
	                        "2": "No, I already sold those assets or have engaged in this activity and cannot continue to do so",
	                        "3": "Yes",
	                        "4": "N/A"
	                    },
	                    "answer": 2,
	                    "other_option": null,
	                    "ui_type": "checkbox",
	                    "table": null
	                },
	                "7.2": {
	                    "tags": [
	                        "food sources",
	                        "stress"
	                    ],
	                    "question": "Sold more animals (non-productive) than usual",
	                    "options": {
	                        "1": "No, I did not face shortage of food",
	                        "2": "No, I already sold those assets or have engaged in this activity and cannot continue to do so",
	                        "3": "Yes",
	                        "4": "N/A"
	                    },
	                    "answer": 2,
	                    "other_option": null,
	                    "ui_type": "checkbox",
	                    "table": null
	                },
	                "7.3": {
	                    "tags": [
	                        "food sources",
	                        "stress"
	                    ],
	                    "question": "Spent savings",
	                    "options": {
	                        "1": "No, I did not face shortage of food",
	                        "2": "No, I already sold those assets or have engaged in this activity and cannot continue to do so",
	                        "3": "Yes",
	                        "4": "N/A"
	                    },
	                    "answer": 2,
	                    "other_option": null,
	                    "ui_type": "checkbox",
	                    "table": null
	                },
	                "7.4": {
	                    "tags": [
	                        "food sources",
	                        "stress"
	                    ],
	                    "question": "Borrowed money",
	                    "options": {
	                        "1": "No, I did not face shortage of food",
	                        "2": "No, I already sold those assets or have engaged in this activity and cannot continue to do so",
	                        "3": "Yes",
	                        "4": "N/A"
	                    },
	                    "answer": 2,
	                    "other_option": null,
	                    "ui_type": "checkbox",
	                    "table": null
	                },
	                "7.5": {
	                    "tags": [
	                        "food sources",
	                        "emergencies"
	                    ],
	                    "question": "Sold productive assets or means of transport (sewing machine, wheelbarrow, bicycle, car, goats, cows, etc..)",
	                    "options": {
	                        "1": "No, I did not face shortage of food",
	                        "2": "No, I already sold those assets or have engaged in this activity and cannot continue to do so",
	                        "3": "Yes",
	                        "4": "N/A"
	                    },
	                    "answer": 2,
	                    "other_option": null,
	                    "ui_type": "checkbox",
	                    "table": null
	                },
	                "7.6": {
	                    "tags": [
	                        "food sources",
	                        "emergencies"
	                    ],
	                    "question": "Reduced essential non-food expenditures such as education, health, etc…",
	                    "options": {
	                        "1": "No, I did not face shortage of food",
	                        "2": "No, I already sold those assets or have engaged in this activity and cannot continue to do so",
	                        "3": "Yes",
	                        "4": "N/A"
	                    },
	                    "answer": 2,
	                    "other_option": null,
	                    "ui_type": "checkbox",
	                    "table": null
	                },
	                "7.7": {
	                    "tags": [
	                        "food sources",
	                        "emergencies"
	                    ],
	                    "question": "Consume seed stock held for next season",
	                    "options": {
	                        "1": "No, I did not face shortage of food",
	                        "2": "No, I already sold those assets or have engaged in this activity and cannot continue to do so",
	                        "3": "Yes",
	                        "4": "N/A"
	                    },
	                    "answer": 2,
	                    "other_option": null,
	                    "ui_type": "checkbox",
	                    "table": null
	                },
	                "7.8": {
	                    "tags": [
	                        "food sources",
	                        "crisis"
	                    ],
	                    "question": "Sold house or land",
	                    "options": {
	                        "1": "No, I did not face shortage of food",
	                        "2": "No, I already sold those assets or have engaged in this activity and cannot continue to do so",
	                        "3": "Yes",
	                        "4": "N/A"
	                    },
	                    "answer": 2,
	                    "other_option": null,
	                    "ui_type": "checkbox",
	                    "table": null
	                },
	                "7.9": {
	                    "tags": [
	                        "food sources",
	                        "crisis"
	                    ],
	                    "question": "Illegal income activities (theft, smuggling, prostitution)",
	                    "options": {
	                        "1": "No, I did not face shortage of food",
	                        "2": "No, I already sold those assets or have engaged in this activity and cannot continue to do so",
	                        "3": "Yes",
	                        "4": "N/A"
	                    },
	                    "answer": 2,
	                    "other_option": null,
	                    "ui_type": "checkbox",
	                    "table": null
	                },
	                "7.10": {
	                    "tags": [
	                        "food sources",
	                        "consumption"
	                    ],
	                    "question": "Begged",
	                    "options": {
	                        "1": "No, I did not face shortage of food",
	                        "2": "No, I already sold those assets or have engaged in this activity and cannot continue to do so",
	                        "3": "Yes",
	                        "4": "N/A"
	                    },
	                    "answer": 2,
	                    "other_option": null,
	                    "ui_type": "checkbox",
	                    "table": null
	                }
	            }
	        },
	        "8": {
	            "introduction": null,
	            "name": null,
	            "question": {
	                "8.0": {
	                    "tags": [
	                        "comment",
	                        "comment"
	                    ],
	                    "question": "Do you have any, comment, suggestion, or recommendation about this survey?",
	                    "options": null,
	                    "answer": null,
	                    "other_option": null,
	                    "ui_type": "text",
	                    "table": null
	                }
	            }
	        }
	    }
	}'
	;


	$json_object=json_decode($jsn_string, true);

	return $json_object;

}