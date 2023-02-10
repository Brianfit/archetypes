var majorArcana = "PrimalOoze";
var minorArcana = "Angel";
var strength = "You have excellent hair, and make good decisions about most matters in life with the exception of ice cream flavors. The only correct favorite is coffee."
var shadow = "In your haste to become large, you must be careful not to descend to a state of small"
var example ="Steven Colbert's AmeriCone Dream"
var finalAnswer= ""


function sendDataToServer(survey) {
    //send Ajax request to your web server
//     alert("The results are: " + JSON.stringify(survey.data));

// console.log(JSON.stringify(survey.data))
    var MyVerb = JSON.stringify(survey.data);
    let values = Object.values(survey.data);
    finalAnswer = values[values.length - 1][0];
    drawPage();
   $(document).ready(identifyQuestion(MyVerb));
    console.log('heading over to id question now');
//     setArchetypeMajorArcana(MyType);


}

function reportResult(result){
$("#MajorArcanaImage").html('<img src="images/'+majorArcana+'.png" class="img-fluid"><br/>');
$("#MinorArcanaImage").html('<img src="images/'+minorArcana+'.png" class="img-fluid"><br/>');
$("#Arcana").html('<h3> <span style="color:grey">Major Arcana:</span> '+majorArcana+'&nbsp; <span style="color:grey">Minor Arcana:</span> '+minorArcana+'</h3>');
$("#Strength").html('<p> <span style="color:grey">Strength: </span>'+strength+'</p>');
$("#Shadow").html('<p> <span style="color:grey">Shadow: </span>'+shadow+'</p>');
$("#Example").html('<p> <span style="color:grey">Example: </span>'+example+'</p>');
}



function drawPage() {
var answer = document.getElementById("answerContainer");
answer.style.display = "block";
      }

function setArchetypeMajorArcana(MyType){
alert(MyType);
}



function identifyQuestion(MyVerb){
console.log('arrived ID');
console.log('MyVerb'+MyVerb);
if(MyVerb.indexOf('CaregiverQ') > 0){
majorArcana = 'Caregiver';
// reportResult(JSON.stringify(survey.data.CareqiverQ[0]));
setArchetypeMinorArcana(finalAnswer);
console.log('defined caregiver');	
}
if(MyVerb.indexOf('SageQ') > 0){
majorArcana = 'Sage';
reportResult(JSON.stringify(survey.data.SageQ[0]));
}
if(MyVerb.indexOf('HeroQ') > 0){
majorArcana = 'Hero';
reportResult(JSON.stringify(survey.data.HeroQ[0]));
}
if(MyVerb.indexOf('RebelQ') > 0){
majorArcana = 'Rebel';
reportResult(JSON.stringify(survey.data.RebelQ[0]));
}
if(MyVerb.indexOf('ConnectorQ') > 0){
majorArcana = 'Connector';
reportResult(JSON.stringify(survey.data.ConnectorQ[0]));
}
if(MyVerb.indexOf('GathererQ') > 0){
majorArcana = 'Gatherer';
reportResult(JSON.stringify(survey.data.GathererQ[0]));
}
if(MyVerb.indexOf('RulerQ') > 0){
majorArcana = 'Ruler';
reportResult(JSON.stringify(survey.data.RulerQ[0]));
}
if(MyVerb.indexOf('NurturerQ') > 0){
majorArcana = 'Nurturer';
reportResult(JSON.stringify(survey.data.NurturerQ[0]));
}
if(MyVerb.indexOf('CitizenQ') > 0){
majorArcana = 'Citizen';
reportResult(JSON.stringify(survey.data.CitizenQ[0]));
}
if(MyVerb.indexOf('CreatorQ') > 0){
majorArcana = 'Creator';
reportResult(JSON.stringify(survey.data.CreatorQ[0]));
console.log('yup');
}
if(MyVerb.indexOf('ExplorerQ') > 0){
majorArcana = 'Explorer';
reportResult(JSON.stringify(survey.data.ExplorerQ[0]));
}
if(MyVerb.indexOf('IdealistQ') > 0){
majorArcana = 'Idealist';
reportResult(JSON.stringify(survey.data.IdealistQ[0]));
}
if(MyVerb.indexOf('JusticeQ') > 0){
majorArcana = 'Justice';
reportResult(JSON.stringify(survey.data.JusticeQ[0]));
}
if(MyVerb.indexOf('JesterQ') > 0){
majorArcana = 'Jester';
reportResult(JSON.stringify(survey.data.JesterQ[0]));
}
if(MyVerb.indexOf('LoverQ') > 0){
majorArcana = 'Lover';
reportResult(JSON.stringify(survey.data.LoverQ[0]));
}
if(MyVerb.indexOf('MagicianQ') > 0){
majorArcana = 'Magician';
reportResult(JSON.stringify(survey.data.MagicianQ[0]));
}
if(MyVerb.indexOf('SageQ') > 0){
majorArcana = 'Sage';
reportResult(JSON.stringify(survey.data.SageQ[0]));
}
console.log('Exit from IF Stack');
// location.reload();
}



function setArchetypeMinorArcana(finalAnswerHandover){
console.log('setArchetypeMinorArcana arrived'+finalAnswerHandover);
switch (finalAnswerHandover) {
  case "To nurture others.":
    minorArcana = "Caregiver";
    break;
  case "To bring care and compassion from a higher spiritual plane.":
    minorArcana = "Angel";
    break;
  case "To safeguard collective resources, values and traditions for future generations.":
    minorArcana = "Guardian";
    break;
  case "To bring wellness and wholeness where there was sickness.":
    minorArcana = "Healer";
    break;
  case "To turn compassion into action.":
    minorArcana = "Samaritan";
    break;
  default:
    minorArcana = "Hero";
    break;  
}
reportResult();
}


