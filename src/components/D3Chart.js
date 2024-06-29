import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const D3Chart = () => {
    const d3Container = useRef(null);

    useEffect(() => {
        if (d3Container.current) {
            const svg = d3.select(d3Container.current)
                .attr('width', 600)
                .attr('height', 400)
                .style('border', '1px solid black');

            const data = [12, 36, 6, 25, 35, 10, 20];

            svg.selectAll('rect')
                .data(data)
                .enter()
                .append('rect')
                .attr('x', (d, i) => i * 70)
                .attr('y', (d) => 400 - d * 10)
                .attr('width', 65)
                .attr('height', (d) => d * 10)
                .attr('fill', 'blue');
        }
    }, []);

    return (
        <svg
            className="d3-component"
            ref={d3Container}
        />
    );
}

export default D3Chart;
