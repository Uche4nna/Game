  let score =JSON.parse(localStorage.getItem
      ('score'));
      
      if (!score){
        score={
          wins:0,
          loose:0,
          tie:0,
          
        }
      } 
    updatescoreElement()
      let result='';
      function action(chika){
        if (chika==='Scissors'){
          const computermove = iconkpaper();
          if (computermove === 'Rock'){
            result='You Lose '
          }else if (computermove === 'Paper'){
            result='You Win'
          }else if (computermove === 'Scissors'){
            result='It a Tie'
          }
        }else if(chika==='Paper'){
          computermove = iconkpaper()
          result='';
          if (computermove === 'Rock'){
            result='You Win'
          }else if (computermove === 'Paper'){
            result='It a Tie'
          }else if (computermove === 'Scissors'){
            result='You Lose'
          }
        }else if(chika==='Rock'){
          computermove = iconkpaper()
          result='';
          if (computermove === 'Rock'){
            result='It a Tie'
          }else if (computermove === 'Paper'){
            result='You Lose'
          }else if (computermove === 'Scissors'){
            result='You Win'
          }
         
        }
         if (result==='You Win'){
            score.wins+=1;
          }else if (result === 'You Lose'){
            score.loose+=1;
          }else if (result ==='It a Tie'){
            score.tie+=1;
        }
        localStorage.setItem('score',JSON.stringify(score));
        updatescoreElement();
        
        document.querySelector('.js-result').innerHTML=result;
        document.querySelector('.js-moves').innerHTML=` You:  
      <img src="${chika.toLowerCase()}-emoji.png" class="icon">
      <img src="${computermove.toLowerCase()}-emoji.png" class="icon">
      computer`;
 
    }
    
      function updatescoreElement(){
        document.querySelector('.js-button')
        .innerHTML=` wins ${score.wins} loose ${score.loose} Tie 
        ${score.tie}`
      }
    function iconkpaper(){
        const randomnumber=Math.random();
        computermove='';
        if (randomnumber>=0 && randomnumber < 1/3){
        computermove='Rock'
        }else if (randomnumber>= 1/3 && randomnumber < 2/3){
          computermove='Paper'
        }else if(randomnumber >=2/3 && randomnumber < 1){
          computermove='Scissors'
        }
        return computermove ;
      }
