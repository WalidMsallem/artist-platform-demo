import React, { useState } from 'react'
import Bandwidth from '../Bandwidth'
import Concurrent from '../Concurrent'
import AggregatedStatsByCountries from '../AggregatedStatsByCountries'

import MultiSelect from '../shared/MultiSelect'
import './style.scss'
export default function LandingPage(): JSX.Element {
  const chartsList = [
    {
      value: 'Bandwidth',
      label: 'Bandwidth',
    },
    {
      value: 'Concurrent',
      label: 'Concurrent',
    },
    {
      value: 'AggregatedStatsByCountries',
      label: 'Aggregated Stats',
    },
  ]
  const [charts, setCharts] = useState(chartsList)
  const findChartName = (name: string) => charts.find((el) => el.value === name)

  return (
    <div className="landing-page">
      <div className="landing-page__multi-select-section">
        <div className="landing-page__multi-select-section__label">
          Please select the chart you want to display
        </div>
        <MultiSelect
          options={chartsList}
          value={charts}
          onChange={setCharts}
          listTitle={'charts'}
          labelledBy="charts"
        />
      </div>
      {findChartName('Bandwidth') && <Bandwidth />}
      {findChartName('Concurrent') && <Concurrent />}
      {findChartName('AggregatedStatsByCountries') && (
        <AggregatedStatsByCountries />
      )}
    </div>
  )
}
