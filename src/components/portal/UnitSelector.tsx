import { usePortalSession } from '../../context/PortalSessionContext'
import './UnitSelector.css'

function UnitSelector() {
  const { units, unit, selectUnit } = usePortalSession()

  return (
    <div className="portal-unit">
      <label className="portal-unit__label" htmlFor="portal-unidade">
        Unidade
      </label>
      <select
        id="portal-unidade"
        className="portal-unit__select"
        value={unit?.id ?? ''}
        onChange={(event) => selectUnit(event.target.value)}
      >
        {units.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default UnitSelector
