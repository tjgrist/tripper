import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import TripEditor from './TripEditor';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return (
            <div className="col-lg-12">
                <h1>Trip Calculator</h1>
                <TripEditor/>
            </div>
        )
    }
}
