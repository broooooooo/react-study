import React from 'react';
import classNames from 'classnames/bind';
import styles from './CSSModule.module.css';

const cx = classNames.bind(styles);

const CSSModule = () => {
    console.log(styles)
    return (
        // <div className={styles.wrapper}>
        // 여러 클래스 사용할 경우
        // <div className={`${styles.wrapper} ${styles.inverted}`}>
        <div className={cx('wrapper', 'inverted')}>        
            안녕하세요, 저는 <span className="something">CSS Module!</span>
        </div>
    );
};

export default CSSModule;