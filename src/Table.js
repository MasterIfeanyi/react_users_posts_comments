import Row from './Row'
import Head from './Head'

const Table = ({ listItems }) => {
    return (
        <div className="table-container">
            <table>
                <thead>
                    {<Head listItems={listItems} />}
                </thead>
                <tbody>
                    {listItems.map(item => (
                        <Row key={item.id} item={item} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
