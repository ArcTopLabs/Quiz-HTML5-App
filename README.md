#Quiz App

The Quiz App is HTML5 based application, you can use to Create quiz. Based on only 2 html5 pages, with single javascript this is complete in itself. 
The Quiz are persistent in nature meaning your build quiz will be there the next time you open up the app. The app uses ArcTop Labs : MasterDataNode Data Solution
feature in order to store the voting data.

Quiz uses features described in original work @ https://github.com/UrbanInstitute/quick-quiz


## FEATURES ##

 - Use buildquiz.html to create quiz on MasterDataNode ecosystem.
 - index.html is used to take quiz.
 
## Storage Service ##
ArcTop Labs : MasterDataNode Data Solution
<p>Login to <a href="https://www.masterdatanode.com"> www.masterdatanode.com </a> to get : Access_Token , its Free</p>
<p>Create an App after login, copy and paste App Name in arctoplabs.js file appName variable</p>
<p>Copy and Replace the access_token (available in your login) in arctoplabs.js file access_token variable</p>
            


## Usage

Quiz uses Quiz.js library for quiz to work on should create Json in following format.

```javascript
{
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
```

Replace the json created above to 'quiz : value' section of json for creating quiz storage in #MasterDataNode, once can use buildquiz.html to create quiz with ease.  
```
{"Data": [{
                    name: "science",
                    quiz: #### value ####

          }]
}
```



# Orignial work :
https://github.com/UrbanInstitute/quick-quiz

![alt text](https://github.com/ArcTopLabs/Survey-App/blob/master/screenshot/Survey%20App%20using%20MasterDataNode%2C%20jQuery%2C%20SurveyJS%20Library%20Example.png)
![alt text](https://github.com/ArcTopLabs/Survey-App/blob/master/screenshot/Survey%20Result.png