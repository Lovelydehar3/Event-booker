import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

/**
 * Password input field with an accessible visibility toggle button.
 */
const PasswordInput = ({ value, onChange, className = '', ...props }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative">
            <input
                type={showPassword ? 'text' : 'password'}
                value={value}
                onChange={onChange}
                className={`${className} pr-11`}
                {...props}
            />
            <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-gray-800 focus:outline-none"
            >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </button>
        </div>
    );
};

export default PasswordInput;
