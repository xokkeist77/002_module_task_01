import ReactLogo from './assets/react.svg?react';
import { MyComponent } from './MyComponent';

import styles from './index.module.css';

export const App = () => {
	const date = new Date().getFullYear();
	return (
		<div className={styles.app}>
			<header className={styles.header}>
				<MyComponent />
				<p>{date} год</p>
			</header>
		</div>
	);
};
