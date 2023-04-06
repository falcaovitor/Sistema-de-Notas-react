import styles from './calculate.module.css';
import Input from '../components/input/input';
import imgSuccess from '../img/boa.gif';
import imgError from '../img/vish.gif';
import imgDependc from '../img/depende.jpg';
function Calculate(){

    function Calcular(){
        var campone = document.getElementById("a").value;
        var camptwo = document.getElementById("b").value;
        var camptree = document.getElementById("c").value;
        var campfour = document.getElementById("d").value;
        var camprova = document.getElementById("prova").value;
        var result = document.getElementById("resultado");
        var imagem = document.getElementById("no");
        if (campone.length === 0 || camptwo.length === 0 || camptree.length === 0 || campfour.length === 0 || camprova.length === 0)
        {
            alert("Não se esqueça de preencher todos os campos")
        }
        else
        {   
            if(isNaN(campone) || isNaN(camptwo) || isNaN(camptree) || isNaN(campfour) || isNaN(camprova)){
                alert('Nos campos devem ser inseridos números');
                return false;
            }
            //Atividades A1 até A4
            var formato = Number(parseFloat(campone)+parseFloat(camptwo)+parseFloat(camptree)+parseFloat(campfour))
            var div = (formato/4)*0.4
            //Prova
            var formato2 = Number(parseFloat(camprova))
            var div2 = formato2*0.6
               //Média final
            var media = div+div2
            //se passou AEEE se não.. 
            if(media >= 6)
            {
                result.innerText= 'Carregando...';
                setTimeout(function() {
                    let resultado = parseFloat(media.toFixed(2));
                    let string = resultado.toString();
                    let convert = string.replace('.', ',');
                    result.innerText = `Nota: ${convert} | Você Passou`;
                    imagem.src = imgSuccess;
                }, 1000);
                
            }
               else
            {
                result.innerText= 'Carregando...';
                setTimeout(function(){
                    let resultado = parseFloat(media.toFixed(2));
                    let string = resultado.toString();
                    let convert = string.replace('.', ',');
                    result.innerText = `Nota: ${convert} | Você não passou`;
                    imagem.src = imgError;
                } , 1000);
            }
        }
    }

    return(
        <div className={styles.container}>
            <div className={styles.inputs}>
                <h2>Atividades</h2>
                <Input type="text" placeholder="A1" id="a"/>
                <Input type="text" placeholder="A2" id="b"/>
                <Input type="text" placeholder="A3" id="c"/>
                <Input type="text" placeholder="A4" id="d"/>
                <h2>Prova N2 ou Substituta</h2>
                <Input id="prova" type="text" placeholder="PV" />
                <button onClick={Calcular}>Calcular</button>
            </div>
            <div className={styles.media}>
                <p id="resultado">Sua média aparecerá aqui</p>
            </div>
            <div className={styles.result}>
                <img src={imgDependc} id="no" alt="Resultados"/> 
            </div>
        </div>    
    );
}

export default Calculate;