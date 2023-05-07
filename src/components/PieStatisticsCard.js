import React from 'react';
import PropTypes from 'prop-types';
import {Cell, Pie, PieChart, ResponsiveContainer, Tooltip} from "recharts";
import '../styles/piestatisticscard.css'

PieStatisticsCard.propTypes = {
    data: PropTypes.array.isRequired,
    title: PropTypes.string,
    colorsArray: PropTypes.array,
    dataKey: PropTypes.string.isRequired,
    nameKey: PropTypes.string.isRequired
};

function PieStatisticsCard(props) {
    return (
        <div className="pie__statistics__card card">
            <h3 className="pie__statistics__card__title">
                {props.title}
            </h3>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart
                    margin={{
                        top: 0,
                        right: 20,
                        left: 20,
                        bottom: 0,
                    }}>
                    <Pie
                        data={props.data}
                        dataKey={props.dataKey}
                        innerRadius={60}
                        outerRadius={120}
                        startAngle={180}
                        endAngle={0}
                        cornerRadius={5}
                        paddingAngle={3}
                        cx={"50%"}
                        cy={"80%"}
                    >
                        {props.data.map((entry, index) => (
                            <Cell
                                style={{filter: "drop-shadow(0 0 1px rgba(255, 255, 255, 0.1)) drop-shadow(0 0 1px rgba(255, 255, 255, 0.10)) contrast(1) brightness(1)"}}
                                stroke={"none"}
                                key={`cell-${index}`}
                                fill={props.colorsArray[index]}
                            />
                        ))}
                    </Pie>
                    <Tooltip
                        itemStyle={{color:"#fff"}}
                        contentStyle={{textTransform: "capitalize"}}
                        labelStyle={{color: "#fff"}}
                    />
                </PieChart>
            </ResponsiveContainer>
            <div className="pie__statistics__legends">
                {
                    props.data.map((entry, index) => (
                        <div key={`legend-${index}`} className="pie__statistics__legend__container">
                            <span className="square" style={{backgroundColor: props.colorsArray[index]}}></span>
                            <span className="pie__statistics__legend">
                                    {entry[`${props.nameKey}`]}
                                </span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default PieStatisticsCard;