window.onload = function(){
    for(var i=0;i<document.getElementsByClassName("uno").length;i++){
    
    document.getElementsByClassName("uno")[i].onclick = function(){
        
        this.style.backgroundColor="red";
        
    }}
    
     for(var i=0;i<document.getElementsByClassName("dos").length;i++){
    
    document.getElementsByClassName("dos")[i].onclick = function(){
        
        this.style.backgroundColor="green";
        
    }}
    
     for(var i=0;i<document.getElementsByClassName("tres").length;i++){
    
    document.getElementsByClassName("tres")[i].onclick = function(){
        
        this.style.backgroundColor="yellow";
        
    }}
    
}