import * as React from 'react';
import { Card } from './Card';
import { observer } from 'mobx-react';
import { preventScrollPropagation } from '../../utils/HelperFunctions';

interface Props extends React.HTMLProps<HTMLElement> {
    readonly items: CSL.Data[];
    readonly selectedItems: string[];
    click: (id: string, isSelected: boolean) => void;
    toggle: (id: string, explode?: boolean) => void;
    isOpen: boolean;
    maxHeight: string;
}

@observer
export class ItemList extends React.PureComponent<Props, {}> {

    singleClick = () => {
        this.props.toggle(this.props.id);
    }

    doubleClick = () => {
        this.props.toggle(this.props.id, true);
    }

    render() {
        const { items, selectedItems, click, children, isOpen, maxHeight, id } = this.props;
        if (!items) return null;
        return (
            <div>
                <div className="group-label" role="menubar" onClick={this.singleClick} onDoubleClick={this.doubleClick}>
                    <div className="label" children={children} />
                    <div className="badge" children={items.length} />
                </div>
                { isOpen &&
                    <Items
                        id={id}
                        style={{maxHeight}}
                        items={items}
                        selectedItems={selectedItems}
                        click={click}
                    />
                }
            </div>
        );
    }
}

interface ItemsProps extends React.HTMLProps<HTMLElement> {
    readonly items: CSL.Data[];
    readonly selectedItems: string[];
    readonly click: (id: string, isSelected: boolean) => void;
}

@observer
class Items extends React.Component<ItemsProps, {}> {

    element: HTMLDivElement;
    handleScroll = preventScrollPropagation.bind(this);

    bindRefs = (c: HTMLDivElement) => {
        this.element = c;
    }

    render() {
        return (
            <div
                ref={this.bindRefs}
                onWheel={this.handleScroll}
                id={this.props.id}
                className="list"
                style={this.props.style}
            >
                {
                    this.props.items.map(r =>
                        <Card
                            key={r.id}
                            CSL={r}
                            isSelected={this.props.selectedItems.indexOf(r.id) > -1}
                            id={r.id}
                            click={this.props.click}
                        />
                    )
                }
            </div>
        );
    }
}
