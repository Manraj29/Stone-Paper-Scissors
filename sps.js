function decide(){
    
    var rdmno;

    rdmno = Math.floor(Math.random() * 3) + 1;

    if(rdmno==1){
        var rdmdiceimg = "rock.png"; 
    }
    else if(rdmno==2){
        var rdmdiceimg = "paper.png"; 
    }
    else if(rdmno==3){
        var rdmdiceimg = "scissor.png"; 
    }


    var img1 = document.querySelectorAll("img")[0];

    img1.setAttribute("src" , rdmdiceimg);

    //2nd dice

    var rdmno2;
    var rdmdiceimg2;

    rdmno2 = Math.floor(Math.random() * 3) + 1;

    if(rdmno2==1){
        rdmdiceimg2 = "rock.png";
    }
    else if(rdmno2==2){
        rdmdiceimg2 = "paper.png"; 
    }
    else if(rdmno2==3){
        rdmdiceimg2 = "scissor.png"; 
    }


    var img2 = document.querySelectorAll("img")[1];

    img2.setAttribute("src" , rdmdiceimg2);

    if(rdmno==1 && rdmno2==1){
        document.querySelector("h1").innerHTML = " Draw!";
    }
    else if(rdmno==2 && rdmno2==2){
        document.querySelector("h1").innerHTML = " Draw!";
    }
    else if(rdmno==3 && rdmno2==3){
        document.querySelector("h1").innerHTML = " Draw!";
    }
    else if(rdmno==1 && rdmno2==2){
        document.querySelector("h1").innerHTML = " Player 2 Wins!";
    }
    else if(rdmno==1 && rdmno2==3){
        document.querySelector("h1").innerHTML = " Player 1 Wins!";
    }
    else if(rdmno==2 && rdmno2==1){
        document.querySelector("h1").innerHTML = " Player 1 Wins!";
    }
    else if(rdmno==2 && rdmno2==3){
        document.querySelector("h1").innerHTML = " Player 2 Wins!";
    }
    else if(rdmno==3 && rdmno2==1){
        document.querySelector("h1").innerHTML = " Player 1 Wins!";
    }
    else if(rdmno==3 && rdmno2==2){
        document.querySelector("h1").innerHTML = " Player 1 Wins!";
    }
}