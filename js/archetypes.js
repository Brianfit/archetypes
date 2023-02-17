var majorArcana = "PrimalOoze";
var minorArcana = "Angel";
var strength = "You have excellent hair, and make good decisions about most matters in life with the exception of ice cream flavors. The only correct favorite is coffee."
var shadow = "In your haste to become large, you must be careful not to descend to a state of small";
var gift = "To make unruly royal pretenders bring them a shrubbery";
var mstrength = "Major Arcana Strength";
var mshadow ="Major Arcana Shadow";
var mgift = "Major Gift Shadow";
var example ="Steven Colbert's AmeriCone Dream"
var finalAnswer= ""


function sendDataToServer(survey) {
    //send Ajax request to your web server
//     alert("The results are: " + JSON.stringify(survey.data));

// console.log(JSON.stringify(survey.data))
    var MyVerb = JSON.stringify(survey.data);
    let values = Object.values(survey.data);
    finalAnswer = values[values.length - 1][0];
    if (finalAnswer.indexOf('tem1') > 0){
		console.log("it's a trap!")
     	finalAnswer = values[values.length - 1][1];
     	console.log("new answer: "+finalAnswer);
     }
    drawPage();
   $(document).ready(identifyQuestion(MyVerb));
}

function reportResult(result){
$("#MajorArcanaImage").html('<img src="images/f-'+majorArcana+'.png" class="img-fluid"><br/>');
$("#MinorArcanaImage").html('<img src="images/f-'+minorArcana+'.png" class="img-fluid"><br/>');
$("#Arcana").html('<h3> <span style="color:grey">Major Arcana:</span> '+majorArcana+'&nbsp; <span style="color:grey">Minor Arcana:</span> '+minorArcana+'</h3>');
$("#Strength").html('<p> <span style="color:grey">Strength: </span>'+strength+'</p>');
$("#Shadow").html('<p> <span style="color:grey">Shadow: </span>'+shadow+'</p>');
$("#Gift").html('<p> <span style="color:grey">Example: </span>'+gift+'</p>');
$("#Example").html('<p> <span style="color:grey">Example: </span>'+example+'</p>');
$("#MStrength").html('<p> <span style="color:grey">Strength: </span>'+mstrength+'</p>');
$("#MShadow").html('<p> <span style="color:grey">Shadow: </span>'+mshadow+'</p>');
$("#MGift").html('<p> <span style="color:grey">Example: </span>'+mgift+'</p>');
$("#MExample").html('<p> <span style="color:grey">Example: </span>'+example+'</p>');
}



function drawPage() {
var answer = document.getElementById("answerContainer");
answer.style.display = "block";
      }


function identifyQuestion(MyVerb){
console.log('arrived ID');
console.log('MyVerb'+MyVerb);
if(MyVerb.indexOf('CaregiverQ') > 0){
majorArcana = 'Caregiver';
}
if(MyVerb.indexOf('SageQ') > 0){
majorArcana = 'Sage';}
if(MyVerb.indexOf('HeroQ') > 0){
majorArcana = 'Hero';}
if(MyVerb.indexOf('RebelQ') > 0){
majorArcana = 'Rebel';}
if(MyVerb.indexOf('ConnectorQ') > 0){
majorArcana = 'Connector';}
if(MyVerb.indexOf('GathererQ') > 0){
majorArcana = 'Gatherer';}
if(MyVerb.indexOf('RulerQ') > 0){
majorArcana = 'Ruler';}
if(MyVerb.indexOf('NurturerQ') > 0){
majorArcana = 'Nurturer';}
if(MyVerb.indexOf('CitizenQ') > 0){
majorArcana = 'Citizen';}
if(MyVerb.indexOf('CreatorQ') > 0){
majorArcana = 'Creator';}
if(MyVerb.indexOf('ExplorerQ') > 0){
majorArcana = 'Explorer';}
if(MyVerb.indexOf('IdealistQ') > 0){
majorArcana = 'Idealist';}
if(MyVerb.indexOf('JusticeQ') > 0){
majorArcana = 'Justice';}
if(MyVerb.indexOf('JesterQ') > 0){
majorArcana = 'Jester';}
if(MyVerb.indexOf('LoverQ') > 0){
majorArcana = 'Lover';}
if(MyVerb.indexOf('MagicianQ') > 0){
majorArcana = 'Magician';}
if(MyVerb.indexOf('SageQ') > 0){
majorArcana = 'Sage';}
console.log('Exit from IF Stack');
// lets go determine the Minor Arcana from the final survey answer and define the property values
assignAttributes(majorArcana);
mstrength = strength;
mshadow = shadow;
mgift = gift;
setArchetypeMinorArcana(finalAnswer);
}


