const json = {
 "title": "What's your Change Maker Archetype?",
 "description": "Every change maker is different. Whether we're talking about an individual or an organisation.  But there are some common ways of being in the world which occur again and again. These form a kind of template for behaviours, values, and attitudes. Knowing your archetype, and its shadow, can help you find your path, shape your efforts, and provide guidance on how you communicate, whether that's as an individual or as a collective. Take the short quiz below to get a hint at what your Change Maker Archetype might be.",
 "logo": "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/774352/966445_290123.png",
 "logoPosition": "right",
 "pages": [
  {
   "name": "How do you do what you do?",
   "elements": [
    {
     "type": "checkbox",
     "name": "YourVerb",
     "title": "Change-making takes many forms. Which of the following BEST describes your preferred mode of contributing to change?  Most people will be a mix of these. Pick the one that feels truest to your skills and passion.",
     "isRequired": true,
     "requiredErrorText": "\"You must answer this question\" says the Authority.",
     "validators": [
      {
       "type": "answercount",
       "text": "Choosing is hard. But please only choose one.",
       "minCount": 1,
       "maxCount": 1
      }
     ],
     "choices": [
      "I stand up for what's right",
      {
       "value": "To Create",
       "text": "I create"
      },
      {
       "value": "To nurture",
       "text": "I nurture"
      },
      {
       "value": "To conntect",
       "text": "I connect"
      },
      {
       "value": "To do the right thing",
       "text": "I try to personally do the right thing"
      },
      {
       "value": "To serve a greater power",
       "text": "I serve a greater power"
      },
      {
       "value": "To follow my curiosity",
       "text": "I follow my curiosity"
      },
      {
       "value": "To give people what they need",
       "text": "I try to give people what they need"
      }
     ],
     "maxSelectedChoices": 1
    }
   ],
   "title": "Your Verb",
   "description": "Your response to this question gives us a broad take on which archetypes might best describe you."
  },
  {
   "name": "StandUppers",
   "elements": [
    {
     "type": "checkbox",
     "name": "StandUp Differentiators",
     "title": "Which of the following feels truest to you?",
     "validators": [
      {
       "type": "answercount",
       "text": "Stand up for clarity. Choose one and only one choice.",
       "minCount": 1,
       "maxCount": 1
      }
     ],
     "choices": [
      "The secret to a better world is everyone being a responsible member of society",
      "The secret to a better world is brave, heroic action",
      "The secret to a better world is bringing the power of our intellects and values to bear on the problems of the day",
      "The secret to a better world is to fight with everything we have",
      "The secret to a better world is to throw off the shackles of authority and reject the status quo"
     ],
     "maxSelectedChoices": 1
    }
   ],
   "visible": false,
   "visibleIf": "{YourVerb} = ['I stand up for what\\'s right']",
   "requiredIf": "{YourVerb} = ['I stand up for what\\'s right']",
   "title": "Those who stand up"
  },
  {
   "name": "Creators",
   "elements": [
    {
     "type": "checkbox",
     "name": "CreatorDifferentiators",
     "title": "Which of the following feels truest to you?",
     "requiredErrorText": "Surely one of those answers feels true?",
     "validators": [
      {
       "type": "answercount",
       "text": "We know. You contain multitudes. But you must choose only one which feels even a smidgen truer than the others. ",
       "minCount": 1,
       "maxCount": 1
      }
     ],
     "choices": [
      {
       "value": "item1",
       "text": "The secret to a better world is more imagination."
      },
      {
       "value": "item2",
       "text": "The secret to a better world is locked away in ancient and indigenous wisdom awaiting to be re-awoken."
      },
      {
       "value": "item3",
       "text": "The secret to a better world is wisdom, learning, and intelligence."
      },
      {
       "value": "item4",
       "text": "The secret to a better world is bringing the power of our intellects and values to bear on the problems of the day"
      }
     ],
     "maxSelectedChoices": 1
    }
   ],
   "visible": false,
   "visibleIf": "{YourVerb} = ['To Create']",
   "title": "Those who Create"
  },
  {
   "name": "Nurturers",
   "elements": [
    {
     "type": "checkbox",
     "name": "NurtureDifferentiators",
     "title": "Which of the following feels truest to you?",
     "requiredErrorText": "I want to support you in choosing wisely, but you must choose one. ",
     "validators": [
      {
       "type": "answercount",
       "text": "You can choose only one, but one you must choose.",
       "minCount": 1,
       "maxCount": 1
      }
     ],
     "choices": [
      {
       "value": "item1",
       "text": "The secret to a better world is caring for one another"
      },
      {
       "value": "item2",
       "text": "The secret to a better world is enlightened leadership that combines strength, vision, and discipline."
      },
      {
       "value": "item3",
       "text": "The secret to a better world is harnessing the wisdom and power of crowds"
      },
      {
       "value": "item4",
       "text": "The secret to a better world is wisdom, learning, and intelligence."
      },
      {
       "value": "item5",
       "text": "Love is the answer"
      }
     ],
     "maxSelectedChoices": 1
    }
   ],
   "visible": false,
   "visibleIf": "{YourVerb} = ['To nurture']",
   "title": "Those who Nurture"
  },
  {
   "name": "Connectors",
   "elements": [
    {
     "type": "checkbox",
     "name": "ConnectorDifferentiators",
     "title": "Which of the following feels truest to you?",
     "choices": [
      {
       "value": "item1",
       "text": "Love is the answer"
      },
      {
       "value": "item2",
       "text": "The secret to a better world is harnessing the wisdom and power of crowds"
      },
      {
       "value": "item3",
       "text": "The secret to a better world is enlightened leadership that combines strength, vision, and discipline."
      },
      {
       "value": "item4",
       "text": "The secret to a better world is for everyone to chill, enjoy, and take things a little less seriously"
      }
     ],
     "maxSelectedChoices": 1
    }
   ],
   "visible": false,
   "visibleIf": "{YourVerb} = ['To conntect']",
   "title": "Those who Connect"
  },
  {
   "name": "DoRighters",
   "elements": [
    {
     "type": "checkbox",
     "name": "DoRightDifferentiators",
     "title": "Which of the following feels truest to you?",
     "validators": [
      {
       "type": "answercount",
       "text": "The right thing to do here is to choose only one answer.",
       "minCount": 1,
       "maxCount": 1
      }
     ],
     "choices": [
      {
       "value": "item1",
       "text": "The secret to a better world is everyone being a responsible member of society"
      },
      {
       "value": "item2",
       "text": "The secret to a better world is wisdom, learning, and intelligence."
      },
      {
       "value": "item3",
       "text": "The secret to a better world is enlightened leadership that combines strength, vision, and discipline"
      },
      {
       "value": "item4",
       "text": "The secret to a better world is brave, heroic action"
      },
      {
       "value": "item5",
       "text": "The secret to a better world is bringing the power of our intellects and values to bear on the problems of the day"
      }
     ],
     "maxSelectedChoices": 1
    }
   ],
   "visible": false,
   "visibleIf": "{YourVerb} = ['To do the right thing']",
   "title": "Those who Do Right"
  },
  {
   "name": "PowerServers",
   "elements": [
    {
     "type": "checkbox",
     "name": "PowerServerDifferentiators",
     "title": " Which of the following feels truest to you? ",
     "validators": [
      {
       "type": "answercount",
       "text": "You have been called to choose only one answer. And so you must.",
       "minCount": 1,
       "maxCount": 1
      }
     ],
     "choices": [
      "The secret to a better world is something we are yet to discover",
      "The secret to a better world is brave, heroic action",
      "The secret to a better world is locked away in ancient and indiginous wisdom awaiting to be awoken.",
      "The secret to a better world is enlightened leadership that combines strength, vision, and discipline.",
      "The secret to a better world is wisdom, learning, and intelligence."
     ],
     "maxSelectedChoices": 1
    }
   ],
   "visible": false,
   "visibleIf": "{YourVerb} = ['To serve a greater power']",
   "title": "Those who serve a greater power"
  },
  {
   "name": "CuriosityFollowers",
   "elements": [
    {
     "type": "checkbox",
     "name": "CuriosityDifferentiators",
     "title": "Which of the following feels truest to you?",
     "choices": [
      {
       "value": "Item 1",
       "text": "The secret to a better world is wisdom, learning, and intelligence."
      },
      {
       "value": "Item 2",
       "text": "The secret to a better world is locked away in ancient and indiginous wisdom awaiting to be awoken."
      },
      {
       "value": "Item 3",
       "text": "The secret to a better world is something we are yet to discover."
      },
      {
       "value": "Item 4",
       "text": "The secret to a better world is more imagination"
      }
     ]
    }
   ],
   "visible": false,
   "visibleIf": "{YourVerb} = ['To follow my curiosity']",
   "title": "Those who follow their Curiosity"
  },
  {
   "name": "NeedGivers",
   "elements": [
    {
     "type": "checkbox",
     "name": "GiverDifferentiators",
     "title": "Which of the following feels truest to you?",
     "validators": [
      {
       "type": "answercount",
       "text": "You can only proceed if you give one and only one answer, no matter how hard it may be.",
       "minCount": 1,
       "maxCount": 1
      }
     ],
     "choices": [
      "The secret to a better world is caring for one another",
      "The secret to a better world is for everyone to chill, enjoy, and take things a little less seriously",
      "Love is the answer.",
      "The secret to a better world is enlightened leadership that combines strength, vision, and discipline."
     ],
     "maxSelectedChoices": 1
    }
   ],
   "visible": false,
   "visibleIf": "{YourVerb} = ['To give people what they need']",
   "title": "Those who give what is needed"
  },
  {
   "name": "CaregiverCore",
   "elements": [
    {
     "type": "checkbox",
     "name": "CaregiverQ",
     "title": "Which of the following feels closest to your core purpose?",
     "validators": [
      {
       "type": "answercount",
       "text": "One answer alone can be right. Find and choose the single response that feels closest to your true purpose. ",
       "minCount": 1,
       "maxCount": 1
      }
     ],
     "choices": [
      "To nurture others.",
      "To bring care and compassion from a higher spiritual plane.",
      "To safeguard collective resources, values and traditions for future generations.",
      "To bring wellness and wholeness where there was sickness.",
      "To turn compassion into action."
     ],
     "maxSelectedChoices": 1
    }
   ],
   "visible": false,
   "visibleIf": "{NurtureDifferentiators} = ['item1'] or {GiverDifferentiators} = ['The secret to a better world is caring for one another']",
   "title": "What's your core purpose?"
  },
  {
   "name": "CitizenCore",
   "elements": [
    {
     "type": "checkbox",
     "name": "CitizenQ",
     "title": "Which of the following feels closest to your core purpose?",
     "choices": [
      {
       "value": "To be a responsible member of their community.",
       "text": "To be a responsible member of my community."
      },
      "To champion the rights of others and social change.",
      "To connect the dots in powerful ways.",
      {
       "value": "To dedicate their efforts to the good of others.",
       "text": "To dedicate my individual efforts to benefitting others."
      },
      "To humbly ensure that all are treated equally.",
      "To tell the truth in a powerful, compelling way."
     ],
     "maxSelectedChoices": 1
    }
   ],
   "visible": false,
   "visibleIf": "{StandUp Differentiators} = ['The secret to a better world is everyone being a responsible member of society'] or {DoRightDifferentiators} = ['item1']",
   "title": "What's your Core Purpose?"
  },
  {
   "name": "CreatorCore",
   "elements": [
    {
     "type": "checkbox",
     "name": "CreatorQ",
     "title": "Which of the following feels closest to your core purpose?",
     "choices": [
      "To tell the truth in a powerful, compelling way.",
      "To make social change so beautiful none can resist.",
      "To harness the power of creativity for world-changing."
     ],
     "maxSelectedChoices": 1
    }
   ],
   "visible": false,
   "visibleIf": "{CreatorDifferentiators} = ['item1'] or {CuriosityDifferentiators} = ['Item 4']",
   "title": "What's your core purpose?"
  },
  {
   "name": "ExplorerCore",
   "elements": [
    {
     "type": "checkbox",
     "name": "ExplorerQ",
     "title": "Which of the following feels closest to your core purpose?",
     "choices": [
      "To use every form of human expression and knowledge for the betterment of humanity.",
      "To go where nobody has gone before.",
      "To help people imagine a more beautiful future.",
      "To embrace the wild and the daring.",
      "To leave no stone unturned in the quest for answers."
     ],
     "maxSelectedChoices": 1
    }
   ],
   "visible": false,
   "visibleIf": "{PowerServerDifferentiators} = ['The secret to a better world is something we are yet to discover'] or {CuriosityDifferentiators} = ['Item 3']",
   "title": "What's your core purpose?"
  },
  {
   "name": "GatherersCore",
   "elements": [
    {
     "type": "checkbox",
     "name": "GathererQ",
     "title": "Which of the following feels closest to your core purpose?",
     "choices": [
      "To use art to create a revolution we can dance to",
      "To call others to follow in the teachings of one great leader.",
      "To turn a group passion into purpose",
      "To tell the truth in a powerful, compelling way."
     ],
     "maxSelectedChoices": 1
    }
   ],
   "visible": false,
   "visibleIf": "{NurtureDifferentiators} = ['item3'] or {ConnectorDifferentiators} = ['item2']",
   "title": "What's your core purpose?"
  },
  {
   "name": "HeroCore",
   "elements": [
    {
     "type": "checkbox",
     "name": "HeroQ",
     "title": "Which of the following feels closest to your core purpose?",
     "choices": [
      "To unchain the oppressed.",
      "To battle the forces holding back a more beautiful world.",
      "To save those in immediate danger.",
      "To catalyze conflict and throw a spotlight on injustice.",
      "To tell the truth in a powerful, compelling way."
     ],
     "maxSelectedChoices": 1
    }
   ],
   "visible": false,
   "visibleIf": "{StandUp Differentiators} = ['The secret to a better world is brave, heroic action'] or {DoRightDifferentiators} = ['item4'] or {PowerServerDifferentiators} = ['The secret to a better world is brave, heroic action']",
   "title": "What's your core purpose?"
  },
  {
   "name": "IdealistCore",
   "elements": [
    {
     "type": "checkbox",
     "name": "IdealistQ",
     "title": "Which of the following feels closest to your core purpose?",
     "choices": [
      "To make ideas that serve a more beautiful future the norm.",
      "To inspire.",
      "To dare the world to believe another world is possible.",
      "To speak with the truth that comes from the mouths of babes.",
      "To push an idea into the world",
      "To tell the truth in a powerful, compelling way."
     ],
     "maxSelectedChoices": 1
    }
   ],
   "visible": false,
   "visibleIf": "{StandUp Differentiators} = ['The secret to a better world is bringing the power of our intellects and values to bear on the problems of the day'] or {CreatorDifferentiators} = ['item4'] or {DoRightDifferentiators} = ['item5']",
   "title": "What's your core purpose?"
  },
  {
   "name": "JesterCore",
   "elements": [
    {
     "type": "checkbox",
     "name": "JesterQ",
     "title": "Which of the following feels closest to your core purpose?",
     "choices": [
      {
       "value": "To belittle evil and shortsightedness with mockery and satire",
       "text": "To belittle evil and shortsightedness with mockery and satire."
      },
      "To harness the power of fun for good.",
      "To transform attention into action.",
      "To fluidly change roles as circumstance require.",
      "To tell the truth in a powerful, compelling way."
     ],
     "maxSelectedChoices": 1
    }
   ],
   "visible": false,
   "visibleIf": "(({ConnectorDifferentiators} == ['item4']) or ({GiverDifferentiators} == ['The secret to a better world is for everyone to chill, enjoy, and take things a little less seriously']))",
   "title": "What's your core purpose?"
  },
  {
   "name": "LoverCore",
   "elements": [
    {
     "type": "checkbox",
     "name": "LoverQ",
     "title": "Which of the following feels closest to your core purpose?",
     "choices": [
      "To create powerful meaningful life-transforming alliances",
      "To provide a shoulder to lean on",
      "To speak to the heart.",
      "To tell the truth in a powerful, compelling way."
     ],
     "maxSelectedChoices": 1
    }
   ],
   "visible": false,
   "visibleIf": "{NurtureDifferentiators} = ['item5'] or {ConnectorDifferentiators} = ['item1'] or {GiverDifferentiators} = ['Love is the answer.']",
   "title": "What's your core purpose?"
  },
  {
   "name": "MagicianCore",
   "elements": [
    {
     "type": "checkbox",
     "name": "MagicianQ",
     "title": "Which of the following feels closest to your core purpose?",
     "choices": [
      "To manifest ideas into reality.",
      "To provide a bridge between the material world and the world of possibilities.",
      {
       "value": "To transform base metal into gold.",
       "text": "To transform the base metal of moral outrage into the  gold of action."
      },
      "To design our way out of crisis.",
      {
       "value": "To demonstrate a better world is possible by creating examples",
       "text": "To demonstrate a better world is possible by creating examples."
      }
     ],
     "maxSelectedChoices": 1
    }
   ],
   "visible": false,
   "visibleIf": "{CreatorDifferentiators} = ['item2'] or {PowerServerDifferentiators} = ['The secret to a better world is locked away in ancient and indiginous wisdom awaiting to be awoken.'] or {CuriosityDifferentiators} = ['Item 2']",
   "title": "What's your core purpose?"
  },
  {
   "name": "RebelCore",
   "elements": [
    {
     "type": "checkbox",
     "name": "RebelQ",
     "visibleIf": "{StandUp Differentiators} = ['The secret to a better world is to fight with everything we have'] or {StandUp Differentiators} = ['The secret to a better world is to throw off the shackles of authority and reject the status quo']",
     "title": "Which of the following feels closest to your core purpose?",
     "choices": [
      "To overthrow the status quo",
      "To challenge the very structure of the status quo",
      "To gather the forces of communal action toward communal good.",
      "To take great risk for great good.",
      "To disrupt, shake up, and defy convention",
      "To use slow and steady pressure to bring gradual incremental change.",
      "To meet socially approved destrcution with unsanctioned destruction.",
      "To expose dark secrets to the light of truth.",
      "To tell the truth in a powerful, compelling way."
     ],
     "maxSelectedChoices": 1
    }
   ],
   "visible": false,
   "visibleIf": "{StandUp Differentiators} = ['The secret to a better world is to throw off the shackles of authority and reject the status quo']  or {StandUp Differentiators} = ['The secret to a better world is to fight with everything we have']",
   "title": "What's your core purpose?"
  },
  {
   "name": "RulerCore",
   "elements": [
    {
     "type": "checkbox",
     "name": "RulerQ",
     "title": "Which of the following feels closest to your core purpose?",
     "choices": [
      "To bring order to society with divine power.",
      "To bring order to society with law.",
      "To open channels of dialogue.",
      "To bring order to society with compassion.",
      "To bring order to society with authority."
     ],
     "maxSelectedChoices": 1
    }
   ],
   "visible": false,
   "visibleIf": "{NurtureDifferentiators} = ['item2'] or {ConnectorDifferentiators} = ['item3'] or {DoRightDifferentiators} = ['item3'] or {PowerServerDifferentiators} = ['The secret to a better world is enlightened leadership that combines strength, vision, and discipline.'] or {GiverDifferentiators} = ['The secret to a better world is enlightened leadership that combines strength, vision, and discipline.']",
   "title": "What's your core purpose?"
  },
  {
   "name": "SageCore",
   "elements": [
    {
     "type": "checkbox",
     "name": "SageQ",
     "title": "Which of the following feels closest to your core purpose?",
     "choices": [
      {
       "value": "To explain the complex or foreign of misunderstood",
       "text": "To explain the complex or foreign of misunderstood."
      },
      "To dig up the hidden.",
      "To bring order to society with science.",
      "To bring order to society with wisdom.",
      "To teach.",
      "To preserve secret knowledge.",
      "To tell the truth in a powerful, compelling way."
     ],
     "maxSelectedChoices": 1
    }
   ],
   "visible": false,
   "visibleIf": "{NurtureDifferentiators} = ['item4'] or {CreatorDifferentiators} = ['item3'] or {DoRightDifferentiators} = ['item2'] or {PowerServerDifferentiators} = ['The secret to a better world is wisdom, learning, and intelligence.'] or {CuriosityDifferentiators} = ['Item 1']",
   "title": "What's your core purpose?"
  }
 ],
 "showCompletedPage": false,
 "widthMode": "responsive"
}