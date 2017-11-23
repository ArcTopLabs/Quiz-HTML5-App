/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var appName = "demo";
var url = 'https://api.masterdatanode.com/' + appName + '/quiz/';
var access_token = '######access_token###########';  //'######access_token###########'
var content_type = 'application/json';
var html5quiz = {};
html5quiz.voteResult = function (filter) {
    $('#quiz').empty();
    var SendInfo = {
        "filter":
                {
                    "name": filter
                }

    };
    $.ajax({
        url: url + 'find',
        type: 'post',
//                        data: {},
        data: JSON.stringify(SendInfo),
        headers: {
            "access_token": access_token,
            "Content-Type": content_type
        },
        dataType: 'json',
        success: function (data) {
            var count = 0;
            console.info(JSON.stringify(data));
            //$("#test_div").html(JSON.stringify(data));
//            $("#test_div").show();
//            alert(data.result);
//            var obj = JSON.parse(JSON.stringify(data));
//            
//            var result = $.parseJSON(JSON.stringify(obj.result));
            console.info(JSON.stringify(data.result));

            var quiz, name;

            $.each(data.result, function (k, jsonObject) {
                quiz = jsonObject.quiz;
                name = jsonObject.name;
//                count++;

            });

            console.info(JSON.stringify(quiz));
            $('#quiz').quiz(quiz);

            $(".btn-primary").addClass('disabled');
            $(".btn-warning").removeClass('disabled');
            /* for(var i = 0; i < obj.result.length; i++) {
             var obj1 = data[i];
             
             console.log(obj1.id);
             } */
            //var mytable =  $('#example').DataTable();
//            var result = $.parseJSON(JSON.stringify(obj.result));
//            console.info(JSON.stringify(obj.result));

        }

    });
};

html5quiz.vote = function (SendInfo) {

    ////alert(JSON.stringify(SendInfo)); 

    $.ajax({
        url: url + 'save',
        type: 'post',
        data: JSON.stringify(SendInfo),
        headers: {
            "access_token": access_token,
            "Content-Type": content_type,
            "origin": 'app'
        },
        dataType: 'json',
        success: function (data) {
//            $("#test_div").show();
            var result = $.parseJSON(JSON.stringify(data));
            console.info(JSON.stringify(result));
//            $("#test_div").html(JSON.stringify(result.description));
            html5quiz.showMessage('#9BED87', 'black', 'Quiz added successfully.');
        },
        error: function (xhr, thrownError) {
            console.info("readyState: " + xhr.readyState + "\nstatus: " + xhr.status + "\nresponseText: " + xhr.responseText);
//            html5quiz.showMessage('#9BED87', 'black', 'Quiz added successfully.');
//            alert(thrownError);
        }
    });
};

html5quiz.showMessage = function (bgcolor, color, msg) {
    if (!$('#smsg').is(':visible'))
    {
        $('html, body').animate({
            scrollTop: 0
        }, 500, function () {
            if (!$('#smsg').length)
            {
                $('<div id="smsg">' + msg + '</div>').appendTo($('body')).css({
                    position: 'absolute',
                    top: 0,
                    left: 3,
                    width: '98%',
                    height: '50px',
                    lineHeight: '30px',
                    background: bgcolor,
                    color: color,
                    zIndex: 1000,
                    padding: '10px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    opacity: 0.9,
                    margin: 'auto',
                    display: 'none'
                }).slideDown('show');
                setTimeout(function () {
                    $('#smsg').animate({'width': 'hide'}, function () {
                        $('#smsg').remove();
                    });
                }, 4000);
                $(".btn-primary").addClass('disabled');
                $(".btn-warning").removeClass('disabled');
            }
        });
    }
};


html5quiz.voteAgain = function () {
    $(".btn-warning").addClass('disabled');
    $(".btn-primary").removeClass('disabled');

};


