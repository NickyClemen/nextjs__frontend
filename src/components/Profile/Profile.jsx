import React, { useState } from 'react';

import { BsPen } from 'react-icons/bs'
import { HiOutlineBookOpen } from 'react-icons/hi';
import {
    IoApps,
    IoChatbubbleOutline,
    IoFlagOutline,
    IoLibrary,
    IoMedal,
    IoMenu,
    IoNotificationsOutline,
    IoSearch
} from 'react-icons/io5';

import Card from '../Card/Card';

import stylesProfile from './Profile.module.css';

const Profile = ({ userProfile, books }) => {
    const [bookReaded, bookReading, bookToRead, abandonedBook] = books;
    const [book, setBook] = useState(bookReaded);
    const [status, setStatus] = useState('Leído');

    return (
        <div className={ stylesProfile.user_profile__component }>
            <header className={ stylesProfile.header__component }>
                <nav className={ stylesProfile.nav__component }>
                    <div className={ stylesProfile.nav_list__container }>
                        <ul className={ stylesProfile.nav_list__ul }>
                            <li>
                                <IoMenu />
                            </li>

                            <li>
                                <form action="">
                                    <input
                                        className={ stylesProfile.input__search }
                                        type="text"
                                        placeholder="Buscar"
                                    />
                                </form>
                            </li>

                            <li><small>Búsqueda avanzada</small></li>

                            <li>
                                <IoNotificationsOutline />
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className={ stylesProfile.user_profile__section }>
                    <div className={ stylesProfile.user_profile__container }>
                        <div className={ stylesProfile.user_profile__info }>
                            <div className={ stylesProfile.user_profile__photo }></div>

                            <div className={ stylesProfile.user_profile__text }>
                                <ul>
                                    <li>
                                        <strong>{ userProfile.username }</strong>
                                    </li>

                                    <li>
                                        <small>{ userProfile.age } años</small>
                                    </li>

                                    <li>
                                        <small>Editar géneros favoritos</small>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={ stylesProfile.user_profile__btn_group }>
                            <button
                                type="button"
                                className={ stylesProfile.btn__invitar__amigos }
                            ><span>Invitar amigos</span></button>
                        </div>
                    </div>

                    <div>
                        <ul className={ stylesProfile.user_profile__list }>
                            <li className={ stylesProfile.user_profile__list_item }>
                                <strong>7</strong>
                                <small>libros</small>
                            </li>

                            <li className={ stylesProfile.user_profile__list_item }>
                                <strong>2</strong>
                                <small>reseñas</small>
                            </li>

                            <li className={ stylesProfile.user_profile__list_item }>
                                <strong>86</strong>
                                <small>seguidores</small>
                            </li>

                            <li className={ stylesProfile.user_profile__list_item }>
                                <strong>96</strong>
                                <small>seguidos</small>
                            </li>

                            <li className={ stylesProfile.user_profile__list_item }>
                                <strong>2</strong>
                                <small>listas</small>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <ul className={ stylesProfile.user_profile__list }>
                            <li>
                                <button
                                    type="type"
                                    className={ stylesProfile.btn__user_profile }
                                ><HiOutlineBookOpen /><small>Mis eBooks</small></button>
                            </li>

                            <li>
                                <button
                                    type="type"
                                    className={ stylesProfile.btn__user_profile }
                                ><BsPen /><small>Mis textos</small></button>
                            </li>

                            <li>
                                <button
                                    type="type"
                                    className={ stylesProfile.btn__user_profile }
                                ><IoFlagOutline /><small>Retos de lectura</small></button>
                            </li>
                        </ul>
                    </div>

                    <div className={ stylesProfile.user_profile__list_container }>
                        <ul className={ stylesProfile.user_profile__list }>
                            <li className={ stylesProfile.user_profile__list_li }>
                                <button
                                    type="button"
                                    className={ stylesProfile.btn_user_profile__list }
                                    onClick={ e => {
                                        setBook(bookReaded)
                                        setStatus('Leído')
                                    } }
                                >Leídos ({ bookReaded.length })</button>
                            </li>

                            <li className={ stylesProfile.user_profile__list_li }>
                                <button
                                    type="button"
                                    className={ stylesProfile.btn_user_profile__list }
                                    onClick={ e => {
                                        setBook(bookReading)
                                        setStatus('Leyendo')
                                    } }
                                >Leyendo ({ bookReading.length })</button>
                            </li>

                            <li className={ stylesProfile.user_profile__list_li }>
                                <button
                                    type="button"
                                    className={ stylesProfile.btn_user_profile__list }
                                    onClick={ e => {
                                        setBook(bookToRead)
                                        setStatus('Por leer')
                                    } }
                                >Por leer ({ bookToRead.length })</button>
                            </li>

                            <li className={ stylesProfile.user_profile__list_li }>
                                <button
                                    type="button"
                                    className={ stylesProfile.btn_user_profile__list }
                                    onClick={ e => {
                                        setBook(abandonedBook)
                                        setStatus('Abandonado')
                                    } }
                                >Abandonados ({ abandonedBook.length })</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>

            <main className={ stylesProfile.main__component }>
                {
                    book.map(
                        (book, i) => (
                            <Card
                                key={ i }
                                genres={ book.genres }
                                title={ book.title }
                                author={ book.author }
                                imageSrc={ book.image }
                                status={status}
                            />
                        )
                    )
                }
            </main>

            <footer className={ stylesProfile.footer__container }>
                <div className={ stylesProfile.footer__container__list_section }>
                    <ul className={ stylesProfile.footer__container__list }>
                        <li>
                            <IoApps />
                        </li>

                        <li>
                            <IoLibrary />
                        </li>

                        <li>
                            <IoMedal />
                        </li>

                        <li>
                            <IoChatbubbleOutline />
                        </li>

                        <li>
                            <IoSearch />
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Profile;