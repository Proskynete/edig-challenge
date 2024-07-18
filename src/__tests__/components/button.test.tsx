import { describe } from 'node:test';

import { render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';

import Button from '../../components/Button';

describe('Button component', () => {
	test('renders correctly', () => {
		render(<Button>Hello</Button>);
		expect(screen.getByRole('button', { name: /Hello/i })).toBeDefined();
	});

	test('applies the primary appearance correctly', () => {
		render(<Button appearance="primary">Primary Button</Button>);
		const button = screen.getByRole('button', { name: /primary button/i });
		expect(button).toHaveProperty('className', expect.stringContaining('bg-slate-900'));
	});

	test('applies the danger appearance correctly', () => {
		render(<Button appearance="danger">Danger Button</Button>);
		const button = screen.getByRole('button', { name: /danger button/i });
		expect(button).toHaveProperty('className', expect.stringContaining('bg-red-900'));
	});

	test('applies the outline variant correctly', () => {
		render(<Button variant="outline">Outline Button</Button>);
		const button = screen.getByRole('button', { name: /outline button/i });
		expect(button).toHaveProperty('className', expect.stringContaining('bg-transparent border'));
	});

	test('applies the small size correctly', () => {
		render(<Button size="sm">Small Button</Button>);
		const button = screen.getByRole('button', { name: /small button/i });
		expect(button).toHaveProperty('className', expect.stringContaining('px-2 py-1 text-sm'));
	});

	test('is disabled when the disabled prop is true', () => {
		render(<Button disabled>Disabled Button</Button>);
		const button = screen.getByRole('button', { name: /disabled button/i });
		expect(button).toHaveProperty('disabled', true);
	});

	test('triggers function on click', async () => {
		const handleClick = vi.fn();
		render(<Button onClick={handleClick}>Click me</Button>);
		const button = screen.getByRole('button', { name: /click me/i });
		button.click();
	});
});
