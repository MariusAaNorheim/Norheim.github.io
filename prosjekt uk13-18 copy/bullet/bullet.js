let bullets = []
let enemies = []
let score = 0

function setup(){
    createCanvas(400, 600);          
   
   
    
    for(let i = 0; i < 5; i++){     
        let enemy = {
            x: random(0,width),     
            y: random(-800,0),      
        };
        enemies.push(enemy);
    }
}
function draw(){
    background(51);
    rectMode(CENTER);             
   
    circle(mouseX, height - 25, 25);  

    
    for (let bullet of bullets){
        bullet.y -= 20                  
        circle(bullet.x, bullet.y, 15);
    }
        
        for(let enemy of enemies){
            
            enemy.y += 3;               
            rect(enemy.x, enemy.y, 15); 
            if (enemy.y > height){      
                background(255)         
               text("Du Tapte! Du Fikk "+score+" poeng" , width/(3), height/2 )  
               noLoop()                 
               
            }
            
        }

        
        for(let enemy of enemies){
            for(let bullet of bullets){
                if(dist(enemy.x, enemy.y, bullet.x, bullet.y) < 15) {    
                    enemies.splice(enemies.indexOf(enemy), 1);             
                                                                        
                    bullets.splice(bullets.indexOf(bullet), 1);         

                let newEnemy = {                
                                            
                                      
                        x: random(0,width),
                        y: random(-800,0)
                    };
                enemies.push(newEnemy);
                score += 1
                }
            }
        }
        text(score, 15, 25)
}

function mousePressed(){
    
    let bullet = {
    x: mouseX,
    y: height - 50,
  }
  bullets.push(bullet);
}