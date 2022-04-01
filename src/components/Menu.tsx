import TreeMenu, {ItemComponent} from 'react-simple-tree-menu';
import '../../node_modules/react-simple-tree-menu/dist/main.css';

import {Server} from "miragejs";
import {useState} from "react";
import {Link, MenuWrapper} from "./MenuStyled";

new Server({
    routes() {
        this.namespace = "api";
        this.get("/menu/", () => {
            return [
                {
                    key: 'first-level_1',
                    label: 'Node 1 at the first level',

                    nodes: [
                        {
                            key: 'second-level_1',
                            label: 'Node 1 at the second level',
                            url: '#',
                            nodes: [
                                {
                                    key: 'third-level_1',
                                    label: 'Last node of the branch',
                                    url: '#',
                                    nodes: []
                                },
                            ],
                        },
                    ],
                },
                {
                    key: 'first-level-node-2',
                    label: 'Node 2 at the first level',
                    url: '#',
                },
            ];
        });
    }
});

function Menu() {
    const [loading , setLoading] = useState(true)
    const [treeData , setTreeData] = useState([])



    if (loading) {
        fetch("/api/menu/")
            .then(response => {
                if (!response.ok) throw Error(response.statusText);
                return response.json();
            })
            .then(json => {
                setLoading(false)
                setTreeData(json)
            });
        return <p>Loading...</p>
    }
    else return (
        <div className="App">
            <TreeMenu data={treeData}>
                {({ items }) => (
                    <MenuWrapper>
                        {items.map(({key, ...props}) => (
                            <Link href={props.url}> <ItemComponent key={key} {...props} /></Link>
                        ))}
                    </MenuWrapper>
                )}
            </TreeMenu>
        </div>
    );

}

export default Menu;