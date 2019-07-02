import React from 'react';
import Home from './Home';
import { create } from 'react-test-renderer';

describe('Home', () => {
    test('should match snapshot', () => {
        const component = create(<Home />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
