
function BasicCard(front, back){
	this.front = front; 
	this.back = back; 
}

BasicCard.prototype.printFront = function() {
  console.log(this.front)
};
BasicCard.prototype.printBack = function() {
  console.log(this.back)
};


module.exports = BasicCard;