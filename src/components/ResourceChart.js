// src/components/ResourceChart.js
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const ResourceChart = ({ data }) => {
    const chartRef = useRef();

    useEffect(() => {
        if (data.length === 0) return;

        const svg = d3.select(chartRef.current)
            .attr('width', 600)
            .attr('height', 400)
            .style('background', '#f4f4f4')
            .style('margin-top', '50')
            .style('overflow', 'visible');

        const xScale = d3.scaleBand()
            .domain(data.map(d => d.name))
            .range([0, 600])
            .padding(0.4);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.quantity)])
            .range([400, 0]);

        const xAxis = d3.axisBottom(xScale);
        const yAxis = d3.axisLeft(yScale);

        svg.append('g')
            .call(xAxis)
            .attr('transform', 'translate(0, 400)')
            .selectAll("text")
            .attr("transform", "rotate(-40)")
            .attr("text-anchor", "end");

        svg.append('g')
            .call(yAxis);

        svg.selectAll('.bar')
            .data(data)
            .enter()
            .append('rect')
            .attr('x', d => xScale(d.name))
            .attr('y', d => yScale(d.quantity))
            .attr('width', xScale.bandwidth())
            .attr('height', d => 400 - yScale(d.quantity))
            .attr('fill', 'blue');
    }, [data]);

    return (
        <svg ref={chartRef}></svg>
    );
};

export default ResourceChart;
