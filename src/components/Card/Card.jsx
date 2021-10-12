import React from 'react';

import Image from 'next/image';

import { BsFillStarFill, BsThreeDotsVertical } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';

import cardStyles from './Card.module.css';

const Card = ({ genres, title, author, imageSrc, status }) => {
    return (
        <div className={ cardStyles.card__component }>
            <Image
                width={ 100 }
                height={ 150 }
                src={ imageSrc }
                alt={ title }
            />

            <section className={ cardStyles.libro_descrip__container }>
                <div className={ cardStyles.libro_informacion }>
                    <ul className={ cardStyles.libro_descrip__list }>
                        <li><small>{ genres.toUpperCase() }</small></li>
                        <li><h3>{ title.toUpperCase() }</h3></li>
                        <li><small>{ author.toUpperCase()}</small></li>
                    </ul>
                </div>

                <div className={ cardStyles.rating__container }>
                    <ul className={ cardStyles.rating__list }>
                        <li>
                            <div>
                                <BsFillStarFill />
                                <BsFillStarFill />
                                <BsFillStarFill />
                                <BsFillStarFill />
                                <BsFillStarFill />
                            </div>
                        </li>

                        <li>
                            <small>Calificación general: <strong>10,0</strong></small>
                        </li>

                        <li>
                            <button className={ cardStyles.btn_status_libro }>
                                <small>{ status }</small>
                                <span><IoIosArrowDown /></span>
                            </button>
                        </li>
                    </ul>
                </div>

                <div className={ cardStyles.puntos }>
                    <BsThreeDotsVertical />
                </div>
            </section>


        </div>
    );
};

export default Card;