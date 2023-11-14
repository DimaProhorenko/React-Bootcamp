import { Outlet } from 'react-router-dom';
import { Logo, AppNav } from '..';
import styles from './Sidebar.module.css';

function index() {
	return (
		<div className={styles.sidebar}>
			<Logo />
			<AppNav />
			<Outlet />
			<footer className={styles.footer}>
				<p className={styles.copyright}>
					&copy; Copyright {new Date().getFullYear()} by WorldWise
					Inc.
				</p>
			</footer>
		</div>
	);
}
export default index;
