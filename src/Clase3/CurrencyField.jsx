const CurrencyField = ({divisa, valor, onChange}) => {
    return (
        <div className="mb-3">
            <label className="form-label">{divisa}</label>
            <input type="text" className="form-control" value={valor} onChange={(e) => {onChange(e.target.value)}} />
        </div>
    )
}

export default CurrencyField