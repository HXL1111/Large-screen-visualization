import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { createEchartsOptions } from '../shared/create-echarts-options'
import { px } from '../shared/px'

export const Chart4 = () => {
  const divRef = useRef(null)
  const data = [
    { time: 0, number: 0.15 },
    { time: 2, number: 0.11 },
    { time: 4, number: 0.13 },
    { time: 6, number: 0.14 },
    { time: 8, number: 0.16 },
    { time: 10, number: 0.17 },
    { time: 12, number: 0.18 },
    { time: 14, number: 0.19 },
    { time: 16, number: 0.13 },
    { time: 18, number: 0.16 },
    { time: 20, number: 0.15 },
    { time: 22, number: 0.14 },
    { time: 24, number: 0.15 },
  ]
  const myChart = useRef(null)
  const renderDate = (data) => {
    myChart.current.setOption(
      createEchartsOptions({
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: data.map((i) => i.time),
          splitLine: { show: true, lineStyle: { color: '#073E78' } },
          axisTick: { show: false },
          axisLine: { show: false },
        },
        yAxis: {
          type: 'value',
          splitLine: { lineStyle: { color: '#073E78' } },
          axisLabel: {
            formatter(val) {
              return val * 100 + '%'
            },
          },
        },
        series: [
          {
            name: '故意伤人',
            type: 'line',
            data: data.map((i) => i.number),
            symbol: 'circle',
            symbolSize: px(12),
            lineStyle: { width: px(2) },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#414a9f',
                },
                {
                  offset: 1,
                  color: '#1b1d52',
                },
              ]),
            },
          },
        ],
      })
    )
  }
  useEffect(() => {
    setInterval(() => {
      const newData = [
        { time: 0, number: 0.1 },
        { time: 2, number: Math.random() / 10 },
        { time: 4, number: Math.random() / 10 },
        { time: 6, number: Math.random() / 10 },
        { time: 8, number: Math.random() / 10 },
        { time: 10, number: Math.random() / 10 },
        { time: 12, number: Math.random() / 10 },
        { time: 14, number: Math.random() / 10 },
        { time: 16, number: Math.random() / 10 },
        { time: 18, number: Math.random() / 10 },
        { time: 20, number: Math.random() / 10 },
        { time: 22, number: Math.random() / 10 },
        { time: 24, number: 0.1 },
      ]
      renderDate(newData)
    }, 1000)
  }, [])
  useEffect(() => {
    myChart.current = echarts.init(divRef.current)
    renderDate(data)
  }, [])

  return (
    <div className="bordered 案发时段">
      <h2>案发时段分析</h2>
      <div ref={divRef} className="chart" />
    </div>
  )
}
