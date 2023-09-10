const survey = new Survey.Model(json);
// You can delete the line below if you do not use a customized theme
survey.applyTheme(themeJson);
survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
    sendDataToServer(sender);
    //ADDING ABOVE LINE FROM OLD VERSION
});

$("#surveyElement").Survey({ model: survey });