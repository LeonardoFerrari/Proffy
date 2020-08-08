import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
    return (
    <article className="teacher-item">
                    <header>
                        <img src="https://fauux.neocities.org/lainsmall2.gif" alt="Lain"/>
                    <div>
                        <strong>Leonardo Ferrari</strong>
                        <span>Geoquímica isotópica</span>
                    </div>
                    </header>

                    <p>
                        Simpatizante da ideia de descobrimento dos níveis de oxigênio de centenas de milhões de anos atrás. 
                        <br/>
                        Cientista de análises espectrométricas de massa de razão isotópica, afim de revelar informações sobre as idades e origens de corpos de rochas, ar ou água ou processos de mistura entre eles.
                    </p>
                    <footer>
                        <p>
                            Preço/hora 
                            <strong>R$ 74,00</strong>
                        </p>
                        <button>
                            <img src={whatsappIcon} alt="Icone whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}
export default TeacherItem;