import React, {useState} from 'react';

import styles from '../sidebar.module.scss'
import {NavLink} from "react-router-dom";
import cn from "classnames";

interface MenuItemProps {
  title: string;
  icon?: string;
  to: string;
}


export const MenuSearch = () => {
  const [search, setSearch] = useState('')
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value) // or call some event
  }
  return (
    <label className={cn(styles.menuItem, styles.searchItem)}>
      <img className={styles.icon} src={`assets/icons/search.png`} alt="Search"/>
      <input className={cn(styles.searchInput,styles.title)} type="text" onChange={onChange} value={search} placeholder="Search"/>
    </label>
  )
}

export const AvatarItem = () => {
  const name = 'Daniel'
  return (
    <div
      className={cn(styles.menuItem, styles.avatar)}
    >
      {<img className={styles.avatarIcon} src="assets/icons/avatar.png" alt={name}/>}
      <p className={styles.title}>{name}</p>
    </div>
  );
};

const MenuItem = ({title, icon, to}: MenuItemProps) => {
  return (
    <NavLink
      to={to}
      className={({isActive}) =>
        cn(styles.menuItem, {[styles.active]: isActive})
      }
    >
      {<img className={styles.icon} src={`assets/icons/${icon}`} alt={title}/>}
      <p className={styles.title}>{title}</p>
    </NavLink>
  );
};

export const MenuFooterLink = ({title, to}: MenuItemProps) => {
  return (
    <NavLink
      to={to}
      className={({isActive}) =>
        cn(styles.menuFooterLink, {[styles.active]: isActive})
      }
    >
      <p className={styles.title}>{title}</p>
    </NavLink>
  );
};

export default MenuItem;
