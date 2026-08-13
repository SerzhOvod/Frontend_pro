import { Navigation } from './navigation';
import ChangeColorButton from '../Buttons/ChangeColorButton';

export function Header() {
  return (
    <header className="header">
      <Navigation />
      <ChangeColorButton />
    </header>
  );
}
