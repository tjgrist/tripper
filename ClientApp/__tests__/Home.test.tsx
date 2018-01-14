import * as React from 'react';
import Trip from '../components/TripEditor';
import { shallow } from 'enzyme';

describe('Home test suite', function() {

    it('should render without throwing an error', function() {
      expect(shallow(<Trip />).contains(<div>Trip</div>)).toBe(true);
    });

});

