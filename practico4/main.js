// Ejercicio 2

document.querySelector("#btnS16").addEventListener("click", ejercicioS16);

    function ejercicioS16() {

        let inputS16 = (document.querySelector("#inputS16").value);
        let textS16 = String(inputS16).toLowerCase();

        let textS16Sanetized = String();
        let textS16SanetizedInverted = String();


        for(let i = 0; i < textS16.length; i++){
            let newCharacter = String();
            switch(textS16[i]) {
                case "á":
                    newCharacter = "a";
                    textS16Sanetized = textS16Sanetized + newCharacter;
                  break;
                  case "é":
                    newCharacter = "e";
                    textS16Sanetized = textS16Sanetized + newCharacter;
                  break;
                  case " ":
                    newCharacter = "";
                    textS16Sanetized = textS16Sanetized + newCharacter;
                  break;
                default:
                    textS16Sanetized = textS16Sanetized + textS16[i];
              }
        }

        let lenghtinvertedStart = textS16Sanetized.length -1;

        for(let y = lenghtinvertedStart; y >= 0; y--){
           
            textS16SanetizedInverted = textS16SanetizedInverted + textS16Sanetized[y];

        }

        console.log(textS16SanetizedInverted);

        if(textS16Sanetized === textS16SanetizedInverted){
            
            document.querySelector("#resultadoS16").innerHTML = "SI!"
        }else{
            document.querySelector("#resultadoS16").innerHTML = "Nooo"
        }

    }
