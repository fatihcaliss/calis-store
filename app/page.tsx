import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HeaderMegaMenu } from '@/components/HeaderMegaMenu/HeaderMegaMenu';

export default function HomePage() {
  return (
    <>
      <HeaderMegaMenu />
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
