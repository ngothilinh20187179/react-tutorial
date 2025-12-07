// List - Index - Id Keys
import { useState } from "react";

interface Item {
    id: number;
    name: string;
    color: string;
}

interface ItemComponentProps {
    item: Item;
    index: number;
    useIndexAsKey: boolean;
}

const ItemComponent: React.FC<ItemComponentProps> = ({ item, index, useIndexAsKey }) => {

    const listItemContent = (
        <>
            <span style={{ minWidth: '20px', display: 'inline-block' }}>{item.id}-</span>
            <span style={{ minWidth: '60px', display: 'inline-block' }}>{item.name}</span>
            <span style={{ fontStyle: 'italic', color: '#61dafb', marginRight: '10px' }}>[Key: {useIndexAsKey ? index : item.id}]</span>
        </>
    );

    if (!useIndexAsKey) {
        return <li key={item.id}>{listItemContent}</li>;
    }
    return <li key={index}>{listItemContent}</li>;
};


const initialItems = [
    { id: 1, name: 'Red', color: '#E57373' },
    { id: 2, name: 'Green', color: '#81C784' },
    { id: 3, name: 'Blue', color: '#64B5F6' },
];

const ReactList = () => {
    const [items, setItems] = useState(initialItems);

    const handleReorder = () => {
        const [first, ...rest] = items;
        setItems([...rest, first]);
    };

    const handleReset = () => {
        setItems(initialItems);
    };


    return (
        <>
            <h2>React Lists Keys Demonstration</h2>

            <div style={{ display: 'flex' }}>
                <div style={{ border: '1px solid #E57373', padding: '15px' }}>
                    <h3>❌ Index Key (Problem)</h3>
                    <ul>
                        {items.map((item, index) => (
                            <ItemComponent key={index} item={item} index={index} useIndexAsKey={true} />
                        ))}
                    </ul>
                </div>

                <div style={{ border: '1px solid #81C784', padding: '15px' }}>
                    <h3>✅ ID Key (Correct)</h3>
                    <ul>
                        {items.map((item, index) => (
                            <ItemComponent key={item.id} item={item} index={index} useIndexAsKey={false} />
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                <button onClick={handleReorder}>
                    🔄 Reorder List (Move First to Last)
                </button>
                <button onClick={handleReset}>
                    ↩️ Reset List
                </button>
            </div>
        </>
    );
};
export default ReactList;