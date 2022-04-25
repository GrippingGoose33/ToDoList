import React from 'react';

const List = props => {
    
    const {item, markAsCompleted, removeTask, unComplete} = props;

    return (
        <div>
            <ul>
                {
                    props.items.map( (item, key) => (
                        <li 
                            key={key} 
                            className={item.complete ? 'complete' : 'pending'}
                            >
                            {item.task}
                            <div className = 'actions'>
                                <span 
                                    className={item.complete ? 'uncheck' : 'check'}
                                    onClick = {() => markAsCompleted(item.id)}
                                >
                                    <i className={item.complete ? 'fa-solid fa-x' : 'fa fa-check'}></i>
                                </span>
                                <span className='trash'
                                    onClick = {() => removeTask(item.id)}
                                >
                                    <i className='fa fa-trash'></i>
                                </span>
                                <span className='reset'
                                    onClick = {() => unComplete(item.id)}
                                >
                                    <i className='fa fa-repeat'></i>
                                </span>
                            </div>
                        </li>
                    ) )
                }
            </ul>
        </div>
    );
}

export default List;