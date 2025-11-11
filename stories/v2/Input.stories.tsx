import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Input } from '../../src/components/v2/Input/Index';

// Example icons for demonstrations
const SearchIcon =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjUgMTRIMTQuNzFMMTQuNDMgMTMuNzNDMTUuNDEgMTIuNTkgMTYgMTEuMTEgMTYgOS41QzE2IDUuOTEgMTMuMDkgMyA5LjUgM0M1LjkxIDMgMyA1LjkxIDMgOS41QzMgMTMuMDkgNS45MSAxNiA5LjUgMTZDMTEuMTEgMTYgMTIuNTkgMTUuNDEgMTMuNzMgMTQuNDNMMTQuMTQgMTQuNzFWMTUuNUwxOSAyMC40OUwyMC40OSAxOUwxNS41IDE0Wk05LjUgMTRDNy4wMSAxNCA1IDExLjk5IDUgOS41QzUgNy4wMSA3LjAxIDUgOS41IDVDMTEuOTkgNSAxNCA3LjAxIDE0IDkuNUMxNCAxMS45OSAxMS45OSAxNCA5LjUgMTRaIiBmaWxsPSIjNzU3Njc4Ii8+Cjwvc3ZnPgo=';

const UserIcon =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDEyQzE0LjIxIDEyIDE2IDEwLjIxIDE2IDhDMTYgNS43OSAxNC4yMSA0IDEyIDRDOS43OSA0IDggNS43OSA4IDhDOCAxMC4yMSA5Ljc5IDEyIDEyIDEyWk0xMiAxNEMxMCAxNCA0IDE1IDE0IDE3VjIwSDIwVjE3QzIwIDE1IDEzLjk5IDE0IDEyIDE0WiIgZmlsbD0iIzc1NzY3OCIvPgo8L3N2Zz4K';

const EmailIcon =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwIDRINEMyLjkgNCAyLjAxIDQuOSAyLjAxIDZMMiAxOEMyIDE5LjEgMi45IDIwIDQgMjBIMjBDMjEuMSAyMCAyMiAxOS4xIDIyIDE4VjZDMjIgNC45IDIxLjEgNCAyMCA0Wk0yMCA4TDEyIDEzTDQgOFY2TDEyIDExTDIwIDZWOFoiIGZpbGw9IiM3NTc2NzgiLz4KPC9zdmc+Cg==';

const meta: Meta<typeof Input> = {
  title: 'v2/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A customizable input component with support for icons, clear button, labels, and error messages. Extends all standard HTML input attributes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: { type: 'text' },
      description: 'Additional CSS class names for styling',
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'The type of input field',
    },
    iconLeft: {
      control: { type: 'text' },
      description: 'URL of the icon to display on the left side',
    },
    iconRight: {
      control: { type: 'text' },
      description: 'URL of the icon to display on the right side',
    },
    iconSize: {
      control: { type: 'number' },
      description: 'Size of the icons in pixels',
    },
    clearButton: {
      control: { type: 'boolean' },
      description: 'Whether to display a clear button',
    },
    label: {
      control: { type: 'text' },
      description: 'Label text or element for the input',
    },
    errorMessage: {
      control: { type: 'text' },
      description: 'Error message text or element to display',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the input is required',
    },
    showErrorMessage: {
      control: { type: 'boolean' },
      description: 'Whether to display the error message',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the input is disabled',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text for the input',
    },
    initialValue: {
      control: { type: 'text' },
      description: 'Initial value of the input',
    },
  },
  args: {
    type: 'text',
    iconSize: 24,
    clearButton: false,
    showErrorMessage: true,
    disabled: false,
    placeholder: 'Enter text...',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'John Doe',
  },
};

export const Required: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'your.email@example.com',
    required: true,
    type: 'email',
  },
};

export const WithError: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    errorMessage: 'Username is already taken',
    required: true,
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    iconLeft: SearchIcon,
    iconSize: 20,
  },
};

export const WithRightIcon: Story = {
  args: {
    label: 'Email',
    placeholder: 'your.email@example.com',
    iconRight: EmailIcon,
    iconSize: 20,
    type: 'email',
  },
};