// jQuery Play
$(function () {

// initial setup
    $('#quiz1').click(function () {
//        alert("hello");
        var SendInfo = {"Data": [{
                    name: "general",
                    quiz: {
                        "questions": [
                            {
                                "answers": [
                                    "True",
                                    "False"
                                ],
                                "correct": {
                                    "index": 0,
                                    "text": "New Delhi is capital of India"
                                },
                                "number": 1,
                                "prompt": "New Delhi is capital of India ?"
                            },
                            {
                                "answers": [
                                    "True",
                                    "False"
                                ],
                                "correct": {
                                    "index": 1,
                                    "text": "Washington DC is the capital of United States"
                                },
                                "number": 2,
                                "prompt": "Chicago is the capital of United States ?"
                            },
                            {
                                "answers": [
                                    "New York",
                                    "Paris",
                                    "Madrid",
                                    "London"
                                ],
                                "correct": {
                                    "index": 3,
                                    "text": "London is the capital of Great Britain"
                                },
                                "number": 3,
                                "prompt": "Capital of Great Britain is ?"
                            }
                        ],
                        "title": "General quiz",
                        "url": "https://github.com/ArcTopLabs"
                    }
                }
            ]};
        html5quiz.vote(SendInfo);
        return false;
    });
    $('#quiz2').click(function () {
//        alert("hello");
        var SendInfo = {"Data": [{
                    name: "maths",
                    quiz: {
                        "questions": [
                            {
                                "answers": [
                                    "True",
                                    "False"
                                ],
                                "correct": {
                                    "index": 1,
                                    "text": "1 + 1 = 2"
                                },
                                "number": 1,
                                "prompt": "1 + 1 = 4 ?"
                            },
                            {
                                "answers": [
                                    "True",
                                    "False"
                                ],
                                "correct": {
                                    "index": 0,
                                    "text": "1 X 1 = 1"
                                },
                                "number": 2,
                                "prompt": "1 X 1 = 1 ?"
                            },
                            {
                                "answers": [
                                    "2",
                                    "4",
                                    "5",
                                    "8"
                                ],
                                "correct": {
                                    "index": 3,
                                    "text": "4 X 2 = 8"
                                },
                                "number": 3,
                                "prompt": "4 X 2 =  ?"
                            }
                        ],
                        "title": "Mathematics quiz",
                        "url": "https://github.com/ArcTopLabs"
                    }
                }
            ]};
        html5quiz.vote(SendInfo);
        return false;
    });
    $('#quiz3').click(function () {
//        alert("hello");
        var SendInfo = {"Data": [{
                    name: "science",
                    quiz: {
                        "questions": [
                            {
                                "answers": [
                                    "Graphite",
                                    "Silicon",
                                    "Charcoal",
                                    "Phosphorous"
                                ],
                                "correct": {
                                    "index": 0,
                                    "text": "Graphite is used in pencils"
                                },
                                "number": 1,
                                "prompt": "Which of the following is used in pencils?"
                            },
                            {
                                "answers": [
                                    "Oxygen",
                                    "Hydrogen sulphide",
                                    "Carbon dioxide",
                                    "Nitrogen"
                                ],
                                "correct": {
                                    "index": 1,
                                    "text": "Brass gets discoloured in air because of the presence Hydrogen sulphide"
                                },
                                "number": 2,
                                "prompt": "Brass gets discoloured in air because of the presence of which of the following gases in air?"
                            },
                            {
                                "answers": [
                                    "hydrogen",
                                    "carbon dioxide",
                                    "oxygen",
                                    "nitrogen"
                                ],
                                "correct": {
                                    "index": 3,
                                    "text": "The gas usually filled in the electric bulb is Nitrogen"
                                },
                                "number": 3,
                                "prompt": "The gas usually filled in the electric bulb is ?"
                            }
                        ],
                        "title": "Science quiz",
                        "url": "https://github.com/ArcTopLabs"
                    }
                }
            ]};
        html5quiz.vote(SendInfo);
        return false;
    });
    $('#general').click(function () {
        html5quiz.voteResult("general");
        return false;
    });
    $('#maths').click(function () {
        html5quiz.voteResult("maths");
        return false;
    });
    $('#science').click(function () {
        html5quiz.voteResult("science");
        return false;
    });

});

