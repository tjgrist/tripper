import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import TripEditor from './TripEditor';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return (
            <div className="col-lg-12">
                <h3>Trip Calculator <small> Each student must have at least one expense</small></h3>
                <TripEditor/>
            </div>
        )
    }
}
