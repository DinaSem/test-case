import React from 'react';
import s from './header.module.scss'

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.header_logo}>LoremIpsum.<span className={s.header_logo_blue}>Net</span></div>
            <div className={s.header_menu}>
                <li className={s.header_menu_item}>Бизнес</li>
                <li className={s.header_menu_item}>О нас</li>
                <li className={s.header_menu_item}>Цены</li>
                <li className={s.header_menu_item}>Оформить заказ</li>
            </div>
        </div>
    );
};

