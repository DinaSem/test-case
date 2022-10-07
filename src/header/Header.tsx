import React from 'react';
import s from './header.module.scss'

export const Header = () => {
    return (
        <section className={s.header}>
            <div className={s.header_logo}>
                LoremIpsum.<span className={s.header_logo_blue}>Net</span>
            </div>
            <input id={s.header_menu_toggle} type="checkbox"/>
            <label className={s.header_menu_button_container} htmlFor={s.header_menu_toggle}>
                <div className={s.header_menu_button}></div>
            </label>
            <ul className={s.header_menu}>
                <li className={s.header_menu_item}>Бизнес</li>
                <li className={s.header_menu_item}>О нас</li>
                <li className={s.header_menu_item}>Цены</li>
                <li className={s.header_menu_item}>Оформить заказ</li>
            </ul>
        </section>
    );
};

