import Image from 'next/image';

import { BsFillStarFill, BsThreeDotsVertical } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';

import cardStyles from './Card.module.css';

const Card = ({ srcImage, genres, title, author, status }) => {
    return (
        <div className={ cardStyles.card__component }>
            <div className={ cardStyles.card__container }>
                <section>
                    <Image
                        className={ cardStyles.card__img_portada }
                        src={srcImage}
                        alt=""
                    />
                </section>

                <section className={ cardStyles.libro_descrip__container }>
                    <div>
                        <small>{genres}</small>
                        <h3>{title}</h3>
                        <small>{author}</small>

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
                            <span>{status}</span><IoIosArrowDown />
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Card;