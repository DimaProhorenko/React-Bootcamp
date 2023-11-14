import { NavLink } from 'react-router-dom';
import { Logo } from '../';
import styles from './PageNav.module.css';

function PageNav() {
	return (
		<nav className={styles.nav}>
			<Logo />
			<ul className={styles.nav__list}>
				<li>
					<NavLink to="/" className={styles.nav__link}>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to="/pricing" className={styles.nav__link}>
						Pricing
					</NavLink>
				</li>
				<li>
					<NavLink to="/product" className={styles.nav__link}>
						Product
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/login"
						className={`${styles.nav__link} cta-link`}
					>
						Login
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
export default PageNav;
