import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface Props {
    page: number;
    resultLength: number;
    onClick: Function;
}

export class Paginate extends React.Component<Props, {}> {

    constructor(props) {
        super(props);
    }

    render() {
        const { onClick, page, resultLength, } = this.props;
        return (
            <div style={{display: 'flex', paddingTop: '5px', }}>
                <div style={{ flex: '1', }}>
                    <input
                        id='prev'
                        type='button'
                        className='btn'
                        disabled={page < 2}
                        onClick={onClick.bind(null, page - 1)}
                        value='Previous' />
                </div>
                <div style={{ flex: '1', textAlign: 'right', }}>
                    <input
                        id='next'
                        type='button'
                        className='btn'
                        disabled={page > 3 || page === 0 || ((page + 1) * 5) > resultLength }
                        onClick={onClick.bind(null, page + 1)}
                        value='Next' />
                </div>
            </div>
        );
    }
}
