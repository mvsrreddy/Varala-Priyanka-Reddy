this.$dom = {};
this.$dom.animatedText = document.createElement('div');
this.text = "Today is... as beautiful as other days but you realize another year has gone in a blink of the eyes however Do you know..? today is just special so special to you that's why Let's make it... the best celebration ever and let me share... a piece of happiness to you I made all this.. as a birthday present to you thanks for being there thanks for the friendship we made thanks for everything I wish you all the best May your life be at ease May all your wishes come true Remember your ambitions you live as a free bird... flying in the blue sky Now things are different... real story of your life is just about to begin indeed.. this life is not easy as we thought but... don't worry don't be afraid because... you are not alone in this world because... this year will be better and I hope you'll find... happiness along the way keep your spirits up enjoy every single moment... that you experiecne today fill it with your most beautiful and make it the best memory.. lastly... I'd like to wish you one more time a very happy birthday     ";  // MESSAGE AREA , THIS CAN BE CHANGED FROM YOUR MESSAGE :)
this.$dom.container = document.getElementById('container');
this.$dom.container.appendChild(this.$dom.animatedText);
animateText();
function animateText(){
	var arrayOfLetters = this.text.split("");
	var animatedSpan = [];
	arrayOfLetters.forEach(function(item){
		var span = document.createElement('span');
		span.innerHTML = item;
		animatedSpan.push(span);
		span.style.opacity = 0;
		span.style.color = 'white';
		this.$dom.animatedText.appendChild(span);
	});
	TweenMax.staggerTo(animatedSpan, .2,{
		opacity : 1,
		delay : 2
	},0.05);
}
