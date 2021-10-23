const Head = ({ listItems }) => {
    return (
        <>
            {Object.values(listItems).map((item, index) => (
                index === 0 &&
            Object.keys(item).map(item =>
               <th>{JSON.stringify(item)}</th>
            )
            ))
            }
        </>
    )
}

export default Head
