$( document ).ready( function( )
{
    var gameState = STATE_PLAYING;
    var totalNumOfClicks = 0;
    
    var queenBee = new BeeClass( SETTING_QUEEN_BEE_IMAGE_URL, "Q_" + 1, SETTING_QUEEN_BEE_LIFESPAN, SETTING_QUEEN_BEE_HITPOINT );
    
    queenBee.setSize( "auto", "200px" );
    queenBee.draw( "#QueenBeeContainer" );
    
    var workerBeeArray = [];
    
    for ( var i = 0; i < SETTING_NUM_OF_WORKER_BEES; i++ )
    {
        workerBeeArray.push( new BeeClass( SETTING_WORKER_BEE_IMAGE_URL, "W_" + i, SETTING_WORKER_BEE_LIFESPAN, SETTING_WORKER_BEE_HITPOINT ) );
        workerBeeArray[i].setSize( "auto", "150px" );
        workerBeeArray[i].draw( "#WorkerBeeContainer" );
    }
    
    var droneBeeArray = [];
    
    for ( var i = 0; i < SETTING_NUM_OF_DRONE_BEES; i++ )
    {
        droneBeeArray.push( new BeeClass( SETTING_DRONE_BEE_IMAGE_URL, "D_" + i, SETTING_DRONE_BEE_LIFESPAN, SETTING_DRONE_BEE_HITPOINT ) );
        droneBeeArray[i].setSize( "auto", "125px" );
        droneBeeArray[i].draw( "#DroneBeeContainer" );
    }
    
    $( "#HurtBeeButton" ).click( function( )
    {
        if ( STATE_PLAYING === gameState )
        {
            var randNum = Math.floor( ( Math.random( ) * 3 ) + 1 );

            // check which is the lucky bee :D
            if ( 1 === randNum && queenBee != null )
            {
                totalNumOfClicks++;
                
                if ( queenBee.hurt( ) )
                {
                    queenBee = null;
                    gameState = STATE_WON;
                    
                    $( "#ButtonContainer" ).append( '<div><button id="ResetButton" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Reset</button></div>' );
                    
                    alert( "Well done you killed all the bees in just " + totalNumOfClicks + " awesome click!!!" );
                    
                    $( "#ResetButton" ).bind( "click", function()
                    {
                        location.reload( );
                    } );
                }
            }
            else if ( 2 === randNum && workerBeeArray.length > 0 )
            {
                totalNumOfClicks++;
                randNum = Math.floor( ( Math.random( ) * workerBeeArray.length ) );

                if ( workerBeeArray[randNum].hurt( ) )
                {
                    workerBeeArray.splice(randNum, 1);
                }
            }
            else if ( 3 === randNum && droneBeeArray.length > 0 )
            {
                totalNumOfClicks++;
                randNum = Math.floor( ( Math.random( ) * droneBeeArray.length ) );

                if ( droneBeeArray[randNum].hurt( ) )
                {
                    droneBeeArray.splice(randNum, 1);
                }
            }
            else
            {
                $( "#HurtBeeButton" ).click(  );
            }
        }
        else
        {
            randNum = Math.floor( ( Math.random( ) * 5 ) + 1 );
            
            switch ( randNum )
            {
                case 1:
                    alert( "You have already slayed all the bees" );
                    break;
                    
                case 2:
                    alert( "Relax have some grilled cheese" );
                    break;
                    
                case 3:
                    alert( "Pizza is on us, well done." );
                    break;
                    
                case 4:
                    alert( "Awesome job." );
                    break;
                    
                case 5:
                default:
                    alert( "Give that man a cookie. If your a woman give her 2 cookies and give me 5 please" );
                    break;
            }
        }
    } );
} );