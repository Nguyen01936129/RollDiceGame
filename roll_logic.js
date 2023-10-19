'use strict'
const player1EL = document.querySelector('.player1');
const player2EL = document.querySelector('.player2');
const player1 = document.querySelector('.player1_title');
const player2 = document.querySelector('.player2_title');
let player1_points = document.querySelector('.player1_point');
let player2_points = document.querySelector('.player2_point');
let image = document.querySelector('img');

let cur_point, total_cur_point =0;
let rollDice = document.querySelector('.roll_dice');
const hold = document.querySelector('.hold');
const new_game = document.querySelector('.new_game');
let player_active = 1;
let total_player_score = [0,0];

// switch player function
const switch_account = function(){
      total_cur_point = 0;
      document.querySelector(`.cur_point_player--${player_active}`).innerHTML = 0;
      player_active = (player_active === 1? 2 : 1);
      player1EL.classList.toggle('active');
      player2EL.classList.toggle('active');
}

let role_dice_handle = function() {
      // create random number
    let ran_number = Math.floor(Math.random()*6 + 1);
    image.classList.remove('hidden');
    image.src = `${ran_number}.jpg`;
    
    cur_point = ran_number;

    
// if dice side is 1
      if(cur_point === 1) {
            switch_account();
      }
      else {
            total_cur_point +=  cur_point;
            document.querySelector(`.cur_point_player--${player_active}`).innerHTML = total_cur_point;  
      }
}

// when rollDice button is clicked
rollDice.addEventListener('click', role_dice_handle);

let hold_handler = function() {
     total_player_score[player_active -1] += total_cur_point;
     document.querySelector(`.player${player_active}_point`).innerHTML = total_player_score[player_active - 1];
     if(total_player_score[(player_active - 1)] >= 20) {
           document.querySelector(`.player${player_active}`).classList.add('win');
           console.log(total_player_score[(player_active - 1)]);
           rollDice.disabled = true;
           hold.disabled = true;
      }
      switch_account();
}
// hold function
hold.addEventListener('click', hold_handler);

// newgame button
const new_game_handler = function() {
      // reset all data.
      total_cur_point = 0;
      total_player_score = [0, 0];
      document.querySelector('.player1_point').innerHTML = 0;
      document.querySelector('.player2_point').innerHTML = 0;
      document.querySelector('.cur_point_player--1').innerHTML = 0;
      document.querySelector('.cur_point_player--2').innerHTML = 0;
      image.classList.add('hidden');
      rollDice.disabled = false;
      hold.disabled = false;
      player1EL.classList.remove('win');
      player2EL.classList.remove('win');
}
new_game.addEventListener('click', new_game_handler);