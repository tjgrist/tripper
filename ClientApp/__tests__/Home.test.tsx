import * as React from 'react';
import TripEditor from '../components/TripEditor';
import { shallow } from 'enzyme';

describe('Home test suite', function() {

    it('should render without throwing an error', function() {
      expect(shallow(<TripEditor />).contains(<div>Trip</div>)).toBe(true);
    });

});

