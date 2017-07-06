var Main = new Vue({
  el: '#field',
  data: {
  	msgEnd: "Игра окончена",
  	isEnd: false,
    field: [0,0,0,0,0,0,0,0,0],
    queue: true, //True is it X
    isWinner: false,
    congrulMsg: "Победа: ",
    win: ""
  },
  methods: {
  	revertValue: function(id){
  		if(this.isWinner)
  			return;
  		if(this.field[id] == 0){
  			if(this.queue)
	  			Vue.set(this.field,id,"X");
  			else
  				Vue.set(this.field,id,"O");
  			this.queue = !this.queue;
  		}
  		this.IsOver();
  		this.win = this.winner();
  	},
  	IsOver : function(){
  		var sum = 0;
  		for(var i=0; i<9; ++i){
  			if(this.field[i] == 0)
  				++sum;
  		}
  		this.isEnd = sum <= 0;
  	},
  	newGame: function(){
  		this.isEnd = false;
  		this.isWinner = false;
  		this.win = "";
  		for(var i=0; i<9; ++i){
  			Vue.set(this.field,i,0);
  		}
  	},
  	winner: function(){
  		//Horisontal lines
  		for(var i=0; i<9; i+=3)
  			if(this.field[i] == this.field[i+1] && this.field[i] == this.field[i+2] && this.field[i] != 0){
  				this.isWinner = true;
  				return this.field[i];
  			}
  		//Vertical Lines
  		 for(var i=0; i<9; ++i)
  			if(this.field[i] == this.field[i+3] && this.field[i] == this.field[i+6] && this.field[i] != 0){
  				this.isWinner = true;
  				return this.field[i];
  			}
  		//Diagonal Lines
  		if(this.field[0] == this.field[4] && this.field[0] == this.field[8] && this.field[0] != 0)
  		{
			this.isWinner = true;
			return this.field[4]; 			
  		}
  		if(this.field[2] == this.field[4] && this.field[2] == this.field[6] && this.field[2] != 0)
  		{
			this.isWinner = true;
			return this.field[4]; 			
  		}
  	}
  }
});