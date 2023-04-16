import './Rodape.css'

const Rodape = () => {
    return (
        <footer>
            <div className='icons'>
                <img src='/images/fb.png' alt='Logo do Facebook'></img> 
                <img src='/images/tw.png' alt='Logo do Twitter'></img>
                <img src='/images/ig.png' alt='Logo do Instagram'></img>
            </div>
            <div>
                <img src='/images/logo.png' alt='Logo da marca Organo'></img>
            </div>
            <div className='dev'>
                Desenvolvido por Danilo Lacerda
            </div>
        </footer>
    )
}

export default Rodape