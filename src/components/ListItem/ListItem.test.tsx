import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ListItem from './ListItem';

const args = {
  id: 1,
  name: "Harrison Ford",
  avatar: "test",
  reputation: 5000,
  isBlocked: false,
  isFollowed: false,
  onBlockClick: jest.fn(),
  onFollowClick: jest.fn()
}

describe("List Item", () => {
  test('renders default list item', () => {
    render(<ListItem {...args} />);

    const component = screen.getByTestId('list-item');
    const avatarElement = screen.getByTestId('list-item-avatar');
    const nameElement = screen.getByTestId('list-item-name');
    const reputationElement = screen.getByTestId('list-item-reputation');
    const expandedElement = screen.queryByTestId('list-item-expanded-section');

    expect(component).toBeVisible();
    expect(component).toBeInTheDocument();

    expect(avatarElement).toBeVisible();
    expect(avatarElement).toHaveAttribute('src', 'test');
    
    expect(nameElement).toBeVisible();
    expect(nameElement).toHaveTextContent(args.name);

    expect(reputationElement).toBeVisible();
    expect(reputationElement).toHaveTextContent(args.reputation.toString());

    expect(expandedElement).not.toBeInTheDocument();
  });

  test('renders blocked list item', () => {
    render(<ListItem {...args} isBlocked={true} />);

    const component = screen.getByTestId('list-item');
  
    expect(component).toBeVisible();
    expect(component).toHaveClass('blocked');
  });

  test('renders followed list item', () => {
    render(<ListItem {...args} isFollowed={true} />);

    const component = screen.getByTestId('list-item');
    const followIconElement = screen.getByTestId('list-item-followed-icon');
  
    expect(component).toBeVisible();

    expect(followIconElement).toBeVisible();
  });
});
