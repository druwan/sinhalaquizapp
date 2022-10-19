import { render, screen } from '@testing-library/react';

import Navbar from '../components/Navbar/Navbar';

describe('HomePage', () => {
  it('renders a Navbar', () => {
    const { container } = render(<Navbar />);

    const navbar = screen.getByRole('heading', {
      name: 'Sinhala Quiz',
    });

    expect(navbar).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
