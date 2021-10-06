import {
    useState,
    useEffect,
    useRef
} from 'react';

import { useRouter } from 'next/router';
import Image from 'next/image';

import { login } from '../../lib/auth';

import loginStyles from './Login.module.css';

const Login = () => {
    const Router = useRouter();

    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const loginUser = async (user) => {
        const success = await login(user);
        return success;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        };

        try {
            const success = await loginUser(user);
            if(success) Router.push('/profile');
        } catch(error) {
            return error.message;
        }
    }

    return (
        <div className={ loginStyles.login__component }>
            <header className={ loginStyles.header__container }>
                <Image
                    src="https://cdn.alibrate.com/images/AlibrateLogoWhite.svg"
                    alt=""
                    width="100%"
                    height="100%"
                />
                <p>La app de los amantes de los libros.</p>
            </header>

            <main className={ loginStyles.main__container }>
                <form
                    onSubmit={ handleSubmit }
                    className={ loginStyles.form__container }
                >
                    <fieldset className={ loginStyles.fieldset__login__container }>
                        <legend>Iniciá sesión</legend>
                        <input
                            className={ loginStyles.inputClass }
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Ingresa usuario o email"
                            ref={ usernameRef }
                        />

                        <input
                            className={ loginStyles.inputClass }
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Ingresa tu contraseña"
                            ref={ passwordRef }
                        />

                        <input
                            type="submit"
                            className={ `${ loginStyles.inputClass } ${ loginStyles.disabled }` }
                            value={ `Iniciar sesión`.toUpperCase() }
                            /* disabled={ usernameRef === null && passwordRef === null } */
                        />
                    </fieldset>

                    <div className={ loginStyles.separator }>
                        <strong>¿Olvidaste tu contraseña?</strong>
                        <p className={ loginStyles.p__ingresa }>o ingresá con</p>
                    </div>


                    <fieldset className={ loginStyles.fieldset__social__container }>
                        <div className={ loginStyles.btn__group__container }>
                            <input
                                className={ `${ loginStyles.inputClass } ${ loginStyles.bnt__fb }` }
                                type="button"
                                value="Facebook"
                            />
                            <input
                                className={ `${ loginStyles.inputClass } ${ loginStyles.bnt__apple }` }
                                type="button"
                                value="Iniciar sesión son Apple"
                            />
                        </div>
                    </fieldset>
                </form>
            </main>

            <footer className={ loginStyles.footer__container }>
                <p>¿Aún no tenés cuenta? Regístrate</p>
            </footer>
        </div>
    );
}

export default Login;