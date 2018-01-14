import * as React from 'react';
import Trip from '../components/Trip';
import { shallow } from 'enzyme';

describe('A suite', function() {
    it('should render without throwing an error', function() {
      expect(shallow(<Trip />).contains(<div>Trip</div>)).toBe(true);
    });

});