function setArchetypeMinorArcana(finalAnswerHandover){
console.log("FAH: "+finalAnswerHandover);
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
  case "To be a responsible member of their community.":
  	 minorArcana = "Citizen";
  	 break;
  case "To champion the rights of others and social change.":
    minorArcana = "Advocate";
    break;
  case "To connect the dots in powerful ways.":
    minorArcana = "Networker";
    break;
  case "To dedicate their efforts to the good of others.":
    minorArcana = "Servant";
    break;
  case "To humbly ensure that all are treated equally.":
    minorArcana = "Every(wo)man";
    break;
  case "To tell the truth in a powerful, compelling way.":
    minorArcana = "Storyteller";
    break;
  case "To make social change so beautiful none can resist.":
    minorArcana = "Artivist";
    break;
  case "To harness the power of creativity for world-changing.": 
    minorArcana = "Entrepreneur";
    break;
  case "To use every form of human expression and knowledge for the betterment of humanity.":
    minorArcana = "Generalist";
    break;
  case "To go where nobody has gone before.":
    minorArcana = "Pioneer";        
    break;
  case "To help people imagine a more beautiful future.":
    minorArcana = "Visionary";
    break;
  case "To embrace the wild and the daring.":
    minorArcana = "Adventurer";
    break;
  case "To leave no stone unturned in the quest for answers.":
    minorArcana = "Seeker";
    break;         
  case "To use art to create a revolution we can dance to":
    minorArcana = "Siren";
    break;
  case "To call others to follow in the teachings of one great leader.":
    minorArcana = "Disciple";
    break;  
  case "To turn a group passion into purpose":
    minorArcana = "Pied-Piper"
    break;
  case "To unchain the oppressed.":
    minorArcana = "Liberator";
    break;
  case "To battle the forces holding back a more beautiful world.":
    minorArcana = "Warrior";
    break;
  case "To save those in immediate danger.":
    minorArcana = "Rescuer";
    break;
  case "To catalyze conflict and throw a spotlight on injustice.":
    minorArcana = "Provocateur";
    break;
  case "To make ideas that serve a more beautiful future the norm.":
    minorArcana = "Idealist";
    break;
  case "To inspire.":
    minorArcana = "Muse";
    break;
  case "To dare the world to believe another world is possible.":
    minorArcana = "Dreamer";
    break;                
  case "To speak with the truth that comes from the mouths of babes.":
    minorArcana = "Child";
    break;  
  case "To push an idea into the world":
    minorArcana = "Evangelist";
    break;
  case "To belittle evil and shortsightedness with mockery and satire":
    minorArcana = "Jester";
    break;
  case "To harness the power of fun for good.":
    minorArcana = "Clown";
    break;
  case "To transform attention into action.":
    minorArcana = "Entertainer";
    break;    
  case "To fluidly change roles as circumstance require.":
    minorArcana = "Shape-shifter";
    break;
  case "To create powerful meaningful life-transforming alliances": 
    minorArcana = "Matchmaker";
    break;
  case "To provide a shoulder to lean on":
    minorArcana = "Companion";
    break;
  case "To speak to the heart.":
    minorArcana = "Lover";
    break;
  case "To manifest ideas into reality.":
    minorArcana = "Magician";
    break;
  case "To provide a bridge between the material world and the world of possibilities.":
    minorArcana = "Shaman";
    break;
  case "To transform base metal into gold.":
    minorArcana = "Alchemist";
    break;
  case "To design our way out of crisis.":
    minorArcana = "Engineer";
    break;
  case "To demonstrate a better world is possible by creating examples":          
    minorArcana = "Innovator";
    break;
  case "To overthrow the status quo":
    minorArcana = "Rebel";
    break;
  case "To challenge the very structure of the status quo":
    minorArcana = "Anarchist";
    break;
  case "To gather the forces of communal action toward communal good.":
    minorArcana = "Communalist";
    break;
  case "To take great risk for great good.":
    minorArcana = "Gambler";
    break;
  case "To disrupt, shake up, and defy convention":
    minorArcana = "Maverick";
    break;
  case "To use slow and steady pressure to bring gradual incremental change.":
    minorArcana = "Reformer";
    break;
  case "To meet socially approved destrcution with unsanctioned destruction.":
    minorArcana = "Destroyer";
    break;
  case "To expose dark secrets to the light of truth.":
    minorArcana = "Whistleblower";
    break;
  case "To bring order to society with divine power.":
    minorArcana = "Sovereign";
    break;
  case "To bring order to society with law.":
    minorArcana = "Judge";
    break;
  case "To open channels of dialogue.":
    minorArcana = "Ambassador";
    break;
  case "To bring order to society with compassion.":
    minorArcana = "Matriarch";
    break;
  case "To bring order to society with authority.":
    minorArcana = "Ruler";
    break;
  case "To explain the complex or foreign of misunderstood":
    minorArcana = "Translator";
    break;
  case "To bring order to society with science.":
    minorArcana = "Scientist";
    break;
  case "To bring order to society with wisdom.":
    minorArcana = "Sage";
    break;
  case "To teach.":
    minorArcana = "Mentor";
    break;
  case "To preserve secret knowledge.":
    minorArcana = "Gnostic";
    break;
  case "To dig up the hidden.":
    minorArcana = "Detective";
    break;
                                     
//   default:
//     alert('Whoops. Houston advises reloading the page and trying again');
//     break;  
}
assignAttributes(minorArcana);
reportResult();
}

