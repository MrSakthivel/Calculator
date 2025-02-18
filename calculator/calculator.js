let output = document.getElementById("answer-display");

      function display(num){
        output.textContent += num ;
      }

      function answer(){
        try{
            output.textContent = eval(output.textContent);
        }
        catch(err){
            document.getElementById("answer-display").textContent="invalid";
        }

        
      }
      function clearDisplay(){
        output.textContent = "";
        
    }
    function del(){
        output.textContent = output.textContent.slice(0 ,-1);
    }