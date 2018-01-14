import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import TripEditor from './TripEditor';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return (
            <div>
                <TripEditor/>
            </div>
        )
    }
}