var assignAttributes = function(archetype) {
switch (archetype) {
case archetype ="Caregiver":
	strength = "Compassionate, nurturing, and empathetic.";
	shadow = "Overly self-sacrificing and neglecting own needs, controlling, or manipulative.";
	gift = "To care for others with genuine love and create a nurturing and supportive environment.";
break;
case archetype ="Angel":
	strength = "Pure, kind, and selfless.";
	shadow = "Naive, overly trusting, and too passive.";
	gift = "To bring peace, harmony, and inspire goodness in others.";
break;
case archetype ="Guardian":
	strength = "Protective, responsible, and reliable.";
	shadow = "Overprotective, rigid, and controlling.";
	gift = "To ensure safety and security for oneself and others.";
break;
case archetype ="Healer":
	strength = "Compassionate, insightful, and empathetic.";
	shadow = "Overly involved or detached, and struggling to set boundaries.";
	gift = "To help others find healing and wholeness, and bring light to the darkest situations.";
break;
case archetype ="Samaritan":
	strength = "Helpful, empathetic, and altruistic.";
	shadow = "Overly self-righteous, enabling, and expecting gratitude.";
	gift = "To assist those in need without judgment or expectation of anything in return.";
break;
case archetype ="Citizen":
	strength = "Civic-minded, law-abiding, and cooperative.";
	shadow = "Conformity, apathy, and inaction in the face of social injustice.";
	gift = "To work for the common good, create community, and promote justice.";
break;
case archetype ="Advocate":
	strength = "Passionate, dedicated, and outspoken.";
	shadow = "Overly confrontational, judgmental, or angry.";
	gift = "To champion a cause or speak up for those who cannot speak for themselves.";
break;
case archetype ="Networker":
	strength = "Socially skilled, communicative, and able to connect people.";
	shadow = "Manipulative, self-promoting, and shallow.";
	gift = "To build relationships and create a sense of community, and help people connect with each other.";
break;
case archetype ="Servant":
	strength = "Humble, hardworking, and dedicated to serving others.";
	shadow = "Overly submissive, failing to set boundaries, and neglecting personal needs.";
	gift = "To serve others with humility and joy, and uplift and empower those around them.";
break;
case archetype ="Every(wo)man":
	strength = "Down-to-earth, authentic, and relatable.";
	shadow = "Lack of identity, conforming to others, and failing to stand out.";
	gift = "To be a voice for the average person and represent the human experience.";
break;
case archetype ="Storyteller":
	strength = "Creative, imaginative, and able to inspire through storytelling.";
	shadow = "Fabricating stories or living in their own fantasies.";
	gift = "To bring people together through the power of storytelling, and inspire, educate, or entertain with their tales.";
break;
case archetype ="Artivist":
	strength = "Creative, passionate, and committed to social justice.";
	shadow = "Allowing activism to override creativity, or pursuing activism in a shallow or performative way.";
	gift = "To use their art to bring attention to important issues and inspire social change.";
break;
case archetype ="Entrepreneur":
	strength = "Innovative, ambitious, and driven.";
	shadow = "Focusing on profit at the expense of ethical or moral considerations, or obsessively pursuing success.";
	gift = "To create new opportunities, businesses, or products, and bring value to others through their ideas.";
break;
case archetype ="Generalist":
	strength = "Well-rounded, knowledgeable, and adaptable.";
	shadow = "Lack of depth or specialization in any one area, or indecisiveness.";
	gift = "To bring diverse skills and knowledge to any situation, and adapt to changing circumstances with ease.";
break;
case archetype ="Pioneer":
	strength = "courage, resilience, adaptability, leadership";
	shadow = "impulsivity, recklessness, arrogance, disregard for tradition";
	gift = "ability to innovate, create new paths, inspire others";
break;
case archetype ="Visionary":
	strength = "foresight, imagination, insight, intuition";
	shadow = "detachment, impracticality, over-idealization";
	gift = "ability to see possibilities, envision a better future, inspire others to join a cause";
break;
case archetype ="Adventurer":
	strength = "bravery, resourcefulness, curiosity, self-reliance";
	shadow = "restlessness, irresponsibility, addiction to risk";
	gift = "ability to explore, seek new experiences, inspire others to take risks and push boundaries";
break;
case archetype ="Seeker":
	strength = "openness, curiosity, introspection, empathy";
	shadow = "aimlessness, indecisiveness, avoidance of commitment";
	gift = "ability to explore inner and outer worlds, seek meaning, inspire others to pursue self-knowledge";
break;
case archetype ="Siren":
	strength = "charm, magnetism, creativity, sensuality";
	shadow = "manipulation, vanity, addiction to attention";
	gift = "ability to inspire desire, pleasure, and artistic expression in others, enhance the beauty of the world";
break;
case archetype ="Disciple":
	strength = "loyalty, devotion, discipline, humility";
	shadow = "blind obedience, narrow-mindedness, dependency";
	gift = "ability to learn from a master, develop a craft or skill, uphold a tradition or philosophy";
break;
case archetype ="PiedPiper":
	strength = "charisma, playfulness, musicality";
	shadow = "immaturity, irresponsibility, disregard for consequences";
	gift = "ability to lead a group, entertain and educate through storytelling, inspire joy and creativity";
break;
case archetype ="Liberator":
	strength = "courage, justice, compassion, resistance to oppression";
	shadow = "extremism, fanaticism, disregard for laws and authority";
	gift = "ability to fight for freedom, challenge the status quo, inspire others to stand up for their rights";
break;
case archetype ="Warrior":
	strength = "strength, courage, honor, self-discipline";
	shadow = "aggression, violence, rigidity, addiction to conflict";
	gift = "ability to protect, defend, and fight for a cause, inspire others to act bravely";
break;
case archetype ="Rescuer":
	strength = "compassion, empathy, selflessness, courage";
	shadow = "co-dependency, martyrdom, over-identification with victims";
	gift = "ability to save, heal, and uplift others, inspire compassion and altruism";
break;
case archetype ="Idealist":
	strength = "optimism, hope, altruism, vision";
	shadow = "naivety, dogmatism, impracticality";
	gift = "ability to envision a better world, inspire social change, motivate others to pursue a higher purpose";
break;
case archetype ="Muse":
	strength = "inspiration, creativity, beauty, grace";
	shadow = "vanity, fickleness, addiction to admiration";
	gift = "ability to inspire art, music, and poetry, enhance the beauty of the world, evoke emotions and imagination";
break;
case archetype ="Dreamer":
	strength = "imagination, intuition, creativity, vision";
	shadow = "escapism, impracticality, lack of action";
	gift = "ability to envision new possibilities, inspire others to dream, access the unconscious and spiritual realms";
break;
case archetype ="Child":
	strength = "innocence, playfulness, wonder, spontaneity";
	shadow = "dependence, immaturity, naivety";
	gift = "ability to enjoy the moment, see the world with fresh eyes, inspire joy and creativity in others";
break;
case archetype ="Evangelist":
	strength = "passion, conviction, faith, charisma";
	shadow = "fanaticism, intolerance, disregard for other beliefs";
	gift = "ability to inspire others with a message, create a community, motivate others to pursue a cause";
break;
case archetype ="Jester":
	strength = "Ability to bring joy and laughter to others, using humor to ease tension";
	shadow = "Can use humor to mask their own pain or avoid taking things seriously";
	gift = "Helps others see the lighter side of life and find joy in even difficult situations";
break;
case archetype ="Clown":
	strength = "Ability to use physical comedy to entertain and make others laugh";
	shadow = "Can feel pressured to always perform and struggle with their true identity";
	gift = "Brings levity to heavy situations and helps others find humor in the everyday";
break;
case archetype ="Entertainer":
	strength = "Ability to captivate an audience and provide a memorable experience";
	shadow = "Can become too focused on the spotlight and lose sight of their own authenticity";
	gift = "Creates meaningful connections and inspires others through their performance";
break;
case archetype ="Provocateur":
	strength = "Ability to challenge the status quo and push for change";
	shadow = "Can become too focused on causing disruption and fail to offer constructive solutions";
	gift = "Brings attention to important issues and inspires action towards positive change";
break;
case archetype ="Shape-shifter":
	strength = "Ability to adapt to any situation or role, making them versatile and resourceful";
	shadow = "Can struggle with their own sense of identity and feeling like they don't belong anywhere";
	gift = "Offers a fresh perspective and can bridge gaps between different groups or individuals";
break;
case archetype ="Matchmaker":
	strength = "Ability to connect people and create harmonious relationships";
	shadow = "Can become too focused on others' relationships and neglect their own needs";
	gift = "Brings people together and helps them form deep, meaningful connections";
break;
case archetype ="Companion":
	strength = "Ability to offer comfort and support to others, being a steady presence in their lives";
	shadow = "Can become too dependent on others for validation and struggle with being alone";
	gift = "Provides a listening ear and a comforting presence in times of need";
break;
case archetype ="Lover":
	strength = "Ability to experience deep, passionate connections with others and express emotions openly";
	shadow = "Can become too focused on the romantic aspect of relationships and struggle with healthy boundaries";
	gift = "Helps others experience love and passion, inspiring them to connect more deeply with others";
break;
case archetype ="Magician":
	strength = "Ability to create magic and transform reality through their imagination and creativity";
	shadow = "Can become too focused on their own illusions and lose touch with reality";
	gift = "Inspires others to dream big and see the potential for magic in the world around them";
break;
case archetype ="Shaman":
	strength = "Ability to connect with the spiritual world and offer guidance and healing to others";
	shadow = "Can become too focused on the spiritual realm and neglect their physical needs and relationships";
	gift = "Offers profound wisdom and insight, helping others navigate their spiritual journeys";
break;
case archetype ="Alchemist":
	strength = "Ability to transform and transmute materials or ideas into something new and valuable";
	shadow = "Can become too focused on the process of transformation and lose sight of the end goal";
	gift = "Offers new solutions and perspectives, transforming problems into opportunities for growth";
break;
case archetype ="Engineer":
	strength = "Ability to design and build complex systems or structures that improve the world around them";
	shadow = "Can become too focused on efficiency and lose sight of the human impact of their work";
	gift = "Creates innovative solutions to complex problems, improving people's lives through their designs";
break;
case archetype ="Innovator":
	strength = "Ability to think outside the box and generate new ideas and approaches";
	shadow = "Can become too focused on novelty for its own sake and fail to consider the practicality of their ideas";
	gift = "Generates new and exciting possibilities, inspiring others to think creatively and try new things";
break;
case archetype ="Rebel":
	strength = "Fearless, challenges authority, stands up for what they believe in";
	shadow = "Can be seen as disobedient, rebelliousness for the sake of being rebellious, can be self-destructive";
	gift = "Inspires others to challenge the status quo, brings attention to important issues, promotes change and progress";
break;
case archetype ="Anarchist":
	strength = "Believes in individual freedom, questions and challenges hierarchy, seeks to eliminate oppressive systems";
	shadow = "Can be seen as chaotic and destructive, may lack a clear vision for what they want to replace the current system with";
	gift = "Promotes individual autonomy, encourages critical thinking, inspires new ways of thinking about organization and power structures";
break;
case archetype ="Communalist":
	strength = "Values community and collective well-being, prioritizes group needs over individual desires, fosters collaboration and cooperation";
	shadow = "Can be seen as conformist, may suppress individual creativity and autonomy, can lead to groupthink";
	gift = "Creates a sense of belonging and social support, promotes a common purpose and shared goals, fosters social harmony and cooperation";
break;
case archetype ="Gambler":
	strength = "Willing to take risks, embraces uncertainty, can be highly adaptable";
	shadow = "Can be reckless and impulsive, may make poor decisions, can become addicted to the thrill of risk-taking";
	gift = "Encourages creativity and innovation, inspires others to take bold action, can lead to unexpected success";
break;
case archetype ="Maverick":
	strength = "Independent and self-reliant, unafraid to challenge conventional wisdom, often highly creative";
	shadow = "Can be seen as arrogant and dismissive of others' opinions, may have difficulty working within established systems, can become isolated";
	gift = "Brings fresh perspectives and new ideas, inspires others to think outside the box, can be a catalyst for change";
break;
case archetype ="Reformer":
	strength = "Seeks to improve and perfect systems, brings attention to flaws and inefficiencies, driven by a desire for progress and positive change";
	shadow = "Can be seen as critical and unyielding, may struggle to accept compromise, can become overly focused on fixing problems";
	gift = "Drives progress and innovation, helps to create more efficient and effective systems, inspires others to work towards improvement";
break;
case archetype ="Destroyer":
	strength = "Willing to let go of the old to make way for the new, brings necessary endings to things that are no longer serving their purpose, can be highly transformative";
	shadow = "Can be seen as destructive and negative, may be resistant to constructive criticism, can become fixated on tearing things down rather than building something new";
	gift = "Clears the way for new growth and progress, creates space for new possibilities, can be a catalyst for positive change";
break;
case archetype ="Whistleblower":
	strength = "Exposes corruption and wrongdoing, brings attention to hidden truths, often motivated by a strong sense of justice and morality";
	shadow = "Can be seen as disloyal and untrustworthy, may face backlash and retaliation, can become consumed by the desire to expose the truth at all costs";
	gift = "Promotes transparency and accountability, exposes injustices and promotes change, inspires others to speak out against wrongdoing";
break;
case archetype ="Sovereign":
	strength = "Confident and self-assured, exercises power with wisdom and grace, often highly respected and admired";
	shadow = "Can become arrogant and detached from others, may struggle to accept feedback and criticism, can become too focused on maintaining control";
	gift = "Provides strong and effective leadership, inspires trust and respect, creates a sense of stability and security";
break;
case archetype ="Judge":
	strength = "Fairness, impartiality, and the ability to make sound decisions based on evidence and logic.";
	shadow = "A tendency to be overly critical, judgmental, or rigid in thinking. Can also be prone to moral superiority and a lack of empathy.";
	gift = "The ability to see both sides of an issue, and to make impartial, fair, and wise decisions that benefit all parties involved.";
break;
case archetype ="Ambassador":
	strength = "Excellent communication skills, diplomacy, and the ability to build bridges between people and groups.";
	shadow = "Tendency to avoid conflict, pleasing people instead of taking sides, and people-pleasing.";
	gift = "The ability to mediate and negotiate with different parties, bring people together and create a sense of harmony.";
break;
case archetype ="Matriarch":
	strength = "Nurturing, caring, and protective of others, often representing the mother figure.";
	shadow = "Can be overly controlling, overbearing, or stifling to others, or struggle with finding meaning outside of their role as a caregiver.";
	gift = "Providing care and emotional support to others, creating a sense of family, and holding a space of emotional stability.";
break;
case archetype ="Ruler":
	strength = "Leadership, authority, and the ability to make tough decisions.";
	shadow = "A tendency to be authoritarian and controlling, to ignore the needs of others, and be blinded by power.";
	gift = "The ability to inspire, direct, and manage others towards a common goal or purpose, and to create a sense of stability and order.";
break;
case archetype ="Translator":
	strength = "Ability to translate ideas, concepts or messages between different people, cultures or languages.";
	shadow = "May struggle to maintain their own unique voice or identity while constantly adapting to others.";
	gift = "Can bridge gaps between individuals or groups that may otherwise struggle to communicate effectively.";
break;
case archetype ="Detective":
	strength = "Ability to ask the right questions, gather information, and piece together clues to solve a mystery or problem.";
	shadow = "May become overly suspicious or mistrustful, and struggle to let go of a case or problem even when it's time to move on.";
	gift = "Can uncover hidden truths, solve complex puzzles, and bring justice or resolution to a situation.";
break;
case archetype ="Scientist":
	strength = "Ability to approach problems with a methodical, analytical and evidence-based approach.";
	shadow = "May become overly fixated on details or data and miss the big picture or intuitive insights.";
	gift = "Can discover new knowledge, make breakthroughs in understanding, and improve the lives of others through their research.";
break;
case archetype ="Sage":
	strength = "Possesses deep knowledge and wisdom gained through experience and reflection, and often serves as a mentor or advisor to others.";
	shadow = "May become arrogant or overly certain in their beliefs, and struggle to adapt to new ideas or perspectives.";
	gift = "Can provide guidance, insight, and perspective to others, helping them navigate difficult situations and make wise decisions.";
break;
case archetype ="Mentor":
	strength = "Able to share knowledge, skills, and experience with others, and provide guidance and support for their personal and professional development.";
	shadow = "May become overly attached to their mentees or struggle to let go of control, and may not always be aware of their own biases or limitations.";
	gift = "Can inspire and support others to grow and achieve their goals, and serve as a role model and guide for those who look up to them.";
break;
case archetype ="Gnostic":
	strength = "Possesses a deep understanding of the spiritual or mystical nature of reality, and often seeks to uncover hidden truths and insights about the universe and human existence.";
	shadow = "May become overly preoccupied with esoteric or abstract concepts, and may struggle to connect with others who do not share their beliefs or perspectives.";
	gift = "Can help others connect with their spiritual selves, gain deeper insight and understanding of their place in the world, and find meaning and purpose in life.";

}





}


