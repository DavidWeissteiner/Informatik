var bell = new Audio('assets/sounds/salamisound-5462790-ein-glockenschlag-von-einer.mp3');


function ring()
{	
	if(document.getElementById("minute").value < 30)
	{
		 document.getElementById("minute").value = 0;
	}
	
    else if(document.getElementById("minute").value >= 30 && document.getElementById("minute").value < 60)
	{
		 document.getElementById("minute").value = 30;
	}
	
	
    if(document.getElementById("hour").value > 23 || document.getElementById("minute").value >= 60)
	{
		alert("Wrong Input!");
	}
	
    else
	{        
        var tmp = 0;
        
        if(document.getElementById("hour").value % 4 == 0 && document.getElementById("minute").value == 30)
        {
            tmp = 1;
        }
        
        else if(document.getElementById("hour").value % 4 == 1 && document.getElementById("minute").value == 0)
        {
            tmp = 2;
        }
        
        else if(document.getElementById("hour").value % 4 == 1 && document.getElementById("minute").value == 30)
        {
            tmp = 3;
        }
        
        else if(document.getElementById("hour").value % 4 == 2 && document.getElementById("minute").value == 0)
        {
            tmp = 4;
        }
        
        else if(document.getElementById("hour").value % 4 == 2 && document.getElementById("minute").value == 30)
        {
            tmp = 5;
        }
        
        else if(document.getElementById("hour").value % 4 == 3 && document.getElementById("minute").value == 0)
        {
            tmp = 6;
        }
        
        else if(document.getElementById("hour").value % 4 == 3 && document.getElementById("minute").value == 30)
        {
            tmp = 7;
        }
        
        else if(document.getElementById("hour").value % 4 == 0 && document.getElementById("minute").value == 0)
        {
            tmp = 8;
        }
        
        
        for(counter = 1; counter <= tmp; counter++)
        {
            if(counter % 2 == 0)
            {
                bell.play();
                bell.play();
                sleep(1000);
            }
            else if(counter % 2 == 1)
            {
                bell.play();
            }
        }
        
        
	}
}



function ringOnce()
{
    bell.play();
}