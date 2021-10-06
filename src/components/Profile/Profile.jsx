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

const Profile = () => {
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
            </header>

            <main className={ stylesProfile.main__component }>
                <div className={ stylesProfile.user_profile__container }>
                    <div className={ stylesProfile.user_profile__info }>
                        <div className={ stylesProfile.user_profile__photo }></div>

                        <div className={ stylesProfile.user_profile__text }>
                            <ul>
                                <li>
                                    <strong>clemenicky</strong>
                                </li>

                                <li>
                                    <small>30 años</small>
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

                <div>
                    <ul className={ stylesProfile.user_profile__list }>
                        <li><p>Leídos</p></li>
                        <li><p>Leyendo</p></li>
                        <li><p>Por leer</p></li>
                        <li><p>Abandonado</p></li>
                    </ul>
                </div>

                <div className={ stylesProfile.lista_libros__container }>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
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