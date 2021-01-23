import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as MainImage} from '../../core/assets/Images/main-image.svg';
import ButtonIcon from '../../core/components/ButtonIcon';
import './styles.scss';

function Home(){
    return(
        <div className="home-container">
            <div className="row home-content card-base border-radius-20">
                <div className="col-6">
                    <h1 className="text-title">
                        Conheça o melhor <br />catálogo de produtos
                    </h1>
                    <p className="text-subtitle">Ajudaremos você a encontrar os melhores <br /> produtos disponíveis no mercado.</p>
                    <Link to="/catalog">
                    <ButtonIcon text = "inicie a sua buscar"/>
                    </Link>
                </div>
                <div className="col-6">
                <MainImage className="main-image" />
                </div> 
            </div>
        </div>

    )
}

export default Home