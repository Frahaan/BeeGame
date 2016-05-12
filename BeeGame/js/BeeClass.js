class BeeClass
{
    constructor( spriteURL, id, lifeSpan, hitPointAmount )
    {
        this.spriteURL = spriteURL;
        this.id = id;
        this.lifeSpan = lifeSpan;
        this.hitPointAmount = hitPointAmount;
        
        // set default values for the width and height
        this.width = "auto";
        this.height = "auto";
    }
    
    setSize( width, height )
    {
        this.width = width;
        this.height = height;
    }
    
    draw( parentElement, id )
    {
        $( parentElement ).append( "<img id='" + this.id + "' class='beeImage' width='" + this.width + "' height='" + this.height + "' src=" + this.spriteURL + " />" );
    }
    
    hurt( )
    {
        // check if the bee is still alive
        if ( this.lifeSpan > 0 )
        {
            this.lifeSpan -= this.hitPointAmount;
            
            $( "#" + this.id ).effect( "highlight", { color: "#e74c3c" }, 500 );
            
            // check if the bee has been killed
            if ( this.lifeSpan <= 0 )
            {
                $( "#" + this.id ).attr( "src", SETTING_DEAD_BEE_URL );
                
                return true;
            }
            else
            {
                return false;
            }   
        }
        else
        {
            return true;
        }
    }
}