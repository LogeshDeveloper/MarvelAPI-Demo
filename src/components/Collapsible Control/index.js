import React , {Component} from 'react';
import {
    CollapsibleComponent,
    CollapsibleHead,
    CollapsibleContent
} from "react-collapsible-component";
import Charts from '../Charts'


export default class Collapsible extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <CollapsibleComponent>
                    <CollapsibleHead className="additionalClassForHead">
                       Graph
                    </CollapsibleHead>
                    <CollapsibleContent className="additionalClassForContent">
                        <Charts/>
                    </CollapsibleContent>
                </CollapsibleComponent>
            </div>
        );
    }
}