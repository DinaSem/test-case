import React from 'react';
import s from './main.module.scss'

export const Main = () => {
    return (
        <div className={s.main}>
            <div className={s.main_text}>
                <div className={s.main_text_title}>Lorem ipsum <span className={s.main_text_title_black}>dolor sit ametconsectetur </span>adipiscing
                </div>
                <div className={s.main_text_infoTitle}>
                    <ul className={s.main_text_infoTitle_items}>
                        <h3>At vero eos et accusamus et iusto odio dignissimos ducimus!</h3>
                        <li>- Totam rem aperiam eaque ipsa</li>
                        <li>- Sit voluptatem accusantium doloremque laudantium</li>
                        <li>- Sed ut perspiciatis, unde omnis iste natus error</li>
                    </ul>
                </div>
                <div className={s.main_buttonBlock}>
                    <button className={s.main_main_buttonBlock_button}>заказать</button>
                    <button className={s.main_main_buttonBlock_button}>подробнее</button>
                </div>
            </div>



        </div>
    );
};

