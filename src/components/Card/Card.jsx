import Image from 'next/image';

import { BsFillStarFill, BsThreeDotsVertical } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';

import portadaLibro from '../../../public/assets/img/de-dios-portada.png';

import cardStyles from './Card.module.css';

const Card = () => {
    return (
        <div className={ cardStyles.card__component }>
            <div className={ cardStyles.card__container }>
                <section>
                    <Image
                        className={ cardStyles.card__img_portada }
                        src={portadaLibro}
                        alt=""
                    />
                </section>

                <section className={ cardStyles.libro_descrip__container }>
                    <div>
                        <small>VIAJES</small>
                        <h3>GUÍA COMPLETA DE NUEVA YORK</h3>
                        <small>DE DIOS, JULIAN</small>

                        <BsThreeDotsVertical />
                    </div>

                    <div>
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />

                        <small>Calificación general: <strong>10,0</strong></small>
                    </div>

                    <div>
                        <button>
                            <span>Leído</span><IoIosArrowDown />
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Card;