export const WithClearButton: Story = {
  args: {
    label: 'Search',
    placeholder: 'Type to search...',
    iconLeft: SearchIcon,
    clearButton: true,
    initialValue: 'Sample text',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot edit this',
    disabled: true,
    initialValue: 'Read only value',
  },
};

export const PasswordInput: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    required: true,
  },
};

export const NumberInput: Story = {
  args: {
    label: 'Age',
    type: 'number',
    placeholder: '18',
  },
};

export const AllStates: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        width: '400px',
      }}
    >
      <Input label="Default" placeholder="Default input" />

      <Input
        label="With Left Icon"
        placeholder="Search..."
        iconLeft={SearchIcon}
        iconSize={20}
      />

      <Input
        label="With Clear Button"
        placeholder="Type to clear..."
        iconLeft={SearchIcon}
        clearButton
        initialValue="Sample text"
      />

      <Input label="Required Field" placeholder="Required field" required />

      <Input
        label="With Error"
        placeholder="Invalid input"
        errorMessage="This field has an error"
        required
      />

      <Input
        label="Disabled"
        placeholder="Disabled input"
        disabled
        initialValue="Cannot edit"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'A comprehensive display of all input states and configurations.',
      },
    },
  },
};

export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      password: '',
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const newErrors: Record<string, string> = {};

      if (!formData.name) {
        newErrors.name = 'Name is required';
      }
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
      if (!formData.password || formData.password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters';
      }

      setErrors(newErrors);

      if (Object.keys(newErrors).length === 0) {
        // eslint-disable-next-line no-alert
        alert('Form submitted successfully!');
      }
    };

    return (
      <form onSubmit={handleSubmit} style={{ width: '400px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Input
            label="Full Name"
            placeholder="John Doe"
            required
            iconLeft={UserIcon}
            iconSize={20}
            initialValue={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            errorMessage={errors.name}
          />

          <Input
            label="Email Address"
            type="email"
            placeholder="your.email@example.com"
            required
            iconLeft={EmailIcon}
            iconSize={20}
            initialValue={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            errorMessage={errors.email}
          />

          <Input
            label="Phone Number"
            type="tel"
            placeholder="+1 (555) 123-4567"
            initialValue={formData.phone}
            onChange={e => setFormData({ ...formData, phone: e.target.value })}
            clearButton
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter password"
            required
            initialValue={formData.password}
            onChange={e =>
              setFormData({ ...formData, password: e.target.value })
            }
            errorMessage={errors.password}
          />

          <button
            type="submit"
            style={{
              padding: '12px 24px',
              backgroundColor: '#0379ce',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 500,
              marginTop: '8px',
            }}
          >
            Submit Form
          </button>
        </div>
      </form>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'A complete form example demonstrating validation, icons, clear buttons, and error handling.',
      },
    },
  },
};

export const InteractiveSearch: Story = {
  render: () => {
    const [searchValue, setSearchValue] = useState('');
    const items = [
      'Apple',
      'Banana',
      'Cherry',
      'Date',
      'Elderberry',
      'Fig',
      'Grape',
      'Honeydew',
    ];
    const filteredItems = items.filter(item =>
      item.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
      <div style={{ width: '400px' }}>
        <Input
          label="Search Fruits"
          placeholder="Type to search..."
          iconLeft={SearchIcon}
          clearButton
          initialValue={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
        <div
          style={{
            marginTop: '16px',
            padding: '12px',
            border: '1px solid #e0e0e0',
            borderRadius: '4px',
            minHeight: '150px',
          }}
        >
          <div
            style={{ fontSize: '14px', color: '#757678', marginBottom: '8px' }}
          >
            {filteredItems.length} result{filteredItems.length !== 1 ? 's' : ''}
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {filteredItems.map(item => (
              <li
                key={item}
                style={{
                  padding: '8px 0',
                  borderBottom: '1px solid #f0f0f0',
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'An interactive search example with real-time filtering and clear button.',
      },
    },
  },
};
