// This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.: module.exports = ClozeCard;
// The constructor should accept two arguments: text and cloze.
// The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.
// The constructed object should have a partial property that contains only the partial text.
// The constructed object should have a fullText property that contains only the full text.
// The constructor should throw or log an error when the cloze deletion does not appear in the input text.
// Use prototypes to attach these methods, wherever possible.


function ClozeCard(text, cloze){
	this.cloze = cloze; // contains only the cloze-deleted portion of the text.
	this.partial = partial; //contains only the partial text.
	this.fullText = fullText;	//contains only the full text. cloze + partial
}


module.exports = ClozeCard;