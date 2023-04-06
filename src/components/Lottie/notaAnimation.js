import nota from './nota.json';
import Lottie from 'react-lottie';
function Nota(){
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: nota
    }
    return <Lottie 
            options={defaultOptions}
            width={360}
            height={400}
          />
}

export default Nota;