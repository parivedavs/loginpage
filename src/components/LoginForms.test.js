import React from "react";
import {render, screen, fireEvent} from '@testing-library/react';
import LoginForms from "./LoginForms";

test('renders login form', () => {
    render(<LoginForms onLogin={() => {}} />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/login/i)).toBeInTheDocument();
});

test('shows error when fields are empty', () => {
    render(<LoginForms onLogin={() => {}} />)
    fireEvent.click(screen.getByText(/login/i));
    expect(screen.getByText(/email and password are required/i)).toBeInTheDocument();
});

test('calls onLogin with email and password', () => {
    const mockLogin = jest.fn();
    render(<LoginForms onLogin={mockLogin} />);

    fireEvent.change(screen.getByLabelText(/email/i), {
        target: {value: 'test@example.com'},
    });

    fireEvent.change(screen.getByLabelText(/password/i), {
        target: {value: 'password123'},
    });

    fireEvent.click(screen.getByText(/login/i));

    expect(mockLogin).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123',
    });
});