import { Title } from "@mantine/core";
import * as s from "./Header.css";
import { ColorSchemeToggle } from './components/ColorSchemeToggle/ColorSchemeToggle';

export function Header() {
	return (
		<section className={s.wrapper} >
			<Title className={s.title} ta="center" mt={100}>
				header
			</Title>
			<ColorSchemeToggle />
		</section>
	);
}
