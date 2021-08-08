new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods:{
        startGame: function(){
            this.gameIsRunning= true;
            this.playerHealth=100;
            this.monsterHealth=100;
            this.turns=[];
        },
        attack: function(){

            var damage= this.randomDamage(5,10);
            this.monsterHealth-=damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits monster for ' + damage
            });
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
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits monster for ' + damage
            });
            if(this.checkWin()){
                return;
            }
            this.monsterAttack();
            if(this.checkWin()){
                return;
            }
        },
        heal: function(){
           this.playerHealth<=90 ? this.playerHealth+=10 : this.playerHealth=100;
           this.turns.unshift({
            isPlayer: true,
            text: 'Player heals ' + 10
        });
           this.monsterAttack();
        },
        giveUp: function(){
            if(confirm('Are you sure?')){
                this.gameIsRunning=false;
            }else{
                return;
            }
        },

        monsterAttack: function(){
            var damage= this.randomDamage(3,15);
            this.playerHealth-=damage;
            
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster kicks player for ' + damage
            });
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