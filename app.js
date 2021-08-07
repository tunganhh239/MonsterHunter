new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods:{
        startGame: function(){
            this.gameIsRunning= true;
            this.playerHealth=100;
            this.monsterHealth=100;
        },
        attack: function(){

            var damage= this.randomDamage(5,10);
            this.monsterHealth-=damage;
            
            if(this.checkWin()){
                return;
            }
            this.monsterAttack();
            if(this.checkWin()){
                return;
            }
        },

        specialAttack: function(){
            var damage= this.randomDamage(10,15);
            this.monsterHealth-=damage;
            
            if(this.checkWin()){
                return;
            }
            this.monsterAttack();
            if(this.checkWin()){
                return;
            }
        },
        heal: function(){
           
        },
        giveUp: function(){

        },

        monsterAttack: function(){
            var damage= this.randomDamage(3,15);
            this.playerHealth-=damage;
        },
        randomDamage: function(min, max){
            return Math.round( Math.random() * (max-min) +min);
        },
        
        checkWin: function(){
            if(this.monsterHealth <= 0){
                if(confirm('You win! Wanna new game?')){
                    this.startGame();
                }else{
                    this.gameIsRunning=false;
                }
                return true;
            }else if(this.playerHealth <=0){
                if(confirm('You lose! Wanna new game?')){
                    this.startGame();
                }else{
                    this.gameIsRunning=false;
                }
                return true;
            }
            return false;
        }
    }
})