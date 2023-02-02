import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { createEchartsOptions } from '../shared/create-echarts-options'

export const Chart1 = () => {
  const divRef = useRef(null)
  const myChart = useRef(null)
  const data = [
    { name: '关城区', number: 10 },
    { name: '关城区', number: 20 },
    { name: '关城区', number: 26 },
    { name: '关城区', number: 31 },
    { name: '关城区', number: 11 },
    { name: '关城区', number: 15 },
    { name: '关城区', number: 19 },
    { name: '关城区', number: 10 },
    { name: '关城区', number: 6 },
  ]
  const x = (data) => {
    myChart.current.setOption(
      createEchartsOptions({
        xAxis: {
          data: data.map((i) => i.name),
          axisTick: { show: false },
          axisLine: {
            lineStyle: { color: '#083B70' },
          },
          axisLabel: {
            formatter(val) {
              if (val.length > 2) {
                const array = val.split('')
                array.splice(2, 0, '\n')
                return array.join('')
              } else {
                return val
              }
            },
          },
        },
        yAxis: {
          splitLine: { show: false },
          axisLine: {
            show: true,
            lineStyle: { color: '#083B70' },
          },
        },
        series: [
          {
            type: 'bar',
            data: data.map((i) => i.number),
          },
        ],
      })
    )
  }
  useEffect(() => {
    setInterval(() => {
      const newData = [
        { name: '关城区', number: Math.random() * 10 },
        { name: '七里河区', number: Math.random() * 10 },
        { name: '西固区', number: Math.random() * 10 },
        { name: '安宁区', number: Math.random() * 10 },
        { name: '红古区', number: Math.random() * 10 },
        { name: '永登区', number: Math.random() * 10 },
        { name: '皋兰区', number: Math.random() * 10 },
        { name: '榆中区', number: Math.random() * 10 },
        { name: '兰州新区', number: Math.random() * 10 },
      ]
      x(newData)
    }, 1000)
  }, [])
  useEffect(() => {
    myChart.current = echarts.init(divRef.current)
    x(data)
  }, [])
  return (
    <div className="bordered 管辖统计">
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  )
}
