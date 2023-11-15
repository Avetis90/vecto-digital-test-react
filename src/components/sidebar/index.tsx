import React, {useState} from 'react';

import styles from './sidebar.module.scss'
import routes, {links} from "../../config/routes.config";
import MenuItem, {AvatarItem, MenuFooterLink, MenuSearch} from "./menu-item";
import cn from "classnames";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={cn(styles.sidebar, {[styles.expanded]: expanded})}>
      <div className={styles.overlay}></div>
      <div className={styles.content} onMouseEnter={() => setExpanded(true)} onMouseLeave={() => setExpanded(false)}>
        <AvatarItem />
        <MenuSearch/>
        {routes.map(({meta, path}, index) => <MenuItem {...meta} to={path} key={meta.title}/>)}
        <div className={styles.menuFooterLinks}>
          {links.map(({title, path}) => <MenuFooterLink key={title} to={path} title={title}/>)}
        </div>
      </div>
      
    </div>
  );
};

export default Sidebar;
